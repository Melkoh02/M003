import { Field, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import FormikEmailInput from '../components/formik/FormikEmailInput';
import { useTranslation } from 'react-i18next';

export default function ForgotPassword() {
  const { t } = useTranslation();

  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  const handleSubmit = () => {
    console.log('inside handleSubmit');
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
      <Paper elevation={3} sx={{ width: '100%', maxWidth: 420, p: 4 }}>
        <Typography variant="h4" fontWeight={400} gutterBottom>
          {t('forgotPassword.title')}
        </Typography>
        <FormikProvider value={formik}>
          <Box component="form" onSubmit={formik.handleSubmit}>
            <Stack spacing={2.5}>
              <Field
                component={FormikEmailInput}
                name="email"
                label={t('forgotPassword.email')}
                placeholder=""
                fullWidth
                autoFocus
              />
              <Button type="submit" variant="contained" size="large">
                {t('forgotPassword.submitButton')}
              </Button>
              <Stack spacing={1.25} sx={{ mt: 0.5 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 0.75,
                  }}>
                  <Typography variant="body2" color="text.secondary">
                    {t('forgotPassword.backToLogin')}
                  </Typography>
                  <Button
                    component={RouterLink}
                    to="/login"
                    variant="text"
                    size="small"
                    disableRipple
                    sx={{
                      textTransform: 'none',
                      px: 0,
                      minWidth: 0,
                      fontWeight: 700,
                    }}>
                    {t('login.loginButton')}
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
