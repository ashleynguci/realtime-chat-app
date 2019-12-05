# realtime-chat-app

This is my final project for mobile programming course at Haaga-Helia.  
Using React Native (Hook), Socket.IO, Nodejs, Redux, react-navigation, and Gifted Chat UI.

## 🚀 Quick start

1.  **Step 1.**
    Clone the project
    ```sh
    # clone the project to your local computer
    git clone https://github.com/ashleynguci/realtime-chat-app.git
    ```
1.  **Step 2.**
    Check your IP address for backend connect
    ```sh
    # Type on Terminal to find the IP address, it looks like that: inet 192.168.0.100 netmask 0xffffff00 broadcast 192.168.0.255. Take the 192.168.0.100 part/
    ifconfig (for iOS)
    ipconfig
    ```
1.  **Step 3.**
    Change the IP address
    ```sh
    # in chat-socket.io/App.js/ line 13, change the IP that you found above, and add to the link below, remember add :3001 at the end
    const socket = io("http://192.168.0.100:3001");
    ```
1.  **Step 4.**
    Run backend
    ```sh
    # go to socket.io-backend
    node server.js
    ```
1.  **Step 5.**
    Run frontend
    ```sh
    # go to chat-socket.io
    npm install
    npm start
    ```
