import * as httpReques from '../utils/httpReques';

// call API với bất đồng bộ
export const search = async (q, type = 'less') => {
    try {
        // Call API Axois
        const res = await httpReques.get('users/search', {
            // thông số
            params: {
                // call api tên
                q,
                // kiểu less là của Json tik tok
                type,
            },
        });

        return res.data;
    } catch (error) {
        console.log(error);
    }
};
