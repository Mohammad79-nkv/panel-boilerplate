
// import FormElement from '@/components/dynamic-render/Form-Render-Component/Form/FormElement';
// import FormRenderer from '@/components/dynamic-render/Form-Render-Component/Form/Form'
// import {Form , Select , Radio  , Button  } from 'antd'
// import { InboxOutlined } from '@ant-design/icons';
// import styled from 'styled-components'
// import { renderComponent } from '@/components/dynamic-render/Common-Render-Component/render-component';

import { useTranslation } from "react-i18next";
import messages from "./messages";

// import {  useRenderHeader } from '@/config/components-config/header';
// import {motion} from 'framer-motion'
// import { titleAnim  , lineAnim , scrollReveal , pageAnimation } from '@/config/animation';

// const { Option } = Select;

// function TestPage() {
//     const headerConfig = useRenderHeader()
//     // const { t } = useTranslation();
//     const handleFinishItem = (values: any) => {
//         console.log('e', values , values.rememberme)
//     }

//     const prefixSelector = (
//         <Form.Item name="prefix" noStyle>
//           <Select defaultValue="86" style={{ width: 70 }}>
//             <Option selected value="86">+86</Option>
//             <Option value="87">+87</Option>
//           </Select>
//         </Form.Item>
//       );

//     const components = [
//         {
//             component: "input",
//             label: "First Name",
//             name: 'firstName',
//             key: 0,
//             labelCol: { span: 3 },
//             wrapperCol: { span:21 },
//             colSpan:12,
//             rules: [
//                 { type: 'text', message: 'important ' },
//                 { required: true, message: 'important' }
//             ],
//         },
//         {
//             component: "input",
//             label: "Last Name",
//             name: 'lastName',
//             key: 1,
//             labelCol: { span: 3 },
//             wrapperCol: { span: 21 },
//             colSpan:12,
//             rules: [
//                 { type: 'text', message: 'important' },
//                 { required: true, message: 'important' }
//             ],
//         },
//         {
//             component: "input",
//             label: "Email",
//             rules: [
//                 { type: 'email', message: 'important Email' },
//                 { required: true, message: 'important' }
//             ],
//             name: 'email',
//             key: 2,
//             labelCol: { span: 3 },
//             wrapperCol: { span: 21 },
//             colSpan:11
//         },
//         {
//             component: "password",
//             label: "Password",
//             name: 'password',
//             key: 3,
//             labelCol: { span: 3 },
//             wrapperCol: { span: 21 },
//             colSpan:11,
//             rules: [
//                 { type: 'password', message: 'asdnjadbs ' },
//                 { required: true, message: 'this is very important' ,min:6}
//             ],
//         },
//         {
//             component: "checkbox",
//             valuePropName: "checked",
//             label: "Stay signed in",
//             name: 'rememberme',
//             key: 4,
//             colSpan:24
//             // labelCol: { span: 24 },
//             // wrapperCol: { span: 24 },
//         },
//         {
//             component: "input",
//             label: "Stay signed in",
//             name: 'phoneNumber',
//             key: 5,
//             colSpan:24,
//             propChildren:{
//                 addonBefore: prefixSelector
//             }
//             // labelCol: { span: 24 },
//             // wrapperCol: { span: 24 },
//         },
//         {
//             component: "input",
//             label: "Stay signed in",
//             name: 'phoneNumber',
//             key: 6,
//             colSpan:24,
//             propChildren:{
//                 addonBefore: prefixSelector
//             }
//             // labelCol: { span: 24 },
//             // wrapperCol: { span: 24 },
//         },
//         {
//             component: "radioGroup",
//             label: "radio group",
//             name: 'radio',
//             key: 7,
//             colSpan:24,
//             rules:[{ required: true, message: 'Please pick an item!'}],
//             children : <><Radio.Button value="a">item 1</Radio.Button>
//             <Radio.Button value="b">item 2</Radio.Button>
//             <Radio.Button value="c">item 3</Radio.Button></>
//             // labelCol: { span: 24 },
//             // wrapperCol: { span: 24 },
//         },
//         {
//             component: "rate",
//             label: "rate",
//             name: 'rate',
//             key: 8,
//             colSpan:24,
//         },
//         {
//             component: "select",
//             label: "select",
//             name: 'select',
//             key: 9,
//             colSpan:24,
//             children : <> <Option value="red">Red</Option>
//             <Option value="green">Green</Option>
//             <Option value="blue">Blue</Option></>,
//             propChildren:{
//                 mode: 'multiple'
//             }
//             // labelCol: { span: 24 },
//             // wrapperCol: { span: 24 },
//         },
//         {
//             component: "upload",
//             label: "upload",
//             name: 'upload',
//             key:10,
//             colSpan:24,
//             children : <> <Button> asdnjadbs</Button></>,
//             propChildren:{
//                 mode: 'multiple'
//             }
//             // labelCol: { span: 24 },
//             // wrapperCol: { span: 24 },
//         },
//         {
//             component: "uploadDrager",
//             label: "Upload Dragger",
//             name: 'Upload Dragger',
//             key:11,
//             colSpan:12,
//             children : <> <p className="ant-upload-drag-icon">
//             <InboxOutlined />
//           </p>
//           <p className="ant-upload-text">Click or drag file to this area to upload</p>
//           <p className="ant-upload-hint">Support for a single or bulk upload.</p>
//           </>,
//             propChildren:{
//                 name:"files"
//             }
//             // labelCol: { span: 24 },
//             // wrapperCol: { span: 24 },
//         },
//         {
//             component: "button",
//             key: 12,
//             propChildren:{
//                 type:'primary',
//                 htmlType:'submit',
//                 className:'bg-primary hover:bg-white',
//             },
//             title:'submit',
//             colSpan:24,
//             // labelCol: { span: 24 },
//             // wrapperCol: { span: 24 },
//         },
//     ]


//     return (
//         <motion.div variants={pageAnimation}>
//         <motion.h1 variants={scrollReveal}>
//             amirali
//         </motion.h1>
//         <motion.h2 variants={titleAnim}>
//             atousa
//         </motion.h2>
//         <Container  variants={scrollReveal}>
//             <FormRenderer
//                 scrollToFirstError={true}
//                 name="basic"
//                 labelAlign='left'
//                 labelWrap={false}
//                 size='middle'
//                 onFinish={handleFinishItem}
//                 layout={'vertical'}
//                 justify={'start'}
//                 align={'top'}
//                 gutter={[20,25]}
//             >
//                 {components.map((component) => (
//                     <FormElement {...component} />
//                 ))}
//             </FormRenderer>    
//         </Container>
//         {renderComponent(headerConfig)}
//         <motion.div variants={lineAnim} style={{width:'100%' , backgroundColor:'red',padding:'3px' , height:'3px'}}></motion.div>
//         </motion.div>
//     )
// }
// export default TestPage


// const Container = styled(motion.div)(() => `
//     width:90%;
//     // background-color:red;
//     padding :20px; 
//     margin : 0 auto;
//     border:1px solid #212121;
//     border-radius :10px; 
// `)
const TestPage = () => {

    const {t} = useTranslation()

    return (<div>{t(messages.title)}</div>)
}

export default TestPage;