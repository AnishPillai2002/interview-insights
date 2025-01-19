const Submission = require("../models/Submission");

/**
 * Create a new submission
 */
exports.createSubmission = async (req, res) => {
  const { title, location, role, company,  description,  questions } = req.body;
  try {
    const submission = new Submission({
      title,
      location,
      role,
      company,
      description,
      questions,
      userId: req.user.userId, // Retrieved from decoded JWT token
    });

    await submission.save();
    res.status(201).json({ message: "Submission created successfully.", submission });
  } catch (error) {
    console.error("Error creating submission:", error.message);
    res.status(400).json({ error: "Failed to create submission." });
  }
};

/**
 * Get submissions for the authenticated user
 */
exports.getUserSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find({ userId: req.user.userId });
    res.status(200).json(submissions);
  } catch (error) {
    console.error("Error fetching user submissions:", error.message);
    res.status(500).json({ error: "Failed to retrieve submissions." });
  }
};

/**
 * Delete a submission for the authenticated user
 */
exports.deleteSubmission = async (req, res) => {
  const { id } = req.params;
  try {
    const submission = await Submission.findOne({ _id: id, userId: req.user.userId });

    if (!submission) {
      return res.status(404).json({ error: "Submission not found or unauthorized." });
    }

    await submission.deleteOne();
    res.status(200).json({ message: "Submission deleted successfully." });
  } catch (error) {
    console.error("Error deleting submission:", error.message);
    res.status(500).json({ error: "Failed to delete submission." });
  }
};

exports.getAllSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find({});
    res.status(200).json(submissions);
  } catch (error) {
    console.error("Error fetching all submissions:", error.message);
    res.status(500).json({ error: "Failed to retrieve submissions." });
  }
};

