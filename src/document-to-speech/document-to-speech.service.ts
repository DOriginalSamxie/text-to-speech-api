import { Injectable } from '@nestjs/common';
import pdf from 'pdf-parse';
import mammoth from 'mammoth';
import { TextToSpeechService } from 'src/text-to-speech/text-to-speech.service';

// import { Readable } from 'stream';

@Injectable()
export class DocumentToSpeechService {
  constructor(private readonly ttsService: TextToSpeechService) {}

  async convertPdfToSpeech(fileBuffer: Buffer): Promise<Buffer> {
    const data = await pdf(fileBuffer);
    return this.ttsService.convertTextToSpeech(data.text);
  }

  async convertWordToSpeech(fileBuffer: Buffer): Promise<Buffer> {
    const result = await mammoth.extractRawText({ buffer: fileBuffer });
    return this.ttsService.convertTextToSpeech(result.value); // result.value contains the text
  }
}
