//define 10 students in JSON
//store in an array
////find the female students
//find the students who are following IT course
//find the max and average GPA among the students

let students = [{name:'abc',gender:'male',course:'IT',GPA:3.7},
				{name:'zxc',gender:'female',course:'AMC',GPA:3.5 },
				{name:'cvb',gender:'male',course:'AMC',GPA:3.3},
				{name:'bnm',gender:'female',course:'IT',GPA:3.8},
				{name:'asd',gender:'male',course:'IT',GPA:3.0},
				{name:'dfg',gender:'female',course:'IT',GPA:2.8},
				{name:'ghj',gender:'male',course:'IT',GPA:2.5},
				{name:'jkl',gender:'female',course:'AMC',GPA:2.3},
				{name:'qwe',gender:'male',course:'AMC',GPA:2.4},
				{name:'ert',gender:'female',course:'IT',GPA:2.2}]
				
// Find female students
const femaleStudents = students.filter(student => student.gender === 'female');
console.log('Female Students:', femaleStudents);

// Find students following IT course
const itStudents = students.filter(student => student.course === 'IT');
console.log('IT Students:', itStudents);

// Find max GPA
const maxGPA = Math.max(...students.map(student => student.GPA));
console.log('Max GPA:', maxGPA);

// Find average GPA
const averageGPA = students.reduce((sum, student) => sum + student.GPA, 0) / students.length;
console.log('Average GPA:', averageGPA.toFixed(2));
