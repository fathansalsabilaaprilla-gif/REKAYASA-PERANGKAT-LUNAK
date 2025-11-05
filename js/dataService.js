const dataService = {
  async tambahData(nama, nim, matkul, nilai) {
    return await db.collection("nilaiMahasiswa").add({
      nama,
      nim,
      matkul,
      nilai,
      createdAt: new Date()
    });
  },

  async ambilData() {
    const snapshot = await db.collection("nilaiMahasiswa").orderBy("createdAt", "desc").get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

};
