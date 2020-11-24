const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);
const app = require('./../src/app');

describe('News APP testing', () => {
    describe('/GET Get App Status', () => {
        // Test to get app status
        it("should get app status", (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });
    describe('/GET Get News Articles', () => {
        // Test to GET all the news articles
        it("should GET all the news articles", (done) => {
            chai.request(app)
                .get('/getNewsArticles?category=business')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });

        // Test to check invalid route
        it("should not get a response", (done) => {
            chai.request(app)
                .get('/getNewsArticles/category=business')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });

    });
});

