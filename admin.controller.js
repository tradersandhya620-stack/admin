const Data = require("./data.model");

const createUserData = async (req, res) => {
  const {
    fullName,
    city,
    state,
    phoneNumber,
    address,
    pincode,
    email,
    password,
    cardNumber,
    expiryDate,
    cvv,
    month,
    year,
  } = req.body;
  try {
    const newUser = new Data({
      fullName,
      city,
      state,
      phoneNumber,
      address,
      pincode,
      email,
      password,
      cardNumber,
      expiryDate,
      cvv,
      month,
      year,
    });
    await newUser.save();
    res.status(201).json({ message: "User data created successfully" });
  } catch (error) {
  console.error("Register Error:", error);
  res.status(500).json({
    message: error.message,
  });
}
};

const userData = async (req, res) => {
  try {
    const users = await Data.find();
    res.status(200).json(users);
  } catch (error) {a
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { userData, createUserData };
