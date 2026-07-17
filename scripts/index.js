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

const profileNameText = document.querySelector(".profile__name");
const profileDescriptionText = document.querySelector(".profile__description");
const editProfileForm = document.querySelector(".modal__form");
const profileNameInputText = editProfileForm.querySelector(
  "#profile-name-input",
);
const profileDescriptionInputText = editProfileForm.querySelector(
  "#profile-description-input",
);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameText.textContent = profileNameInputText.value;
  profileDescriptionText.textContent = profileDescriptionInputText.value;

  profileEditModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleProfileFormSubmit);

const addBtnFormElement = newPostModal.querySelector(".modal__form");
const cardLinkInput = newPostModal.querySelector("#card-image-input");
const cardNameInput = newPostModal.querySelector("#card-caption-input");

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  console.log(cardLinkInput.value);
  console.log(cardNameInput.value);

  newPostModal.classList.remove("modal_is-opened");
}

addBtnFormElement.addEventListener("submit", handleAddCardSubmit);
