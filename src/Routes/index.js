// Layout
import { HeaderOnLy } from '../componenst/Layout';

// Pages
import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';
import Sreach from '../pages/Sreach';
import Profile from '../pages/Profile';

// @:nickname
// k can dang nhap van xem dc noi dung
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnLy },
    { path: '/sreach', component: Sreach, layout: null },
];

// can dang nhap de xem noi dung, neu k dang nhap thi se chuyen qua trang login
const priveRoutes = [];

export { publicRoutes, priveRoutes };
