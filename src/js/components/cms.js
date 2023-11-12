/**
 * Table Responsive CMS
 * @description This function adds responsive features to the tables in the CMS.
 */

import { wrap } from "../utils/utils";

export const rwdTables = () => {

    const rwdTables = document.querySelectorAll('.cms-content table');
    rwdTables.forEach((rwdTable) => {
        wrap(rwdTable, document.createElement('div'), 'table-responsive');
    });
}

/**
 * Iframe responsive CMS
 * @description 
 */

export const iframeCms = () => {

    const iframeCms = document.querySelectorAll('.cms-content iframe');
    iframeCms.forEach((iframe) => {
        wrap(iframe, document.createElement('div'), 'cms-ratio');
    });
}