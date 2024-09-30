import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TextToSpeechController } from './text-to-speech/text-to-speech.controller';
import { TextToSpeechService } from './text-to-speech/text-to-speech.service';
import { DocumentToSpeechController } from './document-to-speech/document-to-speech.controller';
import { DocumentToSpeechService } from './document-to-speech/document-to-speech.service';

@Module({
  imports: [],
  controllers: [TextToSpeechController, DocumentToSpeechController],
  providers: [TextToSpeechService, DocumentToSpeechService],
})
export class AppModule {}
