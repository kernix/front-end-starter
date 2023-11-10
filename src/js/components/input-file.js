// Custom file input
if(document.querySelectorAll('#custom-input-file').length > 0) {
    const customLabel = document.getElementById('custom-input-file');
    const inputFile = document.getElementById('formFileCustom');
    const customFilesName = customLabel.querySelector('.files-chosen');

    function updateCustomLabel() {
        if (inputFile.files.length > 0) {
            customFilesName.textContent = [...inputFile.files].map(file => file.name).join(', ');
        } else {
            customFilesName.textContent = 'Aucun fichier choisi';
        }
    }

    if (customLabel && inputFile && customFilesName) {
        customLabel.addEventListener('change', updateCustomLabel);
    }
}
