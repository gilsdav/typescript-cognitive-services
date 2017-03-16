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
var rp = require("request-promise");
var base_api_1 = require("./../../core/base-api");
var constants_1 = require("./constants");
var FaceApi = (function (_super) {
    __extends(FaceApi, _super);
    function FaceApi(API_KEY) {
        var _this = _super.call(this, "face/v1.0", "westus.api.cognitive.microsoft.com") || this;
        _this.API_KEY = API_KEY;
        return _this;
    }
    FaceApi.prototype.detect = function (parameters) {
        if (parameters && (parameters.file || parameters.url)) {
            rp(this.getRequestOptions(parameters, constants_1.Constants.FACE_DETECT)).then(function (response) {
                console.log(response);
            });
        }
        else {
            throw new Error("Please provide an url or a file");
        }
    };
    return FaceApi;
}(base_api_1.BaseApi));
exports.FaceApi = FaceApi;
