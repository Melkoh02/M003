import { MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useStore } from '../../lib/hooks/useStore';
import { SUPPORTED_LANGUAGES } from '../../lib/constants/languages';

type Props = { size?: 'small' | 'medium' };

export default function LanguageSelect({ size = 'small' }: Props) {
  const { languageStore } = useStore();
  const { i18n, t } = useTranslation();

  const handleChange = (e: SelectChangeEvent<string>) => {
    languageStore.setLanguage(e.target.value as string);
  };

  return (
    <Select
      size={size}
      value={i18n.language}
      onChange={handleChange}
      aria-label={t('modals.selectLanguageModal.title') || 'Language'}
      sx={{ minWidth: 140 }}>
      {SUPPORTED_LANGUAGES.map(opt => (
        <MenuItem key={opt.id} value={opt.id}>
          {t(opt.labelKey)}
        </MenuItem>
      ))}
    </Select>
  );
}
