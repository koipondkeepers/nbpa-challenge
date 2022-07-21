DROP DATABASE IF EXISTS nbpa;

CREATE DATABASE nbpa;

\c nbpa

CREATE TABLE IF NOT EXISTS billing(
  date VARCHAR(255),
  client VARCHAR(255),
  project VARCHAR(255),
  project_code VARCHAR(255),
  hours DECIMAL,
  billable VARCHAR(255),
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  billing_rate INTEGER
);

\COPY billing FROM 'Coding_Exercise_Sample_Data.csv' DELIMITER ',' CSV HEADER;

ALTER TABLE nbpa OWNER to postgres;