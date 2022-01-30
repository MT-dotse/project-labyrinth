import React from 'react';
import { useDispatch } from 'react-redux';
import game from '../reducers/game';
import { fetchGame } from '../reducers/game';

import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(./assets/mazeStartPage.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  width: 100%;
`;

const Wrapper = styled.div`
  flex-direction: column;
  align-items: center;
  padding: 30px;
  margin: 20px;
  height: 250px;
  width: 250px;
  display: flex;
  text-align: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #ffffff10;
  backdrop-filter: blur(12px);
  --webkit-backdrop-filter: blur(12px);
  @media (min-width: 768px) {
    width: 250px;
  }
`;

const Input = styled.input`
  ::placeholder {
    text-align: center;
    font-family: 'Langar', cursive;
    letter-spacing: 2px;
  }
  outline-color: rgb(90, 134, 148);
  min-height: 40px;
  padding-left: 20px;
  margin: 15px 10px 10px;
  border-radius: 10px;
  height: 20px;
  border-style: none;
  font-weight: 650;
  min-height: 40px;
`;

const UserName = styled.h1`
  margin: 0;
  font-size: 40px;
  font-family: 'Langar', cursive;
  text-align: center;
  color: white;
  letter-spacing: 2px;
  text-shadow: rgb(57, 78, 58) 0px 0px 4px, rgb(90, 134, 148) 0px 0px 6px;
`;

const Startbtn = styled.button`
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: solid 2px rgb(90, 134, 148);
  border-radius: 20px;
  padding: 10px;
  font-weight: bold;
  background: rgb(90, 134, 148);
  color: white;
  margin-top: 15px;
`;

const Label = styled.label`
  margin: 0;
`;

//Start page where the user will input their username
const StartPage = () => {
  const dispatch = useDispatch();

  // A function that stores the users input name on submit and dispatches it to the store
  const handleInputChange = (event) => {
    dispatch(game.actions.setUserName(event.target.value));
  };

  // A function that prevents the automatic submit
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(fetchGame());
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Wrapper>
        <Label>
          <UserName> Enter The Maze! </UserName>
        </Label>
        <div>
          <Input
            type="text"
            required
            onChange={handleInputChange}
            placeholder="Type your name..."
          />
          <Startbtn type="submit"> Start </Startbtn>
        </div>
      </Wrapper>
    </FormContainer>
  );
};

export default StartPage;
