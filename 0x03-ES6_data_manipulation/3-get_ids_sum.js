export default function getStudentIdsSum(students) {
    return Array.isArray(students) ? students.map((item) => item.id).reduce((accumulator, currentValue) => accumulator + currentValue) : 0;
}