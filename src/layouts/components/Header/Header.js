import { useEffect, useState } from 'react';
// import thu vien icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ten icon
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// thu vien tippy
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
// thu vien className: npm i classnames;

// componen
import Config from '../../../config/index';
import Button from '../../../componenst/Button/Button';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../assest/images';
import Menu from '../../../componenst/Popper/Menu/index';
import avt from '../../../assest/images/vanh.png';
import Image from '../../../componenst/Image/index';
import { MessageIcon, InboxIcon, UploadIcon } from '../../../componenst/Icon/Icons';
import Search from '../Search/Search';

const cx = classNames.bind(styles);

// làm menu khi chưa login
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

// làm menu sau khi đã Login
const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: '/@manhhung',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Coins',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/feedback',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log Out',
        to: '/logout',
        // khi có separate mới có đường kẻ top
        separate: true,
    },
];

function Header() {
    // kiểm tra nếu đã locgin thì true, chưa thì false
    let currentUser = true;

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
                    <Link to={Config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="TikTok" />
                    </Link>
                </div>

                <Search />

                {/* làm trường hợp login và chưa login */}
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            {/* đã locgin */}
                            <Tippy content="Upload Video" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Message" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Inbox" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />

                                    <span className={cx('inbox')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            {/* chưa lốc in */}
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image src="dfsfsgs.jpg" className={cx('user-avatar')} alt="Van Anh" fallBack={avt} />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
