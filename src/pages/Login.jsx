import { Button, colors, H1, Stack, TextInput, useLang } from '@manulife/mux';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Card from 'src/components/CardWrapper';

const logoStyle = {
  backgroundColor: colors.light_2_grey,
  borderRadius: '0.25rem',
  display: 'flex',
  height: 'calc(var(--line-height-lg) * 1.75)',
  padding: '0.75rem 1rem',
};

const Login = ({ setIsLogin, setRole }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const API_URL = 'http://localhost:3001';
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        username,
        password
      });

      if (response.status === 200) {
        setIsLogin(true);
        setRole(response.data.roles)
        navigate('/');
      }
   
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Stack justify="center" gap="3rem" style={{ minHeight: 'calc(100vh - 300px)' }}>
      <H1>
        Login Form
      </H1>
      <Card maxWidth="1024px">
        <Stack
          className="prose-lg"
          direction="row"
          gap="0.75rem"
          justify="center"
          style={{ fontSize: 'var(--font-size-lg)' }}
        >
          <Stack direction="column">
            <TextInput label="Username" onChange={(value) => setUsername(value)} placeholder="Enter username" />
            <TextInput label="Password" onChange={(value) => setPassword(value)} isPassword placeholder="Enter password" />
            <Stack direction="row">
              <Button onClick={handleLogin} small variant={Button.VARIANT.PRIMARY} placeholder="Enter username">Login</Button>
              <Button small variant={Button.VARIANT.SECONDARY} placeholder="Enter username">Clear</Button>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};

export default Login;
