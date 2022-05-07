// import { subsets } from './subsets'
// import { validParenthesesTest } from './validParentheses'

import { judge } from './turing_code_challenge/townJudge'

// validParenthesesTest()
// console.log(subsets([1, 2, 3]))
console.log(
  judge([
    [1, 3],
    [2, 3],
    [3, 1],
  ])
)
