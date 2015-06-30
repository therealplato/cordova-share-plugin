console.log('com.therealplato.cordova-share-plugin.handleShareIntent');
window.echo = function(str, callback) {
    cordova.exec(callback, function(err) {
        callback('Nothing to echo.');
    }, "Echo", "echo", [str]);
};
console.log('com.therealplato.cordova-share-plugin.window.echo');
console.log(window.echo);