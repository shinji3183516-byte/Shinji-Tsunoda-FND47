"use strict";

let digitizationButton = document.getElementById("digitizationButton");
let digitalizationButton = document.getElementById("digitalizationButton");
let dxButton = document.getElementById("dxButton");

let title = document.getElementById("title");
let description = document.getElementById("description");
let example = document.getElementById("example");

digitizationButton.addEventListener("click", function() {
  title.textContent = "デジタイゼーション";
  description.textContent = "紙や手書きなどのアナログ情報を、パソコンで使えるデータにすることです。";
  example.textContent = "例：紙の点検表をExcelに入力する。手書きの記録をデータにする。";
});

digitalizationButton.addEventListener("click", function() {
  title.textContent = "デジタライゼーション";
  description.textContent = "データを使って、仕事の流れを便利にしたり、効率よくしたりすることです。";
  example.textContent = "例：入力した点検データを使って、自動で集計する。確認作業を早くする。";
});

dxButton.addEventListener("click", function() {
  title.textContent = "DX";
  description.textContent = "デジタル技術を使って、仕事のやり方や提供する価値そのものを変えることです。";
  example.textContent = "例：紙の管理をやめるだけでなく、データを見て問題を早く見つけ、改善につなげる。";
});

let sloganButton = document.getElementById("slogan-button");
let mainTitle = document.getElementById("main-title");
let imageButtons = [digitizationButton, digitalizationButton, dxButton];

sloganButton.addEventListener("click", function() {
  mainTitle.classList.remove("title-pop");

  for (const button of imageButtons) {
    button.classList.remove("button-glow");
  }

  setTimeout(function() {
    mainTitle.classList.add("title-pop");

    for (const button of imageButtons) {
      button.classList.add("button-glow");
    }
  }, 10);

  setTimeout(function() {
    for (const button of imageButtons) {
      button.classList.remove("button-glow");
    }
  }, 1600);
});
