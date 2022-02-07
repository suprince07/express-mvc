CREATE TABLE department
(
    dept_id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(255),
    PRIMARY KEY(dept_id)
);
 
INSERT INTO department (department_name) VALUES ('IT'),('Admin');
 
SELECT * FROM  department;
 
CREATE TABLE users
(
    user_id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(255),
    user_address VARCHAR(255),
    user_email VARCHAR(255),
    PRIMARY KEY(user_id)
);
 
INSERT INTO users
(user_name,user_address,user_email)
VALUES 
('avash','ktm','avash@mail.com'),
('ram','pkr','ram@mail.com'),
('hari','brt','hari@mail.com'),
('mohan','jhapa','mohan@mail.com');
 
SELECT * FROM users;
 
CREATE TABLE user_dept
(
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT,
    department_id INT,
    PRIMARY KEY(id)
);
 
INSERT INTO user_dept 
(user_id,department_id)
VALUES 
(1,1),
(1,2),
(3,1),
(4,2);
 
SELECT * FROM user_dept;
 
SELECT user_name,user_address,user_email,department_name  FROM users 
    INNER JOIN user_dept ON users.user_id = user_dept.user_id
    INNER JOIN department ON department.dept_id = user_dept.department_id; 