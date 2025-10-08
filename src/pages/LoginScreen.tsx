import {Field, FormikProvider, useFormik} from 'formik';
import * as Yup from 'yup';
import {Box, Button, Paper, Stack, Typography} from '@mui/material';
import {Link as RouterLink, useNavigate} from 'react-router-dom';

import FormikEmailInput from '../components/formik/FormikEmailInput';
import FormikPasswordInput from '../components/formik/FormikPasswordInput';
import {useStore} from '../lib/hooks/useStore.ts';
import useApi from '../lib/hooks/useApi.ts';

type LoginValues = {
  email: string;
  password: string;
};

export default function LoginScreen() {
  const navigate = useNavigate();
  const {userStore} = useStore();
  const api = useApi();

  const initialValues: LoginValues = {
    email: 'admin@admin.com',
    password: 'admin',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (data: any) => {
    api.login(data).handle({
      onSuccess: () => {
        console.log('Success');
      },
      onError: () => {
        console.log('Error');
      },
      onFinally: () => {
        console.log('Finish');
      },
    });
  };

  const formik = useFormik<LoginValues>({
    initialValues,
    validationSchema,
    onSubmit: () => {
      console.log('submitted');
    },
  });

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}>
      <Paper elevation={3} sx={{width: '100%', maxWidth: 420, p: 4}}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Login
        </Typography>
        <FormikProvider value={formik}>
          <Stack spacing={2.5}>
            <Field
              component={FormikEmailInput}
              name="email"
              label="Email"
              placeholder="you@example.com"
              fullWidth
              autoFocus
            />
            <Field
              component={FormikPasswordInput}
              name="password"
              label="Password"
              placeholder="123456789"
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              onClick={() => {
                console.log('Submitted');
              }}
              disabled={formik.isSubmitting || !formik.isValid}>
              {formik.isSubmitting ? 'Signing in…' : 'Sign in'}
            </Button>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Button
                component={RouterLink}
                to="/forgot-password"
                variant="text"
                size="small"
                sx={{alignSelf: 'flex-start'}}>
                Forgot password?
              </Button>
              <Typography>Don't have an account?,</Typography>
              <Button
                component={RouterLink}
                to="/sign-up"
                variant="text"
                size="small">
                Sign Up!
              </Button>
            </Box>
          </Stack>
        </FormikProvider>
      </Paper>
    </Box>
  );
}
