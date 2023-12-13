import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import { Wrapper as PoperWrapper } from '../../Popper/index';
import MenuItems from './MenuItems';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(style);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1]; // lấy pt mảng cuối cùng

    const renderItems = () => {
        // thay vì render từ items thì render từ current.data là lấy từ dòng 12 rồi từ data lấy đến items
        return current.data.map((item, index) => {
            const isParent = !!item.children; // !! convent sang kieu Boolen

            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        // dua data vào làm cấp con
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    // chức năng lựa chọn ngôn ngữ
    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PoperWrapper className={cx('menu-popper')}>
                {/* nếu mà history == 0 thì sẽ không hiển thị Language ngược lại nếu > 1 thì hiển thị ra Language */}

                {history.length > 1 && (
                    <Header
                        title={current.title}
                        // làm sự kiện quay lại trang, chỉ cần xóa đi phần tử mảng cuối cùng là xong như cách bên dưới làm
                        onBack={handleBack}
                    />
                )}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PoperWrapper>
        </div>
    );

    // chuc nang quay lai
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    // làm chức năng quay lại trang đầu
    const handleResetToFirstPage = () => {
        setHistory((perv) => perv.slice(0, 1));
    };

    return (
        <Tippy
            // làm hành vi khi cick vào avt không bị mất đi menu khi di chuột ra ngoài mới mất
            hideOnClick={hideOnClick}
            offset={[16, 8]}
            // delay thoi gian khi hien
            delay={[0, 700]}
            // để làm trạng thái hiển thị
            // visible
            placement="bottom-end"
            // thuộc tính này cho phép chọn selection, mặc định là flase
            interactive={true}
            // reder ra các gợi ý liện quan
            render={renderResult}
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    );
}

Menu.prototype = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array.isRequired,
    hideOnClick: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Menu;
