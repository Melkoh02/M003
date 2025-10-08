import {MenuItem, Select} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {useStore} from '../../lib/hooks/useStore.ts';

function LanguageSelect() {
  const {languageStore} = useStore();
  const {i18n, t} = useTranslation();

  return (
    <Select
      size="small"
      value={i18n.language}
      onChange={e => languageStore.setLanguage(e.target.value as string)}>
      <MenuItem value="en">
        {t('modals.selectLanguageModal.languages.en')}
      </MenuItem>
      <MenuItem value="es">
        {t('modals.selectLanguageModal.languages.es')}
      </MenuItem>
    </Select>
  );
}
