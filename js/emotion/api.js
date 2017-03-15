"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rp = require("request-promise");
var EmotionApi = (function () {
    function EmotionApi(API_KEY) {
        this.API_KEY = API_KEY;
    }
    EmotionApi.prototype.emotionRecognition = function (parameters) {
        if (parameters && (parameters.file || parameters.url)) {
            var apiData = {
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
            var options = {
                uri: apiData.scheme + "://" + apiData.host + "/" + apiData.path,
                method: apiData.method,
                headers: apiData.headers,
                qs: parameters,
                json: true,
                body: parameters
            };
            rp(options).then(function (response) {
                console.log(response);
            });
        }
        else {
            throw new Error("Please provide an url or a file");
        }
    };
    return EmotionApi;
}());
exports.EmotionApi = EmotionApi;
