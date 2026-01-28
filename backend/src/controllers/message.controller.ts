import { Request, Response } from 'express';
import { HTTPSTATUS } from '../config/http.config';
import { asyncHandler } from '../middlewares/asyncHandler.middleware';
import { sendMessageService } from '../services/message.service';
import { sendMessageSchema } from '../validators/message.validator';

export const sendMessageController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?._id;
    const body = sendMessageSchema.parse(req.body);

    // body is guaranteed to have chatId after Zod validation
    const result = await sendMessageService(
      userId,
      body as {
        chatId: string;
        content?: string;
        image?: string;
        replyToId?: string;
      }
    );

    return res.status(HTTPSTATUS.OK).json({
      message: 'Message sent successfully',
      ...result,
    });
  }
);
