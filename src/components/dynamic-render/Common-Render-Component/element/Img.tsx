import {FirstElementProps} from './_all.model'

interface ImageProps extends Omit<FirstElementProps , "children">{
    alt?: string;
    src: string;
}

const Img = ({src , alt , className , style , id , ...props  } :  ImageProps) => {
    return (
        <img
           src={src}
           alt={alt}
           className={className}
           style={style}
           id={id}
           {...props}
        />
    )
}
export default Img