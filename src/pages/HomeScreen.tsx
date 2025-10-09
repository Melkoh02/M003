import {Box, Button, Paper, Stack, Typography} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {useStore} from '../lib/hooks/useStore';
import LanguageSelect from '../components/organisims/LanguageSelect.tsx';

export default function HomeScreen() {
  const {userStore} = useStore();
  const {t} = useTranslation();

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}>
      <Paper elevation={2} sx={{width: '100%', maxWidth: 960, p: 3}}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 2,
          }}>
          <Typography variant="h5" fontWeight={700}>
            {t('home.title')}
          </Typography>

          <Stack direction="row" spacing={1.5} alignItems="center">
            <LanguageSelect />
            <Button
              variant="contained"
              color="primary"
              onClick={() => userStore.logout()}>
              {t('settings.logout')}
            </Button>
          </Stack>
        </Box>

        <Typography variant="body1" color="text.secondary">
          {t('home.welcome')}
        </Typography>
      </Paper>
    </Box>
  );
}
