/* eslint-disable react/prop-types */
import Navbar from "../../../component/Navbar";

const StatusView = ({ wali, siswa, dPendaftaran, pendaftaran, cPendaftaran, jumlah, cJumlah, metode, cMetode, cBukti, hCreatePembayaran, hDelete }) => (
    <section>
        <Navbar />
        <div className="container">
            <div className="card my-5">
                <div className="card-header">
                    <p className="fs-3 my-0 text-center fw-bolder">Status Pendaftaran</p>
                </div>
                <div className="card-body row">
                    <div className="col-12 col-lg-6 px-4">
                        <div className="bg-primary bg-opacity-50 py-3 px-4 rounded">
                            <p className="fs-4 fw-medium my-0">Data Siswa</p>
                            <hr />
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <p className="fs-6 fw-medium my-0 mb-1">Nama :</p>
                                    <p className="fs-6">{siswa.siswa_fullname}</p>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <p className="fs-6 fw-medium my-0 mb-1">TTL :</p>
                                    <p className="fs-6">{siswa.siswa_tempat_lahir}, {siswa.siswa_tanggal_lahir}</p>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <p className="fs-6 fw-medium my-0 mb-1">Alamat :</p>
                                    <p className="fs-6">{siswa.siswa_alamat}</p>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <p className="fs-6 fw-medium my-0 mb-1">Jenis Kelamin :</p>
                                    <p className="fs-6">{siswa.siswa_jenis_kelamin}</p>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <p className="fs-6 fw-medium my-0 mb-1">No Telp :</p>
                                    <p className="fs-6">{siswa.siswa_notelp}</p>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <p className="fs-6 fw-medium my-0 mb-1">Email :</p>
                                    <p className="fs-6">{siswa.siswa_email}</p>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <p className="fs-6 fw-medium my-0 mb-1">NISN :</p>
                                    <p className="fs-6">{siswa.siswa_nisn}</p>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <p className="fs-6 fw-medium my-0 mb-1">Nilai Rata-rata :</p>
                                    <p className="fs-6">{siswa.siswa_nilai_rata}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 px-4">
                        <div className="bg-primary bg-opacity-50 py-3 px-4 rounded">
                            <p className="fs-4 fw-medium my-0">Data Wali</p>
                            <hr />
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <p className="fs-6 fw-medium my-0 mb-1">Nama :</p>
                                    <p className="fs-6">{wali.wali_fullname}</p>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <p className="fs-6 fw-medium my-0 mb-1">Alamat :</p>
                                    <p className="fs-6">{wali.wali_alamat}</p>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <p className="fs-6 fw-medium my-0 mb-1">No Telp :</p>
                                    <p className="fs-6">{wali.wali_notelp}</p>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <p className="fs-6 fw-medium my-0 mb-1">Pekerjaan :</p>
                                    <p className="fs-6">{wali.wali_pekerjaan}</p>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <p className="fs-6 fw-medium my-0 mb-1">Hubungan :</p>
                                    <p className="fs-6">{wali.wali_hubungan}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 px-4 mt-4">
                        <div className="bg-primary bg-opacity-50 py-3 px-4 rounded">
                            <p className="fs-4 fw-medium my-0">Data Pendaftaran</p>
                            <hr />
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <p className="fs-6 fw-medium my-0 mb-1">Sekolah Asal :</p>
                                    <p className="fs-6">{dPendaftaran.sekolah_asal_nama}</p>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <p className="fs-6 fw-medium my-0 mb-1">Alamat Sekolah Asal :</p>
                                    <p className="fs-6">{dPendaftaran.sekolah_asal_alamat}</p>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <p className="fs-6 fw-medium my-0 mb-1">No Telp Sekolah Asal :</p>
                                    <p className="fs-6">{dPendaftaran.sekolah_asal_notelp}</p>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <p className="fs-6 fw-medium my-0 mb-1">Jurusan yang Dipilih :</p>
                                    <p className="fs-6">{dPendaftaran.jurusan_nama}</p>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <p className="fs-6 fw-medium my-0 mb-1">Tanggal Pendaftaran :</p>
                                    <p className="fs-6">{dPendaftaran.pendaftaran_tanggal}</p>
                                </div>
                                {dPendaftaran.pendaftaran_status === 'Ditolak' ? (
                                    <>
                                        <div className="col-12 col-lg-6">
                                            <p className="fs-6 fw-medium my-0 mb-1">Status Pendaftaran :</p>
                                            <p className="fs-6 text-danger fw-medium">{dPendaftaran.pendaftaran_status}</p>
                                        </div>
                                        <div className="bg-danger bg-opacity-50 rounded px-4 py-3 col-12 mt-4">
                                            <p className="my-0">Maaf, kamu belum lolos PPDB SMK UNPRI Medan. Terus semangat untuk mencoba. Jangan menyerah!. Klik tombol dibawah untuk menghapus akun.</p>
                                            <button onClick={hDelete} className="btn btn-danger mt-3">Hapus Akun</button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="col-12 col-lg-6">
                                            <p className="fs-6 fw-medium my-0 mb-1">Status Pendaftaran :</p>
                                            <p className="fs-6 text-success fw-medium">{dPendaftaran.pendaftaran_status}</p>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <p className="fs-6 fw-medium my-0 mb-1">Status Pembayaran :</p>
                                            <p className="fs-6">{dPendaftaran.pendaftaran_status_pembayaran}</p>
                                        </div>
                                        {dPendaftaran.pendaftaran_status_pembayaran === 'Lunas' ? (
                                            <div className="bg-success bg-opacity-50 rounded px-4 py-3 col-12 mt-4">
                                                <p className="my-0">Selamat, pembayaran PPDB kamu telah dilunasi. Tunggu informasi selanjutnya untuk kegiatan PPDB SMK UNPRI!</p>
                                            </div>
                                        ) : (
                                            <div className="bg-success bg-opacity-50 rounded px-4 py-3 col-12 mt-4">
                                                <p className="my-0">Selamat, kamu diterima sebagai siswa baru di SMK UNPRI Medan. Langkah terakhir, lakukan pembayaran sebesarn <span className="fw-bold">Rp.2.500.000</span> untuk konfirmasi sebagai siswa baru!</p>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    {dPendaftaran.pendaftaran_status === 'Diterima' ? (
                        <div className="col-12 col-lg-6 px-4 mt-4">
                            <div className="card">
                                <div className="card-header py-3">
                                    <h5 className="my-0">Form Pembayaran</h5>
                                </div>
                                <form>
                                    <div className="card-body">
                                        <input type="text" name="pendaftaran" className="d-none" value={pendaftaran} onChange={cPendaftaran} />
                                        <div className="form-group">
                                            <label htmlFor="jumlah" className="form-label">Jumlah Pembayaran</label>
                                            <input type="number" name="jumlah" className="form-control" placeholder="Masukkan jumlah pembayaran" value={jumlah} onChange={cJumlah} />
                                        </div>
                                        <div className="form-group mt-3">
                                            <label htmlFor="metode" className="form-label">Jumlah Pembayaran</label>
                                            <select name="metode" id="metode" className="form-control" value={metode} onChange={cMetode}>
                                                <option value="">-Pilih Metode Pembayaran-</option>
                                                <option value="BRI">BRI</option>
                                                <option value="BCA">BCA</option>
                                                <option value="MANDIRI">MANDIRI</option>
                                            </select>
                                        </div>
                                        <div className="form-group mt-3">
                                            <label htmlFor="bukti" className="form-label">Upload Buktu Pembayaran</label>
                                            <input type="file" name="bukti" className="form-control" accept="image/*" onChange={cBukti} />
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button type="button" onClick={hCreatePembayaran} className="btn btn-success" disabled={dPendaftaran.pendaftaran_status_pembayaran === 'Lunas'}>{dPendaftaran.pendaftaran_status_pembayaran === 'Lunas' ? 'Pembayaran Anda Telah Dilunasi' : 'Buat Pembayaran'}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    </section>
)

export default StatusView;