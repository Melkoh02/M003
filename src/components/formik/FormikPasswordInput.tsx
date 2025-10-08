import {useState} from 'react';
import {IconButton, InputAdornment} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {BaseFormikInput} from './BaseFormikInput';
import type {BaseFormikInputProps} from '../../lib/types/formik';

export default function FormikPasswordInput(props: BaseFormikInputProps) {
  const [show, setShow] = useState(false);

  return (
    <BaseFormikInput
      type={show ? 'text' : 'password'}
      autoComplete="current-password"
      // TODO: check InputProps deprecated flag
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label={show ? 'Hide password' : 'Show password'}
              onClick={() => setShow(s => !s)}
              edge="end">
              {show ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
}
