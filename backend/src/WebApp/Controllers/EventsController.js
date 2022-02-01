const express = require('express');

const EventsRepository = require('../../Infrastructure/PostgreSQL/Repository/EventsRepository.js');
const ServerError = require('../Models/ServerError.js');
const { EventPostBody, EventPutBody, EventResponse } = require('../Models/Event.js');
const AuthorizationFilter = require('../Filters/AuthorizationFilter.js');
const RoleConstants = require('../Constants/Roles.js');

const ResponseFilter = require('../Filters/ResponseFilter.js');

const Router = express.Router();

Router.post('/', AuthorizationFilter.authorizeRoles(RoleConstants.ADMIN, RoleConstants.MANAGER), async (req, res) => {
    
    const eventBody = new EventPostBody(req.body);

    const event = await EventsRepository.addAsync(eventBody.Title, eventBody.About);

    ResponseFilter.setResponseDetails(res, 201, new EventResponse(event), req.originalUrl);
});

Router.post('/addevent', AuthorizationFilter.authorizeRoles(RoleConstants.ADMIN), async (req, res) => {
    
    const eventBody = new EventPostBody(req.body);

    const event = await EventsRepository.addAsync(eventBody.Title, eventBody.About);

    ResponseFilter.setResponseDetails(res, 201, new EventResponse(event), req.originalUrl);
});

Router.get('/', async (req, res) => {

    const events = await EventsRepository.getAllAsync();

    ResponseFilter.setResponseDetails(res, 200, events.map(event => new EventResponse(event)));
});

Router.get('/:id', async (req, res) => {
    let {
        id
    } = req.params;

    id = parseInt(id);

    if (!id || id < 1) {
        throw new ServerError("Id should be a positive integer", 400);
    }
       
    const event = await EventsRepository.getByIdAsync(id);
    
    if (!event) {
        throw new ServerError(`Event with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 200, new EventResponse(event));
});

Router.put('/:id', AuthorizationFilter.authorizeRoles(RoleConstants.ADMIN, RoleConstants.MANAGER), async (req, res) => {

    const eventBody = new EventPutBody(req.body, req.params.id);

    const event = await EventsRepository.updateByIdAsync(eventBody.Id, eventBody.Title, eventBody.About);
        
    if (!event) {
        throw new ServerError(`Event with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 200, new EventResponse(event));
});

Router.delete('/:id', AuthorizationFilter.authorizeRoles(RoleConstants.ADMIN, RoleConstants.MANAGER), async (req, res) => {
    const {
        id
    } = req.params;

    if (!id || id < 1) {
        throw new ServerError("Id should be a positive integer", 400);
    }
    
    const event = await EventsRepository.deleteByIdAsync(parseInt(id));
    
    if (!event) {
        throw new ServerError(`Event with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 204, "Entity deleted succesfully");
});

module.exports = Router;