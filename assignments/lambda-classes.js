// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(attr) {
    super(attr)
    this.specialty = attr.specialty
    this.favLanguage = attr.favLanguage
    this.catchPhrase = attr.catchPhrase
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject)  {

    return `${student} receives a perfect score on ${subject}`
    }
}

class Student extends Instructor {
    constructor(attr) {
    super(attr)
    this.previousBackground = attr.previousBackground
    this.favSubjects = attr.favSubjects
    this.listsSubjects = attr.listsSubjects
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class PM extends Instructor {
    constructor(attr) {
    super(attr)
    this.gradClassName = attr.gradClassName
    this.favInstructor = attr.favInstructor
    }
    standup(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugscode(student, subject) {
       return `${this.name} debugs ${student}'s code on ${subject}`
    }
}

const rick = new Instructor({
    name: 'Sanchez, Rick',
    location: 'Dimension 427-b',
    age: 69,
    favLanguage: 'Gorp-a-Lorp',
    specialty: 'Inner-dimensional-travel',
    catchPhrase: `wub-A-dub-Lub-lub`
});

const steve = new Instructor({
    name: 'steve',
    location: 'Ohio',
    age: 24,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `See you on the flippity-flop`
})

const luke = new Instructor({
    name: 'Luke',
    location: 'Maine',
    age: 45,
    favLanguage: 'Java',
    specialty: 'Data-Science',
    catchphrase: `fo-sho`

})

const adam = new Student ({
    name: 'Adam',
    location: 'Denver',
    age: 36,
    previousBackground: 'Oilfield',
    className: 'Web21',
    listsSubjects: ['CSS', 'HTML', 'JavaScript']
})

const kaitlyn = new Student ({
    name: 'Kaitlyn',
    location: 'Salt Lake',
    age: 19,
    previousBackground: Student,
    className: 'PTWeb19',
    listsSubjects: ['data-science', 'biology', 'anatomy']

})

const sarah = new Student ({
    name: 'Sarah',
    location: 'Kansas',
    age: 39,
    previousBackground: 'HR Rep',
    className: 'Sci22',
    listsSubjects: ['CSS', 'React', 'Python']
})

const henry = new PM({
    name: 'Henry',
    location: 'Parts Unknown',
    age: "Timeless",
    gradClassName: 'Before time itself',
    favInstructor: 'Himself',
})

const jill = new PM({
    name: 'Jill',
    location: 'Seattle',
    age: 'Impolite',
    gradClassName: 'Web03',
    favInstructor: "Dan"
})

//console.log(rick.specialty);
//console.log(rick.demo('CSS'));
//console.log(adam.PRAssignment('JavaScriptIV'));
//console.log(kaitlyn.speak());
//console.log(sarah.sprintChallenge('CSS'));
//console.log(adam.grade('Adam', 'JavaScript'));
//console.log(henry.standup('Web21_Henry'));
//console.log(jill.debugscode('Kaitlyn', 'HTML'));
//console.log(henry);
//console.log(henry.age);
//console.log(rick.catchPhrase);
//console.log(sarah.name);
//console.log(rick);

console.log(rick.name,'||', rick.location,'||', rick.age,'||', rick.specialty,'||', rick.favLanguage,'||', rick.catchPhrase);
/*console.log(rick.location);
console.log(rick.age)
console.log(rick.specialty);
console.log(rick.favLanguage);
console.log(rick.catchPhrase);
*/
