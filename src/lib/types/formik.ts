import type {FieldProps} from 'formik';
import type {SxProps, TextFieldProps, Theme} from '@mui/material';

export type Option = {label: string; value: string | number};

export type BaseFormikInputProps = FieldProps &
  Omit<TextFieldProps, 'name' | 'value' | 'onChange' | 'onBlur'> & {
    sx?: SxProps<Theme>;
  };

export type FormikSelectInputProps = FieldProps & {
  label?: React.ReactNode;
  placeholder?: string;
  options: Option[];
  defaultValue?: Option['value'] | null;
  onSearch?: (query: string) => void;
  sx?: SxProps<Theme>;
};
