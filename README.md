# Project Labyrinth 🗿

The goal of the project was to build a text-based Labyrinth Game adventure using **React Redux** and **thunks**. The game retrieves a description and a list of actions from the backend and presents them to the player. Based on the player's choice, the state of the game is updated and a new description and set of actions are presented.🎲🎮

## What have I learned 💡

- To understand the structure of the data we received from **Backend** we used **Postman** to test out the game.
- The game starts by letting the player create a **Username**, which is stored in the **Redux global store** **reducer** setUserName. With this information we made our first **API POST request** to the backend that provides us with the first set of instructions to the player.
- When the player clicks on a direction, a new **POST request** is triggered to the Backend that in turn provides us with a new description and set of actions that we display to the player.
- Each request is performed by a **thunk**: 1. performs a fetch, 2. receives the data, 3.passes that data to one of our reducers, 4. The reducer then saves this data to the global store and becomes our current game status.
- When styling the game we wanted a unique background for each move. For this we created a function that switched different pictures based on the coordinates we received from each move.
- We mainly used **Styled Components** and find this approach to be organized and easy to follow.
- This project was a great opportunity to dive deeper into React Redux concepts and put them to use.

## View it live

https://maze-amanda-madelene.netlify.app/ (
this is a pair-programming project by Amanda Tilly & Madelene Trang)
