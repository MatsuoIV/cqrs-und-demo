CREATE TABLE IF NOT EXISTS "brands" (
    "id" VARCHAR(255) PRIMARY KEY NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "website" VARCHAR(80) NOT NULL,
    "create_date" DATETIME NOT NULL,
    "update_date" DATETIME NOT NULL
);