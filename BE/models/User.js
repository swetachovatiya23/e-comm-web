const mongoose = required("mongoose")

const UserSchema = new mongoose.Schema(
    {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false,
    },
  },
  { timestamps: true } //mongoose function For creating Time 
);

module.exports = mongoose.model("User", UserSchema);