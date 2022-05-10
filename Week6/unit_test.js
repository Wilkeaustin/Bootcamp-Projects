var expect = chai.expect;

decsribe('MyFunctions', function() {
    describe('#getValue', function()  {
        it('should take a specified case and give it a value', function() {
        var king = getValue('King');
        expect(king).to.equal(13);
        });

        it('should default to parseInt if it is not one of the cases', function() { 
        expect(function() {
            getValue('15');
            }).to.equal(15);
        });
    });
});