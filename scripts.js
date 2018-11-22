let skills = {

}

let positions = ["frontend developer",
"UI developer",
"Web developer","bob","worker"]


let positionsDom = document.querySelector('.positions');

let displayPositions = (name)=> positions.innerHTML = name;
// console.log(displayPositions())

var logName = function(name) {
  positionsDom.innerHTML = name;
    console.log(name);
};
var makeClosure = function(name) {
    return function() { 
        logName(name);
    }
};
// for (var i=0; i < positions.length; i++) {
//     var name = positions[i];
//      console.log(i)
//     setTimeout(makeClosure(name), 4000);
// }


// let makeClosure = function(){
//   return function () {
//     displayPositions(name)
//   }
// }

  // function loadJobs() { 
  //   for(let i=0; i<3; i++){
  //     console.log(positions[i])
  //     // positionsDom.innerHTML = positions[i]
  //   }
  // }
//  setTimeout(loadJobs, 4000);
//  setTimeout(() => loadJobs, 1000);

// loadJobs(positions)
// console.log(positions[1])
