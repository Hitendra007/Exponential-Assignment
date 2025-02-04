import { User } from "../models/user.js";

export const updateScore = async (req, res) => {
  const { userId } = req.body;

  try {
    let user = await User.findOne({ userId });

    if (!user) {
      user = new User({ userId, counter: 0, prizes: 0 });
    }

    let points = 1;
    let message = "You earned 1 point.";

    if (Math.random() < 0.5) {
      points = 10;
      message = "Lucky! You earned 10 points!";
    }

    if (Math.random() < 0.25) {
      user.prizes += 1;
      message += " You won a prize!";
    }

    user.counter += points;
    await user.save();

    res.json({ counter: user.counter, prizes: user.prizes, message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
