import { FirstElementProps } from "../_all.model"

function H3({children , className , id , style , ...props} : FirstElementProps) {
    return (
      <h3 className={className} id={id} style={style} {...props}>
          {children}
      </h3>
    )
  }
export default H3