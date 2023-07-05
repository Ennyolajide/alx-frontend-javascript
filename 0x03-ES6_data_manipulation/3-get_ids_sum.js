function getStudentIdsSum(students) {
    students.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

export default getStudentIdsSum;