// Import thu vien
import { useEffect, useState, useRef } from 'react';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

// Import tự viết
import { Wrapper as PoperWrapper } from '../../../Popper/index';
import * as searchServices from '../../../../apiServices/searchServices';
import AccountItem from '../../../AccoutItem/index';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebounce } from '../../../../Hook';
const cx = classNames.bind(styles);

// Xu ly phan logic search
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [sreachResult, setSreachResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    // để sd debounce: ta đặt 1 biến rồi gọi đến
    // searchValue: value, 500: delay
    // khi người dùng ngừng gõ sau 500s thì debounced sẽ upload vaf cập nhập cho searchValue
    const debounced = useDebounce(searchValue, 500);

    // lan chạy 1: ''
    // lan chạy 2: 'h'
    // lan chạy 3: 'ho'
    // lan chạy 4: 'hoa'
    const inputRef = useRef();

    // fake khi go tim kiem se hien thi
    useEffect(() => {
        // AIP `search?q=` bắt buộc phải truyền dữ liệu vào k đc để trống, vì ở useState('') ta để trống, vậy nên phải có 1 lệnh kt

        if (!debounced.trim()) {
            setSreachResult([]);
            return;
        }

        const fetchApi = async () => {
            // khi call api thi loading laf: true;
            setLoading(true);

            const result = await searchServices.search(debounced);

            setSreachResult(result);

            // sau khi da call api xong thi se tra ve false
            setLoading(false);
        };

        fetchApi();

        // lỗi kiểm thử hay nói cách khác là teser: nếu call api mà nhập: ?, & thì sẽ lỗi vì: ? tượng trưng cho path "/" và & tượng chưng cho ngăn cách
    }, [debounced]);

    const handClean = () => {
        setSearchValue('');
        setSreachResult([]);
        inputRef.current.focus();
    };

    // đây là hàm thực hiện ẩn result
    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <div>
            {/* Làm chức năng khi ấn vào input tìm kiếm sẽ hiển thị những gợi ý có liên quan sử dụng thư viện Tipps */}

            <HeadlessTippy
                // để làm trạng thái hiển thị
                visible={showResult && sreachResult.length > 0}
                // thuộc tính này cho phép chọn selection, mặc định là flase
                interactive={true}
                // reder ra các gợi ý liện quan
                render={(attrs) => (
                    <div className={cx('sreach-result')} tabIndex="-1" {...attrs}>
                        {/* hiển thị kết quả tìm kiếm sau khi nhập search */}
                        <PoperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>

                            {sreachResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PoperWrapper>
                    </div>
                )}
                // khi blur ra bên ngoài thì ẩn showResult
                onClickOutside={handleHideResult}
            >
                {/* Thanh Tim Kiem */}
                <div className={cx('sreach')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Sreach accounts and video"
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value)}
                        // khi focus thì sẽ hiện Result
                        onFocus={() => setShowResult(true)}
                    />

                    {/* Xoa */}
                    {/* khi mà input nhận dữ liệu thì mới hiện icon Clean */}
                    {/* Nếu có value và không có loading thì sẽ hiển thị ra icon Clean */}

                    {!!searchValue && !loading && (
                        <button className={cx('clean')} onClick={handClean}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {/* Icon Loading khi tim kiem */}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    {/* Nut tim kiem */}
                    <button className={cx('sreach-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
