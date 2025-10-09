import {Field, FormikProvider, useFormik} from 'formik';
import * as Yup from 'yup';
import {Box, Button, Paper, Stack, Typography} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';

import FormikEmailInput from '../components/formik/FormikEmailInput';
import FormikPasswordInput from '../components/formik/FormikPasswordInput';
import {useTranslation} from 'react-i18next';
import {useStore} from '../lib/hooks/useStore.ts';

export default function LoginScreen() {
  const {userStore} = useStore();
  const {t} = useTranslation();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = () => {
    console.log('inside handleSubmit');
  };

  const handleGuest = () => {
    console.log('inside handleGuest');
    const guestData = {
      access: 'guest',
      refresh: 'guest',
      user: {
        id: 0,
        email: 'guest',
        username: 'guest',
        name: 'guest',
        description: 'guest',
        birth_date: '1990-01-01',
        is_active: true,
      },
    };
    userStore.setAuth(guestData);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
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
        <Typography variant="h4" fontWeight={400} gutterBottom>
          {t('login.title')}
        </Typography>
        <FormikProvider value={formik}>
          <Box component="form" onSubmit={formik.handleSubmit}>
            <Stack spacing={2.5}>
              <Field
                component={FormikEmailInput}
                name="email"
                label={t('login.email')}
                placeholder=""
                fullWidth
                autoFocus
              />
              <Field
                component={FormikPasswordInput}
                name="password"
                label={t('login.password')}
                placeholder=""
                fullWidth
              />
              <Button type="submit" variant="contained" size="large">
                {t('login.loginButton')}
              </Button>
              <Button variant="outlined" size="large" onClick={handleGuest}>
                {t('login.continueAsGuest')}
              </Button>
              <Stack spacing={1.25} sx={{mt: 0.5}}>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                  <Button
                    component={RouterLink}
                    to="/forgot-password"
                    variant="text"
                    size="small"
                    disableRipple
                    sx={{
                      textTransform: 'none',
                      px: 0,
                      minWidth: 0,
                      fontWeight: 600,
                      alignSelf: 'center',
                    }}>
                    {t('login.forgotPassword')}
                  </Button>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 0.75,
                  }}>
                  <Typography variant="body2" color="text.secondary">
                    {t('login.noAccount')}
                  </Typography>
                  <Button
                    component={RouterLink}
                    to="/sign-up"
                    variant="text"
                    size="small"
                    disableRipple
                    sx={{
                      textTransform: 'none',
                      px: 0,
                      minWidth: 0,
                      fontWeight: 700,
                    }}>
                    {t('signUp.signUpButton')}
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </FormikProvider>
      </Paper>
    </Box>
  );
}
