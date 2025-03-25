# Perfume Shop Backend Documentation

## Overview
This is the backend for the Perfume Shop, built using **Node.js, Express, and MongoDB**. It handles product listings, ratings, and other functionalities required for an engaging e-commerce experience.

## Setup Instructions
### Prerequisites
- Node.js installed on your system
- MongoDB database (either local or a cloud instance like MongoDB Atlas)

### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd perfume-shop-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and configure environment variables:
   ```env
   PORT=3001
   MONGO_URI="your-mongodb-connection-string"
   JWT_SECRET_KEY="your-secret-key"
   ```
4. Start the server:
   ```sh
   npm start
   ```
   The server should now be running at `http://localhost:3001`.

## API Endpoints
### Get All Products
**Endpoint:** `GET /api/products`

**Response:**
```json
[
  {
    "_id": "67e2a4a73374400124a3c91a",
    "name": "Ethereal Bloom",
    "brand": "Lumière",
    "description": "A captivating blend of wild jasmine, bergamot, and sandalwood, creating an aura of mystery and elegance.",
    "shortDescription": "Delicate floral notes with hints of citrus and wood",
    "price": 129.99,
    "sizes": [
      { "size": "30ml", "price": 129.99 },
      { "size": "50ml", "price": 179.99 },
      { "size": "100ml", "price": 239.99 }
    ],
    "images": [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000",
      "https://i.pinimg.com/736x/9a/df/4e/9adf4e2e23e8406c0db3d7a06b994338.jpg"
    ],
    "category": "women",
    "featured": true,
    "new": true,
    "ratings": [
      { "username": "Alice Smith", "gmail": "alice@gmail.com", "rating": 5 },
      { "username": "John Doe", "gmail": "john.doe@gmail.com", "rating": 4 },
      { "username": "Jay", "gmail": "jay@gmail.com", "rating": 3 }
    ],
    "avgRating": 4,
    "numRatings": 3
  }
]
```

### Add a Rating to a Product
**Endpoint:** `POST /api/products/:id/rating`

**Request Body:**
```json
{
  "username": "Jane Doe",
  "gmail": "jane.doe@gmail.com",
  "rating": 5
}
```

**Response:**
```json
{
  "message": "Rating added successfully",
  "updatedProduct": {
    "_id": "67e2a4a73374400124a3c91a",
    "avgRating": 4.2,
    "numRatings": 4
  }
}
```



## Additional Features
- **Secure API with JWT Authentication** (optional for future implementation)
- **Pagination for product listings**
- **Search and filter functionalities**
- **Optimized database queries for better performance**

## Future Enhancements
- Implement user authentication and authorization
- Add a shopping cart feature
- Integrate a payment gateway

## License
This project is open-source and available for modifications.

---
**Author:** Your Name
**Contact:** your.email@example.com

# perfume_backend_api
