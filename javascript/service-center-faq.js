$(document).ready(function () {
  if (service_center_faq_table_data.length > 10) {
    $("#table_id").DataTable({
      ordering: false,
      info: false,

      language: {
        paginate: {
          next: '<img src="../assets/next_arrow.svg">',
          previous: '<img src="../assets/previous_arrow.svg">',
        },
      },
    });
  }
});

const faq_description_list_button = document.querySelector(
  ".faq_description_list_button_container"
);

const faq_section_input = document.querySelector(".section_input_container");
const faq_section = document.querySelector(
  ".service_center_table_section_container"
);
const faq_description_section = document.querySelector(
  ".faq_description_container"
);

faq_description_list_button.addEventListener("click", () => {
  faq_section_input.classList.remove("hidden");
  faq_section.classList.remove("hidden");
  faq_description_section.classList.add("hidden");
});

// -----------------------------Modal table----------------------------
var service_center_faq_table_data = [
  {
    division: "중요",
    title: "우체국 통합인증앱 제휴 신청 관련",
    date: "2021 / 08 / 10",
    lookup: "100",
  },

  {
    division: "2",
    title: "우체국 통합인증 앱 이용안내",
    date: "2021 / 08 / 12",
    lookup: "51",
  },

  {
    division: "1",
    title: "우체국 통합인증 앱 신규 출시",
    date: "2021 / 08 / 05",
    lookup: "155",
  },
];

service_center_faq_table(service_center_faq_table_data);

function service_center_faq_table(data) {
  var table = document.getElementById("service_center_faq_table_data");

  for (var i = 0; i <= data.length; i++) {
    var row = `
      <tr class="faq_row">
        <td>${data[i].division}</td>
        <td>${data[i].title}</td>
        <td>${data[i].date}</td>
        <td>${data[i].lookup}</td>
      </tr>
        `;

    table.innerHTML += row;

    document.querySelectorAll(".faq_row").forEach((item) => {
      item.addEventListener("click", () => {
        faq_section_input.classList.add("hidden");
        faq_section.classList.add("hidden");
        faq_description_section.classList.remove("hidden");
      });
    });
  }
}
