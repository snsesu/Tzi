const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;

export class TelegramService {
  async createAccessLink(fileId: string): Promise<string | null> {
    if (!telegramBotToken) {
      throw new Error("Missing TELEGRAM_BOT_TOKEN");
    }

    if (!fileId) {
      return null;
    }

    return fileId;
  }
}

export const telegramService = new TelegramService();
