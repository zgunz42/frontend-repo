'use client';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../apis/userApi';
import UpdateButton from '../components/UpdateButton';
import { fetchUserStart, fetchUserSuccess, fetchUserFailure } from '../store/userSlice';

const Main: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchUserStart());
      try {
        const data = await fetchUserData('user-id');
        dispatch(fetchUserSuccess(data));
      } catch (error) {
        dispatch(fetchUserFailure('Failed to fetch user data'));
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>Main Page</h1>
      <UpdateButton />
    </div>
  );
};

export default Main;
