import { emailQueue } from '../queues/emailQueue.js';

export const sendRegistrationEmail = async (name, email) => {
  try {
    const job = await emailQueue.add('send-email', {
      to: email,
      subject: `${name} Registered Successfully! 🎉`,
      text: `Hi ${name},\n\nYou have been registered successfully!\n\nThanks for signing up.`,
    }, {
      attempts: 3,
      backoff: {
        type: 'exponential',
        delay: 5000
      },
      removeOnComplete: true
    });

    console.log(`📬 Registration email job added (Job ID: ${job.id})`);
  } catch (err) {
    console.error('❌ Failed to queue registration email:', err);
  }
};
