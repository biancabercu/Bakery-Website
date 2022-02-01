const ServerError = require('./ServerError.js');

class BakeryPostBody {
    constructor (body) {
        this.name = body.name;
        this.about = body.about;

        if (this.name == null || this.name.length < 4) {
            throw new ServerError("Name is missing", 400);
        }
    
        if (this.about == null || this.about.length < 4) {
            throw new ServerError("About is missing", 400);
        }
    }

    get Name () {
        return this.name;
    }

    get About () {
        return this.about;
    }
}

class BakeryPutBody extends BakeryPostBody {
    constructor (body, id) {
        super(body);
        this.id = parseInt(id);

        if (!this.id || this.id < 1) {
            throw new ServerError("Id should be a positive integer", 400);
        }
    }

    get Id () {
        return this.id;
    }
}

class BakeryResponse {
    constructor(bakery) {
        this.name = bakery.name;
        this.about = bakery.about;
        this.id = bakery.id;
    }
}

module.exports =  {
    BakeryPostBody,
    BakeryPutBody,
    BakeryResponse
}