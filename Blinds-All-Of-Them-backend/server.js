const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');

// Use CORS middleware
app.use(cors());

const fs = require('node:fs');


app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/reviews", (req, res, next) => {
    fs.readFile('reviews.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        res.json(JSON.parse(data));
      });
});


app.get("/promise", (req, res, next) => {
    const list = [];
    promise1 = {icon:"icons/handshake.png", title:"Quality", desc:"We offer premium products and services at competitive prices, ensuring that you get the best value without compromising on quality or craftsmanship."};
    promise2 = {icon:"icons/clock.png", title:"Reliability & Delivery", desc:"We promise to deliver on time, every time. With over 3,000 successful installations across the North Coast, KZN, our team ensures reliable, professional service from consultation to completion."};
    promise3 = {icon:"icons/dollar.png", title:"Affordable", desc:"We are committed to providing the highest quality blinds, shutters, and awnings. With 35 years of experience, we ensure every product is crafted and installed to perfection, guaranteeing durability and long-lasting performance."};
    
    list.push(promise1);
    list.push(promise2);
    list.push(promise3);
            res.json(list);
});