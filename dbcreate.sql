--Create tables
CREATE TABLE brews_test (
	id SERIAL PRIMARY KEY,
	beer_name VARCHAR(100) NOT NULL,
	date_had DATE,
	rating INT,
	notes VARCHAR(500),
	brewery_id INT REFERENCES breweries NOT NULL
);

CREATE TABLE breweries (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL
	address VARCHAR(255),
	website VARCHAR(255)
);

INSERT INTO breweries (name)
VALUES
	('Bent Paddle Brewery'),
	('Castle Danger Brewery'),
	('Summit Brewing'),
	('Surly Brewing'),
	('Bauhaus Brew Labs'),
	('Bad Habit Brewing'),
	('Finnegans'),
	('Northgate Brewing'),
	('Fulton Brewing'),
	('Fitgers Brewhouse')
;

INSERT INTO brews_test (beer_name, date_had, notes, brewery_id)
VALUES
	('Roof rack', '2015-07-10', 'I like this beer. Another!', 1)
	('Castle Cream Ale', '2016-08-02', 'Smooth and easy drinking!', 2),
	('Extra Pale Ale', '2016-10-04', 'Had this after the TC Marathon!', 3),
	('Furious', '2015-07-27', 'First brewery date!', 4),
	('Tallander', '2017-03-11', 'Glitchcon event with Paige & friends! This beer was pretty good - I have had it twice!', 5),
	('Dark Addiction', '2016-03-17', 'Irish music event - rich and dark beer-y.', 6),
	('Dead Poet', '2016-08-16', 'Irish fair with Irish fam - met the brewers!', 7),
	('Canoe Country', '2016-11-11', 'Save the BWCA event - this was really good!', 8),
	('Sweet Child of Vine', '2016-09-01', 'Not the best, not the worst', 9),
	('Lager', '2015-05-21', 'Had with Landon & Paul, not too bad', 10)
;

--brews GET
SELECT brews_test.*, breweries.name FROM brews_test JOIN breweries ON brews_test.brewery_id = breweries.id ORDER BY date_had DESC;

--brews POST
INSERT INTO brews_test (beer_name, date_had, rating, notes, brewery_id) VALUES ($1, $2, $3, $4, $5);

--brews DELETE
DELETE FROM brews_test WHERE id = $1;

--brews UPDATE
UPDATE brews_test SET name=$1, date_had=$2, notes=$3, rating=$4, brewery_id=$5 WHERE id=$6;

--breweries GET
SELECT * FROM breweries ORDER BY id ASC;


--on display, I want just the day, month, and year to display
SELECT EXTRACT(YEAR FROM date_had) AS VisitYear,
EXTRACT(MONTH FROM date_had) AS VisitMonth,
EXTRACT(DAY FROM date_had) AS VisitDay
FROM brews_test ORDER BY VisitYEar DESC
;


--here, want to get beer name, rating, and brewery name
SELECT brews_test.beer_name, brews_test.rating, breweries.name
FROM brews_test
JOIN breweries
ON brews_test.brewery_id = breweries.id
ORDER BY date_had DESC;








--placeholder
