import { OptionsWithUri } from 'request-promise';
import rp = require('request-promise');

import { EmotionParameter } from './model';


export class EmotionApi {
    constructor(private API_KEY: string) {
    }

    public emotionRecognition(parameters: EmotionParameter) {
        if(parameters && (parameters.file || parameters.url)) {
            let apiData = {
                path: "emotion/v1.0/recognize",
                method: "POST",
                host: "westus.api.cognitive.microsoft.com",
                scheme: "https",
                headers: {
                    "Content-Type": "application/json",
                    "Host": "westus.api.cognitive.microsoft.com"
                },
                parameters: []
            };


            let options = <OptionsWithUri> {
                uri: `${apiData.scheme}://${apiData.host}/${apiData.path}`,
                method: apiData.method,
                headers: apiData.headers,
                qs: parameters,
                json: true,
                body: parameters
            };
            
            rp(options).then(response => {
                console.log(response);
            });

        } else {
            throw new Error("Please provide an url or a file");
        }
    }

}
