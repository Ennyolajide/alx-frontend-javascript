function getStudentIdsSum(students) {
    return students.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

export default getStudentIdsSum;