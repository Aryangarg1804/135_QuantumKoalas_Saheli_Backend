// import { Request, Response } from "express";
// import Scheme from "../models/scheme.model";

// export const addScheme = async (req: Request, res: Response) => {
//   try {
//     const { name, benefits } = req.body;
//     const newScheme = new Scheme({ name, benefits });

//     await newScheme.save();
//     res.status(201).json({ message: "Scheme added successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };

// export const getSchemes = async (req: Request, res: Response) => {
//   try {
//     const schemes = await Scheme.find();
//     res.json(schemes);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };



// import { Request, Response } from "express";
// import Scheme from "../models/scheme.model";

// // Get all schemes
// export const getSchemes = async (req: Request, res: Response) => {
//   try {
//     const schemes = await Scheme.find();
//     res.status(200).json(schemes);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching schemes", error });
//   }
// };

// // Get a single scheme by ID
// export const getSchemeById = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const scheme = await Scheme.findById(id);

//     if (!scheme) {
//       return res.status(404).json({ message: "Scheme not found" });
//     }

//     res.status(200).json(scheme);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching scheme", error });
//   }
// };

// // Create a new scheme
// export const createScheme = async (req: Request, res: Response) => {
//   try {
//     const { name, description, eligibility } = req.body;

//     const newScheme = new Scheme({ name, description, eligibility });
//     await newScheme.save();

//     res.status(201).json(newScheme);
//   } catch (error) {
//     res.status(500).json({ message: "Error creating scheme", error });
//   }
// };

// // Update a scheme
// export const updateScheme = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const updatedScheme = await Scheme.findByIdAndUpdate(id, req.body, {
//       new: true,
//     });

//     if (!updatedScheme) {
//       return res.status(404).json({ message: "Scheme not found" });
//     }

//     res.status(200).json(updatedScheme);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating scheme", error });
//   }
// };

// // Delete a scheme
// export const deleteScheme = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const deletedScheme = await Scheme.findByIdAndDelete(id);

//     if (!deletedScheme) {
//       return res.status(404).json({ message: "Scheme not found" });
//     }

//     res.status(200).json({ message: "Scheme deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting scheme", error });
//   }
// };



import { Request, Response } from "express";
import mongoose from "mongoose";
import Scheme from "../models/scheme.model";

// ✅ Get all schemes
export const getSchemes = async (req: Request, res: Response) => {
  try {
    const schemes = await Scheme.find();
    res.status(200).json(schemes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching schemes", error });
  }
};

// ✅ Get a single scheme by ID
export const getSchemeById = async (req: Request, res: Response):Promise<void> => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return res.status(400).json({ message: "Invalid Scheme ID" });
    }

    const scheme = await Scheme.findById(id);
    if (!scheme) {
    //   return res.status(404).json({ message: "Scheme not found" });
    }

    res.status(200).json(scheme);
  } catch (error) {
    res.status(500).json({ message: "Error fetching scheme", error });
  }
};

// ✅ Create a new scheme
export const createScheme = async (req: Request, res: Response):Promise<void> => {
  try {
    const { name, description, eligibility } = req.body;

    // Validate required fields
    if (!name || !description || !eligibility) {
    //   return res.status(400).json({ message: "All fields are required" });
    }

    const newScheme = new Scheme({ name, description, eligibility });
    await newScheme.save();

    res.status(201).json({ message: "Scheme created successfully", scheme: newScheme });
  } catch (error) {
    res.status(500).json({ message: "Error creating scheme", error });
  }
};

// ✅ Update a scheme
export const updateScheme = async (req: Request, res: Response):Promise<void> => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return res.status(400).json({ message: "Invalid Scheme ID" });
    }

    const updatedScheme = await Scheme.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedScheme) {
    //   return res.status(404).json({ message: "Scheme not found" });
    }

    res.status(200).json({ message: "Scheme updated successfully", scheme: updatedScheme });
  } catch (error) {
    res.status(500).json({ message: "Error updating scheme", error });
  }
};

// ✅ Delete a scheme
export const deleteScheme = async (req: Request, res: Response):Promise<void> => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return res.status(400).json({ message: "Invalid Scheme ID" });
    }

    const deletedScheme = await Scheme.findByIdAndDelete(id);
    if (!deletedScheme) {
    //   return res.status(404).json({ message: "Scheme not found" });
    }

    res.status(200).json({ message: "Scheme deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting scheme", error });
  }
};