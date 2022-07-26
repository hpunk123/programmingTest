create database programmingTest;
use programmingTest;

create table contacts(
id varchar(50),
name varchar(50),
phone varchar(50),
addressLines_0 varchar(50),
addressLines_1 varchar(50),
addressLines_2 varchar(50),
created datetime default current_timestamp,
updated timestamp default current_timestamp
)engine=InnoDB;