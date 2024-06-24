import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { login } from '../apis/userApi';
import { Button, TextField } from '@mui/material';

const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await login(email, password);
      router.push('/main');
    } catch (error) {
      console.error('Failed to login', error);
    }
  };

  return (
    <div>
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default Login;
