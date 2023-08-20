import { FirstElementProps } from "./_all.model"

function Span({children , className , style , id , ...props } : FirstElementProps ) {
    return (
      <span className={className} style={style} id={id}  {...props} >
          {children}
      </span>
    )
  }
export default Span