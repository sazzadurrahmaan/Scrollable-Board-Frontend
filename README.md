# Scrollable Board Frontend

This project is the frontend part of a Scrollable Board application. It is built with **React.js** and allows users to manage tasks with a visually organized board. Users can add attachments to tasks, view attachments in a modal, and track the count of uploaded attachments.

## Features

- Horizontally scrollable board with columns and cards.
- Clickable attachment icon to upload and view files in a modal.
- Dynamic display of attachment counts.
- Integrates with a Node.js backend for file uploads.


## Installation

1. Clone the repository.
   ```bash
   git clone https://github.com/sazzadurrahmaan/Scrollable-Board-Frontend.git

## Install Dependencies
      ```bash 
      npm install

## Start the development server
      npm run dev

## Open the app in your browser.
      http://localhost:5173/

# Usage
   * Each column represents a task status (e.g., To Do, Doing, Done).
   * Each card represents a task and has an attachment icon. 
   * Click the attachment icon to open the attachment modal, where you can upload 
     multiple files.
   * Uploaded files display in the modal with the original file name and extension.
     
# Project Structure 
       frontend/
├── public/               # Public assets
├── src/
│   ├── components/       # React components
│   ├── App.js            # Main app component
│   ├── index.js          # Main entry point
├── README.md             # Frontend README
└── package.json          # Project metadata and dependencies

# Dependencies 
   * React.js
   * axios
   * react-modal
   * react-icons
# Environment Variables
  * .env
      ```bash
      REACT_APP_API_URL=http://localhost:5000

 * make sure that the backend server is running on http://localhost:5000.

# Here is the Backend Part Repository : 
## https://github.com/sazzadurrahmaan/Scrollable-Board-Backend-part
      
      
