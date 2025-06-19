-- in this file we can write all queries we want to run

create table user (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    EMAIL VARCHAR(50) UNIQUE NOT NULL,
    passward VARCHAR(50) NOT NULL
);