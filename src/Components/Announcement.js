import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: crimson;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

const Announcement = () => {
  return (
  <Container>
  Spring Deal ! Free Shipping over $50 shopping! OMG Hurry, sale ends soon  !!!
</Container>
)
};

export default Announcement;