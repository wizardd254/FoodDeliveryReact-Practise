const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://priyanshk254:@mern.5cowmyz.mongodb.net/Cravings?retryWrites=true&w=majority&appName=mern";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true, // if needed, depending on your Mongoose version
    });
    console.log("MongoDB connected successfully");

    // Fetching data from the "food-items" collection
    const fetched_data = await mongoose.connection.db
      .collection("food-items")
      .find({})
      .toArray();
    global.food_items = fetched_data;
    const foodCategory = await mongoose.connection.db
      .collection("foodCategory")
      .find({})
      .toArray();
    global.foodCategory = foodCategory;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = mongoDB;
