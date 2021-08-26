import React, { useState } from 'react'


const Login = () => {

    const [text, setText] = useState('')
    const login = () => {
        console.log('로그인')
    }
    return (
        <div>
            로그인 페이지 입니다
            <input type='text' onChange={(e) =>setText(e.target.value) } />
            <button onClick={login}>로그인</button>
        </div>
    )
}

export default Login