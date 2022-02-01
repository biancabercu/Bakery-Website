const ServerError = require('./ServerError.js');

class PostPostBody {
    constructor (body) {
        this.title = body.title;
        this.about = body.about;
        this.marked = body.marked;

        if (this.title == null || this.title.length < 4) {
            throw new ServerError("Title is missing", 400);
        }
    
        if (this.about == null || this.about.length < 4) {
            throw new ServerError("Body is missing", 400);
        }
        if (this.marked == null) {
            throw new ServerError("Marked is missing", 400);
        }
    }

    get Title () {
        return this.title;
    }

    get About () {
        return this.about;
    }
    get Marked () {
        return this.marked;
    }
}


class PostPutBody extends PostPostBody {
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

class PostResponse {
    constructor(post) {
        this.title = post.title;
        this.about = post.about;
        this.marked = post.marked;
        this.id = post.id;
    }
}

module.exports =  {
    PostPostBody,
    PostPutBody,
    PostResponse
}