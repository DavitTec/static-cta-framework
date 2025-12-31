import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { configureNunjucks } from "../config/nunjucks.config.js";

dotenv.config();
const MODE = process.env.MODE || "DEV";

const env = configureNunjucks();

const site = JSON.parse(fs.readFileSync("data/site.json"));
const ctas = JSON.parse(fs.readFileSync("data/ctas.json"));
const campaign = JSON.parse(
  fs.readFileSync("data/campaigns/hostmasters.json")
);

const html = env.render("pages/landing.njk", {
  site,
  campaign,
  hero: campaign.hero,
  ctas
});

fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/index.html", html);
