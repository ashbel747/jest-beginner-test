
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Both arguments must be numbers");
  }
  return a + b;
}

function isTaskComplete(task) {
  if (!task || typeof task.done !== 'boolean') {
    throw new Error("Task must be an object with a boolean 'done' property");
  }
  return task.done === true;
}

function isTaskOverdue(task, today) {
  if (!task || !task.dueDate) {
    throw new Error("Task must have a valid 'dueDate'");
  }
  const dueDate = new Date(task.dueDate);
  const todayDate = new Date(today);

  // Strip time parts (compare only dates)
  dueDate.setHours(0, 0, 0, 0);
  todayDate.setHours(0, 0, 0, 0);

  return dueDate < todayDate;
}

module.exports = { add, isTaskComplete, isTaskOverdue };
