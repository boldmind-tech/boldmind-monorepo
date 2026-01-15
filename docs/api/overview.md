
### **`DOCS/api/overview.md`**
```markdown
# API Documentation

## Overview
BoldMind uses a microservices architecture with a centralized API gateway.

## Base URLs
- **Production**: `https://api.boldmind.ng`
- **Staging**: `https://staging-api.boldmind.ng`
- **Development**: `http://localhost:3000`

## Authentication
Most endpoints require JWT authentication.

### Getting a Token
`http`
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}

Using the Token
http
GET /api/users/me
Authorization: Bearer <your-jwt-token>
API Gateway Endpoints
Auth Service
POST /api/auth/register - Register new user

POST /api/auth/login - Login user

POST /api/auth/logout - Logout user

POST /api/auth/refresh - Refresh token

GET /api/auth/me - Get current user

User Service
GET /api/users - List users

GET /api/users/:id - Get user by ID

PUT /api/users/:id - Update user

DELETE /api/users/:id - Delete user

Payment Service
POST /api/payments/initialize - Initialize payment

POST /api/payments/verify - Verify payment

GET /api/payments/history - Get payment history

Notification Service
POST /api/notifications/email - Send email

POST /api/notifications/sms - Send SMS

POST /api/notifications/push - Send push notification

Product-Specific APIs
EduCenter API
GET /api/educenter/courses - List courses

GET /api/educenter/courses/:id - Get course details

POST /api/educenter/enroll - Enroll in course

GET /api/educenter/questions - Get practice questions

AmeboGist API
GET /api/amebogist/posts - List posts

GET /api/amebogist/posts/:slug - Get post by slug

POST /api/amebogist/posts - Create post (admin)

GET /api/amebogist/categories - List categories

PlanAI APIs
POST /api/planai/generate - Generate content

POST /api/planai/analyze - Analyze data

POST /api/planai/predict - Make predictions

Webhooks
Payment Webhooks
POST /webhooks/paystack - Paystack webhook

POST /webhooks/flutterwave - Flutterwave webhook

Social Media Webhooks
POST /webhooks/meta - Meta (Facebook/Instagram) webhook

POST /webhooks/twitter - Twitter webhook

Rate Limiting
100 requests per minute per IP

1000 requests per hour per user

Contact for higher limits

Error Responses
json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": {
      "email": "Email is required"
    }
  }
}
Common Error Codes
400 - Bad Request

401 - Unauthorized

403 - Forbidden

404 - Not Found

429 - Too Many Requests

500 - Internal Server Error

## SDKs and Clients
JavaScript/TypeScript: @boldmind/api-client

Python: Coming soon

PHP: Coming soon

Support
Email: api-support@boldmind.ng

Documentation: https://docs.boldmind.ng/api

Status: https://status.boldmind.ng