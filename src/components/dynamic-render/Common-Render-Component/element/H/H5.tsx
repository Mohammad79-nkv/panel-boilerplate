import { FirstElementProps } from "../_all.model"

function H5({ children, className, id, style , ...props}: FirstElementProps) {
    return (
        <h5 className={className} id={id} style={style} {...props}>
            {children}
        </h5>
    )
}
export default H5