export default function getStudentIdsSum(students) {
    return Array.isArray(students) ? students.reduce((accumulator, currentValue) => accumulator + currentValue, 0) : 0;
}