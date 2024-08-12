const students = [
  {
    name: "Farman",
    marks: 95,
  },
  {
    name: "khushnawaz",
    marks: 75,
  },
  {
    name: "amanullah",
    marks: 92,
  },
  {
    name: "najrul",
    marks: 70,
  },
  {
    name: "Farman",
    marks: 99,
  },
];

const checkResults = (name) => {
  for (let student of students) {
    if (student.name === name) {
      return student.marks > 90
        ? console.log(
            `Congratulations ${student.name}! You have cleared the exam.`
          )
        : console.log(`Sorry ! You have not cleared the exam.`);
    }
  }
  console.log("Invalid User !!!");
};

checkResults("aman");
// OUTPUT: Congratulations Mithun! You have cleared the exam.

checkResults("farman");
// OUTPUT: Sorry ! You have not cleared the exam.

checkResults("amanullah");
// OUTPUT: Invalid User !!!
