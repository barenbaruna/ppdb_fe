import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardView from "./DashboardView"

const Dashboard = () => {
    const [count, setCount] = useState();
    const [countp, setCountp] = useState(0);
    const [countw, setCountw] = useState();
    const navigate = useNavigate();
    const [siswa, setSiswa] = useState('');
    const [fullname, setFullname] = useState('');
    const [alamat, setAlamat] = useState('');
    const [notelp, setNotelp] = useState('');
    const [pekerjaan, setPekerjaan] = useState('');
    const [hubungan, setHubungan] = useState('');
    const [pJurusan, setPjurusan] = useState([]);
    const [pSekolah, setPsekolah] = useState([]);
    const [sekolah, setSekolah] = useState('');
    const [jurusan, setJurusan] = useState('');

    useEffect(() => {
        const data = localStorage.getItem('siswa');
        const siswa = JSON.parse(data);

        const w = localStorage.getItem('countwali');
        const cw = JSON.parse(w);

        const p = localStorage.getItem('countpendaftaran');
        const cp = JSON.parse(p);

        if (cw === 0 || cw === null) {
            setCountw(0)
        } else {
            setCountw(1)
        }

        if (cp === 0 || cp === null) {
            setCountp(0)
        } else {
            setCountp(1)
        }

        if (siswa === null) {
            setCount(0);
        } else {
            setCount(1);
        }
    }, [count]);

    const getSekolah = async () => {
        try {
            const response = await axios.get('http://localhost:8080/sekolahasal');
            setPsekolah(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const getJurusan = async () => {
        try {
            const response = await axios.get('http://localhost:8080/jurusan');
            setPjurusan(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const siswa = localStorage.getItem('siswa');
        const data = JSON.parse(siswa);
        getSekolah();
        getJurusan();

        setSiswa(data.siswa_id);
    }, [siswa])

    const handleCreateWali = async () => {
        try {
            await axios.post('http://localhost:8080/wali', {
                siswa, fullname, alamat, notelp, pekerjaan, hubungan
            }).then((response) => {
                alert(response.data.messages.success);
                localStorage.setItem('countwali', 1);
                setCountw(1);
            })
        } catch (error) {
            console.error(error);
        }
    }

    const handleCreatePendaftaran = async () => {
        try {
            await axios.post('http://localhost:8080/pendaftaran', {
                siswa, sekolah, jurusan
            }).then((response) => {
                alert(response.data.messages.success);
                localStorage.setItem('countpendaftaran', 1);
                setCountp(1);
            });
        } catch (error) {
            console.error(error);
        }
    }

    if (count === 0) {
        navigate('/');
    } else {
        return <DashboardView 
        jurusan={jurusan} sekolah={sekolah} hPendaftaran={handleCreatePendaftaran}
        countp={countp} countw={countw}
        siswa={siswa} cSiswa={(event) => setSiswa(event.target.value)}
        fullname={fullname} cFullname={(event) => setFullname(event.target.value)}
        alamat={alamat} cAlamat={(event) => setAlamat(event.target.value)}
        notelp={notelp} cNotelp={(event) => setNotelp(event.target.value)}
        pekerjaan={pekerjaan} cPekerjaan={(event) => setPekerjaan(event.target.value)}
        hubungan={hubungan} cHubungan={(event) => setHubungan(event.target.value)}
        pSekolah={pSekolah} cSekolah={(event) => setSekolah(event.target.value)}
        pJurusan={pJurusan} cJurusan={(event) => setJurusan(event.target.value)}
        hCreateWali={handleCreateWali}
        />
    }

}

export default Dashboard;