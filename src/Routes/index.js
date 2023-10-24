import routesConfig from '../config/routes';
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
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnLy },
    { path: routesConfig.sreach, component: Sreach, layout: null },
];

// can dang nhap de xem noi dung, neu k dang nhap thi se chuyen qua trang login
const priveRoutes = [];

export { publicRoutes, priveRoutes };
