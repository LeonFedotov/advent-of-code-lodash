const _ = require('lodash')
const { readFileSync } = require('fs')
const log = (v) => console.dir(v, { depth: null })
const rank = [
  'A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'
].reduce((acc, value, index, input) => ({ ...acc, [value]: input.length - index }), {});


_.chain(readFileSync('./input'))
  .split('\n')
  .map((line) => line.split(' '))
  .map(([hand, bid]) => [hand, bid, _.chain(hand).split('').groupBy().values().sortBy((g) => -g.length).value()])
  .map(([hand, bid, cardGrouping]) => [hand, bid, (
    cardGrouping.length == 1 ? 6 :
    cardGrouping.length == 2 ? cardGrouping[0].length == 4 ? 5 : 4 :
    cardGrouping.length == 3 ? cardGrouping[0].length == 3 ? 3 : 2 :
    cardGrouping.length == 4 ? 1 :
    0
  )])
  .sortBy(([,, rank]) => rank)
  .groupBy(([,, rank]) => rank)
  .reduce((acc, value) => [...acc, ...value.sort(([handA], [handB]) =>
    handA.split('').reduce((acc, value, index) => acc || (rank[value] - rank[handB[index]]), 0)
  )], [])
  .map(([hand, bid], index) => [hand, bid, index+1])
  .map(([hand, bid, rank]) => rank*bid)
  .sum()
  .tap(log)
  .value()
