import { BaseModel } from './../../core/base-model';
export declare class FaceDetectParameter extends BaseModel {
    returnFaceId: boolean;
    returnFaceLandmarks: boolean;
    returnFaceAttributes: string;
}
