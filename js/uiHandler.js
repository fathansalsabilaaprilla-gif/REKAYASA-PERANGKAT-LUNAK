const uiHandler = {
  renderTabel(data) {
    const tbody = document.querySelector("#tabelNilai tbody");
    tbody.innerHTML = "";

    // Tambahkan nomor urut
    let nomor = 1;
    
    data.forEach(item => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${nomor}</td>
        <td>${item.nama}</td>
        <td>${item.nim}</td>
        <td>${item.matkul}</td>
        <td>${item.nilai}</td>
      `;
      tbody.appendChild(tr);
      nomor++; // Increment nomor untuk data berikutnya
    });
  }
};