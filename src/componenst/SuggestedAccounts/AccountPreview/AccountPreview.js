import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import style from './AccountPreview.module.scss';
import Button from '../../Button/Button';

const cx = classNames.bind(style);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="http://localhost:3000/static/media/vanh.795c86acec7486b700a3.png"
                    alt=""
                />

                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>

            <div className={cx('body')}>
                <p className={cx('nick-name')}>
                    <strong>dovananh</strong>

                    <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Đỗ Vân Anh</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>92M </strong>
                    <span className={cx('label')}>Followers</span>

                    <strong className={cx('value')}>100M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
