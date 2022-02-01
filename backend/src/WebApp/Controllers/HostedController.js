const express = require('express');

const HostedRepository = require('../../Infrastructure/PostgreSQL/Repository/HostedRepository.js');
const ServerError = require('../Models/ServerError.js');
const { HostedPostBody, HostedPutBody, HostedResponse } = require('../Models/Host.js');
const AuthorizationFilter = require('../Filters/AuthorizationFilter.js');
const RoleConstants = require('../Constants/Roles.js');

const ResponseFilter = require('../Filters/ResponseFilter.js');

const Router = express.Router();

Router.post('/', AuthorizationFilter.authorizeRoles(RoleConstants.ADMIN, RoleConstants.MANAGER), async (req, res) => {
    
    const hostedBody = new HostedPostBody(req.body);

    const hosted = await HostedRepository.addAsync(hostedBody.Id_event, hostedBody.Id_bakery, hostedBody.Breads);

    ResponseFilter.setResponseDetails(res, 201, new HostedResponse(hosted), req.originalUrl);
});

Router.get('/', async (req, res) => {

    const hosted = await HostedRepository.getAllAsync();

    ResponseFilter.setResponseDetails(res, 200, hosted.map(hosted => new HostedResponse(hosted)));
});

Router.get('/:id', async (req, res) => {
    let {
        id
    } = req.params;

    id = parseInt(id);

    if (!id || id < 1) {
        throw new ServerError("Id should be a positive integer", 400);
    }
       
    const hosted = await HostedRepository.getByIdAsync(id);
    
    if (!hosted) {
        throw new ServerError(`Host with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 200, new HostedResponse(hosted));
});

Router.put('/:id', AuthorizationFilter.authorizeRoles(RoleConstants.ADMIN, RoleConstants.MANAGER), async (req, res) => {

    const hostedBody = new HostedPutBody(req.body, req.params.id);

    const hosted = await HostedRepository.updateByIdAsync(hostedBody.Id, hostedBody.Id_event, hostedBody.Id_bakery, hostedBody.Breads);
        
    if (!hosted) {
        throw new ServerError(`Host with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 200, new HostedResponse(hosted));
});

Router.delete('/:id', AuthorizationFilter.authorizeRoles(RoleConstants.ADMIN, RoleConstants.MANAGER), async (req, res) => {
    const {
        id
    } = req.params;

    if (!id || id < 1) {
        throw new ServerError("Id should be a positive integer", 400);
    }
    
    const hosted = await HostedRepository.deleteByIdAsync(parseInt(id));
    
    if (!hosted) {
        throw new ServerError(`Host with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 204, "Entity deleted succesfully");
});

module.exports = Router;