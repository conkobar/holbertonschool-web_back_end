-- creates a view that lists all students with score < 80
-- and no last_meeting in over a month
CREATE VIEW need_meeting AS SELECT name FROM students
WHERE score < 80 AND (last_meeting IS NULL
OR last_meeting < DATE_SUB(CURDATE(), INTERVAL 1 MONTH));
