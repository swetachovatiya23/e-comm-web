import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router";
import { useState } from "react";


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

//for fetching filter cats
const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");


  //fetching filter cats
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
       ...filters,
      [e.target.name]: value,
    });
  };


  return (
    <Container>
        <Announcement />
      <Navbar />
      
      <Title>{cat}</Title>
      <FilterContainer>

        <Filter>
          <FilterText>Filter Products:</FilterText>
          
          <Select name="color" onChange={handleFilters}>
              
            <Option disabled >
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>

          <Select name="size" onChange={handleFilters}>
            <Option disabled>
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
          <Select onChange={(e) => setSort(e.target.value)}>
          <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      
      
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
