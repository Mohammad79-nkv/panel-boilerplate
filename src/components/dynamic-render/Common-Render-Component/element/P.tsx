import { FirstElementProps } from "./_all.model"

function P({children , className , style , id , ...props} : FirstElementProps) {
    return (
      <p className={className} style={style} id={id} {...props}>
          {children}
      </p>
    )
  }
export default P