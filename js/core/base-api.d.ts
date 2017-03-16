/// <reference types="request-promise" />
import { OptionsWithUri } from 'request-promise';
import { BaseModel } from './base-model';
export declare class BaseApi {
    private apiEndpoint;
    private apiHost;
    protected apiData: any;
    constructor(apiEndpoint: string, apiHost: string);
    protected getRequestOptions(parameters: BaseModel): OptionsWithUri;
}
