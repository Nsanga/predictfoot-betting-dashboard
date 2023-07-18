
import * as types from './types';

const INITIAL_STATE = {
  headband: [],
  statistic: [],
  advertisement: [],
  about: [],
  service: [],
  plan: [],
  customer: [],
  grip: [],
  loading: false,
  error: null,
};

function LandingReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_HEADER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_HEADER_SUCCESS:
      return {
        ...state,
        loading: false,
        headband: action.payload,
      };
    case types.GET_HEADER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.toString(),
      };
    case types.ADD_HEADER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.ADD_HEADER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case types.ADD_HEADER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.UPDATE_HEADER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.UPDATE_HEADER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case types.UPDATE_HEADER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_STATISTIC_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_STATISTIC_SUCCESS:
      return {
        ...state,
        loading: false,
        statistic: action.payload,
      };
    case types.GET_STATISTIC_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.toString(),
      };
    case types.ADD_STATISTIC_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.ADD_STATISTIC_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case types.ADD_STATISTIC_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.UPDATE_STATISTIC_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.UPDATE_STATISTIC_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case types.UPDATE_STATISTIC_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_ADVERTISEMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_ADVERTISEMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        advertisement: action.payload,
      };
    case types.GET_ADVERTISEMENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.toString(),
      };
    case types.ADD_ADVERTISEMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.ADD_ADVERTISEMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case types.ADD_ADVERTISEMENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.UPDATE_ADVERTISEMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.UPDATE_ADVERTISEMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case types.UPDATE_ADVERTISEMENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_ABOUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_ABOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        about: action.payload,
      };
    case types.GET_ABOUT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.toString(),
      };
    case types.ADD_ABOUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.ADD_ABOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case types.ADD_ABOUT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.UPDATE_ABOUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.UPDATE_ABOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case types.UPDATE_ABOUT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_SERVICE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        service: action.payload,
      };
    case types.GET_SERVICE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.toString(),
      };
    case types.ADD_SERVICE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.ADD_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case types.ADD_SERVICE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.UPDATE_SERVICE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.UPDATE_SERVICE_SUCCESS:
      const { serviceId, updatedData } = action.payload;

      // Trouvez le service à mettre à jour dans le tableau des services existants
      const updatedServices = state.service.map((service) => {
        if (service._id === serviceId) {
          // Fusionnez les données mises à jour avec le service existant
          return { ...service, ...updatedData };
        }
        return service;
      });

      return {
        ...state,
        services: updatedServices,
      };
    case types.UPDATE_SERVICE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.DELETE_SERVICE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.DELETE_SERVICE_SUCCESS:
      const id = action.payload;
      const updatedService = state.service.filter((service) => service._id !== id);
      return {
        ...state,
        service: updatedService,
        loading: false,
        error: null,
      };
    case types.DELETE_SERVICE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_PACKAGE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_PACKAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        plan: action.payload,
      };
    case types.GET_PACKAGE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.toString(),
      };
    case types.DELETE_PACKAGE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.DELETE_PACKAGE_SUCCESS:
      const idPlan = action.payload;
      const updatedPackage = state.plan.filter((plan) => plan._id !== idPlan);
      return {
        ...state,
        plan: updatedPackage,
        loading: false,
        error: null,
      };
    case types.DELETE_PACKAGE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        customer: action.payload,
      };
    case types.GET_CUSTOMER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.toString(),
      };
    case types.ADD_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.ADD_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case types.ADD_CUSTOMER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.UPDATE_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.UPDATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case types.UPDATE_CUSTOMER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.DELETE_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.DELETE_CUSTOMER_SUCCESS:
      const idCustomer = action.payload;
      const updatedCustomer = state.customer.filter((customer) => customer._id !== idCustomer);
      return {
        ...state,
        customer: updatedCustomer,
        loading: false,
        error: null,
      };
    case types.DELETE_CUSTOMER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_GRIP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_GRIP_SUCCESS:
      return {
        ...state,
        loading: false,
        grip: action.payload,
      };
    case types.GET_GRIP_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.toString(),
      };
    case types.ADD_GRIP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.ADD_GRIP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case types.ADD_GRIP_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.UPDATE_GRIP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.UPDATE_GRIP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case types.UPDATE_GRIP_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.DELETE_GRIP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.DELETE_GRIP_SUCCESS:
      const idGrip = action.payload;
      const updatedGrip = state.grip.filter((grip) => grip._id !== idGrip);
      return {
        ...state,
        grip: updatedGrip,
        loading: false,
        error: null,
      };
    case types.DELETE_GRIP_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
export default LandingReducer;
