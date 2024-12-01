import { Router } from "express";
import {
  registerUser,
  loginUser,
  logOutUser,
  refrestAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateAccoundDetails,
  updateUserAvatar,
  updateUserCoverImage,
  getUserChannelProfile,
  getWatchHistory
} from "../controllers/register.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middeware.js";
const router = Router();



router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(upload.none(),loginUser);


// secure Routes
router.route("/logout").post(verifyJWT,logOutUser);
router.route("/refresh-token").post(refrestAccessToken)
router.route("/change-password").post(verifyJWT,changeCurrentPassword)
router.route("/current-user").get(verifyJWT,getCurrentUser)

router.route("/update-accound").patch(verifyJWT,updateAccoundDetails)
router.route("/update-avatar").patch(verifyJWT,upload.single("avatar"),updateUserAvatar)
router.route("/update-coverImage").patch(verifyJWT,upload.single("coverImage"),updateUserCoverImage)

// taking data from params
router.route("/c/:username").get(verifyJWT,getUserChannelProfile)

// Route for user History
router.route("/history").get(verifyJWT,getWatchHistory)


import fs from "fs"


export default router;
