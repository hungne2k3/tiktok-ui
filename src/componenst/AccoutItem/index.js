import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import avatar from './avatar.jpg';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={avatar} alt="Manh Hung" />

            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Manh Hung</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>

                <span className={cx('usename')}>nguyenmanhhung</span>
            </div>
        </div>
    );
}

export default AccountItem;
