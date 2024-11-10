//calling api

import * as axios from 'axios';
import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from '../constants/config';
import{ getAccessToken} from '../utils/common-utils';
const API_URL = 'http://localhost:8000';

const axiosInstance = axios.create({
    baseURL:API_URL,
    timeout: 10000,
    headers: {
        "Accept": "application/json, multipart/form-data", 
        "Content-Type": "application/json"
    }
})

axiosInstance.interceptors.request.use(
    function(config){
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function(response){
        //stop global loader 
        return processResponse(response);
    },
    function (error) {
        //stop global loader 
        return Promise.reject(processError(error));
    }
)

///////////////////////////////
// If success -> returns { isSuccess: true, data: object }
// If fail -> returns { isFailure: true, status: string, msg: string, code: int }
//////////////////////////////

const processResponse = (response) => {
    if (response?.status === 200) {
        return { isSuccess: true, data: response.data }
    } else {
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code
        }
    }
}

///////////////////////////////
// If success -> returns { isSuccess: true, data: object }
// If fail -> returns { isFailure: true, status: string, msg: string, code: int }
//////////////////////////////

const processError= (error)=>{
    console.error("Detailed Error:", error); // Log full error object
    if(error.response){
        // Request made and server responded with a status code 
        // that falls out of the range of 2xx
        console.log("ERROR IN RESPONSE:",error.toJSON());
        return {
            isError: true,
            
            msg: API_NOTIFICATION_MESSAGES.responseFailure,
            code: error.response.status
        }
    } else if(error.request) {
        //request sent but no response was received
        console.log("ERROR IN RESQUEST:",error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.requestFailure,
            code: ""
        }
    }else{
        //something happened in setting up request that triggers error in frontend
        console.log("ERROR IN NETWORK:",error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.networkFailure,
            code: ""
        }
    }
}

const API = [];
for (const [key, value] of Object.entries(SERVICE_URLS)) {
    API[key] = (body, showUploadProgress, showDownloadProgress) =>
        axiosInstance({
            method: value.method,
            url: value.url,
            data: body,
            responseType: value.responseType,
            headers: {
                authorization: getAccessToken()
            },
            onUploadProgress: function(progressEvent) {
                if (showUploadProgress) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showUploadProgress(percentCompleted);
                }
            },
            onDownloadProgress: function(progressEvent) {
                if (showDownloadProgress) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showDownloadProgress(percentCompleted);
                }
            }
        }
    );
}
export {API};