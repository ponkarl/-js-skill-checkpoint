// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้
userTaskList.push({ id: 5, task : "Walk the Dog"});
userTaskList[3].task = "Go to the gym";
userTaskList.splice(4, 4);
console.log(userTaskList[3]);