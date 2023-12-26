import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import style from './SuggestedAccounts.module.scss';
import { Wrapper as PoperWrapper } from '../../componenst/Popper/index';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(style);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PoperWrapper>
                    <div className={cx('preview')}>
                        <AccountPreview />
                    </div>
                </PoperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy offset={[-20, 0]} delay={[800, 0]} render={renderPreview} placement="bottom">
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="http://localhost:3000/static/media/vanh.795c86acec7486b700a3.png"
                        alt=""
                    />

                    <div className={cx('item-info')}>
                        <p className={cx('nick-name')}>
                            <strong>dovananh</strong>

                            <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Đỗ Vân Anh</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.prototype = {};

export default AccountItem;
