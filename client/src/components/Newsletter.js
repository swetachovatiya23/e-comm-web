import { Send } from "@material-ui/icons";
import styled from "styled-components";

//For the main news container
const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display:flex;
  margin: 3px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

//For the newsletter title
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

//For the description of newsletter
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  
`;

//For the input container
const InputContainer = styled.div`
  width: 50%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  
`;

//For the input datas
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

//For the buttons
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
         <head>
    <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86"/>
    </head>

      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>

      <InputContainer>
        <Input placeholder="Your email" />

        <Button>
          <Send/>
        </Button>

      </InputContainer>
    </Container>
  );
};

export default Newsletter;
