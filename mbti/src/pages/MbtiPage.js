import React from 'react'
import { Link } from 'react-router-dom';

function MbtiPage() {
    return (
        <>
            <h1>000님 MBTI 검사</h1>
            <Link to="/Test1"><button className='btn'>1</button></Link>
            <Link to="/Test2"><button className='btn'>2</button></Link>
            <Link to="/Test3"><button className='btn'>3</button></Link>
        </>
    )
}

export default MbtiPage;