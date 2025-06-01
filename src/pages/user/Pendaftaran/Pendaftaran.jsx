import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PendaftaranView from "./PendaftaranView"

const Pendaftaran = () => {
    const [fullname, setFullname] = useState('');
    const [tempat, setTempat] = useState('');
    const [tanggal, setTanggal] = useState('');
    const [alamat, setAlamat] = useState('');
    const [kelamin, setKelamin] = useState('');
    const [notelp, setNotelp] = useState('');
    const [email, setEmail] = useState('');
    const [nisn, setNisn] = useState('');
    const [nilai, setNilai] = useState('');
    const navigate = useNavigate();

    const handleCreateSiswa = async () => {
        try {
            await axios.post('http://localhost:8080/siswa', {
                fullname, tempat, tanggal, alamat, kelamin, notelp, email, nisn, nilai
            }).then((response) => {
                alert(response.data.messages);
                navigate('/login');
            })
        } catch (error) {
            console.error(error);
        }
    }

    return <PendaftaranView 
    fullname={fullname} cFullname={(event) => setFullname(event.target.value)} 
    tempat={tempat} cTempat={(event) => setTempat(event.target.value)} 
    tanggal={tanggal} cTanggal={(event) => setTanggal(event.target.value)} 
    alamat={alamat} cAlamat={(event) => setAlamat(event.target.value)} 
    kelamin={kelamin} cKelamin={(event) => setKelamin(event.target.value)} 
    notelp={notelp} cNotelp={(event) => setNotelp(event.target.value)} 
    email={email} cEmail={(event) => setEmail(event.target.value)} 
    nisn={nisn} cNisn={(event) => setNisn(event.target.value)} 
    nilai={nilai} cNilai={(event) => setNilai(event.target.value)} 
    hCreateSiswa={handleCreateSiswa} />
}

export default Pendaftaran;