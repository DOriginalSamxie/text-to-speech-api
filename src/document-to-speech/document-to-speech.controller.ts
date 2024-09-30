import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DocumentToSpeechService } from './document-to-speech.service';

import { Response } from 'express';

@Controller('document-to-speech')
export class DocumentToSpeechController {
  constructor(
    private readonly documentToSpeechService: DocumentToSpeechService,
  ) {}

  @Post('pdf')
  @UseInterceptors(FileInterceptor('file'))
  async convertPdfToSpeech(
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
  ) {
    try {
      const audio = await this.documentToSpeechService.convertPdfToSpeech(
        file.buffer,
      );
      res.setHeader('Content-Type', 'audio/mpeg');
      return res.send(audio);
    } catch (error) {
      console.error(error);
      return res.status(500).send('Internal Server Error');
    }
  }

  @Post('word')
  @UseInterceptors(FileInterceptor('file'))
  async convertWordToSpeech(
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
  ) {
    try {
      const audio = await this.documentToSpeechService.convertWordToSpeech(
        file.buffer,
      );
      res.setHeader('Content-Type', 'audio/mpeg');
      return res.send(audio);
    } catch (error) {
      console.error(error);
      return res.status(500).send('Internal Server Error');
    }
  }
}
