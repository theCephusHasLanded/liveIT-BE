# liveIT Backend

[Snackalog Pasaoa Cephus Trello Board](https://trello.com/b/xvZFasjG/snackalog-pasaoa-cephus)


This is the backend for the liveIT app. It's built with Express.js and connects to a PostgreSQL database to store user data and app information.

## Getting Started

To get started with the liveIT backend, follow these steps:

1. Clone this repository to your local machine.
2. Install the dependencies by running `npm install`.
3. Create a `.env` file in the root directory and add the following environment variables:

`DB_USERNAME=your_database_username`<br>
`DB_PASSWORD=your_database_password`<br>
`DB_HOST=your_database_host`<br>
`DB_PORT=your_database_port`<br>
`DB_NAME=your_database_name`<br>`


Replace `your_database_username`, `your_database_password`, `your_database_host`, `your_database_port`, and `your_database_name` with your PostgreSQL database credentials.

4. Create a database in PostgreSQL with the name specified in the `DB_NAME` environment variable.
5. Run the database migrations by running `npm run migrate`.
6. Start the server by running `npm start`.
7. Verify that the server is running by navigating to `http://localhost:3000` in your web browser.

## API Endpoints

The liveIT backend provides the following API endpoints:

- `/api/users` - CRUD operations for user data.
- `/api/posts` - CRUD operations for post data.

## Contributing

Contributions to the liveIT backend are welcome! To contribute, please follow these steps:

1. Fork this repository.
2. Create a new branch for your changes.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Create a pull request to merge your changes into the main branch.

## License

The liveIT backend is licensed under the MIT License. See the LICENSE file for more information. 
