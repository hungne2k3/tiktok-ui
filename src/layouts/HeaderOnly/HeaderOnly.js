import Header from '../components/Header';

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
