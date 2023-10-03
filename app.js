function validate() {
    if (document.forms["frs"]["Nama"].value == "") {
      alert("Minimal isi nama!");
      document.forms["frs"]["Nama"].focus();
      return false;
    }
    if (document.forms["frs"]["NRP"].value == "") {
      alert("Minimal isi nrp!");
      document.forms["frs"]["NRP"].focus();
      return false;
    }
    if (document.forms["frs"]["matkul"].selectedIndex < 1) {
      alert("Minimal pilih matkul!");
      document.forms["frs"]["matkul"].focus();
      return false;
    }
    if (document.forms["frs"]["dosen"].selectedIndex < 1) {
      alert("Minimal pilih dosen!");
      document.forms["frs"]["dosen"].focus();
      return false;
    }
  }