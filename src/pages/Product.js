import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";


const Container = styled.div``;

//For the main wrapper
const Wrapper = styled.div`
  padding: 50px;
  display: flex;

`;

//For the image container
const ImgContainer = styled.div`
  flex: 1;
`;

//For the images
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  
`;

//For the infocontainer
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  
`;

//For the Title
const Title = styled.h1`
  font-weight: 200;
`;

//For the description
const Desc = styled.p`
  margin: 20px 0px;
`;

//For the prices
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

//For the filtercontainer
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  
`;

//For the filter
const Filter = styled.div`
  display: flex;
  align-items: center;
`;

//For the filtertitle
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

//For the filtorcolor
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

//For the filtersize
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

//For the amount container
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

//For the amount
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

//For the buttons
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>

        <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1646243810070-e85604a202cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
        </ImgContainer>
        <InfoContainer>

          <Title>Leather Skirt</Title>

          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 40</Price>
          <FilterContainer>

            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="crimson" />
              <FilterColor color="darkblue" />
              <FilterColor color="orange" />
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>

              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>

        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;