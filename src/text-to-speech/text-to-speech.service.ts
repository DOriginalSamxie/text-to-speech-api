import { Injectable } from '@nestjs/common';
import gTTS from 'gtts'; // Use default import

@Injectable()
export class TextToSpeechService {
  async convertTextToSpeech(text: string): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      const gtts = new gTTS(text, 'en'); // Use gTTS as constructor
      const chunks: Buffer[] = [];

      gtts
        .stream()
        .on('data', (chunk: Buffer) => {
          chunks.push(chunk);
        })
        .on('end', () => {
          resolve(Buffer.concat(chunks)); // Send all chunks together
        })
        .on('error', (err: any) => reject(err));
    });
  }
}
