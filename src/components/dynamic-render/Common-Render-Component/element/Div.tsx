import {FirstElementProps} from './_all.model';

interface DivProps extends FirstElementProps {
    dir?: string
}

function Div({children , className , style , id , dir , onClick} : DivProps) {
    return (
      <div className={className} style={style} id={id} dir={dir} onClick={onClick}>
          {children}
      </div>
    )
  }
export default Div