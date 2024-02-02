"use server";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";

import Email from "@/components/Email";
import { getErrorMessage, validateString } from "@/lib/utils";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  const emailHtml = render(
    <Email
      message={formData.get("message") as string}
      senderEmail={formData.get("senderEmail") as string}
    />
  );

  const options = {
    from: "Contact Form<parminderind45@gamil.com>",
    to: "parminder.singh629@gmail.com",
    subject: "Contact Form Submission",
    html: emailHtml,
  };

  let data;

  try {
    data = await transporter.sendMail(options);
  } catch (err: unknown) {
    return {
      error: getErrorMessage(err),
    };
  }
  return {
    data
  }
};
