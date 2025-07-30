import { Queue } from 'bullmq';
import { redisConfig } from '../config/redis.js';

export const emailQueue = new Queue('email-queue', redisConfig);
