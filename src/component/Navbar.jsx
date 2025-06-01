import viteLogo from '/vite.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [count, setCount] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem('siswa');
        const siswa = JSON.parse(data);

        if (siswa === null) {
            setCount(0);
        } else {
            setCount(1);
        }
    }, [count]);

    const handleLogout = () => {
        localStorage.removeItem('siswa');
        navigate('/');
    }

    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container">
                <a className="navbar-brand d-flex gap-2" href="#">
                    <img src={viteLogo} alt="" />
                    <h4>SMK UNPRI Medan</h4>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {count === 0 ? (
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/'} className='nav-link'>Beranda</Link>
                            </li>
                            <li className="nav-item ms-5">
                            <Link to={'/login'} className='btn btn-outline-primary'>Login</Link>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
                            <li className="nav-item">
                                <Link to={'/dashboard'} className="nav-link">PPDB</Link>
                            </li>
                            <li className="nav-item">
                                <button onClick={handleLogout} className='btn btn-transparent'>Logout</button>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    )
};

export default Navbar;