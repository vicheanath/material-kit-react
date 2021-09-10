import {
  Box,
  Button,
  Card,
  CardContent,
  DialogActions,
  Grid
} from '@material-ui/core';
import { useDispatch } from 'react-redux'
import { openModal } from 'src/store/actions/uiActiuons';
import Modal from 'src/components/Modal';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';



const UserListToolbar = (props) => {
  const dispatch = useDispatch()
  return (
    <Box {...props}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button>
          Import
        </Button>
        <Button sx={{ mx: 1 }}>
          Export
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => dispatch(openModal())}
        >
          Add User
        </Button>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Formik
              initialValues={{
                username: '',
                password: '',
                phone: '',
              }}
              validationSchema={Yup.object().shape({
                username: Yup.string()
                  .max(14, 'Username must be 6 to 14 characters')
                  .min(6, 'Username must be 6 to 14 characters')
                  .required('Username is required'),
                phone: Yup.number('Phone number mus be').positive('This is not allow to nagative number').required('Phone number is required'),
                password: Yup.string().required('Password is required'),
                repassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
              })}
              onSubmit={async () => {
                alert("submit")
              }}
            >
              {({ handleChange, handleSubmit, isSubmitting, touched, values }) => (
                <Form noValidate autoComplete="off">
                  {/* <Field component={DatePicker} label="label" name="name" />; */}
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Box>
      <Modal
        title="Add New User"
      >
        <Formik
          initialValues={{
            username: '',
            password: '',
            phone: '',
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string()
              .max(14, 'Username must be 6 to 14 characters')
              .min(6, 'Username must be 6 to 14 characters')
              .required('Username is required'),
            phone: Yup.number('Phone number mus be').positive('This is not allow to nagative number').required('Phone number is required'),
            password: Yup.string().required('Password is required'),
            repassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
          })}
          onSubmit={async () => {
            alert("submit")
          }}
        >
          {({ handleChange, handleSubmit, isSubmitting, touched, values }) => (
            <Form noValidate autoComplete="off">
              <Grid container direction="column" spacing={1}>
                <Grid item >
                  <Field
                    component={TextField}
                    name="username"
                    type="text"
                    label="Username"
                  />
                </Grid>
                <Grid item >
                  <Field
                    component={TextField}
                    name="password"
                    type="password"
                    label="password"
                  />
                </Grid>
                <Grid item >
                  <Field
                    component={TextField}
                    name="password"
                    type="password"
                    label="password"
                  />
                </Grid>
              </Grid>

              <DialogActions>
                <Button variant="outlined" color="primary">
                  Save
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>

      </Modal>
    </Box>
  )
};

export default UserListToolbar;
