import React, { useState } from 'react'


const Join = () => {

    const [text, setText] = useState('')
    const login = () => {
        console.log('회원가입')
    }
    return (
        <div>
            Join 
            <input type='text' onChange={(e) =>setText(e.target.value) } />
            <button onClick={login}>회원가입</button>
        </div>
    )
}

export default Join