# Complete Code Documentation for Brunei Payment Gateway

## Overview
This document provides detailed information on the backend source code, frontend components, and configuration files for the entire Brunei Payment Gateway system, which supports QR wallet, card payments, and bank transfers.

## Backend Source Code

### Structure
- **/src**
  - **/config**: Configuration files for different environments.
  - **/controllers**: Business logic and handling requests.
  - **/models**: Database models and schemas.
  - **/routes**: API endpoints and routing logic.
  - **/services**: External integrations (e.g., payment gateways).

### Key Files
- **server.js**: Main entry point for the backend server.
- **config/default.json**: Default configuration settings.
- **controllers/paymentController.js**: Handles payment processing.

## Frontend Components

### Structure
- **/client/src**
  - **/components**: Reusable React components.
  - **/pages**: Different pages in the application.
  - **/services**: API calls and service logic.

### Key Files
- **/client/src/components/PaymentForm.js**: Form for entering payment details.
- **/client/src/pages/Home.js**: Home page with payment options.

## Configuration Files
- **docker-compose.yml**: Defines services for Docker containers.
- **.env**: Environment variables for local development.

## Supported Payment Methods
- **QR Wallet**: User can pay via scanning QR codes.
- **Card Payment**: Supports credit and debit card payments.
- **Bank Transfer**: Allows users to transfer funds directly from their bank accounts.

## Conclusion
This documentation serves as a comprehensive guide to help developers understand the Brunei Payment Gateway system architecture, code organization, and configuration. For further details, refer to the respective components and files mentioned above.

---
Created on 2026-04-09 14:24:47 UTC by arifdev67.
