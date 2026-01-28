import { Request, Response } from 'express';
import type { z } from 'zod';
import { HTTPSTATUS } from '../config/http.config';
import { asyncHandler } from '../middlewares/asyncHandler.middleware';
import { sendMessageService } from '../services/message.service';
import { sendMessageSchema } from '../validators/message.validator';

type SendMessageInput = z.infer<typeof sendMessageSchema>;

export const sendMessageController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?._id;
    const body: SendMessageInput = sendMessageSchema.parse(req.body);

    const result = await sendMessageService(userId, body);

    return res.status(HTTPSTATUS.OK).json({
      message: 'Message sent successfully',
      ...result,
    });
  }
);
