import { Schema, model, models } from "mongoose";

// username
// email
// password
// bio

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      Lowercase: false,
    },

    password: {
      type: String,
      required: true,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    userBio: {
      type: String,
      default: "",
    },
    verificationToken: String,
    verificationExpires: Date,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
  },
  {
    timestamps: true,
  },
);

const User = models?.User || model("User", UserSchema);

export default User;
