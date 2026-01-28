# Real-time Messenger App

A modern, feature-rich real-time messaging application built with cutting-edge web technologies. This application demonstrates advanced concepts in real-time communication, state management, and full-stack development.

🔗 **[Live Demo](#)** | 📖 **[Documentation](#)** | 🐛 **[Report Issues](#)**

## ✨ Features

### Core Messaging Features

- **Real-time Messaging**: Instant message delivery using WebSocket technology (Socket.IO)
- **One-on-One Chats**: Direct messaging between users
- **Group Chats**: Create and manage group conversations
- **Message Status**: View message delivery status in real-time
- **Reply to Messages**: Quote and reply to specific messages with context
- **Image Sharing**: Upload and share images directly in chats
- **Typing Indicators**: See when users are typing
- **Message History**: Full message history with infinite scroll support

### User Features

- **User Authentication**: Secure JWT-based authentication with httpOnly cookies
- **Online Status**: Real-time user online/offline status indicator
- **User Profiles**: Customizable user profiles with avatars
- **Search Functionality**: Search users and messages efficiently
- **Theme Support**: Dark and Light mode toggle

### Technical Excellence

- **Real-time Updates**: WebSocket-based real-time synchronization
- **Responsive Design**: Mobile-first design that works on all devices
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Optimized Performance**: Efficient state management and rendering
- **Security**: CORS protection, input validation, secure authentication

## 🛠️ Technology Stack

### Frontend

- **React 18**: UI library with hooks and functional components
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Socket.IO Client**: Real-time bidirectional communication
- **Zustand**: Lightweight state management
- **React Hook Form**: Efficient form handling
- **React Router**: Client-side routing

### Backend

- **Node.js & Express**: Server framework
- **TypeScript**: Type-safe backend code
- **MongoDB & Mongoose**: NoSQL database and ODM
- **Socket.IO**: Real-time communication library
- **JWT**: Secure authentication
- **Cloudinary**: Image storage and optimization
- **Passport.js**: Authentication middleware
- **Zod**: Schema validation

### DevOps & Tools

- **Docker** (optional): Containerization support
- **Nodemon**: Development server with auto-reload
- **ESLint**: Code quality
- **Git**: Version control

## 📁 Project Structure

```
realtime-messenger-app/
├── backend/                    # Node.js/Express server
│   ├── src/
│   │   ├── config/            # Configuration files
│   │   ├── controllers/        # Request handlers
│   │   ├── models/            # MongoDB schemas
│   │   ├── services/          # Business logic
│   │   ├── routes/            # API routes
│   │   ├── middlewares/        # Custom middlewares
│   │   ├── lib/               # Utilities (Socket.IO)
│   │   ├── validators/        # Input validation
│   │   ├── seed/              # Database seeding
│   │   └── index.ts           # App entry point
│   ├── package.json
│   ├── tsconfig.json
│   └── nodemon.json
│
├── client/                     # React application
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   ├── pages/             # Page components
│   │   ├── hooks/             # Custom React hooks
│   │   ├── lib/               # Utilities and helpers
│   │   ├── types/             # TypeScript types
│   │   ├── routes/            # Routing setup
│   │   └── main.tsx           # App entry point
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB instance (local or cloud)
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/realtime-messenger-app.git
cd realtime-messenger-app
```

2. **Setup Backend**

```bash
cd backend
npm install
```

Create `.env` file in backend directory:

```env
NODE_ENV=development
PORT=8000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d
FRONTEND_ORIGIN=http://localhost:5173
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

3. **Setup Frontend**

```bash
cd client
npm install
```

Create `.env` file in client directory:

```env
VITE_API_URL=http://localhost:8000
```

4. **Start Development Servers**

Backend:

```bash
cd backend
npm run dev
```

Frontend (in another terminal):

```bash
cd client
npm run dev
```

Access the application at `http://localhost:5173`

## 📖 Usage

### User Registration & Login

1. Sign up with email and password
2. Create your profile with a username and avatar
3. Login to access the messenger

### Starting a Conversation

1. Click the "New Chat" button
2. Search for users to start direct messaging
3. Or create a group by selecting multiple users

### Sending Messages

1. Type your message in the input field
2. Press Enter or click the Send button
3. Messages appear in real-time for all participants
4. Share images using the attachment button

### Advanced Features

- **Reply to Messages**: Click the reply icon on any message
- **View Online Status**: Green dot indicates user is online
- **Switch Theme**: Use the theme toggle in the sidebar
- **Search**: Find users or chats using the search bar

## 🎯 Key Achievements

### Real-time Communication

- WebSocket implementation with proper connection handling
- Automatic reconnection on connection loss
- User presence management (online/offline status)

### State Management

- Efficient Zustand store for global state
- Optimized selectors to prevent unnecessary re-renders
- Proper cleanup and memory management

### Authentication & Security

- JWT token in httpOnly cookies
- Proper CORS configuration
- Input validation on both client and server
- Protected API routes

### Performance Optimization

- Lazy loading of messages
- Optimized component rendering with memoization
- Efficient socket listener management
- Image optimization via Cloudinary

### User Experience

- Responsive design for all devices
- Dark/Light theme support
- Real-time typing indicators
- Message delivery status
- Intuitive UI with clear feedback

## 🔐 Security Features

- **HTTPOnly Cookies**: JWT tokens stored securely
- **Input Validation**: Zod schema validation
- **CORS Protection**: Restricted cross-origin requests
- **Password Security**: bcrypt hashing
- **Environment Variables**: Sensitive data in .env files
- **Rate Limiting**: Prevent abuse (can be added)

## 🚀 Performance Features

- **Lazy Loading**: Messages load on demand
- **Debounced Search**: Optimize search requests
- **Memoized Components**: Prevent unnecessary re-renders
- **Optimized Queries**: Indexed MongoDB queries
- **Image Optimization**: Cloudinary compression
- **WebSocket Batching**: Efficient message delivery

## 📊 Database Schema

### User

```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  avatar: String (Cloudinary URL),
  isOnline: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Chat

```javascript
{
  _id: ObjectId,
  isGroup: Boolean,
  groupName: String (if group),
  participants: [ObjectId],
  lastMessage: ObjectId,
  createdBy: ObjectId,
  createdAt: Date,
  updatedAt: Date
}
```

### Message

```javascript
{
  _id: ObjectId,
  chatId: ObjectId,
  sender: ObjectId (ref: User),
  content: String,
  image: String (Cloudinary URL),
  replyTo: ObjectId (ref: Message),
  createdAt: Date,
  updatedAt: Date
}
```

## 🔄 API Endpoints

### Authentication

- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Users

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update profile

### Chats

- `GET /api/chats` - Get all user chats
- `GET /api/chats/:id` - Get single chat with messages
- `POST /api/chats` - Create new chat
- `PUT /api/chats/:id` - Update chat

### Messages

- `POST /api/chat/message/send` - Send message
- `PUT /api/messages/:id` - Edit message
- `DELETE /api/messages/:id` - Delete message

## 🧪 Testing

Run tests:

```bash
# Backend tests
cd backend
npm run test

# Frontend tests
cd client
npm run test
```

## 📈 Future Enhancements

- [ ] Voice and video calling
- [ ] Message encryption
- [ ] User authentication with OAuth
- [ ] Message search functionality
- [ ] Chat archiving
- [ ] User blocking
- [ ] Read receipts
- [ ] Message reactions/emojis
- [ ] File sharing beyond images
- [ ] Mobile app (React Native)
- [ ] Progressive Web App (PWA)
- [ ] End-to-end encryption

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Socket.IO for real-time communication
- MongoDB for reliable database
- Cloudinary for image hosting
- All open-source libraries used in this project
- The amazing web development community

## 📞 Support

Have questions or issues?

- Open an issue on [GitHub Issues](https://github.com/yourusername/realtime-messenger-app/issues)
- Contact: your.email@example.com

---

**⭐ If you find this project helpful, please consider giving it a star!**

Last Updated: January 2026
