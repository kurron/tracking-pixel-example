function adpTrackGet( json ) {
    //console.debug( "adpTrackGet called" );
    const data = toQueryString( json );
    const img = new Image();
    img.src = encodeURI( 'http://httpbin.org/img/png/?' + data );
    img.style.display = 'none';
    document.body.appendChild( img );
}

function adpTrackPost( json ) {
    //console.debug( "adpTrackPost called" );
    var xhttp = new XMLHttpRequest();
    xhttp.open( "POST", "http://httpbin.org/post/", true );
    xhttp.setRequestHeader( "Content-Type", "application/json" );
    xhttp.setRequestHeader( "Accept", "application/json" );
    let data = JSON.stringify( json );
    // console.debug( "data = " + data );
    xhttp.send( data );
}

function toQueryString( json ) {
    console.debug( "toQueryString called" );
    let str = "";
    for (const key in json) {
        if (json.hasOwnProperty(key)) {
            str += key + "=" + json[key] + "&";
        }
    }
    str = str.substring(0, str.length - 1);
    console.log(str);
    return str;
}
