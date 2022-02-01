const ServerError = require('./ServerError.js');

class EventPostBody {
    constructor (body) {
        this.title = body.title;
        this.about = body.about;

        if (this.title == null || this.title.length < 4) {
            throw new ServerError("Title is missing", 400);
        }
    
        if (this.about == null || this.about.length < 4) {
            throw new ServerError("About is missing", 400);
        }
    }

    get Title () {
        return this.title;
    }

    get About () {
        return this.about;
    }
}

class EventPutBody extends EventPostBody {
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

class EventResponse {
    constructor(event) {
        this.title = event.title;
        this.about = event.about;
        this.id = event.id;
    }
}

module.exports =  {
    EventPostBody,
    EventPutBody,
    EventResponse
}