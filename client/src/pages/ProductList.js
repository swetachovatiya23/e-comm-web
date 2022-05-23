import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


const Container = styled.div``;

//For the title if the dresses
const Title = styled.h1`
  margin: 20px;
`;

//For the filter container
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;


//For the filter
const Filter = styled.div`
  margin: 20px;
  
`;

// For the filter container texts
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  
`;

//for the select option
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
        <Announcement />
      <Navbar />
      
      <Title>Dresses</Title>
      <FilterContainer>

        <Filter>
          <FilterText>Filter Products:</FilterText>
          
          <Select>
              
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>

          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
