
var ready = (callback) => {
if (document.readyState != "loading") callback();
else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    
    // Table Responsive CMS
    const rwdTable = document.querySelectorAll('.cms-content table');
    rwdTable.forEach(thisRwdTable => {
        wrap(thisRwdTable, document.createElement('div'), 'table-responsive');
    });

    // Iframe responsive CMS
    const iframeCms = document.querySelectorAll('.cms-content iframe');
    iframeCms.forEach(thisiframeCms => {
        wrap(thisiframeCms, document.createElement('div'), 'cms-ratio');
    });
});