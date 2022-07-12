/* 
1. We start iterating from 0
2. If we don't find the rabbit, we run through again starting at 1
*/

let rabbitPosition = null

const createHoles = () => {
  const holes = []
  for (let i = 0; i < 100; i++) holes.push(false)
  return holes
}

const placeRabbit = (holes: boolean[]) => {
  const hole = Math.floor(Math.random() * holes.length)
  holes[hole] = true
  rabbitPosition = hole
}

const rabbitStep = (holes: boolean[]) => {
  const stepDirection = Math.round(Math.random())
  if (stepDirection === 0) {
    holes[rabbitPosition] = false
    holes[rabbitPosition - 1] = true
    rabbitPosition--
  } else {
    holes[rabbitPosition] = false
    holes[rabbitPosition + 1] = true
    rabbitPosition++
  }
}

const checkRabbit = (holes: boolean[], search: 'even' | 'odd') => {
  console.log(`\n- Searching for the rabbit on a ${search} position`)
  let haveFoundRabbit = false
  for (let index = search === 'even' ? 0 : 1; index < holes.length; index++) {
    if (haveFoundRabbit) break
    console.log('Looking at position: ', index)
    console.log('The rabbit is at position:', rabbitPosition)
    if (holes[index] === true) haveFoundRabbit = true
    rabbitStep(holes)
  }
  return haveFoundRabbit
}

;(() => {
  console.log('** Starting the rabbit hole game ** ')
  const holes = createHoles()
  placeRabbit(holes)
  const haveFoundEvenRabbit = checkRabbit(holes, 'even')
  if (haveFoundEvenRabbit) return console.log('\nFound rabbit! at position:', rabbitPosition)

  const haveFoundOddRabbit = checkRabbit(holes, 'odd')
  if (haveFoundOddRabbit) console.log('\nFound rabbit! at position:', rabbitPosition)
  else console.log('\nCould not find rabbit!')
})()
