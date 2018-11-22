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

let aboutLink = document.querySelector("#about");
// aboutLink.addEventListener("click",function () {
//    document.querySelector("#about-section").classList = "show" 
// },false)




let box = document.querySelector(".box");

aboutLink.addEventListener("click",function () {

      ht = `<p><span>Im a </span> Frontend Developer with an entrepreneur and leadership mindset.  Experienced in UX, frontend technologies, Object-Oriented programming, and DOM manipulation. Skilled in taking products from inception through delivery.  Capable of refining every aspect of a project with an objective eye for detail and efficiency mindset.</p></div>`;

      
  box.innerHTML += ht;
  console.log(div)
      // console.log(aboutinfo)
  },false)