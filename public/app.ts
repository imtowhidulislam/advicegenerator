const url = "https://api.adviceslip.com/advice";

const adviceTitle = document.querySelector(".advice__title");
const advice = document.querySelector(".advice");
const advice__container = document.querySelector(".advice__container");
const advice__btn = document.querySelector(".advice__btn");
const arrow = document.querySelector(".bi");
const btn__container = document.querySelector(".btn__container");

const renderError = (msg) => {
  const body = document.body;
  body.textContent = msg;
  //   advice__container.style.opacity = 0;
};

const setAdvice = (adurl, msg = "someting went wrong") => {
  return fetch(adurl).then((res) => {
    if (!res.ok) throw new Error(`${msg}`);

    return res.json();
  });
};
const createAdvice = (data) => {
  const adviceText = data.slip.advice;
  const adviceTittle1 = data.slip.id;
  advice.textContent = `${adviceText}`;
  adviceTitle.textContent = `Advice quote : ${adviceTittle1}`;
};

const getAdvice = async (url) => {
  setAdvice(url, "response doesn't found")
    .then((data) => createAdvice(data))
    .catch((Error) => {
      console.error("Data not found");
      renderError(
        `Something went wrong with the response ${Error.message} 👾👾🎉🎉 try again.`
      );
    });
};

btn__container.addEventListener("click", () => {
  arrow.classList.toggle("rotate");
  getAdvice(url);
});
