import { wrap, ready } from "../utils/utils";

function initCms() {
    // Table Responsive CMS
    const rwdTables = document.querySelectorAll('.cms-content table');
    rwdTables.forEach((rwdTable) => {
        wrap(rwdTable, document.createElement('div'), 'table-responsive');
    });

    // Iframe responsive CMS
    const iframeCms = document.querySelectorAll('.cms-content iframe');
    iframeCms.forEach((iframe) => {
        wrap(iframe, document.createElement('div'), 'cms-ratio');
    });
}

ready(initCms);
