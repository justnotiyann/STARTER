window.onscroll = function () {
  const header = document.querySelector("#fixed");
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add("fixed");
    header.classList.add("z-[9999]");
    header.classList.add("bg-opacity-80");
    header.classList.add("backdrop-blur-sm");
    header.classList.add("shadow-navbar");
  } else {
    header.classList.remove("fixed");
    header.classList.remove("z-[9999]");
    header.classList.remove("bg-opacity-80");
    header.classList.remove("backdrop-blur-sm");
    header.classList.remove("shadow-navbar");
  }
};

const lampToggle = () => {
  const lampToggle = document.querySelector("#lamp-toggle");
  const lampMobile = document.querySelector("#lamp-toggle-mobile");
  const html = document.querySelector("html");
  if (lampToggle.checked || lampMobile.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
};



function alert() {
  swal("Succes", "Thanks for sending the message", "success");
}
