import express from "express";
import axios from "axios";
import { getGithubRepos } from "../controllers/githubRepoController";

const router = express.Router();

// GitHub User Info
router.get("/:username", async (req, res) => {
  try {
    const username = req.params.username;

    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "GitHub user not found",
    });
  }
});

// GitHub Repositories
router.get("/:username/repos", getGithubRepos);

export default router;