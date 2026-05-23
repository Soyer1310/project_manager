allTheTasks = [
  { id: 0, title: 'wake up', completed: true, priority: 'high' },
  { id: 1, title: 'go outside for a run', completed: false, priority: 'medium' },
  { id: 2, title: 'take a shower', completed: false, priority: 'high' },
  { id: 3, title: 'feed the cat', completed: false, priority: 'high' },
  { id: 4, title: 'make breakfast', completed: false, priority: 'medium' },
  { id: 5, title: 'eat breakfast', completed: false, priority: 'medium' },
  { id: 6, title: 'watch youtuube', completed: false, priority: 'low' },
];

const getHighPriorityTasks = tasks => tasks.filter(task => task.priority === 'high' && !task.completed);

console.log(getHighPriorityTasks(allTheTasks));
