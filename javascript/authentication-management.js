$(document).ready(function () {
  $("#start_date").datepicker();
  $("#end_date").datepicker();
});

var authentication_management_table_data = [
  {
    certification_date: "2021. 08. 07 12:00:00",
    certification: "우체국 우편",
    user_classification: "대표자",
    department: "경영지원",
    user: "홍길동",
  },

  {
    certification_date: "2021. 08. 07 12:00:00",
    certification: "모바일 우편함",
    user_classification: "대리인",
    department: "경영지원",
    user: "홍길동",
  },

  {
    certification_date: "2021. 08. 07 12:00:00",
    certification: "우체국 예금",
    user_classification: "사용자",
    department: "경영지원",
    user: "홍길동",
  },

  {
    certification_date: "2021. 08. 07 12:00:00",
    certification: "우체국 보험",
    user_classification: "대표자",
    department: "경영지원",
    user: "홍길동",
  },

  {
    certification_date: "2021. 08. 07 12:00:00",
    certification: "우체국 쇼핑",
    user_classification: "대리인",
    department: "경영지원",
    user: "홍길동",
  },

  {
    certification_date: "2021. 08. 07 12:00:00",
    certification: "포스트페이",
    user_classification: "사용자",
    department: "경영지원",
    user: "홍길동",
  },
];

authentication_management_table(authentication_management_table_data);

function authentication_management_table(data) {
  var table = document.getElementById("authentication_management_table_data");

  for (var i = 0; i <= data.length; i++) {
    var row = `
      <tr>
                <td>${data[i].certification_date}</td>
                <td>${data[i].certification}</td>
                <td>${data[i].user_classification}</td>
                <td>${data[i].department}</td>
                <td>${data[i].user}</td>
              </tr>
      `;

    table.innerHTML += row;
  }
}
