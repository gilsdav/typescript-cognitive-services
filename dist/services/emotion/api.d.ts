import { BaseApi } from './../../core/base-api';
import { EmotionParameter } from './model';
export declare class EmotionApi extends BaseApi {
    private API_KEY;
    constructor(API_KEY: string);
    emotionRecognition(parameters: EmotionParameter): void;
}
