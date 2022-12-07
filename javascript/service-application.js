"use strict";

const agreementTab = document.querySelector(".agreement_tab");
const agreementTabContent = document.querySelector(".tab_content");

const applicationFormTab = document.querySelector(".application_form_tab");
const applicationFormTabContent = document.querySelector(
  ".application_form_content"
);

const submitApplicationTab = document.querySelector(".submit_application_tab");
const submitApplicationTabContent = document.querySelector(
  ".submit_application_content"
);

const applicationTabContentButton = document.querySelector(
  ".term_agreement_button"
);
const applicationFormContentPrevButton = document.querySelector(".prev_button");
const applicationFormContentNextButton = document.querySelector(".next_button");
const submitApplicationButton = document.querySelector(
  ".submit_application_button"
);

const coorporateInfoContent = document.querySelector(
  ".coorporate_info_content"
);

// Tabs click events
agreementTab.addEventListener("click", () => {
  console.log("agreement_tab");
  agreementTabContent.classList.remove("hidden");
  applicationFormTabContent.classList.add("hidden");
  submitApplicationTabContent.classList.add("hidden");
  coorporateInfoContent.classList.add("hidden");

  agreementTab.classList.add("active");
  applicationFormTab.classList.remove("active");
  submitApplicationTab.classList.remove("active");

  // document.querySelector(".agreement_tab_image").classList.remove("hidden");
  // document.querySelector(".application_form_tab_image").classList.add("hidden");
  // document
  //   .querySelector(".submit_application_tab_image")
  //   .classList.add("hidden");

  // document.querySelector(".breadcrumb_container").style.justifyContent =
  //   "flex-start";
});

applicationFormTab.addEventListener("click", () => {
  console.log("application_form_tab");
  agreementTabContent.classList.add("hidden");
  applicationFormTabContent.classList.remove("hidden");
  submitApplicationTabContent.classList.add("hidden");
  coorporateInfoContent.classList.add("hidden");

  agreementTab.classList.remove("active");
  applicationFormTab.classList.add("active");
  submitApplicationTab.classList.remove("active");

  // document.querySelector(".agreement_tab_image").classList.add("hidden");
  // document
  //   .querySelector(".application_form_tab_image")
  //   .classList.remove("hidden");
  // document
  //   .querySelector(".submit_application_tab_image")
  //   .classList.add("hidden");

  // document.querySelector(".breadcrumb_container").style.justifyContent =
  //   "flex-start";
});

submitApplicationTab.addEventListener("click", () => {
  console.log("submit_applications_tab");
  agreementTabContent.classList.add("hidden");
  applicationFormTabContent.classList.add("hidden");
  submitApplicationTabContent.classList.remove("hidden");
  coorporateInfoContent.classList.add("hidden");

  agreementTab.classList.remove("active");
  applicationFormTab.classList.remove("active");
  submitApplicationTab.classList.add("active");

  // document.querySelector(".agreement_tab_image").classList.add("hidden");
  // document.querySelector(".application_form_tab_image").classList.add("hidden");
  // document
  //   .querySelector(".submit_application_tab_image")
  //   .classList.remove("hidden");

  // document.querySelector(".breadcrumb_container").style.justifyContent =
  //   "flex-end";
});

// tab content bottom button click events
applicationTabContentButton.addEventListener("click", () => {
  console.log("applicationTabContentButton");
  agreementTabContent.classList.add("hidden");
  applicationFormTabContent.classList.remove("hidden");
  submitApplicationTabContent.classList.add("hidden");
  coorporateInfoContent.classList.add("hidden");

  agreementTab.classList.remove("active");
  applicationFormTab.classList.add("active");
  submitApplicationTab.classList.remove("active");

  // document.querySelector(".agreement_tab_image").classList.add("hidden");
  // document
  //   .querySelector(".application_form_tab_image")
  //   .classList.remove("hidden");
  // document
  //   .querySelector(".submit_application_tab_image")
  //   .classList.add("hidden");

  // document.querySelector(".breadcrumb_container").style.justifyContent =
  //   "flex-start";
});

applicationFormContentPrevButton.addEventListener("click", () => {
  console.log("applicationFormContentPrevButton");
  agreementTabContent.classList.remove("hidden");
  applicationFormTabContent.classList.add("hidden");
  submitApplicationTabContent.classList.add("hidden");
  coorporateInfoContent.classList.add("hidden");

  agreementTab.classList.add("active");
  applicationFormTab.classList.remove("active");
  submitApplicationTab.classList.remove("active");

  // document.querySelector(".agreement_tab_image").classList.remove("hidden");
  // document.querySelector(".application_form_tab_image").classList.add("hidden");
  // document
  //   .querySelector(".submit_application_tab_image")
  //   .classList.add("hidden");

  // document.querySelector(".breadcrumb_container").style.justifyContent =
  //   "flex-start";
});

applicationFormContentNextButton.addEventListener("click", () => {
  console.log("applicationFormContentNextButton");
  agreementTabContent.classList.add("hidden");
  applicationFormTabContent.classList.add("hidden");
  submitApplicationTabContent.classList.remove("hidden");
  coorporateInfoContent.classList.add("hidden");

  agreementTab.classList.remove("active");
  applicationFormTab.classList.remove("active");
  submitApplicationTab.classList.add("active");

  // document.querySelector(".agreement_tab_image").classList.add("hidden");
  // document.querySelector(".application_form_tab_image").classList.add("hidden");
  // document
  //   .querySelector(".submit_application_tab_image")
  //   .classList.remove("hidden");

  // document.querySelector(".breadcrumb_container").style.justifyContent =
  //   "flex-end";
});

submitApplicationButton.addEventListener("click", () => {
  console.log("applicationFormContentNextButton");
  agreementTabContent.classList.add("hidden");
  applicationFormTabContent.classList.add("hidden");
  submitApplicationTabContent.classList.add("hidden");
  coorporateInfoContent.classList.remove("hidden");
  document.querySelector(".breadcrumb_container").classList.add("hidden");
  document.querySelector(".tabs_container_title").textContent = "법인정보";
  document.querySelector(".tabs_container_title").style.margin =
    "0px 0px 20px 0px";
});

// ------------------------------------------------Modal table JSON data-----------------------------------------
var buisness_info_changes_modal_table_data = [
  {
    date_of_change: "2021. 08. 07 12:00:00",
    change_classification: "정보변경",
    buisness_name: "(주)시티랩스",
    representative: "홍길동",
    opening_date: "2019-01-29",
    buisness_location: "경기도 안양시 만안구 예술공원로 153-32, 3층",
  },

  {
    date_of_change: "2021. 08. 07 12:00:00",
    change_classification: "정보변경",
    buisness_name: "(주)시티랩스",
    representative: "홍길동",
    opening_date: "2019-01-29",
    buisness_location: "경기도 안양시 만안구 예술공원로 153-32, 3층",
  },

  {
    date_of_change: "2021. 08. 07 12:00:00",
    change_classification: "정보변경",
    buisness_name: "(주)시티랩스",
    representative: "홍길동",
    opening_date: "2019-01-29",
    buisness_location: "경기도 안양시 만안구 예술공원로 153-32, 3층",
  },

  {
    date_of_change: "2021. 08. 07 12:00:00",
    change_classification: "정보변경",
    buisness_name: "(주)시티랩스",
    representative: "홍길동",
    opening_date: "2019-01-29",
    buisness_location: "경기도 안양시 만안구 예술공원로 153-32, 3층",
  },

  {
    date_of_change: "2021. 08. 07 12:00:00",
    change_classification: "정보변경",
    buisness_name: "(주)시티랩스",
    representative: "홍길동",
    opening_date: "2019-01-29",
    buisness_location: "경기도 안양시 만안구 예술공원로 153-32, 3층",
  },
];

buisness_info_changes_modal_table(buisness_info_changes_modal_table_data);

function buisness_info_changes_modal_table(data) {
  var table = document.getElementById("buisness_info_changes_modal_table_data");

  for (var i = 0; i <= data.length; i++) {
    var row = `
    <tr>
    <td>${data[i].date_of_change}</td>
    <td>${data[i].change_classification}</td>
    <td>${data[i].buisness_name}</td>
    <td>${data[i].representative}</td>
    <td>${data[i].opening_date}</td>
    <td>${data[i].buisness_location}</td>
  </tr>
      `;

    table.innerHTML += row;
  }
}
