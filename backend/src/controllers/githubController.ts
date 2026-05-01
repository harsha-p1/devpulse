import { Request, Response } from "express";
import axios from "axios";

export const getGithubProfile = async (
  req: Request,
  res: Response
) => {
  try {
    const username = req.params.username;

    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "GitHub Profile Not Found",
    });
  }
};