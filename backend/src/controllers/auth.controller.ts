import { User } from "../model/user";
import { IPayload } from "../types/payload";
import { hashPassword, comparePassword } from "../utils/bcrypt";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../utils/jwt";
import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "required field missing register unscessfully",
        success: false,
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "user already existing",
        success: false,
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(200).json({
      user,
      success: true,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "register user unscessfully", success: false });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "required field missing login unscessfully",
        success: false,
      });
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(409).json({
        message: "user not existing create a new account",
        success: false,
      });
    }

    const isMatch = await comparePassword(password, existingUser.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Invalid email or password", success: false });
    }

    const payload: IPayload = {
      id: existingUser._id,
      email: existingUser.email,
      role: existingUser.role,
    };

    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      accessToken,
      success: true,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "login user unscessfully", success: false });
  }
};

export const logout = (req: Request, res: Response) => {
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  return res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};

export const refreshToken = (req: Request, res: Response) => {
  try {
    const token = req.cookies.refreshToken;
    if (!token) {
      return res.status(401).json({
        message:
          "refreshToken missing refreshToken to accessToken generate unscessfully",
        success: false,
      });
    }
    const decoded = verifyRefreshToken(token) as IPayload;

    const payload: IPayload = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role,
    };
    const newAccessToken = generateAccessToken(payload);
    return res.status(200).json({
      accessToken: newAccessToken,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "refreshToken to accessToken generate unscessfully",
      success: false,
    });
  }
};
