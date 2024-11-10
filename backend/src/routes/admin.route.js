import { Router } from "express";
import { getAdmin } from "../contoller/admin.controller.js";

const router = Router();

router.get('/', getAdmin);

export default router;