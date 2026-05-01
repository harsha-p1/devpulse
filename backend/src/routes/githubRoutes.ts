import express from "express";
import axios from "axios";

const router = express.Router();

// GitHub Profile
router.get("/:username", async (req, res) => {
  try {
    const { username } = req.params;

    const githubRes = await axios.get(
      `https://api.github.com/users/${username}`
    );

    res.json(githubRes.data);

  } catch (error: any) {
    console.error("GitHub Profile Error:", error.message);

    res.status(500).json({
      message: "Failed to fetch GitHub profile",
    });
  }
});

// GitHub Repositories
router.get("/:username/repos", async (req, res) => {
  try {
    const { username } = req.params;

    const reposRes = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );

    res.json(reposRes.data);

  } catch (error: any) {
    console.error("GitHub Repo Error:", error.message);

    res.status(500).json({
      message: "Failed to fetch GitHub repos",
    });
  }
});

export default router;