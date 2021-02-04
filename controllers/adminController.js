const catchAsync = require("../utils/catchAsync");
const Email = require("./../utils/emails");
const User = require("./../models/userModel");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.createAdminUser = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    role: req.body.role,
  });

  // //generate jwt token to verify email
  // const EmailVerifyToken = await signToken(newUser._id);

  // //verification url
  // const url = `${req.protocol}://${req.get(
  //   'host'
  // )}/api/v1/users/email-verify/${EmailVerifyToken}`;

  // await new Email(newUser, url).sendEmailVerify();

  return res.json({
    status: "success",
    data: {
      user: newUser,
    },
  });
});
