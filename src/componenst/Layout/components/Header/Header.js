import { useEffect, useState } from 'react';
// import thu vien icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ten icon
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// thu vien tippy
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
// thu vien className: npm i classnames;

// componen
import { Wrapper as PoperWrapper } from '../../../Popper/index';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../assest/images';
import AccountItem from '../../../AccoutItem/index';

const cx = classNames.bind(styles);

function Header() {
    const [sreachResult, setSreachResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSreachResult([1, 2, 3]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>

                {/* Làm chức năng khi ấn vào input tìm kiếm sẽ hiển thị những gợi ý có liên quan sử dụng thư viện Tipps */}
                <Tippy
                    // để làm trạng thái hiển thị
                    visible={sreachResult.length > 0}
                    // thuộc tính này cho phép chọn selection, mặc định là flase
                    interactive={true}
                    // reder ra các gợi ý liện quan
                    render={(attrs) => (
                        <div className={cx('sreach-result')} tabIndex="-1" {...attrs}>
                            <PoperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>

                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PoperWrapper>
                        </div>
                    )}
                >
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
                </Tippy>

                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;
