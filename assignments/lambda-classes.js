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
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject)  {

    return `${student.name} receives a perfect score on ${subject}`
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
        return `${this}.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class PM extends Instructor {
    constructor(attr) {
    super(attr)
    this.gradeClassName = attr.gradeClassName
    this.favInstructor = attr.favInstructor
    }
    standup(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugscode(student, subject) {
        `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const john = new Instructor({
    name: 'John',
    location: 'Utah',
    age: 56,
    favLanguage: 'CSS',
    specialty: 'Front-end',
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
    favSubjects: ['CSS', 'HTML', 'JavaScript']
})

const kaitlyn = new Student ({
    name: 'Kaitlyn',
    location: 'Salt Lake',
    age: 19,
    previousBackground: Student,
    className: 'PTWeb19',
    favSubjects: ['data-science', 'biology', 'anatomy']

})

const sarah = new Student ({
    name: 'Sarah',
    location: 'Kansas',
    age: 39,
    previousBackground: 'HR Rep',
    className: 'Sci22',
    favSubjects: ['CSS', 'React', 'Python']
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


