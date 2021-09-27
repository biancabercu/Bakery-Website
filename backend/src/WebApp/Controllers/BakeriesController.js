const express = require('express');

const BakeriesRepository = require('../../Infrastructure/PostgreSQL/Repository/BakeriesRepository.js');
const ServerError = require('../Models/ServerError.js');
const { BakeryPostBody, BakeryPutBody, BakeryResponse } = require('../Models/Bakery.js');
const AuthorizationFilter = require('../Filters/AuthorizationFilter.js');
const RoleConstants = require('../Constants/Roles.js');

const ResponseFilter = require('../Filters/ResponseFilter.js');

const Router = express.Router();

Router.post('/', AuthorizationFilter.authorizeRoles(RoleConstants.ADMIN, RoleConstants.MANAGER), async (req, res) => {
    
    const bakeryBody = new BakeryPostBody(req.body);

    const bakery = await BakeriesRepository.addAsync(bakeryBody.Name, bakeryBody.About);

    ResponseFilter.setResponseDetails(res, 201, new BakeryResponse(bakery), req.originalUrl);
});

Router.get('/', async (req, res) => {

    const bakeries = await BakeriesRepository.getAllAsync();

    ResponseFilter.setResponseDetails(res, 200, bakeries.map(bakery => new BakeryResponse(bakery)));
});

Router.get('/:id', async (req, res) => {
    let {
        id
    } = req.params;

    id = parseInt(id);

    if (!id || id < 1) {
        throw new ServerError("Id should be a positive integer", 400);
    }
       
    const bakery = await BakeriesRepository.getByIdAsync(id);
    
    if (!bakery) {
        throw new ServerError(`Bakery with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 200, new BakeryResponse(bakery));
});

Router.put('/:id', AuthorizationFilter.authorizeRoles(RoleConstants.ADMIN, RoleConstants.MANAGER), async (req, res) => {

    const bakeryBody = new BakeryPutBody(req.body, req.params.id);

    const bakery = await BakeriesRepository.updateByIdAsync(bakeryBody.Id, bakeryBody.Name, bakeryBody.About);
        
    if (!bakery) {
        throw new ServerError(`Bakery with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 200, new BakeryResponse(bakery));
});

Router.delete('/:id', AuthorizationFilter.authorizeRoles(RoleConstants.ADMIN, RoleConstants.MANAGER), async (req, res) => {
    const {
        id
    } = req.params;

    if (!id || id < 1) {
        throw new ServerError("Id should be a positive integer", 400);
    }
    
    const bakery = await BakeriesRepository.deleteByIdAsync(parseInt(id));
    
    if (!bakery) {
        throw new ServerError(`Bakery with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 204, "Entity deleted succesfully");
});

module.exports = Router;