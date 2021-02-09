/*
 * Author: Ashley Mojica <asmojica@ucsc.edu>
 * Created: 9 February
 * License: Public Domain
 */

function firstThing(test) {
  console.log(test + ": This is the first thing. <br>")
}

function secondThing(test) {
  console.log(test + ": This is the second thing. <br>")
}

function thirdThing(test) {
  console.log(test + ": This is the third thing. <br>")
}

firstThing("TEST 1")
secondThing("TEST 1")
thirdThing("Test 1")

setTimeout(function() {
  firstThing("TEST 2")
}, 0)

setTimeout(function() {
  secondThing("TEST 2")
}, 0)

setTimeout(function() {
  thirdThing("TEST 2")
}, 2000)

setTimeout(function() {
  firstThing("TEST 3")
}, 2000)

setTimeout(function() {
  secondThing("TEST 3")
}, 2000)

setTimeout(function() {
  thirdThing("TEST 3")
}, 2000)