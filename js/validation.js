function validasiInput(nama, nim, matkul, nilai) {
  if (!nama || !nim || !matkul || !nilai) {
    showToast("⚠️ Semua field harus diisi!");
    return false;
  }
  if (nilai < 0 || nilai > 100) {
    showToast("⚠️ Nilai harus antara 0 - 100!");
    return false;
  }
  return true;
}
