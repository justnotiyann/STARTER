let mainProject = document.getElementById("project");

const Project = () => {
  return `
 <div class="lg:pt-[120px] px-[120px] relative dark:bg-background-100 pb-[500px]">
      <h1 class="bg-gradient-to-t from-blues-100 to-blues-200 bg-clip-text text-transparent text-[48px] font-bold text-center relative z-10">Our Project</h1>
     <p class="text-[20px] text-center dark:text-slate-100 relative z-10">Next this not shut rethoric best had well of was on facility of the present.</p>
     <div class="flex flex-wrap justify-evenly mt-[30px] relative" id="images-project"></div>
     <img src="public/images/project/vector-1.svg" class="absolute top-0 left-[-30px] animate-ping"/>
     <img src="public/images/project/vector-2.svg" class="absolute bottom-[450px] left-4 animate-pulse"/>
     <img src="public/images/project/vector-3.svg" class="absolute bottom-[500px] left-12 animate-pulse"/>
     <img src="public/images/project/vector-4.svg" class="absolute top-[140px] left-[38%] animate-bounce"/>
     <img src="public/images/project/vector-5.svg" class="absolute top-[510px] left-[32%]"/>
     <img src="public/images/project/vector-6.svg" class="absolute top-[150px] left-[61%]"/>
     <img src="public/images/project/vector-7.svg" class="absolute bottom-[300px] left-[70%]"/>
     <img src="public/images/project/vector-8.svg" class="absolute top-[500px] left-[88%] animate-pulse"/>
 </div>
     `;
};

mainProject.insertAdjacentHTML("afterbegin", Project());

const imagesProject = [
  {
    url: "public/images/project/img-6.svg",
    id: 6,
  },
  {
    url: "public/images/project/img-5.svg",
    id: 5,
  },
  {
    url: "public/images/project/img-4.svg",
    id: 4,
  },
  {
    url: "public/images/project/img-3.svg",
    id: 3,
  },
  {
    url: "public/images/project/img-2.svg",
    id: 2,
  },
  {
    url: "public/images/project/img-1.svg",
    id: 1,
  },
];

let getProjectImg = document.getElementById("images-project");

function loopImageProject(url, increment) {
  const image = `<div id=${increment} class="cursor-pointer before:hover:content-['See_More'] before:hover:absolute  before:hover:text-white before:hover:bg-green-200 before:hover:py-[10px] before:hover:px-[10px] before:hover:rounded-[10px] relative z-10"><img src=${url} alt="img" class="w-[400px] h-[300px] my-[10px] " /></div>`;

  getProjectImg.insertAdjacentHTML("afterbegin", image);
}

imagesProject.forEach((image) => {
  loopImageProject(image.url, image.id);
});