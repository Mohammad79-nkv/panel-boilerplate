interface StylesProps {
    name : string ; 
    value : string;

}

export interface ConfigRenderComponent {
    component : string ;
    children: any;
    key:string | number;
    id?: string;
    className?: string ; 
    styles?: Array<StylesProps>;
    cursor?:string;
    src?: string ; 
    alt?: string ;
    onClick?: () => void;
}
