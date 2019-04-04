

class Person {
  constructor(attributes){
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  };
  // Methods
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}// Person


class Instructor extends Person{
  constructor(instructorAttributes){
   super(instructorAttributes);
   this.specialty = instructorAttributes.specialty;
   this.favLanguage = instructorAttributes.favLanguage;
   this.catchPhrase = instructorAttributes.catchPhrase;
  }
  // Methods
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}// Instructor


class Student extends Person{
  constructor(studentAttributes){
   super(studentAttributes);
   this.previousBackground = studentAttributes.previousBackground;
   this.className = studentAttributes.className;
   this.favSubjects = studentAttributes.favSubjects;
  }
  // Methods
  listsSubjects() {
    console.log(this.favSubjects);
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}// Student



class ProjectManager extends Instructor {
  constructor(pManagerAttributes){
   super(pManagerAttributes);
   this.gradClassName = pManagerAttributes.gradClassName;
   this.favInstructor = pManagerAttributes.favInstructor;
  }
  // Methods
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}// ProjectManager


    // Instructors

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 57,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const barney = new Instructor({
  name: 'Barney',
  location: 'Bedrock',
  age: 53,
  gender: 'male',
  favLanguage: 'PHP',
  specialty: 'Front-end',
  catchPhrase: `Rock cars save the environment`
});

const bamBam = new Instructor({
  name: 'Bam Bam',
  location: 'Greenrock',
  age: 27,
  gender: 'male',
  favLanguage: 'Ruby',
  specialty: 'Front-end',
  catchPhrase: `The meteor is comming`
});


    // Students

const anthony = new Student({
  name: 'Anthony',
  location: 'Colebrook',
  age: 44,
  gender: 'male',
  previousBackground: 'Python',
  className: 'React',
  favSubjects: [`UI`, `Python`]
});

const rachel = new Student({
  name: 'Rachel',
  location: 'LA',
  age: 39,
  gender: 'female',
  previousBackground: 'C++',
  className: 'JavaScript',
  favSubjects: [`Java`, `React`]
});

const tina = new Student({
  name: 'Tina',
  location: 'San Diego',
  age: 29,
  gender: 'female',
  previousBackground: 'React',
  className: 'Back-end',
  favSubjects: [`AWS`, `Blythe`]
});


    // Program Managers

const sally = new ProjectManager({
  name: 'Sally',
  location: 'New York',
  age: 35,
  gender: 'female',
  gradClassName: '2020',
  favInstructor: 'Fred',
});

const martha = new ProjectManager({
  name: 'Martha',
  location: 'Boston',
  age: 41,
  gender: 'female',
  gradClassName: '2018',
  favInstructor: 'BAM BAM',
});

const sue = new ProjectManager({
  name: 'Sue',
  location: 'Pheonix',
  age: 28,
  gender: 'female',
  gradClassName: '2021',
  favInstructor: 'Barney',
});


  // Calls

console.log(fred.name);
console.log(fred.location);
console.log(fred.age);
console.log(fred.gender);
console.log(fred.favLanguage);
console.log(fred.specialty);
console.log(fred.catchPhrase);
console.log(fred.speak());
console.log(fred.demo(`python`));
console.log(fred.grade(anthony, `javaScript`));

console.log(anthony.name);
console.log(anthony.location);
console.log(anthony.age);
console.log(anthony.gender);
console.log(anthony.previousBackground);
console.log(anthony.className);
console.log(anthony.favSubjects);
console.log(anthony.speak());
console.log(anthony.listsSubjects());
console.log(anthony.PRAssignment('Python'));
console.log(anthony.sprintChallenge('JavaScript'));


console.log(sally.name);
console.log(sally.location);
console.log(sally.age);
console.log(sally.gender);
console.log(sally.gradClassName);
console.log(sally.favInstructor);
console.log(sally.speak());
console.log(sally.standUp(`web19`));
console.log(sally.debugsCode(anthony, `C++`));



