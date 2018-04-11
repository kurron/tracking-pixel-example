function adpTrack( json ) {
    console.debug( "track called" );
    const data = toQueryString( json );
    const img = new Image();
    img.src = encodeURI( 'https://nkkmfsfq10.execute-api.us-west-1.amazonaws.com/adpevents/?' + data );
    img.style.display = 'none';
    document.body.appendChild( img );
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
