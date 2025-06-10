# Contact Form Backend

This project is a backend application for handling contact form submissions. It uses Express.js for the server framework and MongoDB for data storage.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd contactform-backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection string.

## Usage

1. Start the server:
   ```
   npm start
   ```

2. The server will run on `http://localhost:3000`.

## API Endpoints

- **POST /api/contact**
  - Description: Submits a contact form.
  - Request Body:
    ```json
    {
      "name": "John Doe",
      "mobile": "1234567890",
      "email": "john.doe@example.com",
      "query": "Your query here"
    }
    ```

## Environment Variables

- `MONGODB_URI`: The connection string for your MongoDB database.

## License

This project is licensed under the MIT License.