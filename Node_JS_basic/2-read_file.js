// read a csv file synchronously
const fs = require('fs');

function countStudents(path) {
  // count students
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    let count = 0;
    const fields = {};
    for (const line of lines) {
      if (line) {
        count += 1;
        const student = line.split(',');
        if (!fields[student[3]]) fields[student[3]] = [];
        fields[student[3]].push(student[0]);
      }
    }
    console.log(`Number of students: ${count}`);
    for (const field in fields) {
      if (field) {
        console.log(
          `Number of students in ${field}: ${
            fields[field].length
          }. List: ${fields[field].join(', ')}`
        );
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
