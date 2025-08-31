export default async function handler(req, res) {
  const input = req.query.text || "Hello Daylily!";
  const resp = await fetch(
    "https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inputs: input })
    }
  );
  const data = await resp.json();
  res.status(resp.ok ? 200 : 500).json(data);
}
