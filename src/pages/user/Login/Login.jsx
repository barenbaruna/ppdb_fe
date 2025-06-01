import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginView from "./LoginView"

const Login = () => {
    const [nisn, setNisn] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await axios.post('http://localhost:8080/login', {
                nisn
            }).then((response) => {
                alert(response.data.messages.success)
                localStorage.setItem('siswa', JSON.stringify(response.data.siswa[0]))
                navigate('/dashboard');
            })
        } catch (error) {
            alert(error.response.data.messages.failed);
        }
    }

    return <LoginView nisn={nisn} cNisn={(event) => setNisn(event.target.value)} hLogin={handleLogin} />
}

export default Login;