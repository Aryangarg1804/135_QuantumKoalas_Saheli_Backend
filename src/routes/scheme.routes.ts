// import express from "express";
// import { getSchemes, getSchemeById, createScheme, updateScheme, deleteScheme } from "../controllers/scheme.controller";
// import authMiddleware from "../middlewares/auth.middleware";

// const router = express.Router();

// router.get("/", getSchemes);
// router.get("/:id", getSchemeById);
// router.post("/", authMiddleware, createScheme);
// router.put("/:id", authMiddleware, updateScheme);
// router.delete("/:id", authMiddleware, deleteScheme);

// export default router;



import express from "express";
import { 
  getSchemes, 
  getSchemeById, 
  createScheme, 
  updateScheme, 
  deleteScheme 
} from "../controllers/scheme.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/", getSchemes);
router.get("/:id", getSchemeById);
router.post("/", authMiddleware, createScheme);
router.put("/:id", authMiddleware, updateScheme);
router.delete("/:id", authMiddleware, deleteScheme);

export default router;