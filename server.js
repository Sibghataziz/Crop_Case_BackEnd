import express from "express";
import cors from "cors";

const Port = process.env.PORT || 8080;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

server.get("/", (req, res) => {
  return res.status(200).json({
    message: "Thank you for visiting this website",
  });
});

server.get("/barChart", (req, res) => {
  const data = [];
  const week = ["S","M","T","W","T","F","S"]
  for (let i = 1; i <= 7; i++) {
    const obj = {
      name: week[i-1],
      pre: Math.floor(Math.random() * 1000),
      post: Math.floor(Math.random() * 1000),
    };
    data.push(obj);
  }

  return res.status(200).json(data);
});

server.get("/lineChart", (req, res) => {
  const income = [];
  for (let i = 1; i <= 16; i++) {
    income.push(Math.floor(Math.random() * 1000));
  }

  const data = [];

  for (let i = 1; i <= 16; i++) {
    const obj = {
      name: `Nov ${i}`,
      income: income[i - 1],
    };
    data.push(obj);
  }

  return res.status(200).json(data);
});

server.get("/recent", (req, res) => {
  const name = ["Google Pay", "Amazon Pay", "PhonePay", "Twitter Pay"];
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const data = [];
  for (let i = 1; i <= 4; i++) {
    const day = new Date();
    const obj = {
      name: name[i - 1],
      price: Math.floor(Math.random() * 100),
      date: `${day.getDate()} ${
        month[day.getMonth()]
      } ${day.getFullYear()} ${day.getHours()}:${day.getMinutes()}`,
    };
    data.push(obj);
  }

  return res.status(200).send(data);
});

server.listen(Port, () => {
  console.log(`server is running at http://localhost:${Port}`);
});
