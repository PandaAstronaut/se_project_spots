const profileEditBtn = document.querySelector(".profile__edit-btn");
const profileEditModal = document.querySelector("#edit-profile-modal");
const profileEditCloseBtn = profileEditModal.querySelector(".modal__close-btn");

function profileEditBtnClick() {
  profileEditModal.classList.add("modal_is-opened");
}

function profileEditCloseBtnClick() {
  profileEditModal.classList.remove("modal_is-opened");
}

profileEditBtn.addEventListener("click", profileEditBtnClick);

profileEditCloseBtn.addEventListener("click", profileEditCloseBtnClick);

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

function newPostBtnClick() {
  newPostModal.classList.add("modal_is-opened");
}

function newPostCloseBtnClick() {
  newPostModal.classList.remove("modal_is-opened");
}

newPostBtn.addEventListener("click", newPostBtnClick);

newPostCloseBtn.addEventListener("click", newPostCloseBtnClick);
