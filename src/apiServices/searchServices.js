import * as request from '../utils/reques';

// call API với bất đồng bộ
export const search = async (q, type = 'less') => {
    try {
        // Call API Axois
        const res = await request.get('users/search', {
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
