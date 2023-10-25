export default function handler(_req, res) {
  res.status(200).json({
    message: 'This is a GET request',
    ts: Date.now(),
  })
}
