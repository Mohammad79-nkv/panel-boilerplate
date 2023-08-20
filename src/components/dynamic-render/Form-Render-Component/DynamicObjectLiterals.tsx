// import Form , {ConfigFormProps}  from './Form/Form';
// import List , {ConfigListProps} from 'components/pure-elements/List';
import { CreateObjectLiterals } from './../../../tools/pure-function/object-literal';
import { Fragment } from 'react';


export enum Type_List_Component {
    Form = 'Form',
    // List = 'List',
}

interface ObjectTest {
    Form: JSX.Element;
    // List: JSX.Element;
}

interface DynamicObjectLiteralsProps {
    type: Type_List_Component;
    configKey : any ;
    // configKey : ConfigFormProps | ConfigListProps
}


function DynamicObjectLiterals(props:DynamicObjectLiteralsProps) {
    const objTest: ObjectTest = {
        // Form: <Form config={props?.configKey! as ConfigFormProps}/>,
        // List: <List config={props?.configKey! as ConfigListProps}/>
        Form :<>form rendering with type</>
    };

    const FinalObjectRendered : JSX.Element = CreateObjectLiterals(objTest, props.type, Type_List_Component.Form) 
    return (
        <Fragment>
            {FinalObjectRendered}
        </Fragment>
    )
}
export default DynamicObjectLiterals