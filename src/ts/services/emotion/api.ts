import { BaseApi } from './../../core/base-api';

import { OptionsWithUri } from 'request-promise';
import rp = require('request-promise');

import { EmotionParameter } from './model';


export class EmotionApi extends BaseApi {

    constructor(private API_KEY: string) {
        super("emotion/v1.0", "westus.api.cognitive.microsoft.com");
    }

    public emotionRecognition(parameters: EmotionParameter) {
        if (parameters && (parameters.file || parameters.url)) {

            rp(this.getRequestOptions(parameters, "recognize")).then(response => {
                console.log(response);
            });

        } else {
            throw new Error("Please provide an url or a file");
        }
    }

}
