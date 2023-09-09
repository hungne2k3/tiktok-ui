import Header from './Header/Header';

function DefauLayOut({ children }) {
    return (
        <div>
            <Header />

            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefauLayOut;
