import { Link } from 'react-router';
import "bootstrap/dist/css/bootstrap.min.css";
import './home.scss';//..指的是上一層(預設路徑起始點為src)

export default function Test() {
    return (
        <div className='row m-2'>
            <div className='col-6'>
                <div className='m-2'>
                    <Link to="/one" className="link">
                        網購網站
                        <img src={"/picture/網購網站.jpeg"} />
                    </Link>
                </div>
            </div>
            <div className='col-6'>
                <div className='m-2'>
                    <Link to="/two" className="link">
                        圖片輪換
                        <img src={"/picture/圖片輪換.jpeg"} />
                    </Link>
                </div>
            </div>
        </div>
    );
}