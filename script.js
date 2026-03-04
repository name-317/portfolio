const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll(".thumb").forEach(btn => {
  btn.addEventListener("click", () => {
    const src = btn.dataset.src;
    modalImg.src = src;
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal(){
  modal.setAttribute("aria-hidden", "true");
  modalImg.src = "";
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if(e.target === modal) closeModal();
});
window.addEventListener("keydown", (e) => {
  if(e.key === "Escape") closeModal();
});
