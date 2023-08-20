import { Input, Form, Checkbox, Button, Col, InputNumber, Switch, Slider, Rate, Radio, Select, Upload } from "antd"
import { ReactNode } from "react";
import { CreateObjectLiterals } from './../../../../tools/pure-function/object-literal';


export enum Type_List_Component {
  Form = 'Form',
  // List = 'List',
}



type LableAlign = 'right' | 'left';
type ValidationStatus = "" | "success" | "warning" | "error" | "validating" | undefined;

export interface FormElementProps {
  label?: string;
  name?: string;
  component: any;
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
  normalize?: (value: any, prevValue: any, prevValues: any) => any
  getValueProps?: (value: any) => any;
  getValueFromEvent?: (...args: any[]) => any;
  extra?: ReactNode;
  validateFirst?: boolean | any;
  rules?: any;
  colSpan?: number;
  propChildren?: any;
  title?: string;
  children?: JSX.Element;
  
}

function FormElement(props: FormElementProps) {
  const {
    component,
    label,
    rules,
    name,
    dependencies,
    hasFeedback,
    hidden,
    labelAlign,
    labelCol,
    messageVariables,
    noStyle,
    tooltip,
    trigger,
    htmlFor,
    wrapperCol,
    valuePropName,
    validateTrigger,
    validateStatus,
    preserve,
    initialValue,
    help,
    normalize,
    shouldUpdate,
    getValueProps,
    getValueFromEvent,
    extra,
    colon,
    validateFirst,
    colSpan = 12,
    propChildren,
    title,
    children
  } = props;

  const componentMapping: any = {
    input: <Input {...propChildren} />,
    password: <Input.Password {...propChildren} />,
    checkbox: <Checkbox {...propChildren} />,
    button: <Button {...propChildren}>{title}</Button>,
    number: <InputNumber  {...propChildren} />,
    switch: <Switch  {...propChildren} />,
    slider: <Slider  {...propChildren} />,
    rate: <Rate {...propChildren} />,
    radioGroup: <Radio.Group {...propChildren}>{children}</Radio.Group>,
    select: <Select {...propChildren}>{children}</Select>,
    upload: <Upload {...propChildren}>{children}</Upload>,
    uploadDrager: <Upload.Dragger {...propChildren}>
      {children}
    </Upload.Dragger>
  }

  // const Component = componentMapping[component];
  const FinalObjectRendered: JSX.Element = CreateObjectLiterals(componentMapping, component, componentMapping['input'])

  return (
    <Col span={colSpan} >
      <Form.Item
        label={label}
        name={name}
        rules={rules}
        initialValue={initialValue}
        colon={colon}
        labelAlign={labelAlign}
        hasFeedback={hasFeedback}
        dependencies={dependencies}
        hidden={hidden}
        labelCol={labelCol}
        messageVariables={messageVariables}
        noStyle={noStyle}
        tooltip={tooltip}
        trigger={trigger}
        htmlFor={htmlFor}
        wrapperCol={wrapperCol}
        valuePropName={valuePropName}
        validateTrigger={validateTrigger}
        validateStatus={validateStatus}
        shouldUpdate={shouldUpdate}
        preserve={preserve}
        normalize={normalize}
        help={help}
        getValueFromEvent={getValueFromEvent}
        getValueProps={getValueProps}
        extra={extra}
        validateFirst={validateFirst}
      >
        {/* <Component /> */}
        {FinalObjectRendered}
      </Form.Item>
    </Col>
  )

}
export default FormElement