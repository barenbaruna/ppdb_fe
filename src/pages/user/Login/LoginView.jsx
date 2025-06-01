/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const LoginView = ({ nisn, cNisn, hLogin }) => (
    <section className="container">
        <div className="card my-5 w-50 mx-auto">
            <div className="card-header fs-4 text-center fw-bolder">Login PPDB</div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="nisn" className="form-label">NISN</label>
                        <input type="text" name="nisn" id="nisn" className="form-control" value={nisn} onChange={cNisn} />
                    </div>
                    <div className="form-group mt-3">
                        <button type="button" className="btn btn-primary" onClick={hLogin}>Login</button>
                    </div>
                </form>
            </div>
        </div>
        <div className="bg-warning bg-opacity-50 rounded py-4 px-3 w-50 mx-auto">
            <p className="my-0 fw-medium">Jika anda belum memiliki akun, silahkan melakukan <Link to={'/pendaftaran'}>pendaftaran!</Link></p>
        </div>
    </section>
)

export default LoginView;