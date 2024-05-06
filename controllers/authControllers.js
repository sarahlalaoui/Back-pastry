const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Register

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).send("Email already in use");
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.json("registration successful");
  } catch (err) {
    console.log(err);
  }
};

//Login

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("no user found with this email");
    }
    await bcrypt.compare(password, user.password);
    const token = jwt.sign({ userid: user._id }, "one", { expiresIn: "1h" });
    res.json({user, token});
  } catch (err) {
    return res.status(500).send(err);
  }
};
