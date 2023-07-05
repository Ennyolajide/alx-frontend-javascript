export default function updateStudentGradeByCity(students, city, newGrades) {
  if (Array.isArray(students) && Array.isArray(newGrades)) {
    return students.map((item) => {
      const student = item;
      const grade = newGrades.filter((newGrade) => newGrade.studentId === student.id);
      if (grade.length) {
        student.grade = grade[0].grade;
      }
      return student;
    });
  }
  return [];
}