import {FirstElementProps} from './_all.model';

function Footer({children , className , style , id , ...props} : FirstElementProps ) {
    return (
      <footer className={className} id={id} style={style} {...props}>
          {children}
      </footer>
    )
  }
export default Footer