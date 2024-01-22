# Leaderboard Project

This project is a simple leaderboard application that allows users to manage and display a list of players with their scores. The application is built using HTML, JavaScript, and CSS to create an interactive and visually appealing user interface.

## Features

1. **Add Player:** Users can add a new player to the leaderboard by entering their first name, last name, country, and score.

2. **Score Management:** Users can increase or decrease a player's score by 5 points using the provided buttons.

3. **Player Deletion:** Players can be removed from the leaderboard using the delete button.

4. **Responsive Design:** The leaderboard has a clean and responsive design to provide a seamless user experience on various devices.

## JavaScript Functions

- **addPlayer(event):** Validates input fields, displays an error message for empty fields, and adds a new player to the leaderboard.

- **increaseScoreHandler(index):** Increases the score of a player at the specified index by 5 and refreshes the leaderboard.

- **decreaseScoreHandler(index):** Decreases the score of a player at the specified index by 5 and refreshes the leaderboard.

- **deletePlayerHandler(index):** Deletes the player at the specified index from the leaderboard and refreshes the display.

- **refreshList():** Sorts the player list based on scores and updates the HTML to display the refreshed leaderboard.

- **createButton(text, clickHandler):** Utility function to create a button element with specified text and click handler.

## CSS Styling

The CSS file (`leaderboard.css`) provides a visually appealing design for the leaderboard, including box shadows, rounded buttons, and a consistent color scheme.

**This project offered valuable hands-on experience in implementing dynamic web functionality using JavaScript. The combination of HTML, CSS, and JavaScript resulted in an interactive leaderboard with a modular and responsive design. The project showcases the ability to create a functional and visually appealing web application.**
