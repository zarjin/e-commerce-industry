import jwt, { SignOptions } from "jsonwebtoken";
import { envConfig } from "../config/env";
import { IPayload } from "../types/payload";

export const generateAccessToken = (payload: IPayload) => {
  return jwt.sign(payload, envConfig.JWT_ACCESS_SECRET, {
    expiresIn: envConfig.JWT_ACCESS_EXPIRES as SignOptions["expiresIn"],
  });
};

export const generateRefreshToken = (payload: IPayload) => {
  return jwt.sign(payload, envConfig.JWT_REFRESH_SECRET, {
    expiresIn: envConfig.JWT_REFRESH_EXPIRES as SignOptions["expiresIn"],
  });
};

export const verifyAccessToken = (token: string) => {
  try {
    return jwt.verify(token, envConfig.JWT_ACCESS_SECRET) as IPayload;
  } catch (error) {
    return null;
  }
};

export const verifyRefreshToken = (token: string) => {
  try {
    return jwt.verify(token, envConfig.JWT_REFRESH_SECRET) as IPayload;
  } catch (error) {
    return null;
  }
};
