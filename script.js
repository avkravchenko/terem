const firstBlock = document.querySelector(".first-block");
const secondBlockCnt2 = document.querySelector(".second-block__container2");
const btn1 = document.querySelector(".btn-warning");
const btn2 = document.querySelector(".btn-success");
const btnCloseModal = document.querySelector(".btn-dark");
const modal = document.querySelector(".my-modal");
const modalBody = document.querySelector(".my-modal__body");

btn1.addEventListener("click", () => {
  firstBlock.classList.toggle("first-block--active");
});

document.addEventListener("DOMContentLoaded", () => {
  modal.classList.add("my-modal--active");
});

modal.addEventListener("click", (e) => {
  modal.classList.remove("my-modal--active");
});

btnCloseModal.addEventListener("click", (e) => {
  modal.classList.remove("my-modal--active");
});

modalBody.addEventListener("click", (e) => {
  e.stopPropagation();
});

btn2.addEventListener("click", () => {
  secondBlockCnt2.classList.toggle("second-block__container2--active");
});
