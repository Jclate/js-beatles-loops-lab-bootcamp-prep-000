// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i]
    var instrument = instruments[i]
    array.push(`${musician} plays ${instrument}`)
  }
  return array
}
