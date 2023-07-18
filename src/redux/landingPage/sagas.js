import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import * as types from './types';
import { url } from '../../urlLoader';

function* fetchHeaderRequest() {
  try {
    let link = `${url}/api/v1/landing-page/headband/getById?Id=6481dff4d1813ef17f934a79`;

    const response = yield call(fetch, link);
    const data = yield response.json();

    if (data.success) {
      yield put({ type: types.GET_HEADER_SUCCESS, payload: data.data });
    } else {
      yield put({ type: types.GET_HEADER_FAILED, payload: "echec recuperation des données" });
    }

  } catch (error) {
    console.log(error);
    yield put({ type: types.GET_HEADER_FAILED, payload: error });
  }
}

function* updateHeaderRequest(action) {
  try {
    const { id } = action.payload;
    const response = yield call(fetch, `${url}/api/v1/landing-page/headband/update?Id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(action.payload.data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const data = yield response.json();
   
    if (data.success) {
      yield put({ type: types.UPDATE_HEADER_SUCCESS, payload: data.data });
    } else {
      yield put({ type: types.UPDATE_HEADER_FAILED, payload: "echec modification des données" });
    }

  } catch (error) {
    console.log(error);
    yield put({ type: types.UPDATE_HEADER_FAILED, payload: error });
  }
}

function* fetchStatisticRequest() {
  try {
    let link = `${url}/api/v1/landing-page/statistic/getById?Id=6481fc0ff08b56af61272755`;

    const response = yield call(fetch, link);
    const data = yield response.json();

    if (data.success) {
      yield put({ type: types.GET_STATISTIC_SUCCESS, payload: data.data });
    } else {
      yield put({ type: types.GET_STATISTIC_FAILED, payload: "echec recuperation des données" });
    }

  } catch (error) {
    console.log(error);
    yield put({ type: types.GET_STATISTIC_FAILED, payload: error });
  }
}

function* updateStatisticRequest(action) {
  try {
    const { id } = action.payload;
    const response = yield call(fetch, `${url}/api/v1/landing-page/statistic/update?Id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(action.payload.data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const data = yield response.json();
 
    if (data.success) {
      yield put({ type: types.UPDATE_STATISTIC_SUCCESS, payload: data.data });
    } else {
      yield put({ type: types.UPDATE_STATISTIC_FAILED, payload: "echec modification des données" });
    }

  } catch (error) {
    console.log(error);
    yield put({ type: types.UPDATE_STATISTIC_FAILED, payload: error });
  }
}

function* fetchAdvertisementRequest() {
  try {
    let link = `${url}/api/v1/landing-page/advertisement/getById?Id=6481ef37e289a9bc87495449`;
    console.log('LIEN::', link);

    const response = yield call(fetch, link);
    const data = yield response.json();

    if (data.success) {
      yield put({ type: types.GET_ADVERTISEMENT_SUCCESS, payload: data.data });
    } else {
      yield put({ type: types.GET_ADVERTISEMENT_FAILED, payload: "echec recuperation des données" });
    }

  } catch (error) {
    console.log(error);
    yield put({ type: types.GET_ADVERTISEMENT_FAILED, payload: error });
  }
}

function* updateAdvertisementRequest(action) {
  try {
    const { id } = action.payload;
    const response = yield call(fetch, `${url}/api/v1/landing-page/advertisement/update?Id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(action.payload.data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const data = yield response.json();
    
    if (data.success) {
      yield put({ type: types.UPDATE_ADVERTISEMENT_SUCCESS, payload: data.data });
    } else {
      yield put({ type: types.UPDATE_ADVERTISEMENT_FAILED, payload: "echec modification des données" });
    }

  } catch (error) {
    console.log(error);
    yield put({ type: types.UPDATE_ADVERTISEMENT_FAILED, payload: error });
  }
}
function* fetchAboutRequest() {
  try {
    let link = `${url}/api/v1/landing-page/about/getById?Id=6481eac53cf97cfa3dc3db24`;
    console.log('LIEN::', link);

    const response = yield call(fetch, link);
    const data = yield response.json();

    if (data.success) {
      yield put({ type: types.GET_ABOUT_SUCCESS, payload: data.data });
    } else {
      yield put({ type: types.GET_ABOUT_FAILED, payload: "echec recuperation des données" });
    }

  } catch (error) {
    console.log(error);
    yield put({ type: types.GET_ABOUT_FAILED, payload: error });
  }
}

function* updateAboutRequest(action) {
  try {
    const { id } = action.payload;
    const response = yield call(fetch, `${url}/api/v1/landing-page/about/update?Id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(action.payload.data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const data = yield response.json();
    
    if (data.success) {
      yield put({ type: types.UPDATE_ABOUT_SUCCESS, payload: data.data });
    } else {
      yield put({ type: types.UPDATE_ABOUT_FAILED, payload: "echec modification des données" });
    }

  } catch (error) {
    console.log(error);
    yield put({ type: types.UPDATE_ABOUT_FAILED, payload: error });
  }
}

function* fetchServiceRequest() {
  try {
    let link = `${url}/api/v1/landing-page/service/getAll`;
    console.log('LIEN::', link);

    const response = yield call(fetch, link);
    const data = yield response.json();

    if (data.success) {
      yield put({ type: types.GET_SERVICE_SUCCESS, payload: data.data });
    } else {
      yield put({ type: types.GET_SERVICE_FAILED, payload: "echec recuperation des données" });
    }

  } catch (error) {
    console.log(error);
    yield put({ type: types.GET_SERVICE_FAILED, payload: error });
  }
}

function* updateServiceRequest(action) {
  try {
    const { serviceId } = action.payload;
    const response = yield call(fetch, `${url}/api/v1/landing-page/service/update?Id=${serviceId}`, {
      method: 'PUT',
      body: JSON.stringify(action.payload.data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const data = yield response.json();
    console.log('data::', data)
    
    if (data.success) {
      yield put({ type: types.UPDATE_SERVICE_SUCCESS, payload: data.data });
    } else {
      yield put({ type: types.UPDATE_SERVICE_FAILED, payload: "echec modification des données" });
    }

  } catch (error) {
    console.log(error);
    yield put({ type: types.UPDATE_SERVICE_FAILED, payload: error });
  }
}


function* deleteServiceRequest(action) {
  try {
    const { id } = action.payload;
    const response = yield call(fetch, `${url}/api/v1/landing-page/service/delete?Id=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = yield response.json();

    if (data.success) {
      yield put({ type: types.DELETE_SERVICE_SUCCESS, payload: id });
    } else {
      yield put({ type: types.DELETE_SERVICE_FAILED, payload: "echec suppression des données" });
    }

  } catch (error) {
    console.log(error);
    yield put({ type: types.DELETE_SERVICE_FAILED, payload: error });
  }
}

function* addServiceRequest(action) {
  try {
    const response = yield call(fetch, `${url}/api/v1/landing-page/service/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    });

    if (response.ok) {
      const data = yield response.json();
      console.log(data);
      yield put({ type: types.ADD_SERVICE_SUCCESS, payload: data });
    } else {
      yield put({ type: types.ADD_SERVICE_FAILED, payload: "Echec de l'ajout des données" });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: types.ADD_SERVICE_FAILED, payload: error });
  }
}

function* fetchPackageRequest() {
  try {
    let link = `${url}/api/v1/landing-page/plan/getAll`;
    console.log('LIEN::', link);

    const response = yield call(fetch, link);
    const data = yield response.json();

    if (data.success) {
      yield put({ type: types.GET_PACKAGE_SUCCESS, payload: data.data });
    } else {
      yield put({ type: types.GET_PACKAGE_FAILED, payload: "echec recuperation des données" });
    }

  } catch (error) {
    console.log(error);
    yield put({ type: types.GET_PACKAGE_FAILED, payload: error });
  }
}

function* deletePackageRequest(action) {
  try {
    const { id } = action.payload;
    const response = yield call(fetch, `${url}/api/v1/landing-page/plan/delete?Id=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = yield response.json();

    if (data.success) {
      yield put({ type: types.DELETE_PACKAGE_SUCCESS, payload: id });
    } else {
      yield put({ type: types.DELETE_PACKAGE_FAILED, payload: "echec suppression des données" });
    }

  } catch (error) {
    console.log(error);
    yield put({ type: types.DELETE_PACKAGE_FAILED, payload: error });
  }
}

function* fetchCustomerRequest() {
  try {
    let link = `${url}/api/v1/landing-page/customer/getAll`;
    console.log('LIEN::', link);

    const response = yield call(fetch, link);
    const data = yield response.json();
console.log('data::', data)
    if (data.success) {
      yield put({ type: types.GET_CUSTOMER_SUCCESS, payload: data.data });
    } else {
      yield put({ type: types.GET_CUSTOMER_FAILED, payload: "echec recuperation des données" });
    }

  } catch (error) {
    console.log(error);
    yield put({ type: types.GET_CUSTOMER_FAILED, payload: error });
  }
}
function* deleteCustomerRequest(action) {
  try {
    const { id } = action.payload;
    const response = yield call(fetch, `${url}/api/v1/landing-page/customer/delete?Id=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = yield response.json();

    if (data.success) {
      yield put({ type: types.DELETE_CUSTOMER_SUCCESS, payload: id });
    } else {
      yield put({ type: types.DELETE_CUSTOMER_FAILED, payload: "echec suppression des données" });
    }

  } catch (error) {
    console.log(error);
    yield put({ type: types.DELETE_CUSTOMER_FAILED, payload: error });
  }
}
function* addCustomerRequest(action) {
  try {
    const response = yield call(fetch, `${url}/api/v1/landing-page/customer/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    });

    if (response.ok) {
      const data = yield response.json();
      console.log(data);
      yield put({ type: types.ADD_CUSTOMER_SUCCESS, payload: data });
    } else {
      yield put({ type: types.ADD_CUSTOMER_FAILED, payload: "Echec de l'ajout des données" });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: types.ADD_CUSTOMER_FAILED, payload: error });
  }
}

function* fetchGripRequest() {
  try {
    let link = `${url}/api/v1/landing-page/grip/getAll`;
    console.log('LIEN::', link);

    const response = yield call(fetch, link);
    const data = yield response.json();
console.log('data::', data)
    if (data.success) {
      yield put({ type: types.GET_GRIP_SUCCESS, payload: data.data });
    } else {
      yield put({ type: types.GET_GRIP_FAILED, payload: "echec recuperation des données" });
    }

  } catch (error) {
    console.log(error);
    yield put({ type: types.GET_GRIP_FAILED, payload: error });
  }
}
function* deleteGripRequest(action) {
  try {
    const { id } = action.payload;
    const response = yield call(fetch, `${url}/api/v1/landing-page/grip/delete?Id=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = yield response.json();

    if (data.success) {
      yield put({ type: types.DELETE_GRIP_SUCCESS, payload: id });
    } else {
      yield put({ type: types.DELETE_GRIP_FAILED, payload: "echec suppression des données" });
    }

  } catch (error) {
    console.log(error);
    yield put({ type: types.DELETE_GRIP_FAILED, payload: error });
  }
}
function* addGripRequest(action) {
  try {
    const { number, title, description, image } = action.payload;

    const formData = new FormData();
    formData.append('number', number);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);

    const boundary = '---------------------------' + Date.now().toString(16);

    const response = yield call(fetch, `${url}/api/v1/landing-page/grip/create`, {
      method: 'POST',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
      },
      body: formData,
    });

    if (response.ok) {
      const data = yield response.json();
      console.log(data);
      yield put({ type: types.ADD_GRIP_SUCCESS, payload: data });
    } else {
      yield put({ type: types.ADD_GRIP_FAILED, payload: "Echec de l'ajout des données" });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: types.ADD_GRIP_FAILED, payload: error });
  }
}

export default function* LandingSaga() {
  yield takeLatest(types.GET_HEADER_REQUEST, fetchHeaderRequest);
  yield takeLatest(types.UPDATE_HEADER_REQUEST, updateHeaderRequest);
  yield takeLatest(types.GET_STATISTIC_REQUEST, fetchStatisticRequest);
  yield takeLatest(types.UPDATE_STATISTIC_REQUEST, updateStatisticRequest);
  yield takeLatest(types.GET_ADVERTISEMENT_REQUEST, fetchAdvertisementRequest);
  yield takeLatest(types.UPDATE_ADVERTISEMENT_REQUEST, updateAdvertisementRequest);
  yield takeLatest(types.GET_ABOUT_REQUEST, fetchAboutRequest);
  yield takeLatest(types.UPDATE_ABOUT_REQUEST, updateAboutRequest);
  yield takeLatest(types.GET_SERVICE_REQUEST, fetchServiceRequest);
  yield takeLatest(types.ADD_SERVICE_REQUEST, addServiceRequest);
  yield takeLatest(types.DELETE_SERVICE_REQUEST, deleteServiceRequest);
  yield takeLatest(types.UPDATE_SERVICE_REQUEST, updateServiceRequest);
  yield takeLatest(types.GET_PACKAGE_REQUEST, fetchPackageRequest);
  yield takeLatest(types.DELETE_PACKAGE_REQUEST, deletePackageRequest);
  yield takeLatest(types.GET_CUSTOMER_REQUEST, fetchCustomerRequest);
  yield takeLatest(types.ADD_CUSTOMER_REQUEST, addCustomerRequest);
  yield takeLatest(types.DELETE_CUSTOMER_REQUEST, deleteCustomerRequest);
  yield takeLatest(types.GET_GRIP_REQUEST, fetchGripRequest);
  yield takeLatest(types.ADD_GRIP_REQUEST, addGripRequest);
  yield takeLatest(types.DELETE_GRIP_REQUEST, deleteGripRequest);
}




