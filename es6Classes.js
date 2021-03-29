class Student {
    constructor(firstName,lastName, grade,tardies,scores){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
        this.tardies = 0;
    }
    fullName(){
        return `Hi, i'm ${this.firstName} ${this.lastName}.`
    }
    markLate(){
        this.tardies += 1;
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`
    }
    //This is a utility method that is used to do something to all instances not a specific one cant be called without using Student

    static EnrollStudents(){
        return 'Students Enrolled'
    }
}
let goodStudent = new Student('vincent', 'robinson', 4)
goodStudent.markLate()
goodStudent.markLate()
console.log(goodStudent)
