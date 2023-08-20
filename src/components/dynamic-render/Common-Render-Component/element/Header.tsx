import { FirstElementProps } from "./_all.model"

function Header({children , className , style , id , ...props}: FirstElementProps) {
    return (
      <header className={className} id={id} style={style} {...props}>
          {children}
      </header>
    )
  }
  export default Header