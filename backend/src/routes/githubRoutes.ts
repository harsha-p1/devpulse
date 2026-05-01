import express from "express";
import axios from "axios";

const router = express.Router();

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "DevPulse-App",
};

router.get("/:username", async (req, res) => {
  try {
    const { username } = req.params;

    const githubUser = await axios.get(
      `https://api.github.com/users/${username}`,
      { headers }
    );

    res.json(githubUser.data);

  } catch (error: any) {

    console.log(
      "GitHub Profile Error:",
      error.response?.data || error.message
    );

    res.status(500).json({
      message: "Failed to fetch GitHub profile",
    });
  }
});

router.get("/:username/repos", async (req, res) => {
  try {
    const { username } = req.params;

    const githubRepos = await axios.get(
      `https://api.github.com/users/${username}/repos`,
      { headers }
    );

    res.json(githubRepos.data);

  } catch (error: any) {

    console.log(
      "GitHub Repo Error:",
      error.response?.data || error.message
    );

    res.status(500).json({
      message: "Failed to fetch GitHub repos",
    });
  }
});

export default router;