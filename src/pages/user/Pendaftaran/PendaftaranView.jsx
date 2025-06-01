/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PendaftaranView = ({ fullname, cFullname, tempat, cTempat, tanggal, cTanggal, alamat, cAlamat, kelamin, cKelamin, notelp, cNotelp, email, cEmail, nisn, cNisn, nilai, cNilai, hCreateSiswa }) => (
    <div className="container">
        <div className="card w-75 mx-auto my-5">
            <div className="card-header fs-4 fw-bolder text-center">
                Pendaftaran PPDB
            </div>
            <div className="card-body">
                <form className="row gap-2">
                    <div className="form-group col-12 col-md-5">
                        <label htmlFor="fullname" className="form-label">Nama Lengkap</label>
                        <input type="text" className="form-control" name="fullname" id="fullname" placeholder="Masukkan nama lengkap" value={fullname} onChange={cFullname} />
                    </div>
                    <div className="form-group col-12 col-md-5">
                        <label htmlFor="tempat" className="form-label">Tempat Lahir</label>
                        <input type="text" className="form-control" name="tempat" id="tempat" placeholder="Masukkan tempat lahir" value={tempat} onChange={cTempat} />
                    </div>
                    <div className="form-group col-12 col-md-5">
                        <label htmlFor="tanggal" className="form-label">Tanggal Lahir</label>
                        <input type="date" className="form-control" name="tanggal" id="tanggal" placeholder="Masukkan tanggal lahir" value={tanggal} onChange={cTanggal} />
                    </div>
                    <div className="form-group col-12 col-md-5">
                        <label htmlFor="alamat" className="form-label">Alamat</label>
                        <input type="text" className="form-control" name="alamat" id="alamat" placeholder="Masukkan alamat" value={alamat} onChange={cAlamat} />
                    </div>
                    <div className="form-group col-12 col-md-5">
                        <label htmlFor="kelamin" className="form-label">Jenis Kelamin</label>
                        <select name="kelamin" id="kelamin" className="form-control" value={kelamin} onChange={cKelamin}>
                            <option value="">-Pilih Jenis Kelamin-</option>
                            <option value="Laki-Laki">Laki-Laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>
                    </div>
                    <div className="form-group col-12 col-md-5">
                        <label htmlFor="notelp" className="form-label">Nomor Telepon</label>
                        <input type="number" className="form-control" name="notelp" id="notelp" placeholder="Masukkan notelp" value={notelp} onChange={cNotelp} />
                    </div>
                    <div className="form-group col-12 col-md-5">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="Masukkan email" value={email} onChange={cEmail} />
                    </div>
                    <div className="form-group col-12 col-md-5">
                        <label htmlFor="nisn" className="form-label">NISN</label>
                        <input type="text" className="form-control" name="nisn" id="nisn" placeholder="Masukkan NISN" value={nisn} onChange={cNisn} />
                    </div>
                    <div className="form-group col-12 col-md-5">
                        <label htmlFor="nilai" className="form-label">Nilai Rata-Rata</label>
                        <input type="text" className="form-control" name="nilai" id="nilai" placeholder="Masukkan nilai rata-rata" value={nilai} onChange={cNilai} />
                    </div>
                    <div className="form-group col-12 mt-2">
                        <button onClick={hCreateSiswa} type="button" className="btn btn-primary">Daftar</button>
                    </div>
                </form>
            </div>
        </div>
        <div className="bg-warning bg-opacity-50 rounded py-4 px-3 w-50 mx-auto mb-5">
            <p className="my-0 fw-medium">Jika sudah mendaftarkan NISN, silahkan melakukan <Link to={'/login'}>login</Link> menggunakan NISN anda!</p>
        </div>
    </div>
)

export default PendaftaranView;