const json = `application/json; charset=utf-8`;
const multPart = `multipart/form-data; boundary=---------------------------${Date.now().toString(16)}`;
const urlEncoded = `application/x-www-form-urlencoded`;

const request = async (contentType, method, url, data, options = {}) => {
    try {

        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': contentType,
            },
            body: data,
            timeout: 15000,
            ...options
        });

        return response; // Return the entire response object

    } catch (error) {
        console.log(error);
        throw error;
    }
};

const unAuthRequest = async (contentType, method, url, data) => {
    const response = await fetch(url,
        {
            method: method,
            headers: {
                'Content-Type': contentType,
            },
            body: data,
            timeout: 15000,
        });

    if (response.ok) {
        return await response.json(); // Parse the response body as JSON if response is OK
    } else {
        throw new Error("Api call failed");
    }
};

// // request auth
export const getRequest = (url) => request(json, 'GET', url);
export const postRequest = (url, data) => postUnauthRequest(url, data); // Use postUnauthRequest for 'POST'
export const putRequest = (url, data) => putUnauthRequest(url, data); // Use putUnauthRequest for 'PUT'
export const deleteRequest = (url, data) => request(json, 'DELETE', url, data);

// multipart/formData
export const putRequestFormData = (url, formData, options = {}) => request(multPart, 'PUT', url, formData, options);
export const postRequestFormData = (url, formData, options = {}) => request(multPart, 'POST', url, formData, options);

//unAuth
export const postUnauthRequest = (url, data) => unAuthRequest(json, 'POST', url, JSON.stringify(data)); // Always stringify data for 'POST' request
export const getUnauthRequest = (url) => unAuthRequest(json, 'GET', url);
export const putUnauthRequest = (url, data) => unAuthRequest(json, 'PUT', url, JSON.stringify(data)); // Always stringify data for 'PUT' request
export const deleteUnauthRequest = (url) => unAuthRequest(json, 'DELETE', url);
