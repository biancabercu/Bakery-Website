-- CREATE TABLE IF NOT EXISTS authors (
--     id serial PRIMARY KEY,
--     first_name varchar NOT NULL,
--     last_name varchar NOT NULL
-- );

-- CREATE TABLE IF NOT EXISTS publishers (
--     id serial PRIMARY KEY,
--     name varchar NOT NULL UNIQUE
-- );

-- CREATE TABLE IF NOT EXISTS books (
--     id serial PRIMARY KEY,
--     name varchar NOT NULL,
--     author_id integer REFERENCES authors(id)
-- );

-- CREATE TABLE IF NOT EXISTS publishers_books (
--     book_id integer REFERENCES books(id),
--     publisher_id integer REFERENCES publishers(id),
--     price integer NOT NULL,
--     PRIMARY KEY (book_id, publisher_id) 
-- );

CREATE TABLE IF NOT EXISTS posts(
    id serial PRIMARY KEY,
    title VARCHAR NOT NULL,
    about VARCHAR NOT NULL,
    marked integer NOT NULL
);

CREATE TABLE IF NOT EXISTS events (
    id serial PRIMARY KEY,
    title VARCHAR NOT NULL,
    about VARCHAR NOT NULL 
);
-- bakeries are sponsors to an event 
CREATE TABLE IF NOT EXISTS bakeries ( 
    id serial PRIMARY KEY,
    name VARCHAR NOT NULL,
    about VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS hosted (
    id serial PRIMARY KEY,
    id_event integer REFERENCES events(id),
    id_bakery integer REFERENCES bakeries(id),
    breads integer NOT NULL 
);

CREATE TABLE IF NOT EXISTS volunteers(
    id serial PRIMARY KEY,
    event_name VARCHAR NOT NULL,
    user_name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS roles (
    id serial PRIMARY KEY,
    value varchar NOT NULL UNIQUE
);
-- voluntarii(useri) , admini, si support=manager
CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    username varchar NOT NULL UNIQUE,
    password varchar NOT NULL,
    role_id integer REFERENCES roles(id)
);

INSERT INTO roles (value) VALUES ('ADMIN');
INSERT INTO roles (value) VALUES ('MANAGER');
INSERT INTO roles (value) VALUES ('USER');
INSERT INTO users (username, password, role_id) VALUES ('admin', '$2y$10$BLMZFAnCPXX0cVRmdPP3Meu3NR/xWucAyQ4aAW2z57RlLdLPvH0Hi', 1);
INSERT INTO users (username, password, role_id) VALUES ('manager', '$2y$10$BLMZFAnCPXX0cVRmdPP3Meu3NR/xWucAyQ4aAW2z57RlLdLPvH0Hi', 2);
INSERT INTO users (username, password, role_id) VALUES ('client', '$2y$10$BLMZFAnCPXX0cVRmdPP3Meu3NR/xWucAyQ4aAW2z57RlLdLPvH0Hi', 3);
INSERT INTO events (title,about) VALUES ('Schimbarea începe cu tine','Imaginează-ți o lume în care pădurile prosperă și sunt pline de viață. O lume în care apele și energia sunt la fel de curate precum un izvor de la munte. O lume în care fiecare om trăiește în sigruanță, cu demnitate și este fericit. Nimeni nu poate construi o asemenea lume singur, dar o putem face împreună.');
-- INSERT INTO events (title,about) VALUES ('A bread for everyone','Primul eveniment lansat pe aceasta platfora.');
INSERT INTO bakeries (name, about) VALUES ('Breadovici','O brutarie care face paine inca din 1800.');
-- INSERT INTO hosted (id_event,id_bakery,breads) VALUES (1,1,500);
INSERT INTO posts (title,about,marked) VALUES ('Schimba','Dacă îți dorești o lume justă, echitabilă și verde, ne alăturăm și noi cauzei tale. Dacă ai idei despre ce trebuie să facem pentru a ajunge acolo, vrem să învățăm de la tine. Hai să împărtășim viziunea, să planificăm împreună și să acționăm împreună!',1);
INSERT INTO posts (title,about,marked) VALUES ('primul post','discutam importanta',1);
INSERT INTO posts (title,about,marked) VALUES ('neimportant post','discutam',0);
-- INSERT INTO volunteers (id_event, id_user) VALUES (1,3);
