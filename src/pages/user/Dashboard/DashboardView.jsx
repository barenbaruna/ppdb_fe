/* eslint-disable react/prop-types */
import Navbar from "../../../component/Navbar";
import Register from '../../../assets/register.png';
import { Link } from "react-router-dom";

const DashboardView = ({ countw, countp, siswa, pSekolah, cSekolah, pJurusan, cJurusan, sekolah, jurusan, cSiswa, fullname, cFullname, alamat, cAlamat, notelp, cNotelp, pekerjaan, cPekerjaan, hubungan, cHubungan, hCreateWali, hPendaftaran }) => (
    <section>
        <Navbar />

        <div className="container">
            <div className="d-flex justify-content-between align-items-center gap-4 mb-5">
                <div>
                    <p className="fw-bolder fs-1 text-primary">PENDAFTARAN SISWA BARU</p>
                    <p className="fs-5">Lengkapi data pendaftaranmu dan lihat hasil pendaftaranmu dengan cepat!</p>
                </div>
                <img src={Register} className="img-fluid" alt="" />
            </div>
            <hr className="mb-5" />
            <h3 className="mb-5">Form Pendaftaran</h3>
            <div className="row mb-5 gap-4">
                <div className="card col-12 col-lg-5 px-0">
                    <div className="card-header py-3">
                        <h5 className="my-0">Data Wali Murid</h5>
                    </div>
                    <div className="card-body">
                        <form className="row gap-3">
                            <input type="text" name="siswa" className="form-control d-none" placeholder="Siswa ID" value={siswa} onChange={cSiswa} />
                            <div className="form-group">
                                <label htmlFor="fullname" className="form-label">Nama Wali</label>
                                <input type="text" name="fullname" className="form-control" placeholder="Masukkan nama lengkap wali" value={fullname} onChange={cFullname} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="alamat" className="form-label">Alamat</label>
                                <input type="text" name="alamat" className="form-control" value={alamat} onChange={cAlamat} placeholder="Masukkan alamat lengkap" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="notelp" className="form-label">No Telp</label>
                                <input type="number" name="notelp" className="form-control" value={notelp} onChange={cNotelp} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pekerjaan" className="form-label">Pekerjaan</label>
                                <input type="text" name="pekerjaan" className="form-control" placeholder="Masukkan pekerjaan wali" value={pekerjaan} onChange={cPekerjaan} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="hubungan" className="form-label">Hubungan</label>
                                <select name="hubungan" id="hubungan" className="form-control" value={hubungan} onChange={cHubungan}>
                                    <option value="">-Pilih hubungan-</option>
                                    <option value="Ayah">Ayah</option>
                                    <option value="Ibu">Ibu</option>
                                    <option value="Saudara">Saudara</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <button type="button" onClick={hCreateWali} className="btn btn-primary" disabled={countw === 1}>{countw === 1 ? 'Anda sudah mendaftarkan wali' : 'Daftarkan Wali'}</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card col-12 col-lg-5 px-0">
                    <div className="card-header py-3">
                        <h5 className="my-0">Data Pendaftaran</h5>
                    </div>
                    <div className="card-body">
                        <form className="row gap-3">
                            <input type="text" name="siswa" className="form-control d-none" placeholder="Siswa ID" value={siswa} onChange={cSiswa} />
                            <div className="form-group">
                                <label htmlFor="sekolah" className="form-label">Sekolah Asal</label>
                                <select name="sekolah" id="sekolah" className="form-control" value={sekolah} onChange={cSekolah}>
                                    <option value="">-Pilih Sekolah Asal-</option>
                                    {pSekolah.length > 0 ? (
                                        pSekolah.map((sekolah) => (
                                        <option key={sekolah.sekolah_asal_id} value={sekolah.sekolah_asal_id}>{sekolah.sekolah_asal_nama}</option>
                                        ))
                                    ) : (
                                        <option disabled>Loading...</option>
                                    )}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="jurusan" className="form-label">Jurusan</label>
                                <select name="jurusan" id="jurusan" className="form-control" value={jurusan} onChange={cJurusan}>
                                    <option value="">-Pilih Jurusan-</option>
                                        {pJurusan.length > 0 ? (
                                            pJurusan.map((jurusan) => (
                                                <option key={jurusan.jurusan_id} value={jurusan.jurusan_id}>{jurusan.jurusan_nama}</option>
                                            ))
                                    ) : (
                                        <option disabled>Loading...</option>
                                    )}
                                </select>
                            </div>
                            <div className="form-group">
                                <button type="button" onClick={hPendaftaran} className="btn btn-primary" disabled={countp === 1}>{countp === 1 ? 'Anda sudah melakukan pendaftaran. Silahkan cek status pendaftaran!' : 'Daftar'}</button>
                                {countp === 1 ? (
                                    <Link to={`/status/${siswa}`} className="btn btn-success mt-4">Cek Status Pendaftaran</Link>
                                ) : null}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default DashboardView;