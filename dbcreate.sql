--Create tables

--brewery table

CREATE TABLE my_brewery_db (
    name VARCHAR(100),
    address VARCHAR(255),
    website VARCHAR(255)
);
--ALERT must add id column separate - don't know why but it freaks out
--when you try to add it to the initial CREATE TABLE and then try to add values
ALTER TABLE my_brewery_db ADD id SERIAL PRIMARY KEY;

INSERT INTO my_brewery_db VALUES ('10K Brewing','2005 2nd Av, Anoka, MN 55303','10kbrew.com');
INSERT INTO my_brewery_db VALUES ('56 Brewing','134 California Street NE #122, Minneapolis, MN 55418','56brewing.com');
INSERT INTO my_brewery_db VALUES ('612 Brew','945 Broadway Street #188, Minneapolis, MN 55413','612brew.com');
INSERT INTO my_brewery_db VALUES ('Able Seedhouse + Brewery','1121 Quincy St NE, Minneapolis, MN 55413','ablebeer.com');
INSERT INTO my_brewery_db VALUES ('August Schell Brewing Co.','1860 Schell Road, New Ulm, MN 56073','schellsbrewery.com');
INSERT INTO my_brewery_db VALUES ('Bad Habit Brewing Co.','15 East Minnesota St Ste 108, Saint Joseph, MN 56374','badhabitbeer.com');
INSERT INTO my_brewery_db VALUES ('Bad Weather Brewing Company','414 7th St W, St. Paul, MN 55102','badweatherbrewery.com');
INSERT INTO my_brewery_db VALUES ('Badger Hill Brewing Co.','571 Valley Industrial Blvd S. Ste 500, Shakopee, MN 55379','badgerhillbrewing.com');
INSERT INTO my_brewery_db VALUES ('Bang Brewing','2320 Capps Rd, Saint Paul, MN 55114','bangbrewing.com');
INSERT INTO my_brewery_db VALUES ('Bank Brewing Co.','218 South Main Street, Hendricks, MN 56136','bankbeer.com');
INSERT INTO my_brewery_db VALUES ('Barley John''s Brew Pub','781 Old Highway 8 SW, New Brighton, MN 55112','barleyjohns.com');
INSERT INTO my_brewery_db VALUES ('Bauhaus Brew Labs','1315 Tyler Street NE, Minneapolis, MN 55409','bauhausbrewlabs.com');
INSERT INTO my_brewery_db VALUES ('Beaver Island Brewing Company','216 6th Ave S, Saint Cloud, MN 56301','beaverislandbrew.com');
INSERT INTO my_brewery_db VALUES ('Bemidji Brewing Co.','01 Beltrami Ave NW Suite A, Bemidji, MN 56601','bemidjibeer.com');
INSERT INTO my_brewery_db VALUES ('Bent Brewstillery','1744 Terrace Dr, Roseville, MN 55113','bentbrewstillery.com');
INSERT INTO my_brewery_db VALUES ('Bent Paddle Brewing Co.','1912 West Michigan Street, Duluth, MN 55806','bentpaddlebrewing.com/');
INSERT INTO my_brewery_db VALUES ('Big Wood Brewery','2222 4th St, White Bear Lake, MN 55110','bigwoodbrewery.com');
INSERT INTO my_brewery_db VALUES ('Blacklist Brewing','211 East 2nd Street, Duluth, MN 55805','blacklistbeer.com');
INSERT INTO my_brewery_db VALUES ('Boathouse Brew Pub','47 East Sheridan St., Ely, MN 55731','boathousebrewpub.com');
INSERT INTO my_brewery_db VALUES ('Boom Island Brewing Co.','2014 Washington Ave N, Minneapolis, MN 55411','boomislandbrewing.com');
INSERT INTO my_brewery_db VALUES ('Borealis Fermentery','P.O. Box 130, Knife River, MN 55609','borealisfermentery.com');
INSERT INTO my_brewery_db VALUES ('Brau Brothers Brewing Co','1010 E Southview Dr, Marshall, MN 56258','braubeer.com');
INSERT INTO my_brewery_db VALUES ('Burning Brothers Brewing','1750 W Thomas Ave, Saint Paul, MN 55104','burnbrosbrew.com');
INSERT INTO my_brewery_db VALUES ('Burrito Union','1332 East 4th Street, Duluth, MN 55805','burritounion.com');
INSERT INTO my_brewery_db VALUES ('Canal Park Brewing Company','300 Canal Park Drive, Duluth, MN 55802','canalparkbrewery.com');
INSERT INTO my_brewery_db VALUES ('Carmody Irish Pub & Brewing','308 E. Superior St, Duluth, MN 55802','carmodyirishbrewpub.com');
INSERT INTO my_brewery_db VALUES ('Castle Danger Brewery','17 7th St, Two Harbors, MN 55616','castledangerbrewery.com');
INSERT INTO my_brewery_db VALUES ('Dangerous Man Brewing Co.','1300 2nd St NE, Minneapolis, MN 55413','dangerousmanbrewing.com');
INSERT INTO my_brewery_db VALUES ('Eastlake Craft Brewery','920 E. Lake St. #123, Minneapolis, MN 55407','eastlakemgm.com');
INSERT INTO my_brewery_db VALUES ('ENKI Brewing','7929 Victoria Dr, Victoria, MN 55386','æenkibrewing.com');
INSERT INTO my_brewery_db VALUES ('Excelsior Brewing Co.','421 3rd Street, Excelsior, MN 55331','excelsiorbrew.com');
INSERT INTO my_brewery_db VALUES ('F-Town Brewing Company','22 4th St NE, Faribault, MN 55021','ftownbeer.com');
INSERT INTO my_brewery_db VALUES ('Fair State Brewing Cooperative','2506A Central Ave. NE, Minneapolis, MN 55418','fairstate.coop');
INSERT INTO my_brewery_db VALUES ('Finnegans','609 S. 10th St., Minneapolis, MN 55404','finnegans.org');
INSERT INTO my_brewery_db VALUES ('Fitger''s Brewhouse & Grille','600 E Superior St, Duluth, MN 55802','brewhouse.net');
INSERT INTO my_brewery_db VALUES ('Flat Earth Brewing Co.','688 Minnehaha Ave E, St. Paul, MN 55116','flatearthbrewing.com');
INSERT INTO my_brewery_db VALUES ('Foxhole Brewhouseæ','313 4th St SW, Willmar, MN 56201','foxholebrewhouse.com');
INSERT INTO my_brewery_db VALUES ('Fulton Brewing','414 6th Avenue North, Minneapolis, MN 55401','fultonbeer.com');
INSERT INTO my_brewery_db VALUES ('Goat Ridge Brewing Co.','17 Central Ave W PO Box 526, New London, MN 56273','goatridgebrewing.com');
INSERT INTO my_brewery_db VALUES ('Grand Rounds Brewpub','4 3rd St SW, Rochester, MN 55902','grandroundsbrewpub.com');
INSERT INTO my_brewery_db VALUES ('Great Waters Brewing Co.','426 Saint Peter Street, Saint Paul, MN 55102-1105','greatwatersbc.com');
INSERT INTO my_brewery_db VALUES ('Gull Dam Brewing','23836 Smiley Rd, Nisswa, MN 56468','gulldambrewing.com');
INSERT INTO my_brewery_db VALUES ('Gun Flint Tavern & Brewpub','111 W Wisconsin St PO 985, Grand Marais, MN 55604','gunflinttavern.com');
INSERT INTO my_brewery_db VALUES ('Hayes'' Public House','112 First St. S, Buffalo, MN 55313','hayespublichouse.com');
INSERT INTO my_brewery_db VALUES ('Inbound BrewCo','701 N. 5th Street, Minneapolis, MN 55401','inboundbrew.co');
INSERT INTO my_brewery_db VALUES ('Indeed Brewing Co.','711 15th Avenue NE, Minneapolis, MN 55413','indeedbrewing.com');
INSERT INTO my_brewery_db VALUES ('Insight Brewing Company','2821 E Hennepin Ave, Minneapolis, MN 55413','insightbrewing.com');
INSERT INTO my_brewery_db VALUES ('Jack Pine Brewery','7942 College Rd. Ste. 115, Baxter, MN 56425','jackpinebrewery.com');
INSERT INTO my_brewery_db VALUES ('Joseph Wolf Brewing Company','222 Commercial St Suite 2, Stillwater, MN 55082','josephwolfbrewing.com');
INSERT INTO my_brewery_db VALUES ('Junkyard Brewing Company','1416 1st Ave N, Moorhead, MN 56560','æjunkyardbeer.com');
INSERT INTO my_brewery_db VALUES ('Kinney Creek Brewery','1016 7th St NW, Rochester, MN 55901','kinneycreekbrewery.com');
INSERT INTO my_brewery_db VALUES ('Lake Superior Brewing Co.','2711 W Superior St #204, Duluth, MN 55806','lakesuperiorbrewing.com');
INSERT INTO my_brewery_db VALUES ('Lakes & Legends Brewing Co.','1368 Lasalle Ave, Minneapolis, MN 55403','lakesandlegends.com');
INSERT INTO my_brewery_db VALUES ('Lazy Loon Brewing Company','8750 County Road 43, Chaska, MN 55318','ælazyloonbrewing.com');
INSERT INTO my_brewery_db VALUES ('Lift Bridge Brewing Co.','1900 Tower Drive, Stillwater , MN 55802','liftbridgebrewery.com');
INSERT INTO my_brewery_db VALUES ('LTD Brewing Co.','725 Mainstreet, Hopkins, MN 55343','ltdbrewing.com');
INSERT INTO my_brewery_db VALUES ('LTS Brewing Co.æ','2001 32nd Ave NW, Rochester, MN 55901','æltsbrewing.com');
INSERT INTO my_brewery_db VALUES ('Lucid Brewing','6020 Culligan Way, Minnetonka, MN 55345','lucidbrewing.wordpress.com');
INSERT INTO my_brewery_db VALUES ('Lupine Brewing Company','3320 3rd Street, Saint Cloud, MN 56301','lupinebrewing.com');
INSERT INTO my_brewery_db VALUES ('Lupulin Brewing Co.','570 Humboldt Dr Suite 107, Big Lake, MN 55309','lupulinbrewing.com');
INSERT INTO my_brewery_db VALUES ('LynLake Brewery','2934 Lyndale Ave S, Minneapolis, MN 55408','lynlakebrewery.com');
INSERT INTO my_brewery_db VALUES ('Mankato Brewery','1119 Center Street, North Mankato, MN 56003','mankatobrewery.com');
INSERT INTO my_brewery_db VALUES ('Maple Island Brewing','225 Main Street North, Stillwater, MN 55082','mapleislandbrewing.com');
INSERT INTO my_brewery_db VALUES ('Modist Brewing','505 N 3rd St, Minneapolis, MN 55401','modestbrewing.com');
INSERT INTO my_brewery_db VALUES ('Montgomery Brewing','306 2nd St NW, Montgomery, MN 56069','montgomerybrewing.com');
INSERT INTO my_brewery_db VALUES ('Northbound Smokehouse & Brewpub','2724 East 38th Street, Minneapolis, MN 55406','northboundbrewpub.com');
INSERT INTO my_brewery_db VALUES ('Northgate Brewing','783 Harding St NE, Minneapolis, MN 55418','northgatebrew.com');
INSERT INTO my_brewery_db VALUES ('Olvalde Farm & Brewing','16557 Co Hwy 25, Rollingstone, MN 55969','olvalde.com');
INSERT INTO my_brewery_db VALUES ('OMNI Brewing Company','9462 Deerwood Lane N, Maple Grove, MN 55369','omnibrewing.com');
INSERT INTO my_brewery_db VALUES ('Reads Landing Brewing Companyæ','70555 202nd Street, Reads Landing, MN 55968','rlbrewingco.com');
INSERT INTO my_brewery_db VALUES ('Red Wing Brewery','1411 Old W Main St, Red Wing, MN 55066','redwingbrewing.com');
INSERT INTO my_brewery_db VALUES ('Sidhe Brewing Company','990 Payne Ave, Suite 42, St. Paul, MN 55130','sidhebrewing.com');
INSERT INTO my_brewery_db VALUES ('Sisyphus Brewing','712 Ontario Ave. W #100, Minneapolis, MN 55403','sisyphusbrewing.com');
INSERT INTO my_brewery_db VALUES ('Sociable Cider Werks','1500 Fillmore St NE, Minneapolis, MN 55413','sociablecider.com');
INSERT INTO my_brewery_db VALUES ('South Fork Brewing Co.','221 2nd Street North, Delano, MN 55328','southforkbrewingcompany.com');
INSERT INTO my_brewery_db VALUES ('Spilled Grain Brewhouse','300 Elm St E, Annandale, MN 55302','spilledgrainbrewhouse.com');
INSERT INTO my_brewery_db VALUES ('Steel Toe Brewing','4848 West 36th Street, St. Louis Park, MN 55416','steeltoebrewing.com');
INSERT INTO my_brewery_db VALUES ('Stub & Herbs','227 SE Oak St, Minneapolis, MN 55455','stubandherbsbar.com');
INSERT INTO my_brewery_db VALUES ('Summit Brewing Co.','910 Montreal Circle, St. Paul, MN 55102','summitbrewing.com');
INSERT INTO my_brewery_db VALUES ('Surly Brewing Co.','20 Malcolm Ave SE, Minneapolis, MN 55414','surlybrewing.com');
INSERT INTO my_brewery_db VALUES ('The Freehouse','701 N Washington Ave #101, Minneapolis, MN 55401','freehousempls.com');
INSERT INTO my_brewery_db VALUES ('The Herkimer','2922 South Lyndale Ave, Minneapolis, MN 55408','theherkimer.com');
INSERT INTO my_brewery_db VALUES ('Third Street Brewhouse','219 Red River Ave N, Cold Spring, MN 56320','thirdstreetbrewhouse.com');
INSERT INTO my_brewery_db VALUES ('Tin Whiskers Brewing Co.','125 9th Street E Unit 127, Saint Paul, MN 55101','twbrewing.com');
INSERT INTO my_brewery_db VALUES ('Town Hall Brewery','1430 Washington Ave S, Minneapolis, MN 55454','townhallbrewery.com');
INSERT INTO my_brewery_db VALUES ('Tycoons','132 East Superior Street, Duluth, MN 55802','tycoonsalehouse.com');
INSERT INTO my_brewery_db VALUES ('Urban Growler Brewing Co.','2325 Endicott St., St. Paul, MN 55114','urbangrowlerbrewing.com');
INSERT INTO my_brewery_db VALUES ('Vine Park Brewing Co.','1254 7th St W, St. Paul, MN 55102','vinepark.com');
INSERT INTO my_brewery_db VALUES ('Voyageur Brewing Company','233 West Highway 61, Grand Marais, MN 55604','voyageurbrewing.com');
INSERT INTO my_brewery_db VALUES ('Wabasha Brewing Co.','429 Wabasha St. S, St. Paul, MN 55107','wabashabrewing.com');
INSERT INTO my_brewery_db VALUES ('Waconia Brewing Company','255 Main Street West, Waconia, MN 55387','waconiabrewing.com');
INSERT INTO my_brewery_db VALUES ('Wayzata Brew Works','æ294 Grove Ln E, Wayzata, MN 55391','wayzatabrewworks.com');

--visits/beers table
CREATE TABLE brews_test (
	id SERIAL PRIMARY KEY,
	beer_name VARCHAR(100) NOT NULL,
	date_had DATE,
	rating INT,
	notes VARCHAR(500),
	brewery_id INT REFERENCES my_brewery_db NOT NULL
);


--brews GET
SELECT brews_test.*, my_brewery_db.name FROM brews_test JOIN my_brewery_db ON brews_test.brewery_id = my_brewery_db.id ORDER BY date_had DESC;

--brews POST
INSERT INTO brews_test (beer_name, date_had, rating, notes, brewery_id) VALUES ($1, $2, $3, $4, $5);

--brews DELETE
DELETE FROM brews_test WHERE id = $1;

--brews UPDATE
UPDATE brews_test SET name=$1, date_had=$2, notes=$3, rating=$4, brewery_id=$5 WHERE id=$6;

--breweries GET
SELECT * FROM my_brewery_db ORDER BY id ASC;


--on display, I want just the day, month, and year to display
SELECT EXTRACT(YEAR FROM date_had) AS VisitYear,
EXTRACT(MONTH FROM date_had) AS VisitMonth,
EXTRACT(DAY FROM date_had) AS VisitDay
FROM brews_test ORDER BY VisitYEar DESC
;
--but this shows year, month, day in separate columns


--here, want to get beer name, rating, and brewery name
SELECT brews_test.beer_name, brews_test.rating, my_brewery_db.name
FROM brews_test
JOIN my_brewery_db
ON brews_test.brewery_id = my_brewery_db.id
ORDER BY date_had DESC;










--test values
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
