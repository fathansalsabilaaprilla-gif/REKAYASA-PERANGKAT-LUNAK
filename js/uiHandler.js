const uiHandler = {
  renderTabel(data) {
    const tbody = document.querySelector("#tabelNilai tbody");
    tbody.innerHTML = "";

    data.forEach(item => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${item.nama}</td>
        <td>${item.nim}</td>
        <td>${item.matkul}</td>
        <td>${item.nilai}</td>

      `;
      tbody.appendChild(tr);
    });
  }
};
