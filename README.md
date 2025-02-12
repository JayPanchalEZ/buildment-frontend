# BuildMend: AI-Powered Home Repair Assistant

![BuildMend Screenshot](link-to-your-screenshot.png)

## Overview

BuildMend is a React-based web application designed to assist homeowners with their repair and maintenance needs. It combines the power of AI with a network of skilled professionals to provide users with instant troubleshooting advice, expert solutions, and connections to local service providers.

## Key Features

*   **AI-Powered Chat Assistant:** Get real-time guidance and step-by-step solutions for common home repair issues.
*   **Professional Network:** Connect with vetted plumbers, electricians, carpenters, and other home service professionals in your area.
*   **Dark Mode Support:** Enjoy a comfortable viewing experience with a toggleable dark mode theme.
*   **Google Authentication:** Securely sign in using your Google account.
*   **Responsive Design:** Access BuildMend seamlessly on desktops, tablets, and mobile devices.
*   **User Profile Management:** Update your profile information and preferences.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **React Router:** A standard library for routing in React applications.
*   **Framer Motion:** A motion library for creating smooth and engaging animations.
*   **@react-oauth/google:** React hooks for Google authentication.
*   **Axios:** A promise-based HTTP client for making API requests.
*   **Scrollable-Feed:** For implementing a scrollable feed/chat interface.
*   **Local Storage:** To persist user session data and preferences.

## Setup Instructions

Follow these steps to get BuildMend up and running on your local machine:

1.  **Clone the repository:**

    ```
    git clone <your-repository-url>
    cd BuildMend
    ```

2.  **Install dependencies:**

    ```
    npm install
    ```

3.  **Configure Google Authentication:**

    *   Create a Google Cloud project and enable the Google Sign-In API.
    *   Obtain a client ID from the Google Cloud Console.
    *   Replace `"YOUR_GOOGLE_CLIENT_ID"` in your `App.jsx` file with your actual client ID:

        ```
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            {/* ... */}
        </GoogleOAuthProvider>
        ```

4.  **Start the development server:**

    ```
    npm start
    ```

    Open your browser and navigate to `http://localhost:3000` (or the port specified by your development environment).

## Project Structure

Here's a brief overview of the project's directory structure:

BuildMend/
├── public/ # Static assets (index.html, favicon, etc.)
├── src/ # Source code
│ ├── components/ # Reusable React components
│ │ ├── Sidebar.jsx # Navigation sidebar
│ │ ├── ProtectedRoute.jsx # Route protection component
│ │ └── ...
│ ├── pages/ # Main application pages
│ │ ├── Home.jsx # Home page
│ │ ├── Login.jsx # Login page
│ │ ├── AIChat.jsx # AI chat interface
│ │ ├── Contact.jsx # Contact us page
│ │ ├── Profile.jsx # User profile page
│ │ └── ...
│ ├── App.jsx # Main application component
│ ├── index.jsx # Entry point for React rendering
│ ├── index.css # Global styles
│ └── ...
├── tailwind.config.js # Tailwind CSS configuration
├── package.json # Project dependencies and scripts
├── README.md # Project documentation
└── ...

## Contributing

We welcome contributions to BuildMend! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, descriptive messages.
4.  Submit a pull request to the main branch.

## Future Enhancements

*   Implement AI API integration for chat bot.
*   Implement Database for storing user, messages.
*   Add Image upload support.
*   Develop user interface for Mobile and Tablet.
*   Implement the support and chat features with Professionals.


## Contact

[Your Name] - [Your Email]