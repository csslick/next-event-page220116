const { events } = require("./data.json");

export default function handler(req, res) {
  const getData = events.filter(evt => evt.slug === req.query.slug)
  
  res.status(200).json(getData)
}
