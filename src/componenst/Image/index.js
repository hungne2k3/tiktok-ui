import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '../../assest/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallBack: customFallBack = images.noImage, ...pops }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handlError = () => {
        setFallBack(customFallBack);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...pops}
            onError={handlError}
        />
    );
});

export default Image;
