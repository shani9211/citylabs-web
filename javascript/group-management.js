const accounting_team = [
  "홍길동(citylabs@post.co.kr)",
  "홍길동(citylabs@post.co.kr)",
  "홍길동(citylabs@post.co.kr)",
  "홍길동(citylabs@post.co.kr)",
];

document.getElementById(
  "accounting_team_box_title"
).textContent = `회계팀(${accounting_team.length})`;

function getAccountingTeam(data) {
  let accounting_team_list = document.getElementById("accounting_team");

  for (var i = 0; i <= data.length - 1; i++) {
    var accounting_team = `
    <div class="accounting_teams_list_container">
        <img src="../assets/id_card_icon.svg" alt="id_card_image" />
        <div>${data[i]}</div>
    </div>`;

    accounting_team_list.innerHTML += accounting_team;
  }
}

getAccountingTeam(accounting_team);
