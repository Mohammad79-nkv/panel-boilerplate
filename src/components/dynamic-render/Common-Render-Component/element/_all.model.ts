import { ReactElement, ReactNode } from "react";

export interface FirstElementProps  {
    id?: string;
    className?:string;
    style?:any;
    children?: JSX.Element | ReactNode | ReactElement; 
    onClick ?: () => void;
}