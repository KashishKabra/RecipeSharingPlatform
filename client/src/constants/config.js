// API_NOTIFICATIONS _MESSAGES

export const  API_NOTIFICATION_MESSAGES ={
    loading : {
        title: 'Loading..',
        message: 'data is being loaded, wait'
    },
    success: {
        title: 'Success',
        message: 'data loaded successfully'
    },
    requestFailure: {
        title: "Error!",
        message: "An error occur while parsing request data"
    },
    responseFailure: {
        title: "Error!",
        message: "An error occur while fetching response from server. Please try again"
    },
    networkError: {
        title: "Error!",
        message: "Unable to connect to the server. Please check internet connectivity and try again."
    }
};

// api service call
//SAMPLE REQUEST 
//NEED SERVICE CALL : {Uurl:'/',method: 'POST/GET/PUT/DELETE' params:true/false, query: true/false}
export const SERVICE_URLS = {
    userSignup: {url:'/signup',method:'POST'},
    userLogin: {url:'/login',method:'POST'},
    uploadFile: {url: '/file/upload', method: 'POST'},
    createPost: { url : 'create', method:'POST'}
}