var requirejs = require("requirejs");
var assert = require("assert");
var should = require("should");
requirejs.config({
    baseUrl: 'js',
    nodeRequire: require
});

describe('Card Testing', function() {
    // module loading
    // Load modules with requirejs before tests
    var Card, Victory;
    before(function(done) {
        requirejs(['card', 'victory'], function(card, victory) {
            Card = card;
            Victory = victory;
            done();
        });
    });

    describe('#instanciation', function(){
        it('should work without problems', function(){
            Card.should.have.property('new');
            var c1 = Card.new(1);
            var c2 = Card.new();
            c1.should.have.property('img', "");
            c1.should.have.property('cost', 1);
            c2.should.have.property('img', "");
            c2.should.have.property('cost', 0);
        });
    });

    describe('#Victory+Card', function() {
        it('should be able to create some victory cards', function() {
            var Estate = Card.extend(Victory, {
                initialize: function() {
                    Card.initialize.call(this, 2);
                    Victory.initialize.call(this);
                    this.value = 1;
                },
            });

            Card.isPrototypeOf(Estate).should.be.true;

            var e = Estate.new();
            e.should.have.property('cost', 2);
            e.should.have.property('value', 1);
            e.type.should.have.length(1);
            e.type.should.containEql('victory');
        });
    });
});
