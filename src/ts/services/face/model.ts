import { BaseModel } from './../../core/base-model';
var _ = require('lodash');

export enum FaceAttribute {
    AGE,
    GENDER,
    HEAD_POSE,
    SMILE,
    FACIAL_HAIR,
    GLASSES
}

export class FaceDetectParameter extends BaseModel {

    returnFaceId: boolean = false;
    returnFaceLandmarks: boolean = true;
    returnFaceAttributes: string = "";

    setReturnFaceAttributes(faceAttributes: FaceAttribute[]) {
        let enumAsString = _.invert(FaceAttribute);

        for (var i = 0; i < faceAttributes.length; i++) {
            this.returnFaceAttributes += enumAsString[faceAttributes[i]] + ",";
        }

        this.returnFaceAttributes = this.returnFaceAttributes.slice(0, -1);
    }

    getFaceAttribute(): FaceAttribute[] {
        let returnFaceAttribute: FaceAttribute[] = new Array<FaceAttribute>();
        let values = this.returnFaceAttributes.split(',');
        let enumAsString = _.invert(FaceAttribute);

        for (var i = 0; i < values.length; i++) {
            returnFaceAttribute.push(enumAsString[values[i]]);
        }

        return returnFaceAttribute;
    }
}

export class FaceDetectResponse {
    faceId: AAGUID;
    faceRectangle: FaceRectangle = new FaceRectangle();
}

export class FaceRectangle {
    top: number;
    left: number;
    width: number;
    height: number;
}

export class FaceAttributes {
    smile: number;
    headPose: HeadPose = new HeadPose();
    gender: string;
    age: number;
    facialHair: FacialHair = new FacialHair();
    glasses: string;
}

export class HeadPose {
    pitch: number;
    roll: number;
    yaw: number;
}

export class FacialHair {
    moustache: number;
    beard: number;
    sideburns: number;
}