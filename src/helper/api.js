const json = `application/json; charset=utf-8`;
const multPart = `multipart/form-data; boundary=---------------------------${Date.now().toString(16)}`;
const urlEncoded = `application/x-www-form-urlencoded`;

const request = async (method, url, data, contentType = 'application/json', options = {}) => {
    try {
        const headers = {
            'Content-Type': contentType,
            ...(options.token && { Authorization: `Bearer ${options.token}` }),
        };

        const requestOptions = {
            method: method,
            headers: headers,
            body: data,
            ...options,
        };

        const response = await fetch(url, requestOptions);

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const contentTypeHeader = response.headers.get('content-type');
        if (contentTypeHeader && contentTypeHeader.includes('application/json')) {
            return await response.json();
        } else if (contentTypeHeader && contentTypeHeader.includes('text/plain')) {
            return await response.text();
        } else {
            // You can add support for other response types here if needed
            return response;
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};

// Authenticated requests with token
export const getRequest = (url, token) => request('GET', url, null, json, { token });
export const postRequest = (url, data, token) => request('POST', url, data, json, { token });
export const putRequest = (url, data, token) => request('PUT', url, data, json, { token });
export const deleteRequest = (url, data, token) => request('DELETE', url, data, json, { token });

// multipart/formData
export const putRequestFormData = (url, data, options = {}) =>
    request('PUT', url, data, multPart, options);

export const postRequestFormData = (url, data, options = {}) =>
    request('POST', url, data, multPart, options);

// URL-encoded form data
export const postRequestUrlEncoded = (url, data, options = {}) =>
    request('POST', url, data, urlEncoded, options);

// text/plain
export const postRequestPlainText = (url, data, options = {}) =>
    request('POST', url, data, 'text/plain', options);

// Unauthenticated requests
export const postUnauthRequest = (url, data) => request('POST', url, data, json);
export const getUnauthRequest = (url, data) => request('GET', url, data, json);
export const putUnauthRequest = (url, data) => request('PUT', url, data, json);
export const deleteUnauthRequest = (url, data) => request('DELETE', url, data, json);
