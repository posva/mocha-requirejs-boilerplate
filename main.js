requirejs(["require-config"], function() {
    requirejs(["ready", "app"], function(dom, app) {
        app.start();
    });
});
