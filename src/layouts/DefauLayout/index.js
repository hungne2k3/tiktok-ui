import classNames from 'classnames/bind';
import styles from './DefauLayout.module.scss';
import Header from '../components/Header';
import Sidebar from './SideBar/Sidebar';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function DefauLayOut({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />

            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefauLayOut.prototype = {
    children: PropTypes.node.isRequired,
};

export default DefauLayOut;
