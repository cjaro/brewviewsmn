--Create tables

CREATE TABLE my_brewery_db (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL
	address VARCHAR(255),
	website VARCHAR(255)
);

CREATE TABLE visits (
	id SERIAL PRIMARY KEY,
	brewery_id INT REFERENCES my_brewery_db NOT NULL,
	date_had DATE
);

CREATE TABLE brews_test (
	id SERIAL PRIMARY KEY,
	beer_name VARCHAR(100) NOT NULL,
	date_had DATE,
	rating INT,
	notes VARCHAR (600),
	brewery_id INT REFERENCES my_brewery_db NOT NULL,
	visit_id INT REFERENCES visits
);

CREATE TABLE users (
  id integer NOT NULL,
  user_name character varying(60),
  user_email character varying(120),
  user_photo character varying(200),
  google_id character varying(30)
);

INSERT INTO my_brewery_db VALUES ('10K Brewing','2005 2nd Av, Anoka, MN 55303','10kbrew.com'),
	('56 Brewing','134 California Street NE #122, Minneapolis, MN 55418','56brewing.com'),
	('612 Brew','945 Broadway Street #188, Minneapolis, MN 55413','612brew.com'),
	('Able Seedhouse + Brewery','1121 Quincy St NE, Minneapolis, MN 55413','ablebeer.com'),
	('August Schell Brewing Co.','1860 Schell Road, New Ulm, MN 56073','schellsbrewery.com'),
	('Bad Habit Brewing Co.','15 East Minnesota St Ste 108, Saint Joseph, MN 56374','badhabitbeer.com'),
	('Bad Weather Brewing Company','414 7th St W, St. Paul, MN 55102','badweatherbrewery.com'),
	('Badger Hill Brewing Co.','571 Valley Industrial Blvd S. Ste 500, Shakopee, MN 55379','badgerhillbrewing.com'),
	('Bang Brewing','2320 Capps Rd, Saint Paul, MN 55114','bangbrewing.com'),
	('Bank Brewing Co.','218 South Main Street, Hendricks, MN 56136','bankbeer.com'),
 	('Barley John''s Brew Pub','781 Old Highway 8 SW, New Brighton, MN 55112','barleyjohns.com'),
	('Bauhaus Brew Labs','1315 Tyler Street NE, Minneapolis, MN 55409','bauhausbrewlabs.com'),
	('Beaver Island Brewing Company','216 6th Ave S, Saint Cloud, MN 56301','beaverislandbrew.com'),
	('Bemidji Brewing Co.','01 Beltrami Ave NW Suite A, Bemidji, MN 56601','bemidjibeer.com'),
	('Bent Brewstillery','1744 Terrace Dr, Roseville, MN 55113','bentbrewstillery.com'),
	('Bent Paddle Brewing Co.','1912 West Michigan Street, Duluth, MN 55806','bentpaddlebrewing.com/'),
	('Big Wood Brewery','2222 4th St, White Bear Lake, MN 55110','bigwoodbrewery.com'),
	('Blacklist Brewing','211 East 2nd Street, Duluth, MN 55805','blacklistbeer.com'),
	('Boathouse Brew Pub','47 East Sheridan St., Ely, MN 55731','boathousebrewpub.com'),
	('Boom Island Brewing Co.','2014 Washington Ave N, Minneapolis, MN 55411','boomislandbrewing.com'),
	('Borealis Fermentery','P.O. Box 130, Knife River, MN 55609','borealisfermentery.com'),
	('Brau Brothers Brewing Co','1010 E Southview Dr, Marshall, MN 56258','braubeer.com'),
	('Burning Brothers Brewing','1750 W Thomas Ave, Saint Paul, MN 55104','burnbrosbrew.com'),
	('Burrito Union','1332 East 4th Street, Duluth, MN 55805','burritounion.com'),
	('Canal Park Brewing Company','300 Canal Park Drive, Duluth, MN 55802','canalparkbrewery.com'),
	('Carmody Irish Pub & Brewing','308 E. Superior St, Duluth, MN 55802','carmodyirishbrewpub.com'),
	('Castle Danger Brewery','17 7th St, Two Harbors, MN 55616','castledangerbrewery.com'),
	('Dangerous Man Brewing Co.','1300 2nd St NE, Minneapolis, MN 55413','dangerousmanbrewing.com'),
	('Eastlake Craft Brewery','920 E. Lake St. #123, Minneapolis, MN 55407','eastlakemgm.com'),
	('ENKI Brewing','7929 Victoria Dr, Victoria, MN 55386','æenkibrewing.com'),
	('Excelsior Brewing Co.','421 3rd Street, Excelsior, MN 55331','excelsiorbrew.com'),
	('F-Town Brewing Company','22 4th St NE, Faribault, MN 55021','ftownbeer.com'),
	('Fair State Brewing Cooperative','2506A Central Ave. NE, Minneapolis, MN 55418','fairstate.coop'),
	('Finnegans','609 S. 10th St., Minneapolis, MN 55404','finnegans.org'),
	('Fitger''s Brewhouse & Grille','600 E Superior St, Duluth, MN 55802','brewhouse.net'),
	('Flat Earth Brewing Co.','688 Minnehaha Ave E, St. Paul, MN 55116','flatearthbrewing.com'),
	('Foxhole Brewhouseæ','313 4th St SW, Willmar, MN 56201','foxholebrewhouse.com'),
	('Fulton Brewing','414 6th Avenue North, Minneapolis, MN 55401','fultonbeer.com'),
	('Goat Ridge Brewing Co.','17 Central Ave W PO Box 526, New London, MN 56273','goatridgebrewing.com'),
	('Grand Rounds Brewpub','4 3rd St SW, Rochester, MN 55902','grandroundsbrewpub.com'),
	('Great Waters Brewing Co.','426 Saint Peter Street, Saint Paul, MN 55102-1105','greatwatersbc.com'),
	('Gull Dam Brewing','23836 Smiley Rd, Nisswa, MN 56468','gulldambrewing.com'),
	('Gun Flint Tavern & Brewpub','111 W Wisconsin St PO 985, Grand Marais, MN 55604','gunflinttavern.com'),
	('Hayes'' Public House','112 First St. S, Buffalo, MN 55313','hayespublichouse.com'),
	('Inbound BrewCo','701 N. 5th Street, Minneapolis, MN 55401','inboundbrew.co'),
	('Indeed Brewing Co.','711 15th Avenue NE, Minneapolis, MN 55413','indeedbrewing.com'),
	('Insight Brewing Company','2821 E Hennepin Ave, Minneapolis, MN 55413','insightbrewing.com'),
	('Jack Pine Brewery','7942 College Rd. Ste. 115, Baxter, MN 56425','jackpinebrewery.com'),
	('Joseph Wolf Brewing Company','222 Commercial St Suite 2, Stillwater, MN 55082','josephwolfbrewing.com'),
	('Junkyard Brewing Company','1416 1st Ave N, Moorhead, MN 56560','æjunkyardbeer.com'),
	('Kinney Creek Brewery','1016 7th St NW, Rochester, MN 55901','kinneycreekbrewery.com'),
	('Lake Superior Brewing Co.','2711 W Superior St #204, Duluth, MN 55806','lakesuperiorbrewing.com'),
	('Lakes & Legends Brewing Co.','1368 Lasalle Ave, Minneapolis, MN 55403','lakesandlegends.com'),
	('Lazy Loon Brewing Company','8750 County Road 43, Chaska, MN 55318','ælazyloonbrewing.com'),
	('Lift Bridge Brewing Co.','1900 Tower Drive, Stillwater , MN 55802','liftbridgebrewery.com'),
	('LTD Brewing Co.','725 Mainstreet, Hopkins, MN 55343','ltdbrewing.com'),
	('LTS Brewing Co.æ','2001 32nd Ave NW, Rochester, MN 55901','æltsbrewing.com'),
	('Lucid Brewing','6020 Culligan Way, Minnetonka, MN 55345','lucidbrewing.wordpress.com'),
	('Lupine Brewing Company','3320 3rd Street, Saint Cloud, MN 56301','lupinebrewing.com'),
	('Lupulin Brewing Co.','570 Humboldt Dr Suite 107, Big Lake, MN 55309','lupulinbrewing.com'),
	('LynLake Brewery','2934 Lyndale Ave S, Minneapolis, MN 55408','lynlakebrewery.com'),
	('Mankato Brewery','1119 Center Street, North Mankato, MN 56003','mankatobrewery.com'),
	('Maple Island Brewing','225 Main Street North, Stillwater, MN 55082','mapleislandbrewing.com'),
	('Modist Brewing','505 N 3rd St, Minneapolis, MN 55401','modestbrewing.com'),
	('Montgomery Brewing','306 2nd St NW, Montgomery, MN 56069','montgomerybrewing.com'),
	('Northbound Smokehouse & Brewpub','2724 East 38th Street, Minneapolis, MN 55406','northboundbrewpub.com'),
	('Northgate Brewing','783 Harding St NE, Minneapolis, MN 55418','northgatebrew.com'),
	('Olvalde Farm & Brewing','16557 Co Hwy 25, Rollingstone, MN 55969','olvalde.com'),
	('OMNI Brewing Company','9462 Deerwood Lane N, Maple Grove, MN 55369','omnibrewing.com'),
	('Reads Landing Brewing Companyæ','70555 202nd Street, Reads Landing, MN 55968','rlbrewingco.com'),
	('Red Wing Brewery','1411 Old W Main St, Red Wing, MN 55066','redwingbrewing.com'),
	('Sidhe Brewing Company','990 Payne Ave, Suite 42, St. Paul, MN 55130','sidhebrewing.com'),
	('Sisyphus Brewing','712 Ontario Ave. W #100, Minneapolis, MN 55403','sisyphusbrewing.com'),
	('Sociable Cider Werks','1500 Fillmore St NE, Minneapolis, MN 55413','sociablecider.com'),
	('South Fork Brewing Co.','221 2nd Street North, Delano, MN 55328','southforkbrewingcompany.com'),
	('Spilled Grain Brewhouse','300 Elm St E, Annandale, MN 55302','spilledgrainbrewhouse.com'),
	('Steel Toe Brewing','4848 West 36th Street, St. Louis Park, MN 55416','steeltoebrewing.com'),
	('Stub & Herbs','227 SE Oak St, Minneapolis, MN 55455','stubandherbsbar.com'),
	('Summit Brewing Co.','910 Montreal Circle, St. Paul, MN 55102','summitbrewing.com'),
	('Surly Brewing Co.','20 Malcolm Ave SE, Minneapolis, MN 55414','surlybrewing.com'),
	('The Freehouse','701 N Washington Ave #101, Minneapolis, MN 55401','freehousempls.com'),
	('The Herkimer','2922 South Lyndale Ave, Minneapolis, MN 55408','theherkimer.com'),
	('Third Street Brewhouse','219 Red River Ave N, Cold Spring, MN 56320','thirdstreetbrewhouse.com'),
	('Tin Whiskers Brewing Co.','125 9th Street E Unit 127, Saint Paul, MN 55101','twbrewing.com'),
	('Town Hall Brewery','1430 Washington Ave S, Minneapolis, MN 55454','townhallbrewery.com'),
	('Tycoons','132 East Superior Street, Duluth, MN 55802','tycoonsalehouse.com'),
	('Urban Growler Brewing Co.','2325 Endicott St., St. Paul, MN 55114','urbangrowlerbrewing.com'),
	('Vine Park Brewing Co.','1254 7th St W, St. Paul, MN 55102','vinepark.com'),
	('Voyageur Brewing Company','233 West Highway 61, Grand Marais, MN 55604','voyageurbrewing.com'),
	('Wabasha Brewing Co.','429 Wabasha St. S, St. Paul, MN 55107','wabashabrewing.com'),
	('Waconia Brewing Company','255 Main Street West, Waconia, MN 55387','waconiabrewing.com'),
	('Wayzata Brew Works','æ294 Grove Ln E, Wayzata, MN 55391','wayzatabrewworks.com');


--brews GET
SELECT brews_test.*, my_brewery_db.name FROM brews_test
JOIN visits ON brews_test.visit_id = visits.id
JOIN my_brewery_db ON visits.brewery_id = my_brewery_db.id
WHERE visits.id=$1
ORDER BY date_had DESC;

--brews POST
INSERT INTO brews_test (beer_name, rating, notes, visit_id) VALUES ($1, $2, $3, $4);

--brews DELETE
DELETE FROM brews_test WHERE id=$1;

--brews UPDATE
UPDATE brews_test SET beer_name=$1, rating=$2, notes=$3, WHERE id=$4;

--breweries GET
SELECT * FROM my_brewery_db ORDER BY name ASC;

--main GET
SELECT visits.*, my_brewery_db.name FROM visits JOIN my_brewery_db ON visits.brewery_id = my_brewery_db.id ORDER BY date_had DESC;

--main POST
INSERT INTO visits (date_had, brewery_id) VALUES ($1, $2);
