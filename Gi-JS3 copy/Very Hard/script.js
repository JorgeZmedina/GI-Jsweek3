class Person {
    constructor(name, job, age) {
      this.name = name;
      this.job = job;
      this.age = age;
    }
    exercise() {
      console.log("Running is fun! - said no one ever");
    }
    fetchJob() {
      console.log(`${this.name} is a ${this.job}`);
    }
  }
  
  class Programmer extends Person {
    constructor(name, job, age, languages) {
      super(name, job, age);
      this.languages = languages;
      this.busy = true;
    }
    completeTask() {
      this.busy = false;
    }
    acceptNewTask() {
      this.busy = true;
    }
    offerNewTask() {
      if (this.busy) {
        console.log(`${this.name} can't accept any new tasks right now.`);
      } else {
        console.log(`${this.name} would love to take on a new responsibility.`);
      }
    }
    learnLanguage(language) {
      this.languages.push(language);
    }
    listLanguages() {
      console.log(`${this.name} knows: ${this.languages.join(", ")}`);
    }
  }
  
  let Brad = new Person("Brad", "back-end developer", 25);
  Brad.exercise(); // "Running is fun! - said no one ever"
  Brad.fetchJob(); // "Brad is a back-end developer"
  
  let Marks = new Programmer("Marks", "front-end developer", 30, ["JavaScript", "CSS", "HTML"]);
  Marks.exercise(); // "Running is fun! - said no one ever"
  Marks.fetchJob(); // "Marks is a front-end developer"
  Marks.offerNewTask(); // "Marks can't accept any new tasks right now."
  Marks.completeTask();
  Marks.offerNewTask(); // "Marks would love to take on a new responsibility."
  Marks.learnLanguage("TypeScript");
  Marks.listLanguages(); // "Marks knows: JavaScript, CSS, HTML, TypeScript"

 // In this example, we have created a Person class and a Programmer class which inherits from Person class using extends keyword. The Programmer class has additional properties and methods like languages, busy, completeTask, acceptNewTask, offerNewTask, learnLanguage and listLanguages which are specific to the programmer and doesn't exist in Person class. We have also created instances of both classes and ran methods on them which shows that each instance maintains their own properties and methods independently.
  