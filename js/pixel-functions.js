(function() {
    var api = {}; // use this object to store all of your library functions
    var pixelId = null;
    var data = {}; // use this object to store the data you're collecting and sending

    // if your pixel will be used in multiple places, unique pixel ids will be crucial to
    // identify which piece of data came from which place
    api.init = function(pId) {
        console.debug( "init called");
        pixelId = pId;
    };

    // include a function for each type of data you want to collect and add it to your data object.
    // if we're trying to collect Shippy's name, company, and position, we'll have the following
    // functions which should take in an object with key and value as argument (this will form your
    // query parameters):
    api.addName = function(n) {
        console.debug( "push called");
        data.push(n);
    };

    api.addCompany = function(c) {
        console.debug( "addCompany called");
        data.push(c);
    };

    api.addPosition = function(p) {
        console.debug( "addPosition called");
        data.push(p);
    };

    // include a function to turn all the data you've collected in the data object into query
    // parameters to append to the url for the pixel on your server
    api.toQueryString = function() {
        console.debug( "toQueryString called");
        var s = [];
        Object.keys(data).forEach(function(key) {
            s.push(key + "=" + encodeURIComponent(data[key]));
        });
        return s.join("&");
    };

    // include a function to add the query parameters to your pixel url and to finally append
    // the resulting pixel URL to your document
    api.send = function() {
        console.debug( "send called");
        var pixel = document.createElement("img");
        var queryParams = api.toQueryString();
        pixel.src = "http://httpbin.org/image/svg?" + queryParams;
        document.body.appendChild(pixel);
    };

    // pull functions off of the global queue and execute them
    var execute = function() {
        console.debug( "execute called");
        // while the global queue is not empty, remove the first element and execute the
        // function with the parameter it provides
        // (assuming that the queued element is a 2 element list of the form
        // [function, parameters])
        var command = window.crl8.q.shift();
        var func = command[0];
        var parameters = command[1];
        if (typeof api[func] === 'function') {
            api[func].call(window, parameters);
        } else {
            console.error("Invalid function specified: " + func);
        }
    };

    execute();
});
