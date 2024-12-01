import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadOnCloudinary = async function (path) {
  try {
    if (!path) {
      console.log("invalid path");
      throw new Error("invalid path");
    }
    const response = await cloudinary.uploader.upload(path, {
      resource_type: "auto",
    });
    // console.log("file uploaded", response.url);
    // removing file after uploading
    fs.unlinkSync(path);
    
    return response;
  } catch (error) {
    console.log(error);
    fs.unlinkSync(path); // it should execute when file gets uploaded or get failed
    throw error;
  }
};
