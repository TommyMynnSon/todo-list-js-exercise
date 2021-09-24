const newTask = (title, description) => {
  const task = {
    // State
    title: title,
    description: description,
    complete: false,

    // Behavior
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };

  return task;
};

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");

task1.logState();
task1.markCompleted();
task1.logState();
