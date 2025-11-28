import { Link } from 'react-router';
import "bootstrap/dist/css/bootstrap.min.css";
import './Test.scss';//..指的是上一層(預設路徑起始點為src)

export default function Test() {
    return (
        <div className='row m-2'>
            <div className='col-6'>
                <div className='m-2'>
                    <Link to="/one" className="link">
                        網購網站
                        <img src={"/picture/網購網站.jpg"} />
                    </Link>
                </div>
            </div>
        </div>
    );
}