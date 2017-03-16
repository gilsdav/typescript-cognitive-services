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
    BaseApi.prototype.getRequestOptions = function (parameters, specificUrl) {
        var options = {
            uri: this.formatUrlParams(parameters, specificUrl),
            method: this.apiData.method,
            headers: this.apiData.headers,
            qs: parameters,
            json: true,
            body: parameters
        };
        return options;
    };
    BaseApi.prototype.formatUrlParams = function (parameters, specificUrl) {
        var baseUrl = this.apiData.scheme + "://" + this.apiData.host + "/" + this.apiData.path + "/" + specificUrl + "?";
        for (var property in parameters) {
            if (parameters.hasOwnProperty(property)) {
                baseUrl += property + "=" + parameters[property] + "&";
            }
        }
        return baseUrl.slice(0, -1);
    };
    return BaseApi;
}());
exports.BaseApi = BaseApi;
