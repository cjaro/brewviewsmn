--Create tables

CREATE TABLE breweries (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    brewery name,
);

CREATE TABLE visits (
    id SERIAL PRIMARY KEY,
    brewery character varying(100),
    location text,
    date date,
    notes text,
    brewery_id integer REFERENCES breweries(id)
);

CREATE TABLE beers (
    id integer DEFAULT PRIMARY KEY,
    name character varying(100) NOT NULL,
    rating integer,
    tasting_notes character varying(500),
    visit_id integer REFERENCES visits(id),
    abv integer
);
