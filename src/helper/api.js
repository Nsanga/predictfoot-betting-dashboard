const json = 'application/json; charset=utf-8';
const multPart = 'multipart/form-data; charset=utf-8';

const request = async (contentType, method, url, data, options = {}) => {
  try {
    const jsonUser = JSON.parse().token;
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': contentType,
        Authorization: 'Bearer ' + jsonUser,
      },
      body: data,
      timeout: 15000,
      ...options,
    });
    let jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log(error);
  }
};

const unAuthRequest = async (contentType, method, url, data) => {
  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': contentType,
    },
    body: data,
    timeout: 15000,
  });
  if (response) return await response.json();
  throw new Error('Api call failed');
};

// Fonctions d'API
export const getRequest = (url) => request(json, 'GET', url);
export const postRequest = (url, data) => request(json, 'POST', url, data);
export const putRequest = (url, data) => request(json, 'PUT', url, data);
export const deleteRequest = (url, data) => request(json, 'DELETE', url, data);
export const putRequestFormData = (url, data, options = {}) =>
  request(multPart, 'PUT', url, data, options);
export const postRequestFormData = (url, data, options = {}) =>
  request(multPart, 'POST', url, data, options);
export const postUnauthRequest = (url, data) => unAuthRequest(json, 'POST', url, data);
export const getUnauthRequest = (url, data) => unAuthRequest(json, 'GET', url, data);
export const putUnauthRequest = (url, data) => unAuthRequest(json, 'PUT', url, data);
export const deleteUnauthRequest = (url, data) => unAuthRequest(json, 'DELETE', url, data);

// Assurez-vous que toutes les fonctions d'API sont correctement exportées
