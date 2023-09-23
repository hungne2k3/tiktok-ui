import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import { Wrapper as PoperWrapper } from '../../Popper/index';
import MenuItems from './MenuItems';

const cx = classNames.bind(style);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItems key={index} data={item} />);
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
                    <PoperWrapper className={cx('menu-popper')}>{renderItems()}</PoperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
