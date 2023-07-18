import React, { useEffect } from 'react'
import CustomerAddForm from './CustomerAddForm'
import { connect, useDispatch } from 'react-redux';
import { fetchCustomerRequest } from 'redux/landingPage/actions';

const Customer = ({customer, loading}) => {
  const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(fetchCustomerRequest());
    }, [dispatch]);
  return (
    <div>
      <CustomerAddForm customer={customer} loading={loading} />
    </div>
  )
}
const mapStateToProps = ({ LandingReducer }) => ({
  customer: LandingReducer.customer,
  loading: LandingReducer.loading,
  error: LandingReducer.error,
});

export default connect(mapStateToProps)(Customer);
