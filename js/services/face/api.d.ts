import { FaceParameter } from './model';
export declare class FaceApi {
    private API_KEY;
    constructor(API_KEY: string);
    emotionRecognition(parameters: FaceParameter): void;
}
