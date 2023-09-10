import classNames from 'classnames/bind';
import styles from './DefauLayout.module.scss';
import Header from '../components/Header/Header';
import Sidebar from './SideBar/Sidebar';

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

export default DefauLayOut;
