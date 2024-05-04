"use server";

import nodemailer from 'nodemailer';

export default async function sendEmail() {
    try {
      console.log("cronjob hit");
        var transport = nodemailer.createTransport({
            host: "bulk.smtp.mailtrap.io",
            port: 587,
            auth: {
              user: "api",
              pass: process.env.MAILTRAP_PASSWORD,
            }
          });

          const info = await transport.sendMail({
            from: 'info@talentcornertaskmanager.com',
            to: "me@gmail.com",
            bcc:["yashkalia4215@gmail.com","veerendragumate@gmail.com"],
            subject: "Test Email: This is a Test Message ✔",
            text: "This is a test email message to check the email sending functionality.",
            html: "<p>This is a <b>test email message</b> to check the email sending functionality through <B>CRON JOBS of vercel.json</B></p>",
        });

        console.log("Message sent: %s", info.messageId);
    } catch (error) {
        console.error("Error sending email:", error);
    }
}
