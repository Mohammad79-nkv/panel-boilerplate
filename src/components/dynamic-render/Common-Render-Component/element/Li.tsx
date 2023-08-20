import { FirstElementProps } from "./_all.model"


function Li({children , className , style , id , ...props} : FirstElementProps) {
    return (
      <li className={className} style={style} id={id} {...props}>
          {children}
      </li>
    )
  }
export default Li