const {
    queryAsync
} = require('..');

const addAsync = async (title, about) => {
    console.info(`Adding event in database async...`);

    const events = await queryAsync('INSERT INTO events (title, about) VALUES ($1, $2) RETURNING *', [title, about]);
    return events[0];
};

const getAllAsync = async () => {
    console.info(`Getting all events from database async...`);

    return await queryAsync('SELECT * FROM events');
};

const getByIdAsync = async (id) => {
    console.info(`Getting the event with id ${id} from database async...`);

    const events = await queryAsync('SELECT * FROM events WHERE id = $1', [id]);
    return events[0];
};

const updateByIdAsync = async (id, title, about) => {
    console.info(`Updating the event with id ${id} in database async...`);

    const events =  await queryAsync('UPDATE events SET title = $1, about = $2 WHERE id = $3 RETURNING *', [title, about, id]);
    return events[0];
};

const deleteByIdAsync = async (id) => {
    console.info(`Deleting the event with id ${id} from database async...`);

    const events = await queryAsync('DELETE FROM events WHERE id = $1 RETURNING *', [id]);
    return events[0];
    
};

module.exports = {
    addAsync,
    getAllAsync,
    getByIdAsync,
    updateByIdAsync,
    deleteByIdAsync
}