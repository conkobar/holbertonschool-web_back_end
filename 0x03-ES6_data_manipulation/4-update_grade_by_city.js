import getStudentsByLocation from './2-get_students_by_loc';

// returns an array of students in a city with their grade
export default function updateStudentGradeByCity(students, city, newGrades) {
  return getStudentsByLocation(students, city).map((data) => {
    const dupe = data;
    dupe.grade = 'N/A';
    for (const prop of newGrades) {
      if (dupe.id === prop.studentId) dupe.grade = prop.grade;
    }
    return dupe;
  });
}
