-- Create the database
CREATE DATABASE IF NOT EXISTS posts;
use posts;

DROP TABLE IF EXISTS `Users`;
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    userName VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE,
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
    id INT PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    FOREIGN KEY (id) REFERENCES Users(id)
);
INSERT INTO Passwords (id, password) 
VALUES 
(1, 'password123'),
(2, 'securepass'),
(3, 'p@ssw0rd!'),
(4, 'daisyPass'),
(5, 'evie123');
-- Create the Todos table
SELECT * FROM Passwords natural join Users;
SELECT * FROM Passwords natural join Users;
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
INSERT INTO Posts (userId, title, body) VALUES
    -- User 1 posts
    (1, 'First Post by User 1', 'This is the content of the first post by User 1.'),
    (1, 'Second Post by User 1', 'This is the content of the second post by User 1.'),
    (1, 'Third Post by User 1', 'This is the content of the third post by User 1.'),
    (1, 'Fourth Post by User 1', 'This is the content of the fourth post by User 1.'),
    (1, 'Fifth Post by User 1', 'This is the content of the fifth post by User 1.'),
    -- User 2 posts
    (2, 'First Post by User 2', 'This is the content of the first post by User 2.'),
    (2, 'Second Post by User 2', 'This is the content of the second post by User 2.'),
    (2, 'Third Post by User 2', 'This is the content of the third post by User 2.'),
    (2, 'Fourth Post by User 2', 'This is the content of the fourth post by User 2.'),
    (2, 'Fifth Post by User 2', 'This is the content of the fifth post by User 2.'),
    -- User 3 posts
    (3, 'First Post by User 3', 'This is the content of the first post by User 3.'),
    (3, 'Second Post by User 3', 'This is the content of the second post by User 3.'),
    (3, 'Third Post by User 3', 'This is the content of the third post by User 3.'),
    (3, 'Fourth Post by User 3', 'This is the content of the fourth post by User 3.'),
    (3, 'Fifth Post by User 3', 'This is the content of the fifth post by User 3.'),
    -- User 4 posts
    (4, 'First Post by User 4', 'This is the content of the first post by User 4.'),
    (4, 'Second Post by User 4', 'This is the content of the second post by User 4.'),
    (4, 'Third Post by User 4', 'This is the content of the third post by User 4.'),
    (4, 'Fourth Post by User 4', 'This is the content of the fourth post by User 4.'),
    (4, 'Fifth Post by User 4', 'This is the content of the fifth post by User 4.'),
    -- User 5 posts
    (5, 'First Post by User 5', 'This is the content of the first post by User 5.'),
    (5, 'Second Post by User 5', 'This is the content of the second post by User 5.'),
    (5, 'Third Post by User 5', 'This is the content of the third post by User 5.'),
    (5, 'Fourth Post by User 5', 'This is the content of the fourth post by User 5.'),
    (5, 'Fifth Post by User 5', 'This is the content of the fifth post by User 5.');
    select * from posts;

DROP TABLE IF EXISTS `Comments`;
CREATE TABLE Comments (
    postId INT,
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(25) NOT NULL,
    body VARCHAR(5000),
    FOREIGN KEY (postId) REFERENCES Posts(id)
);
INSERT INTO Comments (postId, name, email, body) VALUES
    -- Comments for User 1's posts
    (1, 'Commenter A', 'commenterA@example.com', 'This is the first comment on User 1''s first post.'),
    (1, 'Commenter B', 'commenterB@example.com', 'This is the second comment on User 1''s first post.'),
    (2, 'Commenter C', 'commenterC@example.com', 'This is the first comment on User 1''s second post.'),
    (2, 'Commenter D', 'commenterD@example.com', 'This is the second comment on User 1''s second post.'),
    (3, 'Commenter E', 'commenterE@example.com', 'This is the first comment on User 1''s third post.'),
    (3, 'Commenter F', 'commenterF@example.com', 'This is the second comment on User 1''s third post.'),
    (4, 'Commenter G', 'commenterG@example.com', 'This is the first comment on User 1''s fourth post.'),
    (4, 'Commenter H', 'commenterH@example.com', 'This is the second comment on User 1''s fourth post.'),
    (5, 'Commenter I', 'commenterI@example.com', 'This is the first comment on User 1''s fifth post.'),
    (5, 'Commenter J', 'commenterJ@example.com', 'This is the second comment on User 1''s fifth post.'),
    -- Comments for User 2's posts
    (6, 'Commenter K', 'commenterK@example.com', 'This is the first comment on User 2''s first post.'),
    (6, 'Commenter L', 'commenterL@example.com', 'This is the second comment on User 2''s first post.'),
    (7, 'Commenter M', 'commenterM@example.com', 'This is the first comment on User 2''s second post.'),
    (7, 'Commenter N', 'commenterN@example.com', 'This is the second comment on User 2''s second post.'),
    (8, 'Commenter O', 'commenterO@example.com', 'This is the first comment on User 2''s third post.'),
    (8, 'Commenter P', 'commenterP@example.com', 'This is the second comment on User 2''s third post.'),
    (9, 'Commenter Q', 'commenterQ@example.com', 'This is the first comment on User 2''s fourth post.'),
    (9, 'Commenter R', 'commenterR@example.com', 'This is the second comment on User 2''s fourth post.'),
    (10, 'Commenter S', 'commenterS@example.com', 'This is the first comment on User 2''s fifth post.'),
    (10, 'Commenter T', 'commenterT@example.com', 'This is the second comment on User 2''s fifth post.')
    ;

DROP TABLE IF EXISTS `Albums`;
CREATE TABLE Albums (
    userId INT,
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    FOREIGN KEY (userId) REFERENCES Users(id)
);
select * from posts;
DROP TABLE IF EXISTS `Photos`;
CREATE TABLE Photos (
    albumId INT,
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
	url VARCHAR(255) NOT NULL,
    FOREIGN KEY (userId) REFERENCES Users(id)
);