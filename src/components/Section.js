import React from 'react'
import styled from 'styled-components'
import DownArrowImage from '../imagesss/down-arrow.svg'
import Fade from 'react-reveal/Fade';



function Section(props) {
    const { backgroundImg, title, description, leftBtntext, rightBtntext } = props;
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade top>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtntext}
                        </LeftButton>
                        {rightBtntext &&
                            <RightButton>
                                {rightBtntext}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <Fade top>
                    <DownArrow src={DownArrowImage} />
                </Fade>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    z-index: 10;
    width:100vw;
    height:100vh;
    background-size: cover;
    background-position:center;
    background-repeat:no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    background-image: ${props => `url(${props.bgImage})`}

`

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom:30px;
    @media (max-width:768px) {
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
    margin:8px;
`
const RightButton = styled(LeftButton)`
    background:white;
    opacity:0.65;
    color:black;
    font-weight:bold;
`

const DownArrow = styled.img`
    margin-top:20px;
    height:40px;
    animation: animateDown infinite 1.5s;
    overflow-x:hidden;
`

const Buttons = styled.div`

`