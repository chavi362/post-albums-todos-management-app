-- Create the database
CREATE DATABASE IF NOT EXISTS posts;

-- Create the Users table
DROP TABLE IF EXISTS `Users`;
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    userName VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    address VARCHAR(255),
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    company VARCHAR(255)
);
INSERT INTO Users (name, userName, email, address, password, phone, company) 
VALUES 
('Alice Smith', 'alice01', 'alice@example.com', '123 Main St, CityA', 'password123', '555-1234', 'CompanyA'),
('Bob Johnson', 'bob82', 'bob@example.com', '456 Elm St, CityB', 'securepass', '555-5678', 'CompanyB'),
('Charlie Brown', 'charlie123', 'charlie@example.com', '789 Oak St, CityC', 'p@ssw0rd!', '555-9012', 'CompanyC'),
('Daisy Lee', 'daisy88', 'daisy@example.com', '987 Pine St, CityD', 'daisyPass', '555-3456', 'CompanyD'),
('Eve Adams', 'eve99', 'eve@example.com', '654 Birch St, CityE', 'evie123', '555-7890', 'CompanyE');

-- Create the Todos table
DROP TABLE IF EXISTS `Todos`;
CREATE TABLE Todos (
    userId INT,
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    completed BOOLEAN,
    FOREIGN KEY (userId) REFERENCES Users(id)
);
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
