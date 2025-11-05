const form = document.getElementById("nilaiForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const nim = document.getElementById("nim").value.trim();
  const matkul = document.getElementById("matkul").value.trim();
  const nilai = document.getElementById("nilai").value.trim();

  if (!validasiInput(nama, nim, matkul, nilai)) return;

  try {
    await dataService.tambahData(nama, nim, matkul, parseFloat(nilai));
    showToast("✅ Data berhasil disimpan!");
    form.reset();
  } catch (error) {
    console.error(error);
    showToast("❌ Gagal menyimpan data!");
  }
});

// Fungsi notifikasi sederhana
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.className = "show";
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}
