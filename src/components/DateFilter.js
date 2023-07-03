import React, { useEffect, useState } from 'react';
import { BsFilter } from 'react-icons/bs';
// import '../styles/globals.css'
import { connect, useDispatch } from "react-redux";
import { fetchPredictRequest } from '../redux/predict/actions';

const DateFilter = ({ predicts, onDateChange }) => {
  const [dateFrom, setDateFrom] = useState(new Date().toISOString().split('T')[0]);
  const [dateTo, setDateTo] = useState(null);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const handleDateChange = (e) => {
    const date = e.target.value;
    const team_name = e.target.value;
    setDateTo(date);
    setDateTo(team_name);
  };

  return (
    <div className='filter'>
      <label htmlFor="date-picker">
        <BsFilter className='filter-icon' />
      </label>
      <input
        type='text'
        value={dateTo}
        onChange={handleDateChange}
        className='date-picker'
      />
    </div>
  );
};
const mapStateToProps = ({ PredictReducer }) => ({
  predicts: PredictReducer.predicts,
});

export default connect(mapStateToProps)(DateFilter);