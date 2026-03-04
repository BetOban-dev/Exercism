//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export let COLORS = {
 "black": 0,
"brown": 1,
"red": 2,
 "orange": 3,
"yellow": 4,
"green": 5,
"blue": 6,
"violet": 7,
"grey": 8,
"white": 9
}
export const decodedValue = (color) => {

  let first = COLORS[color[0]]
  console.log(first)

  let second = COLORS[color[1]]
  console.log(second)
  let sum = first *10 + second
  return sum
};
