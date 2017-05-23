--Create tables

CREATE TABLE visits (
	id SERIAL PRIMARY KEY,
	brewery VARCHAR(100),
	date_had DATE
);

CREATE TABLE brews_test (
	id SERIAL PRIMARY KEY,
	beer_name VARCHAR(100) NOT NULL,
	date_had DATE,
	rating INT,
	notes VARCHAR (600),
	visit_id INT REFERENCES visits
);

CREATE TABLE users (
  id integer NOT NULL,
  user_name character varying(60),
  user_email character varying(120),
  user_photo character varying(200),
  google_id character varying(30)
);
