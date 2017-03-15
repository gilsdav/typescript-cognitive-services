import { EmotionParameter } from './model';
export declare class EmotionApi {
    private API_KEY;
    constructor(API_KEY: string);
    emotionRecognition(parameters: EmotionParameter): void;
}
