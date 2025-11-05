async function muatData() {
  const data = await dataService.ambilData();
  uiHandler.renderTabel(data);
}



function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.className = "show";
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}

muatData();
