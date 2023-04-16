const request = require("supertest")
const expect = require("chai").expect
const knex = require("../db/knex")
const app = require("../app")
const fixtures = require("./fixtures")

describe("CRUD Stickers test", () => {

    before((done) => {
        // Run migration
        knex.migrate.latest()
            .then(() =>{
                // Run seeds
                return knex.seed.run(); 
            }).then(() => done());

    })

    it('Lists all records', (done) => {
        request(app)
            .get('/api/v1/stickers')
            .set('Accept', "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('array')
                expect(response.body).to.deep.equal(fixtures.stickers)
                done();
            })
    })

    it("Show a record by id", (done) => {
        request(app)
            .get('/api/v1/stickers/1')
            .set('Accept', "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object')
                expect(response.body).to.deep.equal(fixtures.stickers[0])
                done();
            })
    })

    it("Show a different record by id", (done) => {
        request(app)
            .get('/api/v1/stickers/5')
            .set('Accept', "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object')
                expect(response.body).to.deep.equal(fixtures.stickers[4])
                done();
            })
    })
})