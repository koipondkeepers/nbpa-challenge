# NBPA Coding Challenge

## Description
This project is for the NBPA coding assignment. It runs on a stack consisting of Postgres, Express, React, and Node. The following features are implemented:
- Search for all records of a client
- Add a new billing item
- Show all billing items

![Screen Shot 2022-07-20 at 11 26 24 PM](https://user-images.githubusercontent.com/11808114/180131699-4b125070-042b-4a9e-84cd-7ea3dba6fdda.png)

## Setup
First you'll want to run `git clone https://github.com/koipondkeepers/nbpa-challenge.git` to clone the project. You can do this in any directory you'd like. Afterwards, navigate inside the root directory. If you `ls` within your terminal, you should see two directories, *client* and *server*. You should start up the server directory first before the client.

### Backend Setup
Navigate into the *server* folder by typing `cd server`. You'll also want to run `npm install` to download all dependencies once you're inside the *server* directory.Afterwards, make sure Postgres is installed locally on your machine. If you run into issues, you can look [here](https://blog.testdouble.com/posts/2021-01-28-how-to-completely-uninstall-homebrew-postgres/) for reference on how to reset PSQL on your local machine. After doing so, you can run `npm run create-db` inside the *server* directory, in order to seed your database with a CSV file inside the directory. You can also follow the `database.sql` file for reference on what to do if that has any issues. Once that is complete, you can run `npm run server` to start up the server. You should see the message `server has started on port 5000` to confirm within your terminal.

### Frontend Setup
Navigate into the *client* folder by typing `cd client` from the root directory. You'll also want to run `npm install` to download all dependencies once you're inside the *client* directory. Once that is complete, run `npm start` in order to start up the frontend. Navigate to https://localhost:3000 to view the project.
