const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate", (req, res) => {
  const { topic, type } = req.body;

  const blockedTopics = ["smoking", "drugs", "alcohol"];

  // 🚫 Block unsafe topics
  if (blockedTopics.includes(topic.toLowerCase())) {
    return res.json({
      result: "⚠️ This topic is not allowed. Try topics like: Success, Fitness, Coding"
    });
  }

  // 🧠 Suggest better topics if empty
  if (!topic || topic.trim() === "") {
    return res.json({
      result: "👉 Please enter a topic like: Motivation, AI, Success, Health"
    });
  }

  let content = "";

  // 📱 Instagram
  if (type === "instagram") {
    content = `🔥 ${topic.toUpperCase()} 🔥

✨ Stay focused on ${topic}
💡 Small steps lead to big success
🚀 Keep growing every day

#${topic.replace(/\s+/g, "")} #success #motivation #growth`;
  }

  // 📝 Blog
  else if (type === "blog") {
    content = `📝 TITLE: ${topic}

${topic} plays an important role in today’s fast-changing world.

👉 Why it matters:
- Helps in personal growth
- Improves knowledge
- Builds strong mindset

👉 Conclusion:
Learning ${topic} can transform your future.`;
  }

  // ✍️ Caption
  else if (type === "caption") {
    content = `${topic} 💡

Start today. Stay consistent. Win tomorrow 🚀`;
  }

  res.json({ result: content });
});