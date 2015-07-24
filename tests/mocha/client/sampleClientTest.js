var expect = chai.expect;

if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("a group of tests", function(){
      beforeEach(function(done) {
        if (Meteor.user()) {
          Meteor.logout(done);
        } else {
          done();
        }
      });

      it('should have login links', function() {
        expect($('.login-link-text').html()).to.exist;
      });
    });
  });
}
