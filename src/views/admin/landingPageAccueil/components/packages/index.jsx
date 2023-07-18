import React, { useEffect } from 'react'
import PackageAddForm from './PackageAddForm'
import { connect, useDispatch } from 'react-redux';
import { fetchPackageRequest } from 'redux/landingPage/actions';

const Package = ({plan, loading}) => {
  const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(fetchPackageRequest());
    }, [dispatch]);
  return (
    <div>
      <PackageAddForm plan={plan} loading={loading} />
    </div>
  )
}

const mapStateToProps = ({ LandingReducer }) => ({
  plan: LandingReducer.plan,
  loading: LandingReducer.loading,
  error: LandingReducer.error,
});

export default connect(mapStateToProps)(Package);