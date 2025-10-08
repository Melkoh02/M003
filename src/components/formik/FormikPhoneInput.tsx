import * as React from 'react';
import {BaseFormikInput} from './BaseFormikInput';
import type {BaseFormikInputProps} from '../../lib/types/formik';

export default function FormikPhoneInput(props: BaseFormikInputProps) {
  return (
    <BaseFormikInput type="tel" inputMode="tel" autoComplete="tel" {...props} />
  );
}
