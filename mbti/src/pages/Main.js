import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MainSrc from '../assets/mainimg.png';


export const Wrapper = styled.div`
height: 100%;
width: 100%;
margin:0 auto;
text-align: center;
`
export const Inner = styled.div`
    margin: 0 auto;
	width: 800px;
	font: 14px/1 "arial";
	display: flex;
    flex-direction: column;
	justify-content: space-around;
	background-color: #bed7e8;
	height: 750px;
    padding:100px 0px;
`
const Header = styled.div`
    font: bold 40px/1 'Noto Sans KR';
    text-align: center;
    margin-bottom:30px;
 
`
const MainImg = styled.img`
    width:600px;
    height:600px;
    margin: 0 auto;
    text-align:center;

`
export const Button = styled.button`
    width:200px;
    height: 60px;
    background-color: gray;
    display:block;
    margin: 0 auto;
    font: 20px/1 'Noto Sans KR';
    margin-bottom:20px;
    cursor: pointer;
    color: white;
    border:none;

    
`

function Main() {
    return (
        <>
            <Wrapper>
                <Inner>
                    <Header>MBTI 테스트</Header>
                    <MainImg src={MainSrc}></MainImg>
                    <div>
                        <Link to='/Login'>
                            <Button>로그인</Button>
                        </Link>
                        <Link to='/Join'>
                            <Button>회원가입</Button>
                        </Link>

                    </div>



                </Inner>
            </Wrapper>


        </>
    )
}

export default Main