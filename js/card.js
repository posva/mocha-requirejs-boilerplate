define(["selfish"], function(selfish) {
    var Base = selfish.Base;
    var Card = Base.extend({
        initialize: function(cost) {
            this.cost = cost || 0;
            this.img = "";
            this.text = "Empty text";
            this.type = [];
        },
    });

    return Card;
});
