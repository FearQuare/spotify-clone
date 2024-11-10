import { Router } from "express";
import { getAlbum } from "../contoller/album.controller.js";

const router = Router();

router.get('/', getAlbum);

export default router;