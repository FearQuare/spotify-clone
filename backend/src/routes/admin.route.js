import { Router } from "express";
import { createSong, deleteSong, createAlbum, deleteAlbum, checkAdmin } from "../contoller/admin.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js"

const router = Router();

// slightly optimized clean code
router.use(protectRoute, requireAdmin);

router.get('/check', checkAdmin);

router.post('/songs', createSong);
router.delete('/songs/:id', deleteSong);

router.post('/albums', createAlbum);
router.post('/albums/:id', deleteAlbum)

export default router;