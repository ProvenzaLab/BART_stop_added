import { runTask } from './task.js';
import { taskDescription } from './task_description.js';
import { taskQuestionnaire } from './task_questionnaire.js';

// Initialize jsPsych
const jsPsych = initJsPsych();
const beepSound = new Audio('sound/beep.wav'); //MD: I added this.

function runAllTasks() {

  console.log("Starting description");
  taskDescription().then(() => {
    console.log("Description finished");
    console.log("Starting task...");
    beepSound.play(); //MD: I added this
    runTask(jsPsych).then(() => {
      console.log(" task  completed.");
      console.log("questionnaire...");
      taskQuestionnaire().then(() => {
        console.log("questionnaire completed.");
      })
    })
  })


}

runAllTasks();
