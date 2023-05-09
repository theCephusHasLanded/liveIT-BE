-- IF DATABASE EXISTS -- DROP IT
DROP DATABASE IF EXISTS snacks_dev;

-- Create our database! 🪐
CREATE DATABASE snacks_dev;

-- Connect to DB
\c snacks_dev;

-- always drop the table if it exists
DROP TABLE IF EXISTS snacks;

-- Create a table for our snacks
CREATE TABLE snacks (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  calorie TEXT,
  sugar TEXT,
  fat TEXT,
  is_healthy BOOLEAN
);
-- always drop the table if it exists
DROP TABLE IF EXISTS reviews;

-- Create a table for our snacks reviews
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer TEXT,
    title TEXT,
    content TEXT,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    snack_id INTEGER REFERENCES snacks (id)
    ON DELETE CASCADE
);
