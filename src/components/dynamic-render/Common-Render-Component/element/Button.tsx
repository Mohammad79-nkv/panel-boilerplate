
import {FirstElementProps} from './_all.model'

const Button = ({style ,id , className , children , ...props} : FirstElementProps) =>{
    return (
        <button className={className} id={id} style={style} {...props}>
            {children}
        </button>
    )
}
export default Button