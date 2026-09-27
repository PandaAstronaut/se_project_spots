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
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
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

const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

const expandViewModal = document.querySelector("#expand-view-modal");
const expandTitlePreview = expandViewModal.querySelector(".modal__popup-title");
const expandImagePreview = expandViewModal.querySelector(".modal__popup-img");
const expandViewModalCloseBtn = expandViewModal.querySelector(
  ".modal__close-btn_type_preview",
);

function getCardElement(data) {
  const cardElement = cardTemplate.content.cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");

  cardImage.addEventListener("click", () => {
    expandImagePreview.src = data.link;
    expandImagePreview.alt = data.name;
    expandTitlePreview.textContent = data.name;
    openModal(expandViewModal);
  });

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  const cardLikeBtn = cardElement.querySelector(".card__like-btn");
  cardLikeBtn.addEventListener("click", () =>
    cardLikeBtn.classList.toggle("card__like-btn_toggled"),
  );

  const cardDeleteBtn = cardElement.querySelector(".card__delete-btn");
  const card = cardElement.querySelector(".card");
  cardDeleteBtn.addEventListener("click", () => card.remove());

  return cardElement;
}

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
  const cardPrefill = { name: cardNameInput.value, link: cardLinkInput.value };
  const newCardElement = getCardElement(cardPrefill);
  closeModal(newPostModal);
  addBtnFormElement.reset();
  cardsList.prepend(newCardElement);
}

function setupCloseListener(closeBtn, modal) {
  closeBtn.addEventListener("click", () => closeModal(modal));
}

profileEditBtn.addEventListener("click", openProfileEditModal);
editProfileForm.addEventListener("submit", handleProfileFormSubmit);

newPostBtn.addEventListener("click", () => openModal(newPostModal));
addBtnFormElement.addEventListener("submit", handleAddCardSubmit);

setupCloseListener(profileEditCloseBtn, profileEditModal);
setupCloseListener(newPostCloseBtn, newPostModal);
setupCloseListener(expandViewModalCloseBtn, expandViewModal);

initialCards.forEach(function (card) {
  const fetchCardEl = getCardElement(card);
  cardsList.prepend(fetchCardEl);
});
