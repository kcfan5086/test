import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function App() {
  const [opdata, setOpdata] = useState({ src: "/picture/sky1.png", id: "picture-1" });
  const [clickCount, setClickCount] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/clicks/count')
      .then(response => response.json()) // 取得回應的 JSON 資料
      .then(data => setClickCount(data.count)) // 用取得的資料更新state
      .catch(error => console.error('Error fetching click count:', error));
  }, []);

  const pictureOnClick = (src, id) => {
    setOpdata({ src: src, id: id });
  };

  const addClick = () => {
    const newCount = clickCount + 1;
    if (newCount > 10) {
      alert("購物車商品數量不可超過10件");
      return 10;
    }
    setClickCount(newCount);

    fetch('http://localhost:3001/clicks/count', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ count: newCount }),
    }).catch(error => console.error('Error updating click count:', error));
  };

  const reduceClick = () => {
    const newCount = clickCount - 1;
    if (newCount < 0) {
      alert("購物車商品數量不可少於0件");
      return 0;
    }
    setClickCount(newCount);

    fetch('http://localhost:3001/clicks/count', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ count: newCount }),
    }).catch(error => console.error('Error updating click count:', error));
  };

  return (
    <div className="bg">
      <div className="row">
        <div className='tp col-2'>
          {/* 放public可以這樣多次使用 */}
          <input type="radio" id="picture-1" name="preview" defaultChecked />
          <img for="picture-1" className='mx-2 mt-2' src="/picture/sky1.png"
            onClick={() => pictureOnClick("/picture/sky1.png", "picture-1")}
            style={{ border: opdata.id === "picture-1" ? "3px solid rgba(230, 230, 230, 0.5)" : "0px" }} />

          <input type="radio" id="picture-2" name="preview" />
          <img for="picture-2" className='m-2' src="/picture/sky2.jpg"
            onClick={() => pictureOnClick("/picture/sky2.jpg", "picture-2")}
            style={{ border: opdata.id === "picture-2" ? "3px solid rgba(230, 230, 230, 0.5)" : "0px" }} />

          <input type="radio" id="picture-3" name="preview" />
          <img for="picture-3" className='mx-2' src="/picture/sky3.jpg"
            onClick={() => pictureOnClick("/picture/sky3.jpg", "picture-3")}
            style={{ border: opdata.id === "picture-3" ? "3px solid rgba(230, 230, 230, 0.5)" : "0px" }} />
        </div>
        <div className="op col-4">
          <img className="my-2" src={opdata.src} />
        </div>
        <div className='context col-6'>
          <div className='mt-2 mx-2'>
            <Link to="/">回到首頁</Link>
          </div>
          <div className='mb-2'>測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試</div>
          <div className='select'>
            {/* defaultChecked 預設選擇 */}
            <input type="radio" id="size-s" name="size" value="S" defaultChecked />
            <label for="size-s" className='me-2' >S</label>

            <input type="radio" id="size-m" name="size" value="M" />
            <label for="size-m" className='me-2'>M</label>

            <input type="radio" id="size-l" name="size" value="L" />
            <label for="size-l">L</label>
          </div>
          <div className='mt-2 mx-2'>
            <h4>購物車內的商品件數</h4>
            <p>共有 {clickCount !== null ? clickCount : '讀取中...'} 件</p>
            <button className="btn btn-primary me-2" onClick={addClick}>點我增加件數</button>
            <button className="btn btn-primary" onClick={reduceClick}>點我減少件數</button>
          </div>
        </div>
      </div>
    </div>
  );
}