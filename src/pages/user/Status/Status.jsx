/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StatusView from "./StatusView"

const Status = () => {
    const [pendaftaran, setPendaftaran] = useState('');
    const [jumlah, setJumlah] = useState('');
    const [metode, setMetode] = useState('');
    const [bukti, setBukti] = useState('');
    const [wali, setWali] = useState([]);
    const [siswa, setSiswa] = useState([]);
    const [dPendaftaran, setDpendaftaran] = useState([]);
    const { siswa_id } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        const getWali = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/wali/${siswa_id}`);
                setWali(response.data.wali[0])
            } catch (error) {
                console.error(error)
            }
        }

        const getSiswa = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/siswa/${siswa_id}`);
                setSiswa(response.data.siswa[0])
            } catch (error) {
                console.error(error)
            }
        }

        const getPendaftaran = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/pendaftaran/${siswa_id}`);
                setDpendaftaran(response.data.pendaftaran[0])
                setPendaftaran(response.data.pendaftaran[0].pendaftaran_id)
            } catch (error) {
                console.error(error)
            }
        }

        getSiswa();
        getWali();
        getPendaftaran();
    }, [siswa_id])

    const handleCreatePembayaran = async () => {
        const formData = new FormData();
        formData.append('pendaftaran', pendaftaran);
        formData.append('jumlah', jumlah);
        formData.append('metode', metode);
        formData.append('bukti', bukti);

        try {
            const response = await axios.post('http://localhost:8080/pembayaran', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert(response.data.messages.success);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }

    const handleDeleteAkun = async () => {
        try {
            await axios.delete(`http://localhost:8080/siswa/${siswa_id}`)
            .then((response) => {
                localStorage.removeItem('siswa');
                navigate('/');
            })
        } catch (error) {
            console.log(error);
        }
    }

    return <StatusView 
    wali={wali} siswa={siswa} dPendaftaran={dPendaftaran} 
    pendaftaran={pendaftaran} cPendaftaran={(event) => setPendaftaran(event.target.value)}
    jumlah={jumlah} cJumlah={(event) => setJumlah(event.target.value)}
    metode={metode} cMetode={(event) => setMetode(event.target.value)}
    bukti={bukti} cBukti={(event) => setBukti(event.target.files[0])}
    hCreatePembayaran={handleCreatePembayaran} hDelete={handleDeleteAkun}
    />
}

export default Status;