const navList = document.querySelector('.navList')
const navBtn = document.querySelector('.navBtn')
const navLinks = document.querySelectorAll('.navLi')
const next =document.querySelector(".image-change");

navBtn.addEventListener('click', () => {
  // toggle navList on navBtn btn click
  navList.classList.toggle('navActive');

  // li elements fade in
  // index(position in array) passed as 2nd argument by forEach()
  navLinks.forEach((item, index) => {
    const delay = index / 10 + 0.05;
    // console.log(delay)
    item.style.transition = `all 0.5s ease-in ${delay}s`
    item.classList.toggle('fadeIn');
  })

  // toggle navBtn three horizantle lines into X and back
  navBtn.classList.toggle('navBtnToggle');

})

//show
function load(){
  document.querySelectorAll(".progress").forEach(function(current){
    let startwidth=0;
    const endwidth=current.dataset.size;
    const time=setInterval(frame ,20);

    function frame(){
      if(statwidth>=endwidth){
        clearInterval(time)
      }
      else{
        startwidth++;
        current.style.width=`${endwidth}%`;
        current.firstElementChild.innerHTML=`${startwidth}%`;
      }
    }

  })
}
load();
// document.querySelector('a').addEventListener('click',load,{once:true}) 
//certificate

var certifis =['certificate/google certificate_page-0001.jpg',
'certificate/java infosys_page-0001.jpg',
'certificate/python infosys_page-0001.jpg',
'certificate/part2 python_page-0001.jpg',
'certificate/PYTHON UDEMY_page-0001.jpg',
'certificate/RAGHULSHAKTHI (JAVA SCRIPT)_page-0001.jpg',
'certificate/RAGHULSHAKTHI TCS_page-0001.jpg',
'certificate/Wipro_Raghul Shakthi K_page-0001 (1).jpg',
'certificate/udemy MERN_page-0001.jpg','certificate/IBM DS0101EN Certificate _ Skillsbuild for Students_page-0001.jpg'
]
var i=0;

function left() {
 if(i<=0) i=certifis.length
  i--;
  return setImage()
}
function right() {
 if(i>=certifis.length-1) i=-1
  i++;
  return setImage()
}


function setImage(){
 return next.setAttribute("src",certifis[i])

}


