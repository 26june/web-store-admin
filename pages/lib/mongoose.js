import mongoose from "mongoose";

export function mongooseConnect() {
  //CHECK TOOLTIP FOR READYSTATE
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } // 1 === HAS CONNECTION
  else {
    const uri = process.env.MONGODB_URI;
    return mongoose.connect(uri);
  }
}
