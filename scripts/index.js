const profileEditBtn = document.querySelector(".profile__edit-btn");
const profileEditModal = document.querySelector("#edit-profile-modal");
const profileEditCloseBtn = profileEditModal.querySelector(".modal__close-btn");

const profileNameText = document.querySelector(".profile__name");
const profileDescriptionText = document.querySelector(".profile__description");
const editProfileForm = profileEditModal.querySelector(".modal__form");
const profileNameInputText = editProfileForm.querySelector(
  "#profile-name-input",
);
const profileDescriptionInputText = editProfileForm.querySelector(
  "#profile-description-input",
);

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const addBtnFormElement = newPostModal.querySelector(".modal__form");
const cardLinkInput = newPostModal.querySelector("#card-image-input");
const cardNameInput = newPostModal.querySelector("#card-caption-input");

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

function openProfileEditModal() {
  profileNameInputText.value = profileNameText.textContent;

  profileDescriptionInputText.value = profileDescriptionText.textContent;

  openModal(profileEditModal);
}

function closeProfileEditModal() {
  closeModal(profileEditModal);
}

function openNewPostModal() {
  openModal(newPostModal);
}

function closeNewPostModal() {
  closeModal(newPostModal);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameText.textContent = profileNameInputText.value;
  profileDescriptionText.textContent = profileDescriptionInputText.value;
  closeModal(profileEditModal);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log(cardLinkInput.value);
  console.log(cardNameInput.value);
  closeModal(newPostModal);
}

profileEditBtn.addEventListener("click", openProfileEditModal);
editProfileForm.addEventListener("submit", handleProfileFormSubmit);
addBtnFormElement.addEventListener("submit", handleAddCardSubmit);
profileEditCloseBtn.addEventListener("click", () =>
  closeModal(profileEditModal),
);
newPostBtn.addEventListener("click", () => openModal(newPostModal));
newPostCloseBtn.addEventListener("click", () => closeModal(newPostModal));
