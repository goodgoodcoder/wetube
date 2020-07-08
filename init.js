import dotenv from "dotenv";
import app from "./app";
import "./db";

dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";

const port = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅ Listening on : http://localhost:${port}`);

app.listen(port, handleListening);
