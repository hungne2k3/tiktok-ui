// Thu vien PropTypes
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    disabled = false,
    rounded = false,
    small = false,
    large = false,
    leftIcon,
    rightIcon,
    className,
    children,
    onClick,
    ...passPost
}) {
    let Comp = 'button';
    const pops = {
        onClick,
        ...passPost,
    };

    if (disabled) {
        // nếu mà có disabled thì sẽ loại bỏ sự kiện onClick
        Object.keys(pops).forEach((key) => {
            // kiểm tra nếu có sự kiện bắt đầu có chữ "on" và kiểm tra kiểu nếu là "function" thì sẽ xóa pops key đấy đi
            if (key.startsWith('on') && typeof pops[key] === 'function') {
                delete pops[key];
            }
        });
    }

    if (to) {
        pops.to = to;
        Comp = Link;
    } else if (href) {
        pops.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        disabled,
        rounded,
        small,
        large,
    });

    return (
        <Comp className={classes} {...pops}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default Button;
