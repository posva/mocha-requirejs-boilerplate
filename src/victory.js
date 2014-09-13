define(["lib/selfish"], function(selfish) {
    var Base = selfish.Base;
    var Victory = Base.extend({
        initialize: function(value) {
            this.value = value;
            this.type.push('victory');
        },
    });

    return Victory;
});
