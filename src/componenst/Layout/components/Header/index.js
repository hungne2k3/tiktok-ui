import { useEffect, useState } from 'react';
// import thu vien icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ten icon
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSignIn,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';

// thu vien tippy
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
// thu vien className: npm i classnames;

// componen
import { Wrapper as PoperWrapper } from '../../../Popper/index';
import Button from '../../../Button/index';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../assest/images';
import AccountItem from '../../../AccoutItem/index';
import Menu from '../../../Popper/Menu/index';
import MenuItems from '../../../Popper/Menu/MenuItems';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'ENGLISH',
                },

                {
                    type: 'language',
                    code: 'vi',
                    title: 'VIETNAMESE',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [sreachResult, setSreachResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSreachResult([]);
        }, 0);
    }, []);

    const handleMenuChange = (MenuItems) => {
        switch (MenuItems.type) {
            case 'language':
                // handle change language
                break;
            default:
        }
    };

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

                <div className={cx('action')}>
                    <Button text>Upload</Button>
                    <Button primary>Login</Button>

                    <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
