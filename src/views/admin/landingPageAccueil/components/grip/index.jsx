import React, { useEffect } from 'react'
import GripAddForm from './GripAddForm'
import { connect, useDispatch } from 'react-redux';
import { fetchGripRequest } from 'redux/landingPage/actions';

const Grip = ({grip, loading}) => {
  const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(fetchGripRequest());
    }, [dispatch]);
  return (
    <div>
      <GripAddForm grip={grip} loading={loading} />
    </div>
  )
}

const mapStateToProps = ({ LandingReducer }) => ({
  grip: LandingReducer.grip,
  loading: LandingReducer.loading,
  error: LandingReducer.error,
});

export default connect(mapStateToProps)(Grip);
