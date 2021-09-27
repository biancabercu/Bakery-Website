const ServerError = require('./ServerError.js');

class HostedPostBody {
    constructor (body) {
        this.id_event = body.id_event;
        this.id_bakery = body.id_bakery;
        this.breads = body.breads;

        if (this.id_event == null ) {
            throw new ServerError("id event is missing", 400);
        }
    
        if (this.id_bakery == null ) {
            throw new ServerError("id baker is missing", 400);
        }
        if (this.breads == null) {
            throw new ServerError("Breads number is missing", 400);
        }
    }

    get Id_event () {
        return this.id_event;
    }

    get Id_bakery () {
        return this.id_bakery;
    }
    get Breads () {
        return this.breads;
    }
}


class HostedPutBody extends HostedPostBody {
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

class HostedResponse {
    constructor(host) {
        this.id_event = host.id_event;
        this.id_bakery = host.id_bakery;
        this.breads = host.breads;
        this.id = host.id;
    }
}

module.exports =  {
    HostedPostBody,
    HostedPutBody,
    HostedResponse
}