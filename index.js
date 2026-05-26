const tasks = [
  { id: 0, title: 'wake up', completed: true, priority: 'high' },
  { id: 1, title: 'go outside for a run', completed: false, priority: 'medium' },
  { id: 2, title: 'take a shower', completed: false, priority: 'high' },
  { id: 3, title: 'feed the cat', completed: false, priority: 'high' },
  { id: 4, title: 'make breakfast', completed: false, priority: 'medium' },
  { id: 5, title: 'eat breakfast', completed: false, priority: 'medium' },
  { id: 6, title: 'watch YouTube', completed: false, priority: 'low' },
];

const getHighPriorityTasks = tasks => tasks.filter(task => task.priority === 'high' && !task.completed);

const getTaskTitles = tasks => tasks.map(task => task.title);


const formatHighPriorityTasks = tasks => tasks
  .filter(task => task.priority === 'high')
  .map(({ id, title, completed }) => ({
     id, 
     statusText: completed ? `ЗАВЕРШЕНО: ${title}` : `В РАБОТЕ: ${title}`
  }));

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const fetchAndFormatTasks = async (tasksArray) => {
  console.log("Загрузка задач из базы данных...");
  await delay(1500);
  const highPriorityTasks = formatHighPriorityTasks(tasksArray);
  console.log(highPriorityTasks);
};

fetchAndFormatTasks(tasks);
