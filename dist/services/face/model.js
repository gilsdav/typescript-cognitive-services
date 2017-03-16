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
var base_model_1 = require("./../../core/base-model");
var FaceDetectParameter = (function (_super) {
    __extends(FaceDetectParameter, _super);
    function FaceDetectParameter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.returnFaceId = false;
        _this.returnFaceLandmarks = true;
        _this.returnFaceAttributes = "";
        return _this;
    }
    return FaceDetectParameter;
}(base_model_1.BaseModel));
exports.FaceDetectParameter = FaceDetectParameter;
