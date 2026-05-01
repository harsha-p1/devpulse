import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/:username", async (req, res) => {
  try {
    const { username } = req.params;

    const githubUser = await axios.get(
      `https://api.github.com/users/${username}`
    );

    res.json(githubUser.data);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to fetch GitHub profile",
    });
  }
});

router.get("/:username/repos", async (req, res) => {
  try {
    const { username } = req.params;

    const githubRepos = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );

    res.json(githubRepos.data);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to fetch GitHub repos",
    });
  }
});

export default router;