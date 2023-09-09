import Header from './Header/Header';
import Sidebar from './SideBar/Sidebar';

function DefauLayOut({ children }) {
    return (
        <div>
            <Header />

            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefauLayOut;
