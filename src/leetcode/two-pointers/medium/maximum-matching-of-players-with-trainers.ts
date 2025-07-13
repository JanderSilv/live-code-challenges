function matchPlayersAndTrainers(players: number[], trainers: number[]): number {
  /* 
    1. Sort both players and trainers
    2. iterate over each array, and check if trainer's capacity is greater than player's ability
    3. If so, match both player and trainer and count
    4. If not, check the next trainer for that player
     */

  let matches = 0

  const sortNumberArray = (arr: number[]) => arr.sort((a, b) => a - b)

  sortNumberArray(players)
  sortNumberArray(trainers)

  for (let playerIndex = 0; playerIndex < players.length; playerIndex++) {
    for (let trainerIndex = 0; trainerIndex < trainers.length; trainerIndex++) {
      if (trainers[trainerIndex] >= players[playerIndex]) {
        playerIndex++
        matches++
        trainers.pop()
      }
    }
  }

  return matches
}
