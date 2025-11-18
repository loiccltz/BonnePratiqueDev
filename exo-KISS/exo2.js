const tasks = [
  { id: 1, title: 'Mettre à jour le README', completed: false },
  { id: 2, title: 'Corriger le bug du formulaire', completed: true },
  { id: 3, title: 'Revoir les PRs en attente', completed: false },
  { id: 4, title: 'Nettoyer le CSS', completed: true }
];

const tasksListEl = document.querySelector('#tasks-list');
const emptyStateEl = document.querySelector('#empty-state');

const filterAllBtn = document.querySelector('#filter-all-btn');
const filterActiveBtn = document.querySelector('#filter-active-btn');
const filterCompletedBtn = document.querySelector('#filter-completed-btn');

let currentFilter = 'all';

function getFilteredTasks(filterName) {
  if (filterName === 'active') {
    return tasks.filter(function (task) {
      return task.completed === false;
    });
  }

  if (filterName === 'completed') {
    return tasks.filter(function (task) {
      return task.completed === true;
    });
  }

  return tasks;
}

function getEmptyMessage(filterName) {
  if (filterName === 'active') {
    return 'Aucune tache en cours';
  }

  if (filterName === 'completed') {
    return 'Aucune tahe terminee';

  }

  return 'Aucune tache a afficher';
}

function renderTasks(tasksToShow, filterName) {
  tasksListEl.innerHTML = '';

  if (tasksToShow.length === 0) {
    emptyStateEl.textContent = getEmptyMessage(filterName);
    emptyStateEl.style.display = 'block';
    return;
  } else {
    emptyStateEl.style.display = 'none';
  }

  tasksToShow.forEach(function (task) {
    const li = document.createElement('li');
    li.className = 'task-item';

    const titleSpan = document.createElement('span');
    titleSpan.textContent = task.title;

    if (task.completed === true) {
      li.classList.add('task-completed');
    }

    li.appendChild(titleSpan);
    tasksListEl.appendChild(li);
  });
}

function setFilter(filterName) {
  currentFilter = filterName;
  const filteredTasks = getFilteredTasks(currentFilter);
  renderTasks(filteredTasks, currentFilter);
}

filterAllBtn.addEventListener('click', function () {
  setFilter('all');
});

filterActiveBtn.addEventListener('click', function () {
  setFilter('active');
});

filterCompletedBtn.addEventListener('click', function () {
  setFilter('completed');
});

setFilter('all');
