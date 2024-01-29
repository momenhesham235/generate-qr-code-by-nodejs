import express from "express";
import ViteExpress from "vite-express";
import qrcode from "qrcode";

const app = express();

app.get("/qrcode", async (req, res) => {
  const text = "hello world QR code";
  qrcode.toDataURL(text, (err, url) => {
    if (err) {
      console.log(err);
    }
    res.send(`<img src="${url}" />`);
  })
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
