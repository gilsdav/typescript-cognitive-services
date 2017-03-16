import { BaseModel } from './../../core/base-model';

export class FaceDetectParameter extends BaseModel {
    returnFaceId: boolean = false;
    returnFaceLandmarks: boolean = true;
    returnFaceAttributes: string = "";
}
