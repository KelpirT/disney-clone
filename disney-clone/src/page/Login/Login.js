import styled from "styled-components";

const Login = (props) => {
    return(
        <Container>
            <Content>
                <CTA>
                    <CTAlg1 src="/image/cta-logo-one.svg" all=""/>
                    <SignUp>
                        GET ALL THERE
                    </SignUp>
                    <Description>
                        Hello this is Description Hello this is Description Hello this is Description Hello this is Description Hello this is Description Hello this is Description
                        Hello this is Description Hello this is Description Hello this is Description Hello this is Description Hello this is Description Hello this is Description 
                    </Description>
                    <CTAlg2 src="/image/cta-logo-two.png" all=""/>
                </CTA>
                <BgImage/>
            </Content>
        </Container>
    )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh
`
const Content = styled.div`
    margin-bottom: 10vh;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`
const BgImage = styled.div`
    height: 100%;
    background-image: url("/image/login-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`

const CTA = styled.div`
    margin-bottom: 2vw;
    max-width: 650px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2x;
    width: 100%;
`
const CTAlg1 = styled.img`
    /* height: 120%; */
    width: 100%;
    margin-bottom: 20px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    /* object-fit: cover; */
    /* margin-bottom: 20px; */
`
const CTAlg2 = styled.img`
    /* height: 120%; */
    width: 100%;
    margin-bottom: 20px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    /* object-fit: cover; */
    /* margin-bottom: 20px; */
`
const SignUp = styled.a`
    background-color: #0063e5;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 5px;
    padding: 20px 0px;
    border: 1px solid transparent;
    width: 100%;
    border-radius: 4px;
    &:hover{
        background-color: blue;
    }
    /* margin-top: 82px; */
`
const Description = styled.p`
    line-height: 1.5;
    letter-spacing: 1.5px;
    /* margin: 0 0 24px; */
    font-size: 11;
    color: hsla(0,0%,95.3%,1);
`

export default Login;