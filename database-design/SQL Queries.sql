
-- SQL Server Databases


--  Create Teacher

CREATE TABLE Teacher (
Id Int NOT NULL UNIQUE ,
PRIMARY KEY(Id)
);



--  Create Course 

CREATE TABLE Course (
Id Int NOT NULL UNIQUE ,
PRIMARY KEY(Id)
);



--  Create TeachesCourse

CREATE TABLE TeachesCourse (
TeacherId Int NOT NULL UNIQUE ,
CourseId Int NOT NULL UNIQUE ,
PRIMARY KEY(TeacherId ,CourseId),
FOREIGN KEY(TeacherId) REFERENCES Teacher(Id) ,
FOREIGN KEY(CourseId) REFERENCES Course(Id)
);



--  Create Message

CREATE TABLE Message (
Content VarChar(50) ,
SendDate VarChar(50) NOT NULL UNIQUE ,
TeacherId Int NOT NULL UNIQUE ,
Teacher2Id Int NOT NULL UNIQUE ,
PRIMARY KEY(SendDate ,TeacherId ,Teacher2Id),
FOREIGN KEY(TeacherId) REFERENCES Teacher(Id) ,
FOREIGN KEY(Teacher2Id) REFERENCES Teacher(Id)
);




