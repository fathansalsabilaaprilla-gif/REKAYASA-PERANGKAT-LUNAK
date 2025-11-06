function validasiInput(nama, nim, matkul, nilai) {
  if (!nama || !nim || !matkul || !nilai) {
    showToast("⚠ Semua field harus diisi!");
    return false;
  }
  
  // Validasi NIM minimal 9 angka
  if (nim.length < 9) {
    showToast("⚠ NIM harus minimal 9 angka!");
    return false;
  }
  
  // Validasi NIM hanya angka
  if (!/^\d+$/.test(nim)) {
    showToast("⚠ NIM harus berupa angka!");
    return false;
  }
  
  if (nilai < 0 || nilai > 100) {
    showToast("⚠ Nilai harus antara 0 - 100!");
    return false;
  }
  return true;
}
