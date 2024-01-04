const modal = document.getElementById("modal");
const close = document.getElementById("close");

const urlParams = new URLSearchParams(window.location.search);
const modalParam = urlParams.get("full");

const openModal = () => {
  modal.style.display = "block";
};

if (modalParam === "true") {
  openModal();
}

function closeModal() {
  history.back();
}
