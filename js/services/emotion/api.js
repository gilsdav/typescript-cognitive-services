"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_api_1 = require("./../../core/base-api");
var rp = require("request-promise");
var EmotionApi = (function (_super) {
    __extends(EmotionApi, _super);
    function EmotionApi(API_KEY) {
        var _this = _super.call(this, "emotion/v1.0/recognize", "westus.api.cognitive.microsoft.com") || this;
        _this.API_KEY = API_KEY;
        return _this;
    }
    EmotionApi.prototype.emotionRecognition = function (parameters) {
        if (parameters && (parameters.file || parameters.url)) {
            rp(this.getRequestOptions(parameters)).then(function (response) {
                console.log(response);
            });
        }
        else {
            throw new Error("Please provide an url or a file");
        }
    };
    return EmotionApi;
}(base_api_1.BaseApi));
exports.EmotionApi = EmotionApi;
