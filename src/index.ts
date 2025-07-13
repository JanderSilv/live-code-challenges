function matchPlayersAndTrainers2(players: number[], trainers: number[]): number {
  /* 
      1. Sort both players and trainers
      2. iterate over each array, and check if trainer's capacity is greater than player's ability
      3. If so, match both player and trainer and count
      4. If not, check the next trainer for that player
       */

  let matches = 0
  let playerIndex = 0
  let trainerIndex = 0

  const sortNumberArray = (arr: number[]) => arr.sort((a, b) => a - b)

  sortNumberArray(players)
  sortNumberArray(trainers)

  while (playerIndex < players.length && trainerIndex < trainers.length) {
    if (trainers[trainerIndex] >= players[playerIndex]) {
      trainerIndex++
      matches++
    }

    playerIndex++
  }

  return matches
}

// matchPlayersAndTrainers2([1, 1000000000], [1000000000, 1])
// matchPlayersAndTrainers2([1, 1, 1], [10])
matchPlayersAndTrainers2([4, 7, 9], [8, 2, 5, 8])
