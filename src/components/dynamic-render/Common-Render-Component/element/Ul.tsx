import { FirstElementProps } from "./_all.model"

function Ul({children , className , style , id , ...props} : FirstElementProps) {
    return (
      <ul className={className} style={style} id={id} {...props}>
          {children}
      </ul>
    )
  }
  export default Ul