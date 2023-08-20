import { FirstElementProps } from "../_all.model"


function H1({children , className , id , style , ...props} :FirstElementProps ) {
    return (
      <h1 className={className} id={id} style={style} {...props}>
          {children}
      </h1> 
    )
  }
export default H1