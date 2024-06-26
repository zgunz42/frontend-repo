import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from '@mui/material';
import { updateUserData, fetchUserData } from '../apis/userApi';
import { RootState } from '../store/reducers';
import { fetchUserStart, fetchUserSuccess, fetchUserFailure } from '../store/userSlice';

const UpdateButton: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.user);

  const handleClick = async () => {
    dispatch(fetchUserStart());
    try {
      await updateUserData();
      
      const users = await fetchUserData();
      dispatch(fetchUserSuccess(users)); 
    } catch (err) {
      dispatch(fetchUserFailure('Failed to update data'));
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick} disabled={loading}>
        Update Status
      </Button>
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
    </div>
  );
};

export default UpdateButton;
