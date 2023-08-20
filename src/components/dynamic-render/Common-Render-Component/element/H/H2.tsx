import { FirstElementProps } from "../_all.model"

function H2({children , className , id , style , ...props}:FirstElementProps) {
    return (
      <h2 className={className} id={id} style={style} {...props}>
          {children}
      </h2>
    )
  }
  export default H2