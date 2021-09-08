const jobs = [
  {
    id: 1,
    company: "Photosnap",
    logo: "photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

let container = document.querySelector(".container");

let wrapper = document.querySelector(".senior");

let catarr = [];
let coll = [];
let sort=[];
window.addEventListener("DOMContentLoaded", () => {
  displayitems(jobs);
  let allthem = document.querySelectorAll(".element");
  crtefil(allthem, jobs);
  coll = document.querySelectorAll(".element");
  console.log(coll);
  let btns = document.querySelectorAll(".btn");


  btns.forEach((item) => {
    item.addEventListener("click", (e) => {
if(!sort.includes(e.target))  {
  let boto = document.createElement("button");
  boto.classList.add("ninoo");
  boto.innerHTML = `<span  class="pero">${e.target.dataset.id}</span>
      <span data-id="${e.target.dataset.id}"  class="awesome">
        <ion-icon name="close-outline"></ion-icon>
      </span>`;
  container.appendChild(boto);
  addeno(boto);
  /////////////////////////////////////////////////////////////////////
  let check = false;
  catarr = [];
  let cat = e.target.innerHTML;
  coll.forEach(cilo => {
    check = false;
    cilo.querySelectorAll('.btn').forEach(as => {
      if (as.dataset.id === cat) check = true;
    })
    if (check == false) cilo.classList.add("hide");
  })
  // console.log(catarr);
sort.push(e.target);
}

else{
  console.log("no")
}
    });
  });


});

function displayitems(menu) {
  let displayres = menu.map((mapa) => {
    return `<div class="element">
      <img class="coco" src="${mapa.logo}" alt="" />
      <div class="deno">
        <div class="DENOO">
          <p class="shortly">${mapa.company}</p>
          <span class="new">NEW!</span>
          <span class="featured">Featured</span>
        </div>
        <h3 class="developer">${mapa.position}</h3>
        <div class="ago">
          <ul>
            <li>${mapa.postedAt}</li>
            <li>${mapa.contract}</li>
            <li>${mapa.location}</li>
          </ul>
        </div>
      </div>
      <div class="btncon">
      </div>
    </div>`;
  });

  displayres = displayres.join("");

  wrapper.innerHTML = displayres;
}

function crtefil(elements, jeno) {
  for (let i = 0; i < elements.length; i++) {
    jeno[i].languages.forEach((itm) => {
      console.log(itm);
      let boto = document.createElement("button");
      boto.classList.add("btn");
      boto.dataset.id = `${itm}`;

      boto.innerHTML = `${itm}`;
      let lasto = elements[i].querySelector(".btncon");

      lasto.appendChild(boto);
    });
    jeno[i].tools.forEach((itm) => {
      console.log(itm);
      let boto = document.createElement("button");
      boto.classList.add("btn");
      boto.dataset.id = `${itm}`;

      boto.innerHTML = `${itm}`;
      let lasto = elements[i].querySelector(".btncon");

      lasto.appendChild(boto);
    });
  }
}

function addeno(ser) {
  let aweom = ser.querySelector(".awesome");
  aweom.addEventListener("click", (e) => {
      let check = false;
      catarr = [];
      let cat = e.target.innerHTML;
      coll.forEach(cilo => {
        check = false;
        cilo.querySelectorAll('.btn').forEach(as => {
          if (as.dataset.id === cat) check = true;
        })
        if (check == false) cilo.classList.remove("hide");
      })

      let ddds;
      if(e.target.parentNode.dataset.id!=undefined) ddds=e.target.parentNode.dataset.id;
      else{
ddds=e.target.dataset.id;
      }

console.log(e.target.parentNode.dataset.id);
console.log(e.target.dataset.id);


sort.forEach(ab=>{

  if(ab.dataset.id==ddds) sort.pop(ab);


})

ser.remove();


  });
}

// when any of buttons wuth class btn pressed only display jobs with category, atleast contains html tag

// you need to put all the elements with this category into an array and then send this array to the function


