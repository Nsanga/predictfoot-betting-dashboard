import React, { useEffect } from 'react'
import ServiceAddForm from './ServiceAddForm'
import { connect, useDispatch } from "react-redux";
import { fetchServiceRequest } from 'redux/landingPage/actions';

const Service = ({service, loading}) => {
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchServiceRequest());
    }, [dispatch]);
  return (
    <div>
      <ServiceAddForm service={service} loading={loading}/>
    </div>
  )
}
const mapStateToProps = ({ LandingReducer }) => ({
  service: LandingReducer.service,
  loading: LandingReducer.loading,
  error: LandingReducer.error,
});

export default connect(mapStateToProps)(Service);
