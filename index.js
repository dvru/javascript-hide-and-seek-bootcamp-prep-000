//1
function getFirstSelector(selector) {
  document.querySelector(selector)
  return document.querySelector(selector)
}


//2
function nestedTarget() {
  document.querySelector('div')
  return document.querySelector('div')
}

//3  Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()
function increaseRankBy(n) {
  n = parseInt(n, 10)
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    debugger
    lis[i].innerHTML = (parseInt(lis[i].innerHTML, 10) + n).toString()
  }
 return lis
}

//4
function deepestChild() {
  var nodes = document.querySelectorAll('#grand-node div');
  var mostDeep = nodes[nodes.length - 1]
  if(!nodes.length) return false;
  return nodes[nodes.length-1];
}