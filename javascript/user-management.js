$(document).ready(function () {
  if (user_management_table_data.length > 10) {
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

var user_management_table_data = [
  {
    checkbox: "hidden",
    division: "대표자",
    department: "부서등록",
    username: "홍길동",
    phone_number: "010-1234-5678",
    email: "email@post.co.kr",
    issuance: "발급",
    issue_date: "2021. 08. 07 12:00:00",
  },

  {
    checkbox: "block",
    division: "사용자",
    department: "경영지원 개발2팀",
    username: "홍길남",
    phone_number: "010-1234-5678",
    email: "email@post.co.kr",
    issuance: "발급",
    issue_date: "2021. 08. 07 12:00:00",
  },

  {
    checkbox: "block",
    division: "사용자",
    department: "경영지원",
    username: "홍길서",
    phone_number: "010-1234-5678",
    email: "email@post.co.kr",
    issuance: "미발급",
    issue_date: "2021. 08. 07 12:00:00",
  },
];

user_management_table(user_management_table_data);

function user_management_table(data) {
  var table = document.getElementById("user_management_table_data");

  for (var i = 0; i <= data.length; i++) {
    var row = `<tr>
            <td style="position: relative; visibility: ${data[i].checkbox}"><input type="checkbox" /></td>
            <td>${data[i].division}</td>
            <td class="table_red_text">${data[i].department}</td>
            <td class="table_red_text">${data[i].username}</td>
            <td class="table_number">${data[i].phone_number}</td>
            <td>${data[i].email}</td>
            <td>${data[i].issuance}</td>
            <td>${data[i].issue_date}</td>
          </tr>`;

    table.innerHTML += row;
  }
}
