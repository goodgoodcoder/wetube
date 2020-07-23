import routes from "./routes";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import multer from "multer";

const s3 = new aws.S3({
  accessKeyId: "AKIARTIXFIBBMV2JT7MB",
  secretAccessKey: "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",
  region: "ap-northeast-2",
});

const multerVideo = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "yetube/video",
  }),
});

const multerAvatar = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "yetube/avatar",
  }),
});

// const multerVideo = multer({ dest: "uploads/videos/" });
// const multerAvatar = multer({ dest: "uploads/avatars/" });

export const uploadVideo = multerVideo.single("videoFile");
export const uploadAvatar = multerAvatar.single("avatar");

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};
