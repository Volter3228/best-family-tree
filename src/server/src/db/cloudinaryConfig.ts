import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dz5gkg60n",
  api_key: process.env.CLOUDINARY_API_KEY || "976848238279152",
  api_secret:
    process.env.CLOUDINARY_API_SECRET || "JHGHarNTntj5Rz9EYudxmQY9x0k", // Click 'View API Keys' above to copy your API secret
});

export default cloudinary;
