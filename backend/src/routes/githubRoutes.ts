import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/:username", async (req, res) => {
  try {
    const { username } = req.params;

    const githubRes = await axios.get(
      `https://api.github.com/users/${username}`
    );

    const reposRes = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );

    res.json({
      profile: githubRes.data,
      repos: reposRes.data,
    });
  } catch (error: any) {
    console.error("GitHub API Error:", error.message);

    res.status(500).json({
      message: "Failed to fetch GitHub data",
    });
  }
});

export default router;