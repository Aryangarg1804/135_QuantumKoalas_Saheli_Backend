// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import connectDB from "./config/db";
// import authRoutes from "./routes/auth.routes";
// import expenseRoutes from "./routes/expense.routes";
// import communityRoutes from "./routes/community.routes";
// import courseRoutes from "./routes/course.routes";
// import schemeRoutes from "./routes/scheme.routes";
// import chatRoutes from "./routes/chat.routes";

// // Load environment variables
// dotenv.config();

// // Connect to MongoDB
// connectDB();

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(cookieParser());

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/expenses", expenseRoutes);
// app.use("/api/community", communityRoutes);
// app.use("/api/courses", courseRoutes);
// app.use("/api/schemes", schemeRoutes);
// app.use("/api/chat", chatRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// export default app;

// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import connectDB from "./config/db";
// import authRoutes from "./routes/auth.routes";
// import expenseRoutes from "./routes/expense.routes";
// import communityRoutes from "./routes/community.routes";
// import courseRoutes from "./routes/course.routes";
// import schemeRoutes from "./routes/scheme.routes";
// import chatRoutes from "./routes/chat.routes";

// // Load environment variables
// dotenv.config();

// // Connect to MongoDB
// connectDB();

// const app = express();

// // CORS Configuration (Fixing CORS issues)
// app.use(
//   cors({
//     origin: "*", // Allow all origins (Modify this in production)
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true,
//   })
// );

// app.use(express.json());
// app.use(cookieParser());

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/expenses", expenseRoutes);
// app.use("/api/community", communityRoutes);
// app.use("/api/courses", courseRoutes);
// app.use("/api/schemes", schemeRoutes);
// app.use("/api/chat", chatRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // ✅ Fix: Added backticks

// export default app;

// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import connectDB from "./config/db";
// import authRoutes from "./routes/auth.routes";
// import expenseRoutes from "./routes/expense.routes";
// import communityRoutes from "./routes/community.routes";
// import courseRoutes from "./routes/course.routes";
// import schemeRoutes from "./routes/scheme.routes";
// import chatRoutes from "./routes/chat.routes";


// // Load environment variables
// dotenv.config();

// // Connect to MongoDB
// connectDB();

// const app = express();

// // ✅ Secure CORS Configuration (Allow credentials for cookies)
// app.use(
//   cors({
//     origin: process.env.CLIENT_URL || "http://localhost:5173", // Change this to frontend URL in production
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true, // Allow cookies to be sent
//   })
// );

// app.use(express.json());
// app.use(cookieParser());

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/expenses", expenseRoutes);
// app.use("/api/community", communityRoutes);
// app.use("/api/courses", courseRoutes);
// app.use("/api/schemes", schemeRoutes);
// app.use("/api/chat", chatRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`)); // ✅ Fixed template string (backticks)

// export default app;

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db";
import authRoutes from "./routes/auth.routes";
import expenseRoutes from "./routes/expense.routes";
import communityRoutes from "./routes/community.routes";
import courseRoutes from "./routes/course.routes";
import schemeRoutes from "./routes/scheme.routes";  
import chatRoutes from "./routes/chat.routes";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// CORS Configuration
app.use(
  cors({
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// ✅ Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/community", communityRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/schemes", schemeRoutes);
app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

export default app;