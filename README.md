# GhorFixBD

## Project Overview
**GhorFixBd** is a home repair service management application designed to simplify the process of connecting service providers and users in the home repair domain. It allows users to add, manage, and book various home repair services conveniently from a single platform.

## Key Features
- **User Authentication and Authorization:** Secure login and registration systems with Firebase authentication and Google Sign-in.
- **Service Management:** Users can search for services, add new services, update service details, and delete services they have added.
- **Booking Services:** Users can browse detailed service listings, book specific services, and track the status of their bookings. The service providers can update the status of the booked services (pending, working, completed) to keep users informed.

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript, React, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Firebase (Email/Password, Google Login)
- **Hosting:** Netlify (Frontend), Vercel (Backend)

## Live Site
[Visit GhorFixBD](https://ghorfixbd.netlify.app/)

## Server Repository
[GhorFixBD Server Repository](https://github.com/noushinpervez/GhorFixBD-Server)

## Local Setup Instructions
To run the project locally, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/noushinpervez/GhorFixBD-Client.git
    ```

2. **Navigate to the project directory and install dependencies:**
    ```sh
    cd GhorFixBD-Client
    npm install
    ```

3. **Set up environment variables:**
   - Create a `.env` file in the client directory and add necessary configuration variables (Firebase config):
   
   ```plaintext
   VITE_API_KEY=
   VITE_AUTH_DOMAIN=
   VITE_PROJECT_ID=
   VITE_STORAGE_BUCKET=
   VITE_MESSAGING_SENDER_ID=
   VITE_APP_ID=
   ```

   - Replace each variable (VITE_API_KEY, VITE_AUTH_DOMAIN, etc.) with your actual configuration keys and values **without quotations**.

4. **Run the client:**
    ```sh
    npm run dev
    ```

5. **Access the application:**
    The application will run on `http://localhost:5173`.

Follow these instructions to set up and locally run the client-side of Scholarship Portal BD to explore its features and functionalities.