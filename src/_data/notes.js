const fs = require('fs');
const path = require('path');

module.exports = function() {
  const base = path.join(__dirname, '../../public/notes');
  const tree = [];

  if (!fs.existsSync(base)) return tree;

  for (const faculty of fs.readdirSync(base)) {
    const facultyPath = path.join(base, faculty);
    if (!fs.statSync(facultyPath).isDirectory()) continue;
    const courses = [];
    for (const course of fs.readdirSync(facultyPath)) {
      const pdfPath = path.join(facultyPath, course, 'notes.pdf');
      if (fs.existsSync(pdfPath)) {
        courses.push({
          code: course,
          url: `/notes/${faculty}/${course}/notes.pdf`
        });
      }
    }
    if (courses.length) tree.push({ faculty, courses });
  }

  return tree;
};