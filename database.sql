CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

-- Favorites table
CREATE TABLE "favorite" (
	"id" SERIAL PRIMARY KEY,
	"url" VARCHAR (255) NOT NULL,
	"category_id" integer REFERENCES category
);

-- Dummy --
INSERT INTO "favorite" ("url", "category_id")
VALUES ('cat_url_goes_here', 1),
('meme_gif_here', 5),
('spiderman_gif', 3);

SELECT "category".name, "favorite".url FROM "category"
JOIN "favorite"
ON "category".id = "favorite".category_id;