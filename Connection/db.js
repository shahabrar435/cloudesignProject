import mongoose from "mongoose";

const Connection = async () => {
  try {
    const URL = `mongodb+srv://user:cloudesign@crud.6cb3g.mongodb.net/CLOUDESIGN?retryWrites=true&w=majority`;
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected sucessfully");
  } catch (error) {
    console.log("Error while connecting with database", error);
  }
};

export default Connection;
