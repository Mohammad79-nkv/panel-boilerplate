import { FORM_COMPONENTS } from '@/enum/formComponents.enum';
import React, { ReactNode } from 'react';
import { ButtonProps } from 'antd';

type LableAlign = 'right' | 'left';
type ValidationStatus =
  | ''
  | 'success'
  | 'warning'
  | 'error'
  | 'validating'
  | undefined;

export interface FormElementProps {
  label?: string;
  name?: string;
  key?: string | number;
  component: FORM_COMPONENTS;
  initialValue?: string;
  colon?: boolean;
  dependencies?: Array<string>;
  hasFeedback?: boolean;
  hidden?: boolean;
  labelAlign?: LableAlign;
  labelCol?: object;
  messageVariables?: Record<string, string>;
  noStyle?: boolean;
  trigger?: string;
  htmlFor?: string;
  wrapperCol?: object;
  valuePropName?: string;
  validateTrigger?: string | Array<string>;
  validateStatus?: ValidationStatus;
  preserve?: boolean;
  tooltip?: any;
  help?: ReactNode;
  shouldUpdate?: (prevValue: any, curValue: any) => boolean | boolean;
  normalize?: (value: any, prevValue: any, prevValues: any) => any;
  getValueProps?: (value: any) => any;
  getValueFromEvent?: (...args: any[]) => any;
  extra?: ReactNode;
  validateFirst?: boolean | any;
  rules?: any;
  colSpan?: number;
  title?: string;
  children?: JSX.Element;
  propChildren?: any;
}

export type ComponentMaping = {
  [key in FORM_COMPONENTS]: React.ReactElement;
};
