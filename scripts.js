
let positions = ["frontend developer",
"UI developer",
"Web developer","bob","worker"]


let positionsDom = document.querySelector('.typewriter');

let displayPositions = (name)=> positions.innerHTML = name;
// console.log(displayPositions())

var logName = (p)=> {
    var pos = positionsDom.textContent;
    console.log(positionsDom.textContent);

    return p.forEach((jobs) => {
        pos = jobs;
    })
};

logName(positions)

let aboutLink = document.querySelector("#about");
// aboutLink.addEventListener("click",function () {
//    document.querySelector("#about-section").classList = "show" 
// },false)




let details = document.querySelector(".details");

aboutLink.addEventListener("click",function () {

      ht = `<p><span>I'm a </span> Frontend Developer with an entrepreneur and leadership mindset.  Experienced in UX, frontend technologies, Object-Oriented programming, and DOM manipulation. Skilled in taking products from inception through delivery.  Capable of refining every aspect of a project with an objective eye for detail and efficiency mindset.</p></div>`;

      
  details.innerHTML = ht;
  console.log(div)
      // console.log(aboutinfo)
  },false)

  document.querySelector("#projects").addEventListener('click',() => {
      
  })