# The RGB Color Game in ReactJS

## Sections

[UX](#ux)

I had never heard of The RGB Color Game until I played it. I decided to, without looking at any source, recreate it from scratch in ReactJS

# UX

How the User will Experience the application

## Definitions

### Player
The `Player` is the only user of the application as this is a local state game that will store a local high score in user storage so that it can be tracked between completed games but only on the local machine.

### Game
The `Game` is defined as the currently interactable state of the game.

### GState
The `GState` is the current interactable state of the game.

### RState
The `RState` is React State and denotes it is the current React State of the application. Since this is a SMA, all state will be contained in the parent.

### Machine
The `Machine` is the local device being interacted with.

### Easy
A difficulty of the game. It presents 3 options for the color to be found

### Medium
A difficulty of the game. It presents 6 options for the color to be found

### Hard
A difficulty of the game. It presents 9 options for the color to be found

### Impossible
A difficulty of the game. It presents 3 options for the color to be found, of a fixed distance of 3 hues from the winning color(the minimally visible difference in shift)

## Experience
1. A Player has come to your site to play `The RGB Color Game`. They are greeted by:  
 - the initial screen, which contains all controls needed to start the game at any of the difficulties([easy](#easy), [medium](#medium), [hard](#hard), [impossible](#impossible))  
 - the last ten Local High Scores are displayed, sorted by round passed  
 - Instructions on how to play the game  
1.a. `Player` selects a difficulty, causing a population of the `GState` as defined by the difficulty. Proceed to `Story` `2`  
1.b. `Player` does nothing, continue showing screen. See `Story` `1`

2. Player selects a difficulty and it renders the `GState`  
 - Score starts at 0, increases for each round won  
 2.a. `Player` Clicks on the incorrect color and loses the round. Proceed to `Story` `3` `Loses`  
 2.b. `Player` Click on the correct color and wins the round. Incriment score, Proceed to `Story` `2` with updated score

3. Loses. The Player can only come here by selecting an incorrect color during a round.  
 - Display number of rounds won  
 - If they have achieved a high score on this `machine` ask for initials and store in local storage as a JSON Array
 - Allow the player to select a difficulty and start a new game. Proceed to `Story` `2`

## User Experience Stories
 - As a Player, I want to win the round so that I can get a better score
 - As a a Player, I want to get a high score so that I can set the local high scores
 - As a Player, I want to start a new game if I lose so that I can play again
 - As a Player, I want to see many different colors so that I can learn what they look like while playing
 - As a Player, I want to be challenged when I'm ready for it by changing the difficulty
 - As a Player, I want each round to be more challenging than the last few by the wrong choices getting closer to the real choice as I play more sets of rounds(5 rounds a set)