import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["ADMIN", "USER"], default: "USER" },

}, { timestamps: true }); /// CREATED AT, UPDATED AT 


// const User = mongoose.model("User", userSchema);

// export default User

export default mongoose.model("User", userSchema);