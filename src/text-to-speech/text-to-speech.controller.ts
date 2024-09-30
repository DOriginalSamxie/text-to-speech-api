import { Controller, Post, Body, Res, Logger } from '@nestjs/common';
import { TextToSpeechService } from './text-to-speech.service';
import { Response } from 'express';

@Controller('text-to-speech')
export class TextToSpeechController {
  private readonly logger = new Logger(TextToSpeechController.name);

  constructor(private readonly ttsService: TextToSpeechService) {}

  @Post()
  async convertTextToSpeech(@Body('text') text: string, @Res() res: Response) {
    this.logger.log(`Received text for conversion: ${text}`);

    try {
      const audio = await this.ttsService.convertTextToSpeech(text);
      this.logger.log('Text converted to speech successfully');
      res.setHeader('Content-Type', 'audio/mpeg');
      res.send(audio);
    } catch (error) {
      this.logger.error('Error converting text to speech', error.stack);
      res.status(500).send('Internal Server Error');
    }
  }
}
