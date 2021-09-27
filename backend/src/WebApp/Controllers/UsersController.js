const express = require('express');

const UsersManager = require('../../WebCore/Managers/UsersManager.js');
const UsersRepository = require('../../Infrastructure/PostgreSQL/Repository/UsersRepository.js');

const {
    UserBody,
    UserRegisterResponse,
    UserLoginResponse
} = require ('../Models/Users.js');
const {
    VolunteerPostBody,
    VolunteerPutBody,
    VolunteerResponse
} = require ('../Models/Volunteer.js');
const ResponseFilter = require('../Filters/ResponseFilter.js');
const JWTFilter = require('../Filters/JWTFilter.js');
const AuthorizationFilter = require('../Filters/AuthorizationFilter.js');
const RoleConstants = require('../Constants/Roles.js');

const Router = express.Router();

Router.post('/register', async (req, res) => {

    const userBody = new UserBody(req.body);
    const user = await UsersManager.registerAsync(userBody.Username, userBody.Password);

    ResponseFilter.setResponseDetails(res, 201, new UserRegisterResponse(user));
});

Router.post('/volunteer', async (req, res) => {

    const userBody = new VolunteerPostBody(req.body);
    const user = await UsersRepository.addVolunteerAsync(userBody.EventName, userBody.UserName);

    ResponseFilter.setResponseDetails(res, 201, new VolunteerResponse(user));
});

Router.post('/getvolunteers', async (req, res) => {

    const userBody = new VolunteerPostBody(req.body);
    const user = await UsersRepository.getVolunteerbyEvent(userBody.EventName);

    ResponseFilter.setResponseDetails(res, 201, new VolunteerResponse(user));
});

Router.get('/volunteers', async (req, res) => {

    const events = await UsersRepository.getVolunteers();

    ResponseFilter.setResponseDetails(res, 200, events.map(event => new VolunteerResponse(event)));
});
Router.get('/getvolunteers', async (req, res) => {

    const userBody = new VolunteerPostBody(req.body);
    const user = await UsersRepository.getVolunteerbyEvent(userBody.EventName);

    ResponseFilter.setResponseDetails(res, 201, new VolunteerResponse(user));
});
// Router.get('/volunteers/:event', async (req, res) => {

//     let {
//         event
//     } = req.params;


//     if (!event ) {
//         throw new ServerError("event not specified", 400);
//     }
       
//     const user = await UsersRepository.getVolunteerbyEvent(event);

//     ResponseFilter.setResponseDetails(res, 201, new VolunteerResponse(user));
// });
Router.post('/login', async (req, res) => {

    const userBody = new UserBody(req.body);
    const userDto = await UsersManager.authenticateAsync(userBody.Username, userBody.Password);
    const user = new UserLoginResponse(userDto.Token, userDto.Role);

    ResponseFilter.setResponseDetails(res, 200, user);
});

Router.get('/', JWTFilter.authorizeAndExtractTokenAsync, AuthorizationFilter.authorizeRoles(RoleConstants.ADMIN), async (req, res) => {

    const users = await UsersRepository.getAllAsync();

    ResponseFilter.setResponseDetails(res, 200, users.map(user => new UserRegisterResponse(user)));
});



Router.put('/:userId/role/:roleId', JWTFilter.authorizeAndExtractTokenAsync, AuthorizationFilter.authorizeRoles(RoleConstants.ADMIN), async (req, res) => {
    let {
        userId,
        roleId
    } = req.params;

    userId = parseInt(userId);
    roleId = parseInt(roleId);

    await UsersRepository.updateUserRoleAsync(userId, roleId);

    ResponseFilter.setResponseDetails(res, 204);
});

Router.put('/', JWTFilter.authorizeAndExtractTokenAsync, AuthorizationFilter.authorizeRoles(RoleConstants.ADMIN), async (req, res) => {
    // const userBody = new UserBody(req.body);
    const user = await UsersRepository.getbyUsername(req.body.username);
    
    if (!user) {
        throw new ServerError(`User with username x does not exist!`, 404);
    }

    await UsersRepository.updateUserRoleAsync(user.id,req.body.newrole);

    ResponseFilter.setResponseDetails(res, 204, "Entity updated succesfully");

});

Router.delete('/', JWTFilter.authorizeAndExtractTokenAsync,AuthorizationFilter.authorizeRoles(RoleConstants.ADMIN), async (req, res) => {
   
    // const userBody = new UserBody(req.body);
    const user = await UsersRepository.deleteByUsernameAsync(req.body.username);
    
    if (!user) {
        throw new ServerError(`User with username x does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 204, "Entity deleted succesfully");
});

// Router.delete('/:id', AuthorizationFilter.authorizeRoles(RoleConstants.ADMIN, RoleConstants.MANAGER), async (req, res) => {
//     const {
//         id
//     } = req.params;

//     if (!id || id < 1) {
//         throw new ServerError("Id should be a positive integer", 400);
//     }
    
//     const user = await UsersRepository.deleteByIdAsync(parseInt(id));
    
//     if (!user) {
//         throw new ServerError(`User with id ${id} does not exist!`, 404);
//     }

//     ResponseFilter.setResponseDetails(res, 204, "Entity deleted succesfully");
// });

module.exports = Router;