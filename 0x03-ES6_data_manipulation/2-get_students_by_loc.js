export default function getStudentsByLocation(students, city) {
    return Array.isArray(students) ? students.filter((item) => item.location === city) : [];
}