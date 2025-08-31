const { add, isTaskComplete, isTaskOverdue } = require('../src/utils');

describe('add', () => {
  test('returns sum for numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('throws error when inputs are not numbers', () => {
    expect(() => add("2", 3)).toThrow("Both arguments must be numbers");
  });
});

describe('isTaskComplete', () => {
  test('returns true when task.done is true', () => {
    expect(isTaskComplete({ done: true })).toBe(true);
  });

  test('returns false when task.done is false', () => {
    expect(isTaskComplete({ done: false })).toBe(false);
  });

  test('throws error if task is missing or invalid', () => {
    expect(() => isTaskComplete({})).toThrow();
  });
});

describe('isTaskOverdue', () => {
  const today = "2025-08-31";

  test('returns true if dueDate is before today', () => {
    expect(isTaskOverdue({ dueDate: "2025-08-30" }, today)).toBe(true);
  });

  test('returns false if dueDate is today', () => {
    expect(isTaskOverdue({ dueDate: "2025-08-31" }, today)).toBe(false);
  });

  test('returns false if dueDate is after today', () => {
    expect(isTaskOverdue({ dueDate: "2025-09-01" }, today)).toBe(false);
  });

  test('throws error if task has no dueDate', () => {
    expect(() => isTaskOverdue({}, today)).toThrow();
  });
});
