"use strict";

const document_list = document.querySelector(".api_documents_box");
const document_info = document.querySelector(".api_details_box_container");
const document_info_list_button = document.querySelector(
  ".list_button_container"
);

const api_document_list = [
  {
    api_document_title: "우정사업정보센터 출입정보",
    api_document_summary: "API 정보 요약",
  },

  {
    api_document_title: "우정사업정보센터 출입정보",
    api_document_summary: "API 정보 요약",
  },

  {
    api_document_title: "우정사업정보센터 출입정보",
    api_document_summary: "API 정보 요약",
  },

  {
    api_document_title: "우정사업정보센터 출입정보",
    api_document_summary: "API 정보 요약",
  },
];

function getApiDocument(data) {
  let api_document_list = document.getElementById("kpdid_api_document");

  for (var i = 0; i < data.length; i++) {
    var api_document = `
      <div class="api_single_document_container">
        <p>${data[i].api_document_title}</p>
        <div class="api_single_document_button_row">
        <span>${data[i].api_document_summary}</span>
        <div class="api_single_document_download_container">
        <div>다운로드</div>
          <img src="../assets/download_icon.svg" alt="download_icon" />
        </div>
        </div>
      </div>
  `;

    api_document_list.innerHTML += api_document;

    const document_download_button = document.querySelectorAll(
      ".api_single_document_download_container"
    );

    [...document_download_button].forEach((item) => {
      item.addEventListener("click", () => {
        document_list.classList.add("hidden");
        document_info.classList.remove("hidden");
        document_info_list_button.classList.remove("hidden");
      });
    });
  }
}

getApiDocument(api_document_list);

document_info_list_button.addEventListener("click", () => {
  document_list.classList.remove("hidden");
  document_info.classList.add("hidden");
  document_info_list_button.classList.add("hidden");
});
