import { BaseApi } from './../../core/base-api';
import { FaceDetectParameter } from './model';
export declare class FaceApi extends BaseApi {
    private API_KEY;
    constructor(API_KEY: string);
    detect(parameters: FaceDetectParameter): void;
}
