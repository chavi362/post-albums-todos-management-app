-- Create the database
CREATE DATABASE IF NOT EXISTS posts;
use posts;

DROP TABLE IF EXISTS `Users`;
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    userName VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    address VARCHAR(255),
    phone VARCHAR(20),
    company VARCHAR(255)
);

INSERT INTO Users (name, userName, email, address, phone, company) 
VALUES 
('Alice Smith', 'alice01', 'alice@example.com', '123 Main St, CityA', '555-1234', 'CompanyA'),
('Bob Johnson', 'bob82', 'bob@example.com', '456 Elm St, CityB', '555-5678', 'CompanyB'),
('Charlie Brown', 'charlie123', 'charlie@example.com', '789 Oak St, CityC', '555-9012', 'CompanyC'),
('Daisy Lee', 'daisy88', 'daisy@example.com', '987 Pine St, CityD', '555-3456', 'CompanyD'),
('Eve Adams', 'eve99', 'eve@example.com', '654 Birch St, CityE', '555-7890', 'CompanyE');
DROP TABLE IF EXISTS `Passwords`;
CREATE TABLE Passwords (
    user_id INT PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);
INSERT INTO Passwords (user_id, password) 
VALUES 
(1, 'password123'),
(2, 'securepass'),
(3, 'p@ssw0rd!'),
(4, 'daisyPass'),
(5, 'evie123');
-- Create the Todos table
SELECT * FROM Passwords JOIN Users ON  Passwords.user_id = Users.id ;
DROP TABLE IF EXISTS `Todos`;
CREATE TABLE Todos (
    userId INT,
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    completed BOOLEAN,
    FOREIGN KEY (userId) REFERENCES Users(id)
);
INSERT INTO Todos (userId, title, completed)
VALUES (1, 'Go for a run', FALSE);

INSERT INTO Todos (userId, title, completed)
VALUES (2, 'Finish work report', FALSE);

INSERT INTO Todos (userId, title, completed)
VALUES (3, 'Buy groceries', TRUE);

INSERT INTO Todos (userId, title, completed)
VALUES (4, 'Clean the house', FALSE);

INSERT INTO Todos (userId, title, completed)
VALUES (5, 'Call mom', FALSE);
DROP TABLE IF EXISTS `Posts`;
CREATE TABLE Posts (
    userId INT,
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    body VARCHAR(5000),
    FOREIGN KEY (userId) REFERENCES Users(id)
);
DROP TABLE IF EXISTS `Comments`;
CREATE TABLE Comments (
    postId INT,
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(25) NOT NULL,
    body VARCHAR(5000),
    FOREIGN KEY (postId) REFERENCES Posts(id)
);
DROP TABLE IF EXISTS `Albums`;
CREATE TABLE Albums (
    userId INT,
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    FOREIGN KEY (userId) REFERENCES Users(id)
);
DROP TABLE IF EXISTS `Photos`;
CREATE TABLE Photos (
    albumId INT,
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
	url VARCHAR(255) NOT NULL,
    FOREIGN KEY (userId) REFERENCES Users(id)
);