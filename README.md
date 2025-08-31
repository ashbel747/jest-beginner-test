#Jest Functions Testing Exercise

This is a simple JavaScript project demonstrating how to write and test functions using [Jest].

## Features
- Implements three functions:
  1. `add(a, b)` – Returns the sum of two numbers.
  2. `isTaskComplete(task)` – Returns `true` if `task.done === true`, otherwise `false`.
  3. `isTaskOverdue(task, today)` – Returns `true` if `task.dueDate` is strictly before `today`.

- Includes **unit tests** with:
  - Typical inputs
  - Edge cases
  - Negative tests (error handling)

---

##  Installing the project locally
Clone this repository:
   ```bash
   git clone https://github.com/ashbel747/jest-beginner-test.git
   cd jest-beginner-test

##  Install dependencies
npm install

##  Run the tests
npm test

