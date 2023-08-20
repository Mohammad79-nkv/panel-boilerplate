import { FirstElementProps } from "../_all.model"

function H6({children , className , id , style , ...props}:FirstElementProps) {
    return (
      <h6 className={className} id={id} style={style} {...props}>
          {children}
      </h6>
    )
  }
export default H6