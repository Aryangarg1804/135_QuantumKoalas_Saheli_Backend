// import { Request, Response } from "express";
// import Course from "../models/course.model";

// export const addCourse = async (req: Request, res: Response) => {
//   try {
//     const { title, description } = req.body;
//     const newCourse = new Course({ title, description });

//     await newCourse.save();
//     res.status(201).json({ message: "Course added successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };

// export const getCourses = async (req: Request, res: Response) => {
//   try {
//     const courses = await Course.find();
//     res.json(courses);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };

// import { Request, Response } from "express";
// import Course from "../models/course.model";  // ✅ Import Course model

// // ✅ Create Course
// export const createCourse = async (req: Request, res: Response) => {
//   try {
//     const { title, description } = req.body;

//     if (!title || !description) {
//       return res.status(400).json({ message: "Title and description are required" });
//     }

//     const newCourse = new Course({ title, description });
//     await newCourse.save();

//     res.status(201).json({ message: "Course created successfully", course: newCourse });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };

// // ✅ Get All Courses
// export const getCourses = async (req: Request, res: Response) => {
//   try {
//     const courses = await Course.find();
//     res.json(courses);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };

// // ✅ Get Course by ID
// export const getCourseById = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;

//     const course = await Course.findById(id);
//     if (!course) {
//       return res.status(404).json({ message: "Course not found" });
//     }

//     res.json(course);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };

import { Request, Response } from "express";
import Course from "../models/course.model";

// ✅ Create Course
export const createCourse = async (req: Request, res: Response):Promise<void> => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
    //   return res.status(400).json({ message: "Title and description are required" });
    }

    const newCourse = new Course({ title, description });
    await newCourse.save();

    res.status(201).json({ message: "Course created successfully", course: newCourse });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// ✅ Get All Courses
export const getCourses = async (req: Request, res: Response):Promise<void> => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// ✅ Get Course by ID
export const getCourseById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const course = await Course.findById(id);
    if (!course) {
    //   return res.status(404).json({ message: "Course not found" });
    }

    res.json(course);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};