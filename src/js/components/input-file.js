// Custom file input
if(document.querySelectorAll('#custom-input-file').length > 0) {
    let customLabel = document.getElementById('custom-input-file');
    let inputFile = document.getElementById('formFileCustom');
    let customFilesName = customLabel.getElementsByClassName("files-chosen")[0];

    customLabel.addEventListener('change', (event) => {
        if(inputFile.files.length > 0) {
        customFilesName.innerHTML = "";
        for (let i = 0; i < inputFile.files.length; i++) {
            customFilesName.textContent += inputFile.files.item(i).name + ", ";
        }
        }
        else {
            customFilesName.innerHTML = "Aucun fichier choisi";
        }
    });
}
  