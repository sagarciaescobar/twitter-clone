export default function handler(req, res) {
  console.log(req);
  res.status(200).send("pong")
}
