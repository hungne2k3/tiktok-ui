import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import { Wrapper as PoperWrapper } from '../../Popper/index';
import MenuItems from './MenuItems';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(style);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
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

    return (
        <Tippy
            // delay thoi gian khi hien
            delay={[0, 700]}
            // để làm trạng thái hiển thị
            // visible
            placement="bottom-end"
            // thuộc tính này cho phép chọn selection, mặc định là flase
            interactive={true}
            // reder ra các gợi ý liện quan
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PoperWrapper className={cx('menu-popper')}>
                        {/* nếu mà history == 0 thì sẽ không hiển thị Language ngược lại nếu > 1 thì hiển thị ra Language */}

                        {history.length > 1 && (
                            <Header
                                title="Language"
                                // làm sự kiện quay lại trang, chỉ cần xóa đi phần tử mảng cuối cùng là xong như cách bên dưới làm
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PoperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
