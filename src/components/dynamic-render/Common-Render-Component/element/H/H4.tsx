import { FirstElementProps } from "../_all.model"

function H4({children , className , id , style , ...props}:FirstElementProps) {
    return (
      <h4 className={className} id={id} style={style} {...props}>
          {children}
      </h4>
    )
  }
export default H4