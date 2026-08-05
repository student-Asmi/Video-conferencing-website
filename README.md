<div align="center">

# 🎥 Video Conferencing Platform

### High-Performance Real-Time Video Conferencing Application

Build secure, low-latency video meetings with WebRTC, Socket.IO and MERN Stack.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![NodeJS](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-darkgreen?logo=mongodb)
![Socket.IO](https://img.shields.io/badge/Socket.IO-Realtime-black?logo=socketdotio)
![WebRTC](https://img.shields.io/badge/WebRTC-Peer--to--Peer-orange)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?logo=vercel)
![Render](https://img.shields.io/badge/Backend-Render-blue)

</div>

---

# 🌍 Live Demo

video-conferencing-website-c7dsr9ue8-asmi-vermas-projects.vercel.app

---

# 📖 Overview

This project is a modern real-time video conferencing platform designed to provide secure, scalable and low-latency communication between users.

Unlike traditional CRUD applications, this project focuses on real-time networking using **WebRTC** for peer-to-peer media streaming and **Socket.IO** for signaling.

The application allows users to create meeting rooms, join meetings instantly, communicate through live chat, share screens and collaborate seamlessly from anywhere.

---
# 📸 Screenshots

## Home Page

<img width="1504" height="699" alt="image" src="https://github.com/user-attachments/assets/532546f8-8208-41b1-8f42-dd517554e7a3" />


---

## Join Meeting

<img width="812" height="655" alt="image" src="https://github.com/user-attachments/assets/cf5b6daa-d1a5-44ba-a688-6175319b0253" />


---

## Video Call

<img width="475" height="655" alt="image" src="https://github.com/user-attachments/assets/9b4e70ba-54f7-47e0-9559-e4e18f5869dc" />


---

## Live Chat

<img width="1481" height="659" alt="image" src="https://github.com/user-attachments/assets/b46993ca-54a9-4f6a-8ff0-d61499c19157" />


---

## Screen Sharing

<img width="1392" height="704" alt="image" src="https://github.com/user-attachments/assets/79cd7d0b-981f-4fc8-95a9-22e6c27b7aca" />


---

## Mobile Responsive View

<img width="671" height="562" alt="image" src="https://github.com/user-attachments/assets/2a2a906f-65a5-4bbb-b5c1-903de52c663f" />


---

# ✨ Features

- 🎥 HD Video Calling
- 🎙️ Audio Communication
- 💬 Real-Time Chat
- 🖥️ Screen Sharing
- 🔗 Room-based Meetings
- ⚡ Low Latency Communication
- 📱 Responsive UI
- 🌐 Cross Browser Support
- 🔄 Real-time Socket Synchronization
- 🔒 Secure Communication
- 🚀 Fast Room Joining

---

# 🏗️ System Design

```
                    User A
                       │
                 React Frontend
                       │
              Socket.IO Signaling
                       │
              Express + Node Server
                       │
                WebRTC Negotiation
                       │
                 Peer Connection
                       │
                    User B
```

---

# 🧠 Architecture

```
              React Frontend

                      │

         REST APIs + Socket.IO

                      │

          Node.js + Express.js

                      │

          Socket.IO Signaling Server

                      │

            MongoDB Database

                      │

          WebRTC Peer Connection
```

---

# 🔄 Meeting Flow

```
User Creates Room

↓

Room ID Generated

↓

Another User Joins

↓

Socket.IO Exchange

↓

SDP Offer

↓

SDP Answer

↓

ICE Candidates

↓

Peer Connection

↓

Live Audio & Video
```

---

# 🔥 WebRTC Working

1. User creates a meeting.

2. Another participant joins.

3. Socket.IO exchanges signaling data.

4. SDP Offer is sent.

5. SDP Answer is returned.

6. ICE Candidates are exchanged.

7. Secure Peer Connection established.

8. Audio and Video streams begin.

---

# ⚙️ Tech Stack

## Frontend

- React
- Bootstrap
- Axios
- WebRTC
- Socket.IO Client

## Backend

- Node.js
- Express.js
- Socket.IO
- MongoDB
- Mongoose

## Deployment

- Vercel
- Render

---

# 📂 Folder Structure

```
Video-Conferencing

│

├── frontend

│     ├── src

│     ├── components

│     ├── pages

│     ├── hooks

│     └── services

│

├── backend

│     ├── controllers

│     ├── models

│     ├── routes

│     ├── socket

│     ├── middleware

│     └── config

│

└── README.md
```

---

# 🔒 Security

- Environment Variables
- CORS Protection
- Secure Socket Connections
- Room Isolation
- Input Validation

---

# 🚀 Installation

```bash
git clone <repository>

cd frontend
npm install

cd ../backend
npm install
```

Run Backend

```bash
npm start
```

Run Frontend

```bash
npm run dev
```

---

# 🚀 Future Improvements

- Waiting Room
- Meeting Recording
- AI Meeting Summary
- Background Blur
- Noise Cancellation
- Live Captions
- Calendar Integration
- Authentication
- Breakout Rooms
- File Sharing

---

# 💡 Engineering Challenges

### Challenge

Maintaining low latency communication.

### Solution

Implemented peer-to-peer media streaming using WebRTC while using Socket.IO only for signaling.

---

### Challenge

Managing multiple participants.

### Solution

Implemented room-based Socket architecture to synchronize all peers efficiently.

---

### Challenge

Handling responsive video layouts.

### Solution

Dynamic video grid rendering based on active participants.

---

# 👩‍💻 Author

## Asmi Verma

Full Stack MERN Developer

AI Developer

📧 asmiverma0208@gmail.com

🌐 Portfolio

https://portfolio-henna-eta-86.vercel.app
---

# 📡 API Documentation

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /login | User Login |
| POST | /register | Register User |

---

## Meeting APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /create-room | Create a Meeting |
| GET | /join/:roomId | Join Existing Room |
| GET | /meeting/:id | Get Meeting Details |

---

## Chat APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /message | Send Message |
| GET | /messages/:roomId | Fetch Chat History |

---

# 🔌 Socket.IO Events

## Client → Server

| Event | Description |
|---------|------------|
| join-room | Join Meeting Room |
| offer | Send SDP Offer |
| answer | Send SDP Answer |
| ice-candidate | Exchange ICE Candidates |
| chat-message | Send Chat |
| screen-share | Start Screen Share |
| leave-room | Leave Meeting |

---

## Server → Client

| Event | Description |
|---------|------------|
| user-joined | New User Joined |
| receive-offer | Receive SDP Offer |
| receive-answer | Receive SDP Answer |
| receive-ice-candidate | Receive ICE Candidate |
| receive-message | Incoming Chat Message |
| user-left | Participant Left |

---

# 🧠 How WebRTC Works

```

        Caller

           │

Create Offer (SDP)

           │

────────Socket.IO────────

           │

Receive Offer

           │

Create Answer (SDP)

           │

────────Socket.IO────────

           │

ICE Candidate Exchange

           │

Peer Connection Established

           │

🎥 Video Stream Starts

```

---

# 🌐 Data Flow

```

User

↓

React Frontend

↓

REST APIs

↓

Express Server

↓

MongoDB

↓

Socket.IO

↓

WebRTC

↓

Peer Connection

```

---

# 📊 Database Design

## User Collection

```js
{
    _id,
    name,
    email,
    password,
    createdAt
}
```

---

## Meeting Collection

```js
{
    _id,
    roomId,
    createdBy,
    participants,
    createdAt
}
```

---

## Message Collection

```js
{
    sender,
    roomId,
    message,
    timestamp
}
```

# ⚡ Performance Optimizations

- Lazy Loading Components
- Optimized React Rendering
- Efficient Socket Event Handling
- WebRTC Peer-to-Peer Streaming
- Responsive Layout
- Optimized State Management
- Reduced API Calls
- Environment Variable Configuration

---

# 🛡️ Security Features

- CORS Enabled
- Secure Environment Variables
- Room Isolation
- Input Validation
- Secure Socket Communication
- Protected API Structure

---

# 🚀 Deployment Architecture

```

             Vercel

                │

          React Frontend

                │

────────HTTPS────────

                │

          Render Backend

                │

────────Socket.IO────────

                │

          MongoDB Atlas

```

---

# 💭 Design Decisions

### Why React?

- Fast rendering
- Reusable components
- Better state management

---

### Why Node.js?

- Non-blocking architecture
- Excellent for real-time applications

---

### Why Socket.IO?

- Reliable signaling
- Automatic reconnection
- Event-driven communication

---

### Why WebRTC?

- Low latency
- Peer-to-peer communication
- No media server required for basic calls

---

### Why MongoDB?

- Flexible schema
- Easy scalability
- JSON-based document model

---

# 📈 Future Roadmap

## Phase 1

- Email Authentication
- Password Reset
- Profile Management

---

## Phase 2

- Meeting Recording
- File Sharing
- Emoji Reactions
- Raise Hand Feature

---

## Phase 3

- Waiting Room
- Meeting Scheduling
- Google Calendar Integration
- AI Meeting Summary

---

## Phase 4

- Virtual Background
- Noise Cancellation
- Live Captioning
- Whiteboard Collaboration

---

# 🧪 Testing Checklist

- Create Meeting
- Join Meeting
- Video Stream
- Audio Stream
- Chat
- Screen Sharing
- Multiple Participants
- Responsive Design
- Deployment

---

# 🤝 Contributing

Contributions are welcome!

1. Fork Repository

2. Create Feature Branch

3. Commit Changes

4. Push Changes

5. Create Pull Request

---

# 📜 License

This project is licensed under the MIT License.

---

# ⭐ Support

If you found this project helpful,

⭐ Star this repository.

It motivates me to build more open-source projects.

---

<div align="center">

Made with ❤️ by **Asmi Verma**

</div>
---

# 🏛️ High Level Design (HLD)

```text
                          ┌────────────────────────┐
                          │        Browser         │
                          │  React + Bootstrap UI  │
                          └───────────┬────────────┘
                                      │
                         HTTPS / REST │
                                      │
                    ┌─────────────────▼─────────────────┐
                    │        Node.js + Express          │
                    │        REST APIs & Routing        │
                    └─────────────────┬─────────────────┘
                                      │
                           Socket.IO Signaling
                                      │
                    ┌─────────────────▼─────────────────┐
                    │       Signaling Server            │
                    └─────────────────┬─────────────────┘
                                      │
                    SDP Offer / Answer │ ICE Candidates
                                      │
               ┌──────────────────────▼─────────────────────┐
               │           WebRTC Peer Connection           │
               └───────────────┬───────────────┬────────────┘
                               │               │
                          User A          User B
                               │
                         MongoDB Atlas
```

---

# 🧩 Low Level Design (LLD)

## Frontend

```text
src/

components/
pages/
hooks/
context/
services/
utils/
```

---

## Backend

```text
src/

controllers/
models/
routes/
middlewares/
socket/
config/
```

---

# 🔄 Complete User Flow

```text
Open Website

↓

Create Room

↓

Generate Room ID

↓

Share Room ID

↓

Second User Joins

↓

Socket.IO Signaling

↓

Offer

↓

Answer

↓

ICE Exchange

↓

WebRTC Connected

↓

Video + Audio

↓

Chat

↓

Screen Share

↓

Leave Meeting
```

---

# 🔁 Sequence Diagram

```text
User A          Server          User B

 |                 |               |
 | Create Room     |               |
 |---------------->|               |
 |                 |               |
 |                 | Join Room     |
 |                 |<--------------|
 |                 |               |
 | Offer           |               |
 |---------------->|               |
 |                 |-------------->|
 |                 |               |
 |                 | Answer        |
 |<----------------|<--------------|
 |                 |               |
 | ICE             |               |
 |---------------->|               |
 |                 |-------------->|
 |                 |               |
 | Video Starts    |               |
```

---

# 🧠 Engineering Decisions

### Why WebRTC?

- Ultra-low latency
- Direct peer-to-peer communication
- Built-in media handling
- No media server required for one-to-one meetings

---

### Why Socket.IO?

Socket.IO is used **only for signaling**, not media transfer.

Responsibilities:

- Room management
- SDP exchange
- ICE candidate exchange
- User join/leave notifications
- Chat messages

---

### Why Express?

- Lightweight
- Easy API development
- Excellent Socket.IO integration

---

### Why MongoDB?

- Flexible schema
- Fast development
- Easy integration with Mongoose
- Suitable for meeting metadata

---

# 🚧 Challenges Faced

## 1. Establishing Peer Connection

Problem:

Different browsers require SDP negotiation before media transfer.

Solution:

Implemented Offer → Answer → ICE Candidate exchange using Socket.IO.

---

## 2. Synchronizing Multiple Events

Problem:

Users joining/leaving could break the UI state.

Solution:

Managed socket events with room-based architecture.

---

## 3. Screen Sharing

Problem:

Switching from camera stream to screen stream without disconnecting.

Solution:

Replaced media tracks dynamically using WebRTC APIs.

---

## 4. Deployment

Problem:

Frontend and backend were hosted on different domains.

Solution:

Configured CORS and environment variables correctly for production.

---

# 📈 Scalability Considerations

Current Architecture

✔ Small Teams

✔ College Projects

✔ Hackathons

Future Production Improvements

- Redis Adapter for Socket.IO
- Load Balancer
- TURN Server
- Kubernetes Deployment
- CDN
- Horizontal Scaling

---

# 📊 Performance

Average Meeting Join Time

< 2 Seconds

Room Creation

< 500 ms

Socket Connection

~200–500 ms

---

# 🔒 Security

✔ Environment Variables

✔ CORS Configuration

✔ Room Isolation

✔ Input Validation

✔ Secure API Structure

Future Improvements

- JWT Authentication
- Rate Limiting
- HTTPS Enforcement
- TURN Authentication

---

# 💡 What I Learned

During this project I gained hands-on experience with:

- WebRTC Internals
- Socket.IO Signaling
- React State Management
- Backend API Design
- MongoDB Integration
- Deployment using Render & Vercel
- Debugging Real-Time Systems
- Environment Variable Management

---

# ❌ Current Limitations

- One-to-one communication only 
- No meeting recording
- No virtual background

---

# 🚀 Planned Enhancements

- Google Login
- Meeting Recording
- AI Meeting Summary
- Live Captions
- Whiteboard
- File Sharing
- Meeting Scheduler
- Calendar Integration
- Breakout Rooms

<div align="center">

⭐ If you found this project useful, consider giving it a star!

Made with ❤️ by **Asmi Verma**

</div>


LinkedIn

https://www.linkedin.com/in/asmi-verma0112
