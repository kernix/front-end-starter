
<link href="/dist/vendor/tarteaucitronjs/css/tarteaucitron.css" rel="stylesheet">
<script type="text/javascript" src="/dist/vendor/tarteaucitronjs/tarteaucitron.js"></script>
<script type="text/javascript" src="/dist/vendor/tarteaucitronjs/tarteaucitron.services.js"></script>
<script type="text/javascript" src="/dist/vendor/tarteaucitronjs/lang/tarteaucitron.fr.js"></script>

<script type="text/javascript">
    var tarteaucitronCustomText = {
        "alertBigPrivacy": '<div>En autorisant les services tiers, vous acceptez le dépôt et la lecture de cookies et l’utilisation de technologies de suivi nécessaires à leur bon fonctionnement. <a target="_blank" href="https://dev2.boiler-dev.li.kernix.net/contact/">Lire la politique de confidentialité</a></div>',
        "personalize": "Personnaliser vos préférences",
        "allowAll": "Accepter tous les cookies",
        "acceptAll": "Accepter tous les cookies",
        "alertSmall": "Mes cookies",
        "denyAll": "Refuser tous les cookies"
    };
</script>

<script type="text/javascript">
tarteaucitron.init({
    "privacyUrl": "", /* Privacy policy url */
    "bodyPosition": "bottom", /* or top to bring it as first element for accessibility */

    "hashtag": "#projectname", /* Open the panel with this hashtag */
    "cookieName": "projectname", /* Cookie name */

    "orientation": "bottom", /* Banner position (top - bottom) */

    "groupServices": false, /* Group services by category */
    "serviceDefaultState": "wait", /* Default state (true - wait - false) */
        
    "showAlertSmall": true, /* Show the small banner on bottom right */
    "cookieslist": false, /* Show the cookie list */
        
    "closePopup": false, /* Show a close X on the banner */

    "showIcon": false, /* Show cookie icon to manage cookies */

    "iconPosition": "BottomLeft", /* BottomRight, BottomLeft, TopRight and TopLeft */

    "adblocker": false, /* Show a Warning if an adblocker is detected */
        
    "DenyAllCta" : true, /* Show the deny all button */
    "AcceptAllCta" : true, /* Show the accept all button when highPrivacy on */
    "highPrivacy": true, /* HIGHLY RECOMMANDED Disable auto consent */
        
    "handleBrowserDNTRequest": false, /* If Do Not Track == 1, disallow all */

    "removeCredit": false, /* Remove credit link */
    "moreInfoLink": true, /* Show more info link */

    "useExternalCss": true, /* If true, the tarteaucitron.css file will be loaded */
    "useExternalJs": true, /* If true, the tarteaucitron.js file will be loaded */
        
    "readmoreLink": "", /* Change the default readmore link */

    "mandatory": true, /* Show a message about mandatory cookies */
    "mandatoryCta": true /* Show the disabled accept button when mandatory on */
});
</script>


<script type="text/javascript">
    tarteaucitron.user.gtagUa = 'GTAG-XXXXXX';
    tarteaucitron.user.gtagMore = function () { /* add here your optionnal gtag() */ };
    (tarteaucitron.job = tarteaucitron.job || []).push('gtag');
</script>