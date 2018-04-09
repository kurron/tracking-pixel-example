(function() {
    // initialize the global queue, 'q' which is attached to a 'crl8' object
    if (!('crl8' in window)) {
        window.crl8 = function() {
            window.crl8.q.push(arguments);
        };
        window.crl8.q = [];
    }

    // load your js library of pixel functions...
    var script = document.createElement('script');
    script.src = 'http://jvmguy-tracking-pixel.s3-website.us-east-1.amazonaws.com/pixel-functions.js';

    // ...do it asynchronously...
    script.async = true;

    // ...and insert it before the first script on the page!
    var firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
})();
