"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseApi = (function () {
    function BaseApi(apiEndpoint, apiHost) {
        this.apiEndpoint = apiEndpoint;
        this.apiHost = apiHost;
        this.apiData = {
            path: this.apiEndpoint,
            method: "POST",
            host: this.apiHost,
            scheme: "https",
            headers: {
                "Content-Type": "application/json",
                "Host": this.apiHost
            },
            parameters: []
        };
        this.apiData.path = this.apiEndpoint;
        this.apiData.host = this.apiHost;
        this.apiData.headers["Host"] = this.apiHost;
    }
    BaseApi.prototype.getRequestOptions = function (parameters) {
        var options = {
            uri: this.apiData.scheme + "://" + this.apiData.host + "/" + this.apiData.path,
            method: this.apiData.method,
            headers: this.apiData.headers,
            qs: parameters,
            json: true,
            body: parameters
        };
        return options;
    };
    return BaseApi;
}());
exports.BaseApi = BaseApi;
