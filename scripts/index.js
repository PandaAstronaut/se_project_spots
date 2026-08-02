const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

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
  addBtnFormElement.reset();
}

profileEditBtn.addEventListener("click", openProfileEditModal);
editProfileForm.addEventListener("submit", handleProfileFormSubmit);
addBtnFormElement.addEventListener("submit", handleAddCardSubmit);
profileEditCloseBtn.addEventListener("click", () =>
  closeModal(profileEditModal),
);
newPostBtn.addEventListener("click", () => openModal(newPostModal));
newPostCloseBtn.addEventListener("click", () => closeModal(newPostModal));

initialCards.forEach(function (card) {
  console.log(card.name);
});
