function hitungTagihan(ukt, persenBeasiswa = 0) {
  return ukt - (ukt * persenBeasiswa) / 100;
}

// Bagian tampilan (hanya jalan di browser)
if (typeof document !== "undefined") {
  document.getElementById("hitung").addEventListener("click", function () {
    const ukt = Number(document.getElementById("ukt").value);
    const beasiswa = Number(document.getElementById("beasiswa").value);
    const total = hitungTagihan(ukt, beasiswa);
    document.getElementById("hasil").textContent =
      "Tagihan: Rp " + total.toLocaleString("id-ID");
  });
}

// Supaya bisa diuji oleh test (Node.js)
if (typeof module !== "undefined") {
  module.exports = { hitungTagihan };
}