import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from '@mui/material';
import { updateUserData, fetchUserData } from '../apis/userApi';
import { RootState } from '../store/reducers';
import { fetchUserStart, fetchUserSuccess, fetchUserFailure } from '../store/userSlice';

const UpdateButton: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state: RootState) => state.user);

  const handleClick = async () => {
    dispatch(fetchUserStart());
    try {
      const result = await updateUserData('user-id', { name: 'New Name' });
      dispatch(fetchUserSuccess(result.data));
    } catch (err) {
      dispatch(fetchUserFailure('Failed to update data'));
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick} disabled={loading}>
        Update Data
      </Button>
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      {data && <Typography>Data: {JSON.stringify(data)}</Typography>}
    </div>
  );
};

export default UpdateButton;
