const {
    queryAsync
} = require('..');

const getAllAsync = async() => {
    console.info ('Getting all users from database');
    
    return await queryAsync('SELECT id, username, role_id FROM users');
};

const getbyUsername = async(username) => {
    console.info(`Getting user with username ${username}`);
    
    const users= await queryAsync('SELECT * FROM users where username= $1', [username]);
    return users[0];
};

const addAsync = async (username, password) => {
    console.info(`Adding user ${username}`);

    const users = await queryAsync('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username, role_id', [username, password]);
    return users[0];
};

const addVolunteerAsync = async (eventName, userName) => {

    const users = await queryAsync('INSERT INTO volunteers (event_name, user_name) VALUES ($1, $2) RETURNING id, event_name, user_name', [eventName, userName]);
    return users[0];
};

const getVolunteerbyEvent = async(title) => {
    
    const users= await queryAsync('SELECT * FROM volunteers where event_name= $1', [title]);
    return users[0];
};

const getVolunteers = async() => {
    
    return await queryAsync('SELECT * FROM volunteers');
    
};

const getByUsernameWithRoleAsync = async (username) => {
    console.info(`Getting user with username ${username}`);
    
    const users = await queryAsync(`SELECT u.id, u.password, 
                                u.username, r.value as role,
                                r.id as role_id FROM users u 
                                JOIN roles r ON r.id = u.role_id
                                WHERE u.username = $1`, [username]);
    return users[0];
};

const updateUserRoleAsync = async (userId, roleId) => {
    console.info(`Updating user's ${userId} role`);

    await queryAsync(`UPDATE users SET role_id = $2 WHERE id = $1`, [userId, roleId]);
}

const deleteByIdAsync = async (id) => {
    console.info(`Deleting the user with id ${id} from database async...`);

    const authors = await queryAsync('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    return authors[0];
    
};
const deleteByUsernameAsync = async (username) => {
    console.info(`Deleting the user with username ${username} from database async...`);

    const authors = await queryAsync('DELETE FROM users WHERE username = $1 RETURNING *', [username]);
    return authors[0];
    
};

module.exports = {
    getAllAsync,
    getVolunteers,
    addVolunteerAsync,
    getVolunteerbyEvent,
    addAsync,
    getbyUsername,
    getByUsernameWithRoleAsync,
    updateUserRoleAsync,
    deleteByIdAsync,
    deleteByUsernameAsync
}