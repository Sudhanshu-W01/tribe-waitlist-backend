import Waitlist from "../models/Waitlist.js";

export const joinWaitlist = async (req, res) => {
  try {
    const { fullname, role, collegeName, email } = req.body;

    // Basic validation
    if (!fullname || !role || !email) {
      return res.status(400).json({ message: "All fields are required." });
    }
    if (role === "Student" && !collegeName) {
      return res
        .status(400)
        .json({ message: "College name is required for students." });
    }

    // Check for duplicate email
    const existing = await Waitlist.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Email already on waitlist." });
    }

    const newEntry = new Waitlist({ fullname, role, collegeName, email });
    await newEntry.save();

    res.status(201).json({ message: "Successfully joined the waitlist." });
  } catch (err) {
    console.error("Error joining waitlist:", err);
    res.status(500).json({ message: "Server error" });
  }
};
