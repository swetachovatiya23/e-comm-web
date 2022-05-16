import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from "styled-components";
import { useState } from "react";
import { sliderItems } from "../data"; 


const Container = styled.div`
    display: flex;
    margin-right:170px;
    justify-content: space-between;    
`;

//For Arrow styling
const Arrow = styled.div`
  width: 60px;
  height: 60px;
  background-color: hotpink;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin-top:2300px;
  margin-right: 700px;
  margin-left:900px;
  cursor: pointer;
  opacity: 1;
  z-index: 2;
`;



// Wrapper for Images
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

//For images, Title, Discriptions
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

//For Image Container
const ImgContainer = styled.div`
  height: 90%;
`;


const Image = styled.img`
  height: 90%;
  
`;

//For Info Container
const InfoContainer = styled.div`
  flex: 1;
  // padding: 20px;
`;

//For Title
const Title = styled.h1`
  margin:20px;
  font-size: 60px;
  display:flex;
  color:blue;
`;

//For Discription
const Desc = styled.p`
  margin: 50px 20px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;


//For Buttons
const Button = styled.div`
  padding: 10px;
  font-size: 20px;
  background-color: orange;
  cursor: pointer;
  margin-left:20px;
  // margin-top:300px;
  margin-right:200px;
  `;



const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {

        if (direction === "right") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
          }
      
          else {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
          }
        };
      
        return (
 
   
            <Container>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86"/>
            </head>
              <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                  <Slide bg={item.bg} key={item.id}>

                    <ImgContainer>
                      <Image src={item.img} />
                    </ImgContainer>
                    
                    <InfoContainer>
                      <Title>{item.title}</Title>
                      <Desc>{item.desc}</Desc>
                      <Button>SHOP NOW</Button>
                    </InfoContainer>
                    
                  </Slide>
                ))}
              </Wrapper>

              <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
              </Arrow>
              <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
              </Arrow>
            </Container>
          );
        };
        
        
        export default Slider;
         