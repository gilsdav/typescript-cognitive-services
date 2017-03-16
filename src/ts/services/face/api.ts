// Base import for query
import { OptionsWithUri } from 'request-promise';
import rp = require('request-promise');

// Base core import
import { BaseApi } from './../../core/base-api';
import { Constants } from './constants';
import { FaceDetectParameter } from './model';

export class FaceApi extends BaseApi {
    constructor(private API_KEY: string) {
        super("face/v1.0", "westus.api.cognitive.microsoft.com");
    }

    public detect(parameters: FaceDetectParameter) {
        if (parameters && (parameters.file || parameters.url)) {

            rp(this.getRequestOptions(parameters, Constants.FACE_DETECT)).then(response => {
                console.log(response);
            });

        } else {
            throw new Error("Please provide an url or a file");
        }
    }

}
