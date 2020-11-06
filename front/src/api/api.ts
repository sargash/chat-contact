// tslint:disable
/// <reference path="./custom.d.ts" />
/**
 * ChatContext API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';


/**
 * AdminApi - axios parameter creator
 * @export
 */
export const AdminApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary GetCounters
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCounters(options: any = {}): RequestArgs {
            const localVarPath = `/api/getCounters`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AdminApi - functional programming interface
 * @export
 */
export const AdminApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary GetCounters
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCounters(options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = AdminApiAxiosParamCreator(configuration).getCounters(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AdminApi - factory interface
 * @export
 */
export const AdminApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary GetCounters
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCounters(options?: any) {
            return AdminApiFp(configuration).getCounters(options)(axios, basePath);
        },
    };
};

/**
 * AdminApi - object-oriented interface
 * @export
 * @class AdminApi
 * @extends {BaseAPI}
 */
export class AdminApi extends BaseAPI {
    /**
     * 
     * @summary GetCounters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminApi
     */
    public getCounters(options?: any) {
        return AdminApiFp(this.configuration).getCounters(options)(this.axios, this.basePath);
    }

}

