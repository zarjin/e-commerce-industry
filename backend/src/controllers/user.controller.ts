import { User } from "../model/user";
import { Request, Response } from "express";

type AuthRequest = Request & { user: { id: string } };

export const profile = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "User profile retrieved successfully",
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "user profile retrieved unsuccessfully",
      success: false,
    });
  }
};

export const updateProfile = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user.id;
    const { name, phone, avatar, address } = req.body;

    const updates: any = {};

    if (name !== undefined) {
      updates.name = name;
    }

    if (phone !== undefined) {
      updates.phone = phone;
    }

    if (avatar !== undefined) {
      updates.avatar = avatar;
    }

    if (address !== undefined) {
      updates.address = address;
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updates },
      { new: true, runValidators: true },
    ).select("-password");

    return res.status(200).json({
      message: "User profile updated successfully",
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "user profile updated unsuccessfully",
      success: false,
    });
  }
};

export const users = async (req: Request, res: Response) => {
  try {
    const users = await User.find().select("-password");

    return res.status(200).json({
      message: "Users retrieved successfully",
      success: true,
      users,
    });
  } catch (error) {
    return res.status(500).json({
      message: "users retrieved unsuccessfully",
      success: false,
    });
  }
};

export const deleteAccount = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user.id;
    await User.findByIdAndDelete(userId);

    return res.status(200).json({
      message: "User account deleted successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "user account deleted unsuccessfully",
      success: false,
    });
  }
};
