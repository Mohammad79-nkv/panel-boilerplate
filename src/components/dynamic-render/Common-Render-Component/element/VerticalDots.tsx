import {BiDotsVerticalRounded} from 'react-icons/bi';


const VerticalDots = (props : any) =>{
    return (                                                
        <BiDotsVerticalRounded id={props.id} className={props.className} style={props.style} {...props}/> 
    )
}
export  default VerticalDots;