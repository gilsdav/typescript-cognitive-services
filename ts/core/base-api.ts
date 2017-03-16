import { OptionsWithUri } from 'request-promise';
import { BaseModel } from './base-model';
import rp = require('request-promise');

export class BaseApi {

    protected apiData: any = {
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

    constructor(private apiEndpoint: string, private apiHost: string) {
        this.apiData.path = this.apiEndpoint;
        this.apiData.host = this.apiHost;
        this.apiData.headers["Host"] = this.apiHost;
    }

    protected getRequestOptions(parameters: BaseModel, specificUrl: string): OptionsWithUri {

        let options = <OptionsWithUri>{
            uri: this.formatUrlParams(parameters, specificUrl),
            method: this.apiData.method,
            headers: this.apiData.headers,
            qs: parameters,
            json: true,
            body: parameters
        };

        return options;
    }

    private formatUrlParams(parameters: BaseModel, specificUrl: string): string {
        let baseUrl = `${this.apiData.scheme}://${this.apiData.host}/${this.apiData.path}/${specificUrl}?`;

        for (var property in parameters) {
            if (parameters.hasOwnProperty(property)) {
                baseUrl += property + "=" + parameters[property] + "&"
            }
        }

        return baseUrl.slice(0, -1);
    }
}