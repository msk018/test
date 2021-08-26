import React, { useState } from 'react'


const Create = () => {

    const [text, setText] = useState('')
    const login = () => {
        console.log('로그인')
    }
    return (
        <div>
            글쓰기 페이지 
            <input type='text' onChange={(e) =>setText(e.target.value) } />
            <button onClick={login}>글쓰기</button>
        </div>
    )
}

export default Create