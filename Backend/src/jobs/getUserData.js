import { User } from "../models/user.js";

export const getUserData = async (req, res) => {
  const { id } = req.params;

  try {
    let user = await User.findOne({ userId: id });

    if (!user) {
      user = new User({ userId: id, counter: 0, prizes: 0 });
      await user.save();
    }

    res.json({ counter: user.counter, prizes: user.prizes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
