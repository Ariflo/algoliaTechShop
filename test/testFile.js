var request = require('supertest')
    //app = require('../app')
    , expect = require('chai').expect
    , session = require('supertest-session');

beforeEach(function () {
  testSession = session(app);
})

describe('this test', function(){

    it("should load the homepage", function(done){
        testSession.get('/')
        .expect(200)
        .end(function(err, res){
            if(err){
                return done(err);
            }
            expect(res.text).to.contain('Galvanize');
            done();
        })

    })

})