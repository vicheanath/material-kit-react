import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { login } from 'src/store/actions/authAction';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  return (
    <>
      <Helmet>
        <title>Login | System</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Paper
            variant="outlined"
            style={{
              padding: 50,
            }}
          >
            <Formik
              initialValues={{
                username: 'root',
                password: 'root'
              }}
              validationSchema={Yup.object().shape({
                username: Yup.string().max(255).required('Username is required'),
                password: Yup.string().max(255).required('Password is required')
              })}
              onSubmit={(value) => {
                dispatch(login(value, navigate))
              }}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
                touched,
                values
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box display="flex" flexDirection="column" gap={2} sx={{ mb: 3 }} justify="center" alignItems="center">
                    <Box>
                      <img src="logo.png" />
                    </Box>
                    <Typography
                      color="primary"
                      variant="h1"
                      fontWeight="700"
                    >
                      LOGIN
                    </Typography>
                    <Typography
                      color="textSecondary"
                      gutterBottom
                      variant="body2"
                    >
                      To Control Dashbord
                    </Typography>
                  </Box>
                  <TextField
                    error={Boolean(touched.username && errors.username)}
                    fullWidth
                    helperText={touched.username && errors.username}
                    label="Username"
                    margin="normal"
                    name="username"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="username"
                    value={values.username}
                    variant="outlined"
                  />
                  <TextField
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    helperText={touched.password && errors.password}
                    label="Password"
                    margin="normal"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    variant="outlined"
                  />
                  <Box sx={{ py: 2 }}>
                    <Button
                      color="primary"
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Login in now
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default Login;
