import Navbar from "../../../component/Navbar";
import Register from "../../../assets/register.png";

const BerandaView = () => (
    <section>
        <Navbar />
        <div className="container">
            {/* Hero */}
            <div className="d-flex justify-content-between align-items-center gap-4 mb-5">
                <div>
                    <p className="fw-bolder fs-1 text-primary">PENDAFTARAN PESERTA DIDIK BARU (PPDB)</p>
                    <p className="fs-5">PPDB SMK UNPRI Medan telah dibuka. Pilih jurusan yang sesuai dengan keinginanmu sekarang. Pendaftaran mulai tanggal <span className="text-primary fw-bolder"> 10 Juli 2023 - 10 Agustus 2023</span></p>
                </div>
                <img src={Register} className="img-fluid" alt="" />
            </div>

            {/* Jurusan */}
            <p className="fs-2 my-0 fw-bolder">Jurusan</p>
            <p className="fs-6 my-0">Pilih jurusan yang sesuai dengan minatmu.</p>
            <hr />
            <div className="card-group gap-4 my-5">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title fs-4 text-primary fw-bolder">Teknik Komputer & Jaringan</h5>
                        <hr />
                        <p className="card-text">Anda akan mempelajari berbagai aspek yang terkait dengan komputer dan jaringan, seperti perakitan komputer, instalasi dan konfigurasi sistem operasi, pemrograman, administrasi jaringan, keamanan jaringan, dan pemeliharaan perangkat keras dan perangkat lunak komputer.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title fs-4 text-primary fw-bolder">Multimedia</h5>
                        <hr />
                        <p className="card-text">Anda akan mempelajari berbagai aspek yang terkait dengan pengembangan konten multimedia. Mereka akan belajar tentang desain grafis, pengolahan foto dan video, pengembangan animasi, produksi audio, pengeditan video, interaksi manusia dan komputer, dan pengembangan aplikasi multimedia.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title fs-4 text-primary fw-bolder">Teknik Mesin</h5>
                        <hr />
                        <p className="card-text">Anda akan mempelajari berbagai konsep dasar, teori, dan teknik yang terkait dengan mesin, termasuk mekanika, termodinamika, mekanika fluida, mekanik bahan, kontrol otomatis, dan desain mesin. Mereka juga akan dilatih dalam menggunakan perangkat lunak dan peralatan teknik yang digunakan dalam industri.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Footer */}
        <div className="bg-body-secondary py-4">
            <p className="my-0 text-center">Copyright 2023 - SMK UNPRI Medan</p>
        </div>
    </section>
)

export default BerandaView;