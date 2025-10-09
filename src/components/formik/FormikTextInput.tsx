import * as React from 'react';
import { BaseFormikInput } from './BaseFormikInput';
import type { BaseFormikInputProps } from '../../lib/types/formik';

export default function FormikTextInput(props: BaseFormikInputProps) {
  return <BaseFormikInput {...props} />;
}
