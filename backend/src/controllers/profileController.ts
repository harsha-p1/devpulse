import { Response } from "express";
import User from "../models/User";
import { AuthRequest } from "../middleware/authMiddleware";

export const getProfile = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const user = await User.findById(req.user!.id).select("-password");

    res.status(200).json(user);
  } catch {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const updateProfile = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const { bio, skills, githubUsername } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.user!.id,
      {
        bio,
        skills,
        githubUsername,
      },
      { new: true }
    ).select("-password");

    res.status(200).json(updatedUser);
  } catch {
    res.status(500).json({
      message: "Server Error",
    });
  }
};
