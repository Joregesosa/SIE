CREATE  OR REPLACE VIEW `group_student_list` AS
SELECT 
g.id, 
l.description, 
e.id as student_id,
p.first_name, 
p.second_name, 
p.fLast_name, 
p.sLast_name,
concat(p.first_name,' ', p.second_name,' ', p.fLast_name,' ', p.sLast_name) as full_name,
p.birth_date, 
p.id_card,
u.email,
t.number 
from `groups` g
LEFT JOIN `levels` l 
ON g.level_id = l.id
LEFT JOIN `students` e 
ON g.id = e.group_id
LEFT JOIN `people` p 
ON e.person_id = p.id
LEFT JOIN `phones` t ON
e.person_id = t.person_id
LEFT JOIN `users` u ON
e.person_id = u.person_id
where e.status_id = 2;;
