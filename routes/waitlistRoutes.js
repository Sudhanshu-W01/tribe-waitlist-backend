import express from "express";
import { getAllWaitlistMembers, joinWaitlist } from "../controllers/waitlistController.js";

const router = express.Router();

router.post("/join", joinWaitlist);
router.get("/all", getAllWaitlistMembers);

export default router;
