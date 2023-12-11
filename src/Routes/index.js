import Config from '../config/index';
// Layout
import { HeaderOnLy } from '../layouts';

// Pages
import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';
import Sreach from '../pages/Sreach';
import Profile from '../pages/Profile';

// @:nickname
// k can dang nhap van xem dc noi dung
const publicRoutes = [
    { path: Config.routes.home, component: Home },
    { path: Config.routes.following, component: Following },
    { path: Config.routes.profile, component: Profile },
    { path: Config.routes.upload, component: Upload, layout: HeaderOnLy },
    { path: Config.routes.sreach, component: Sreach, layout: null },
];

// can dang nhap de xem noi dung, neu k dang nhap thi se chuyen qua trang login
const priveRoutes = [];

export { publicRoutes, priveRoutes };
