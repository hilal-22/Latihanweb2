function validateForm() {
  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (nama === "" || email === "" || password === "") {
    alert("Semua field harus diisi!");
    return false;
  }

  // Tambahkan logika validasi lainnya di sini sesuai kebutuhan Anda

  return true;
}
