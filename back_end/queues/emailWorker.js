import { Worker } from 'bullmq';
import { transporter } from '../config/mailer.js';
import { redisConfig } from '../config/redis.js';
import dotenv from 'dotenv';
dotenv.config();

const emailWorker = new Worker('email-queue', async (job) => {
  const { to, subject, html, text } = job.data;

  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to,
    subject,
    html,
    text
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log(`📤 Email sent to ${to}, Message ID: ${result.messageId}`);
    return { success: true, messageId: result.messageId };
  } catch (err) {
    console.error('❌ Email failed:', err);
    throw err;
  }
},{
    connection: redisConfig, // ✅ required by BullMQ
  });

// Optional event handlers
emailWorker.on('completed', (job, result) => {
  console.log(`✅ Job ${job.id} completed:`, result);
});

emailWorker.on('failed', (job, err) => {
  console.log(`❌ Job ${job.id} failed:`, err.message);
});
