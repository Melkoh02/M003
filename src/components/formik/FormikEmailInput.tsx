import {BaseFormikInput} from './BaseFormikInput';
import type {BaseFormikInputProps} from '../../lib/types/formik';

export default function FormikEmailInput(props: BaseFormikInputProps) {
  return (
    <BaseFormikInput
      type="email"
      inputMode="email"
      autoComplete="email"
      {...props}
    />
  );
}
