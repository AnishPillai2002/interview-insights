const express = require("express");
const { createSubmission, getUserSubmissions, deleteSubmission, getAllSubmissions } = require("../controllers/submissionController");
const authenticateToken = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authenticateToken, createSubmission);
router.get("/", authenticateToken, getUserSubmissions);
router.delete("/:id", authenticateToken, deleteSubmission);
router.get("/all",getAllSubmissions);

module.exports = router;
