import nodemailer from "nodemailer";

const email = "eroeks@gmail.com";//process.env.EMAIL;
const pass = "kfzqkqjtdsnfwrrk";//process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};