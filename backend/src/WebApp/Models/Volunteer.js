const ServerError = require('./ServerError.js');

class VolunteerPostBody {
    constructor (body) {
        this.eventName = body.eventName;
        this.userName = body.userName;

        if (this.eventName == null || this.eventName.length < 4) {
            throw new ServerError("event name is missing", 400);
        }
        if (this.userName == null || this.userName.length < 4) {
            throw new ServerError("user name is missing", 400);
        }
    }
    get EventName () {
        return this.eventName;
    }

    get UserName () {
        return this.userName;
    }
}


class VolunteerPutBody extends VolunteerPostBody {
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

class VolunteerResponse {
    constructor(post) {
        this.eventName = post.event_name;
        this.userName = post.user_name;
        this.id = post.id;
    }
}

module.exports =  {
    VolunteerPostBody,
    VolunteerPutBody,
    VolunteerResponse
}