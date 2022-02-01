const Router = require('express').Router();

const {
    authorizeAndExtractTokenAsync
} = require('../Filters/JWTFilter.js');

// const AuthorsController = require('./AuthorsController.js');
const UsersController = require('./UsersController.js');
const RolesController = require('./RolesController.js');
const PostsController = require('./PostsController.js');
const EventsController = require('./EventsController.js');
const BakeriesController = require('./BakeriesController.js');
const HostedController = require('./HostedController.js');
// const BooksController = require('./BooksController.js');
// const PublishersController = require('./PublishersController.js');

/**
 * TODO import controllers
 */

// Router.use('/v1/authors', authorizeAndExtractTokenAsync, AuthorsController);
// Router.use('/v1/books', authorizeAndExtractTokenAsync, BooksController);
// Router.use('/v1/publishers', authorizeAndExtractTokenAsync, PublishersController);

Router.use('/v1/users', UsersController);
Router.use('/v1/roles', authorizeAndExtractTokenAsync, RolesController);
Router.use('/v1/posts', authorizeAndExtractTokenAsync, PostsController);
Router.use('/v1/events', authorizeAndExtractTokenAsync, EventsController);
Router.use('/v1/bakeries', authorizeAndExtractTokenAsync, BakeriesController);
Router.use('/v1/hosted', authorizeAndExtractTokenAsync, HostedController);



/**
 * TODO add controllers to main router
 */

module.exports = Router;