# Realtime Chat Application Documentation

## Overview

This documentation provides an overview of the Realtime Chat Application. It's important to note that the current version of the application is incomplete due to time constraints. As a result, several planned features have not yet been implemented.

## Current Features

- **User Authentication**: Users can sign up, log in, and manage their accounts.
- **Friend Requests**: Users can send friend requests to other users.
- **User Search**: Users can search for other users using various criteria.

## Incomplete Features

Due to limited development time, the following features are currently missing from the application:

- **Realtime Messaging**: The core feature of sending and receiving messages in real-time is not yet implemented. This is a critical part of the chat application that allows users to communicate instantaneously.
- **Accepting Connections**: The functionality for users to accept connection requests (friend requests) and thereby establish a connection is not present. This feature is essential for building a user's network within the app.

## Technical Details

- **Backend**: The backend of the application is built using Django Channels for handling WebSockets, allowing for realtime features like chat messaging.
- **Frontend**: The frontend is developed using React Native with TypeScript, which provides a dynamic and responsive user interface for the chat application.
