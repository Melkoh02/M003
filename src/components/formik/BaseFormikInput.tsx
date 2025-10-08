import TextField from '@mui/material/TextField';
import type {BaseFormikInputProps} from '../../lib/types/formik.ts';

export function BaseFormikInput({
  field,
  form,
  meta,
  sx,
  helperText,
  ...rest
}: BaseFormikInputProps) {
  const showError = Boolean(meta?.touched && meta?.error);

  return (
    <TextField
      {...rest}
      {...field}
      value={field.value ?? ''}
      onChange={form.handleChange}
      onBlur={form.handleBlur}
      error={showError}
      helperText={showError ? meta?.error : helperText}
      fullWidth
      margin="normal"
      variant="outlined"
      sx={sx}
    />
  );
}

export default BaseFormikInput;
