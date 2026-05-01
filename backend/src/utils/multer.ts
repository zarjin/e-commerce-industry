import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary";

const profileStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    // async code using `req` and `file`
    // ...
    return {
      folder: "profile",
      format: ["jpg", "png", "jpeg"],
      public_id: `${Date.now()}-${file.originalname}`,
    };
  },
});

const productStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    // async code using `req` and `file`
    // ...
    return {
      folder: "product",
      format: ["jpg", "png", "jpeg"],
      public_id: `${Date.now()}-${file.originalname}`,
    };
  },
});

export const profileUpload = multer({ storage: profileStorage });
export const productUpload = multer({ storage: productStorage });
