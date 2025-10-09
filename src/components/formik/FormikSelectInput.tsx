import { useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import type { FormikSelectInputProps, Option } from '../../lib/types/formik';

export default function FormikSelectInput(props: FormikSelectInputProps) {
  const {
    field,
    form,
    meta,
    label,
    placeholder,
    options,
    defaultValue,
    onSearch,
    sx,
  } = props;

  // seed initial value if provided
  useEffect(() => {
    if (
      defaultValue != null &&
      (field.value === undefined || field.value === null)
    ) {
      form.setFieldValue(field.name, defaultValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selected = options.find(o => o.value === field.value) ?? null;

  const showError = Boolean(meta?.touched && meta?.error);

  return (
    <Autocomplete<Option, false, false, false>
      options={options}
      value={selected}
      getOptionLabel={o => o.label}
      onChange={(_, newVal) => {
        form.setFieldValue(field.name, newVal ? newVal.value : null);
        form.setFieldTouched(field.name, true, false);
      }}
      onInputChange={(_, input) => onSearch?.(input)}
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          error={showError}
          helperText={showError ? meta?.error : undefined}
          fullWidth
          margin="normal"
        />
      )}
      sx={sx}
    />
  );
}
