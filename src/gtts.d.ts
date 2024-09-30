// gtts.d.ts
declare module 'gtts' {
  class gTTS {
    constructor(text: string, lang: string);
    stream(): any; // Adjust according to the actual return type
  }
  export = gTTS;
}
