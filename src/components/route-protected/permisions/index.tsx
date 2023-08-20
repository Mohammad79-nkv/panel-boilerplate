import {cloneElement, JSXElementConstructor, ReactElement, ReactNode} from 'react'
import {PERMISSIONS  }  from './permission-maps'

interface IPermision {
    children: ReactNode | ReactElement<any, string | JSXElementConstructor<any>> | Element
    scopes  : string[];
    RenderError ?:  () =>  JSX.Element ;
    errorProps?: never,
}

interface HasPermision {
    permissions:any ;
    scopes: string[];
}

const hasPermission = (props : HasPermision) => {
    const scopesMap : any = {};
    props.scopes.forEach((scope : any) => {
      scopesMap[scope] = true;
    });
  
    return props?.permissions.some((permission : any) => scopesMap[permission]);
  };

export default function PermissionsGate(props:IPermision) {
    const { 
        children , 
        RenderError = () =>  <></> ,
        errorProps = null as null ,
        scopes = []
    } = props; 
    // const { role } = useGetRole();
    const role : string = "VIEWER"
    const permissions = PERMISSIONS[role];
    const permissionGranted = hasPermission({ permissions, scopes });

    if (!permissionGranted && !errorProps) return <RenderError/>;

    if (!permissionGranted && errorProps) return cloneElement(children as any, { ...errorProps as any });

    return <>{children}</>;
}