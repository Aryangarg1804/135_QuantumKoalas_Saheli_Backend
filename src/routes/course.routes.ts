// import express from "express";
// import { getCourses, getCourseById, createCourse } from "../controllers/course.controller";
// import { authMiddleware }  from "../middlewares/auth.middleware";

// const router = express.Router();

// router.get("/", getCourses);
// router.get("/:id", getCourseById);
// router.post("/", authMiddleware, createCourse);

// export default router;

// import express from "express";
// import { getCourses, getCourseById, createCourse } from "../controllers/course.controller";
// import { authMiddleware } from "../middlewares/auth.middleware";

// const router = express.Router();

// router.get("/", getCourses);
// router.get("/:id", getCourseById);
// router.post("/", authMiddleware, createCourse);

// export default router;

import express from "express";
import { getCourses, getCourseById, createCourse } from "../controllers/course.controller";
import { authMiddleware } from "../middlewares/auth.middleware"; // ✅ Ensure this file exists

const router = express.Router();

router.get("/", getCourses);
router.get("/:id", getCourseById);
router.post("/", authMiddleware, createCourse);

export default router;