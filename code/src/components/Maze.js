import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNextMove } from '../reducers/game'; //fetching the second thunk(fetch-request)
import styled from 'styled-components';

import game from '../reducers/game';

const MainContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  text-align: center;

  h3 {
    color: white;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
  }
`;

const GlassCard = styled.div`
  flex-direction: column;
  align-items: center;
  padding: 30px;
  margin: 10px;
  height: auto;
  width: 270px;
  display: flex;
  text-align: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #ffffff10;
  backdrop-filter: blur(12px);
  --webkit-backdrop-filter: blur(12px);
  @media (min-width: 768px) {
    width: 400px;
  }
`;

const OptionsDescription = styled.p`
  color: white;
`;

const OptionsActionCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

const Buttons = styled.button`
  width: 100px;
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
  &:hover {
    transform: scale(1.1);
  }
`;

const MainDescription = styled.h1`
  color: white;
  font-size: 20px;
  font-family: 'Langar', cursive;
  letter-spacing: 2px;
  @media (min-width: 768px) {
    font-size: 25px;
  }
`;

const MainCoordinates = styled.p`
  display: none;
`;

const Maze = () => {
  const { description, coordinates, actions } = useSelector(
    (state) => state.game.gameStatus
  );

  const dispatch = useDispatch();

  const onButtonBackClick = () => {
    dispatch(game.actions.setGoBack());
  };

  const handleButtonClick = (type, direction) => {
    dispatch(fetchNextMove(type, direction));
  };

  const handleRestartButton = () => {
    window.location.reload();
  };

  const ActionCard = ({ description, type, direction }) => (
    <OptionsActionCard>
      <OptionsDescription>{description}</OptionsDescription>
      <Buttons onClick={() => handleButtonClick(type, direction)}>
        {type} {direction.toLowerCase()}
      </Buttons>
    </OptionsActionCard>
  );

  const setBgColor = () => {
    let bg =
      'url(https://images.unsplash.com/photo-1506704576233-888a18e8ebe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)';
    switch (coordinates) {
      case '0,0':
        bg =
          'url(https://images.unsplash.com/photo-1506704576233-888a18e8ebe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)';
        break;
      case '1,0':
        bg =
          'url(https://images.unsplash.com/photo-1506704576233-888a18e8ebe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)';
        break;
      case '1,1':
        bg =
          'url(https://images.unsplash.com/photo-1573560751378-c745aeaf4afd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)';
        break;
      case '0,1':
        bg =
          'url(https://images.unsplash.com/photo-1612630646667-d25adadaba8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)';
        break;
      case '0,2':
        bg =
          'url(https://images.unsplash.com/photo-1570967494795-ba97214cb2c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2836&q=80)';
        break;
      case '0,3':
        bg =
          'url(https://images.unsplash.com/photo-1610238115932-44c5c930fd3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80)';
        break;
      case '1,3':
        bg =
          'url(https://images.unsplash.com/photo-1525850499459-5f565b646846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)';
        break;
      default:
        bg =
          'url(https://images.unsplash.com/photo-1506704576233-888a18e8ebe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)';
    }
    return bg;
  };
  return (
    <MainContainer style={{ backgroundImage: setBgColor() }}>
      <GlassCard>
        <MainDescription>{description}</MainDescription>
        <MainCoordinates>{coordinates}</MainCoordinates>
        <Buttons onClick={onButtonBackClick}> Go Back </Buttons>
        {actions.length === 0 && (
          <div>
            <h3>Wohooo you are free!</h3>{' '}
            <Buttons onClick={handleRestartButton}> Restart</Buttons>
          </div>
        )}
        {actions.length > 0 &&
          actions.map((item) => <ActionCard key={item.direction} {...item} />)}
      </GlassCard>
    </MainContainer>
  );
};

export default Maze;
