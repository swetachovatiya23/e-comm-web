import { Link } from "react-router-dom";
import styled from "styled-components"


//For whole block picture set-up
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

//For Image 
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
`;

//For Information
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


//For Title
const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
    display: flex
`;


//For Button
const Button = styled.button`
    border:none;
    padding: 15px;
    background-color: white;
    color:black;
    cursor: pointer;
    font-weight: 600;
`;



const CategoryItem = ({item}) => {
    return (
        <Container>
          <Link to={`/Products/${item.cat}`}>
            <Image src={item.img}/>
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
                </Link>
        </Container>
    );
};

export default CategoryItem;