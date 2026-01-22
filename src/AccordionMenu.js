import React, { useState } from 'react';
import './AccordionMenu.scss';
import { data } from 'react-router';

export default function AccordionMenu() {
    const [login, setLogin] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [registerOpen, setregisterOpen] = useState(false);
    const [username, setUsername] = useState('Alice');
    const [password, setPassword] = useState('alice@example.com');
    const [name, setName] = useState('');

    async function Submit() {
        const response = await fetch('http://localhost:3001/users', { method: 'GET' });
        const data = await response.json();
        try {
            if (registerOpen) {
                if (!username || !password) {
                    alert('請輸入用戶名與密碼');
                    return;
                }
                // 先檢查用戶是否已存在
                const userExists = data.find(u => u.name === username);

                if (userExists) {
                    alert('用戶已存在');
                    return;
                }

                // 註冊新用戶
                const response = await fetch('http://localhost:3001/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: username,
                        password: password
                    })
                });
                if (response.ok) {
                    alert('註冊成功，請登入');
                    setregisterOpen(false);
                } else {
                    alert('註冊失敗');
                }
            } else {
                if (!username || !password) {
                    alert('請輸入用戶名與密碼');
                    return;
                }
                const user = data.find(u => u.name === username && u.password === password)
                if (user) {
                    setLogin(true);
                    setLoginOpen(false);
                    setName(user.name);
                    setUsername("");
                    setPassword("");
                } else alert('用戶名或密碼錯誤')
            }
        } catch (error) {
            alert('Failed to fetch: 請確保後端服務器已啟動 (npm run server)');
            console.error(error);
        }
    }
    return (
        <div className="menu-container">
            {login && (<div className='welcome'>歡迎, {name}</div>)}
            <button className='menu-btn login-btn' onClick={() => login ? setLogin(false) : setLoginOpen(true) & setregisterOpen(false)}>
                {login ? '登出' : '登入'}
            </button>
            <div className='menu'>
                <button className='menu-btn'>這是空的</button>
                <button className='menu-btn'>這是空的</button>
                <button className='menu-btn'>這是空的</button>
            </div>
            <div className='hide-menu'>
                <div className='b1'>
                    <button className='menu-btn'>這是空的</button>
                    <button className='menu-btn'>這是空的</button>
                    <button className='menu-btn'>這是空的</button>
                </div>
                <div className='b2'>
                    <button className='menu-btn'>這是空的</button>
                    <button className='menu-btn'>這是空的</button>
                    <button className='menu-btn'>這是空的</button>
                </div>
            </div>
            {loginOpen && (
                <div className='bg'>
                    <div className='login'>
                        <div className='title'>{registerOpen ? '註冊' : '登入'}</div>
                        <button className='close' onClick={() => { registerOpen ? setregisterOpen(false) : setLoginOpen(false) }}>×</button>
                        <br />
                        用戶名<br />
                        <input type="text" placeholder='Username' className='UN' value={username} onChange={(e) => setUsername(e.target.value)} />
                        <br />密碼<br />
                        <input type="password" placeholder='Password' className='PW' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <br />
                        <div className='flex'>
                            <button className='Submit-btn' onClick={() => Submit()}>
                                {registerOpen ? '註冊' : '登入'}
                            </button>
                            {!registerOpen && <button className='Submit-btn' onClick={() => setregisterOpen(true)}>註冊</button>}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}