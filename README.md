# Number Classification API

## Overview
The **Number Classification API** takes an integer as input and returns various mathematical properties about it, along with a fun fact fetched from the Numbers API.

## Features
- Classifies a number based on:
  - **Prime Check**: Determines if the number is prime.
  - **Perfect Number Check**: Checks if the sum of divisors (excluding itself) equals the number.
  - **Armstrong Number Check**: Determines if the sum of its digits, each raised to the power of its length, equals the number.
  - **Odd/Even Check**: Identifies if the number is even or odd.
  - **Digit Sum Calculation**: Computes the sum of all digits.
- Fetches a **fun fact** about the number from the [Numbers API](http://numbersapi.com/).
- Returns responses in **JSON format**.
- Handles invalid inputs gracefully.
- Implements **CORS support** for cross-origin access.

## API Specifications
### Endpoint
**GET** `/api/classify-number?number=<integer>`

### Response Format
#### **Success Response (200 OK)**
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```
#### **Error Response (400 Bad Request)**
```json
{
    "number": "alphabet",
    "error": true
}
```

## Tech Stack
- **Backend**: Node.js, Express.js
- **External API**: Numbers API (for fun facts)
- **Package Dependencies**:
    - **express** - Web framework
    - **cors** - Enables cross-origin requests
    - **axios** - Makes HTTP requests
    - **dotenv** - Manages environment variables

## Setup and Installation
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Morg3an/number-classification-api.git
cd number-classification-api
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Create a .env file in the root directory and specify the port:
```bash
PORT=5000
```

### 4️⃣ Run the API Locally
```bash
npm start
```
The API will be accessible at:
```bash
http://localhost:5000/api/classify-number?number=371
```

## Deployment
The API must be publicly accessible. You can deploy it using:

- **Railway**
- **Render**
- **Vercel**
- **Heroku**

### Deploy to Heroku (Example)
```bash
git add .
git commit -m "Deploy API"
heroku create number-classification-api
heroku config:set PORT=5000
git push heroku main
```

## Contribution Guidelines
- Fork the repository.
- Create a feature branch: git checkout -b feature-name.
- Commit changes with descriptive messages.
- Push changes: git push origin feature-name.
- Submit a Pull Request (PR).

## Testing (To Be Added)
Unit tests will be implemented using Jest. Stay tuned!