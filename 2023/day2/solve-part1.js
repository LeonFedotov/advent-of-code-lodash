const _ = require('lodash')
const { readFileSync } = require('fs')

const limits = {
  red: 12,
  green: 13,
  blue: 14
}

_
  .chain(readFileSync('./input'))
  .trim()
  .split('\n')
  .map(line => line.split(':'))
  .map(([game, sets]) => [game, ...(sets.split(';').map(s => s.trim().split(',')))])
  .map(([game, ...sets]) => [
    +game.split(' ').pop(),
    sets.map((set) =>
      set.reduce((res, count) => ({
        ...res,
        [count.trim().split(' ').pop()]: +count.trim().split(' ').shift()
      }), {})
    )
  ])
  .filter(([, sets]) => _.every(sets, (value) => _.every(value, (count, color) => count <= limits[color])))
  .sumBy(([game]) => game)
  .tap(console.log)
  .value()
