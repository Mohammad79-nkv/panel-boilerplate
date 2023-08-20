import {  createElement } from "react";
import {H1 , H2 , H3 , H4 , H5 , H6} from './element/H/_index';
import {Button , Div , Footer , Header , Li , P , Span , Ul , VerticalDots , Img} from './element/_index';
import {ConfigRenderComponent} from 'model/etc/render-cmponent.model'



const KeysToComponentMap :any ={
    button : Button ,
    div : Div ,
    footer : Footer ,
    header : Header ,
    li : Li ,
    p : P ,
    span : Span ,
    ul : Ul ,
    verticalDots : VerticalDots,
    h1 : H1  ,
    h2 : H2 ,
    h3 : H3 ,
    h4 : H4 , 
    h5 : H5, 
    h6 : H6,
    img : Img,
}


interface StylePropsArray {
    name : string;
    value : string;
}

interface MappedStyles  {
    [key : string] : string
}

const StylesMaps = (styles: Array<StylePropsArray>) =>{
    let mappedStyles: MappedStyles = {};
    styles?.forEach((style:StylePropsArray) => {
        mappedStyles[style.name] = style.value
    })
    return mappedStyles ;

}


export const renderComponent = (config : ConfigRenderComponent)  => {
    if(typeof KeysToComponentMap[config.component] !== 'undefined'){
        return createElement(
            KeysToComponentMap[config.component] , 
            {
                style : config.styles ? StylesMaps(config.styles) : null ,
                // onClick : config.onClick ? config.onClicker() : null,
                ...config
            },
            [config.children && 
            ( typeof config.children === 'string'
                ? config.children
                : config.children.map((c : any) => renderComponent(c))
            ) ]
        )
    }
}