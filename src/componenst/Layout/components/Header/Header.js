// import thu vien icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ten icon
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// thu vien className: npm i classnames;
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../assest/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>

                <div className={cx('sreach')}>
                    <input placeholder="Sreach accounts and video" spellCheck={false} />

                    <button className={cx('clean')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>

                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    <button className={cx('sreach-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;
