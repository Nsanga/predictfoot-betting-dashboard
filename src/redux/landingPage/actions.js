
import * as types from './types';

export const fetchHeaderRequest = payload => ({
  type: types.GET_HEADER_REQUEST,
  payload
});

export const addHeaderRequest = (formData) => ({
  type: types.ADD_HEADER_REQUEST,
  payload: formData
});

export const updateHeaderRequest = (id, data) => ({
  type: types.UPDATE_HEADER_REQUEST,
  payload: { id, data }
});

export const fetchStatisticRequest = payload => ({
  type: types.GET_STATISTIC_REQUEST,
  payload
});

export const addStatisticRequest = (formData) => ({
  type: types.ADD_STATISTIC_REQUEST,
  payload: formData
});

export const updateStatisticRequest = (id, data) => ({
  type: types.UPDATE_STATISTIC_REQUEST,
  payload: {id, data}
});

export const fetchAdvertisementRequest = payload => ({
  type: types.GET_ADVERTISEMENT_REQUEST,
  payload
});

export const addAdvertisementRequest = (formData) => ({
  type: types.ADD_ADVERTISEMENT_REQUEST,
  payload: formData
});

export const updateAdvertisementRequest = (id, data) => ({
  type: types.UPDATE_ADVERTISEMENT_REQUEST,
  payload: { id, data }
});

export const fetchAboutRequest = payload => ({
  type: types.GET_ABOUT_REQUEST,
  payload
});

export const addAboutRequest = (formData) => ({
  type: types.ADD_ABOUT_REQUEST,
  payload: formData
});

export const updateAboutRequest = (id, data) => ({
  type: types.UPDATE_ABOUT_REQUEST,
  payload: { id, data }
});

export const fetchServiceRequest = payload => ({
  type: types.GET_SERVICE_REQUEST,
  payload
});

export const addServiceRequest = (formData) => ({
  type: types.ADD_SERVICE_REQUEST,
  payload: formData
});

export const updateServiceRequest = (serviceId, updatedData) => ({
  type: types.UPDATE_SERVICE_REQUEST,
  payload: {serviceId, updatedData}
});

export const deleteServiceRequest = (id) => ({
  type: types.DELETE_SERVICE_REQUEST,
  payload: id,
});

export const fetchPackageRequest = payload => ({
  type: types.GET_PACKAGE_REQUEST,
  payload
});

export const addPackageRequest = (formData) => ({
  type: types.ADD_PACKAGE_REQUEST,
  payload: formData
});

export const deletePackageRequest = (id) => ({
  type: types.DELETE_PACKAGE_REQUEST,
  payload: {id},
});

export const fetchCustomerRequest = payload => ({
  type: types.GET_CUSTOMER_REQUEST,
  payload: payload
});

export const addCustomerRequest = (formData) => ({
  type: types.ADD_CUSTOMER_REQUEST,
  payload: formData
});

export const updateCustomerRequest = (id) => ({
  type: types.UPDATE_CUSTOMER_REQUEST,
  payload: id
});
export const deleteCustomerRequest = (id) => ({
  type: types.DELETE_CUSTOMER_REQUEST,
  payload: {id},
});

export const fetchGripRequest = payload => ({
  type: types.GET_GRIP_REQUEST,
  payload
});

export const addGripRequest = (formData) => ({
  type: types.ADD_GRIP_REQUEST,
  payload: formData
});

export const updateGripRequest = (id) => ({
  type: types.UPDATE_GRIP_REQUEST,
  payload: id
});

export const deleteGripRequest = (id) => ({
  type: types.DELETE_GRIP_REQUEST,
  payload: {id},
});

export const fetchArticleRequest = (page, limit) => ({
  type: types.GET_ARTICLE_REQUEST,
  payload: {page, limit},
});

export const addArticleRequest = (formData) => ({
  type: types.ADD_ARTICLE_REQUEST,
  payload: formData
});

export const updateArticleRequest = (id) => ({
  type: types.UPDATE_ARTICLE_REQUEST,
  payload: id
});

export const deleteArticleRequest = (id) => ({
  type: types.DELETE_ARTICLE_REQUEST,
  payload: {id},
});