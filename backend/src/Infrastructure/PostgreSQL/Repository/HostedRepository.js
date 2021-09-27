const {
    queryAsync
} = require('..');

const addAsync = async (id_event, id_bakery, breads) => {
    console.info(`Adding hosted in database async...`);

    const hosted = await queryAsync('INSERT INTO hosted (id_event, id_bakery, breads) VALUES ($1, $2, $3) RETURNING *', [id_event, id_bakery, breads]);
    return hosted[0];
};

const getAllAsync = async () => {
    console.info(`Getting all hosted from database async...`);

    return await queryAsync('SELECT * FROM hosted');
};

const getByIdAsync = async (id) => {
    console.info(`Getting the hosted with id ${id} from database async...`);

    const hosted = await queryAsync('SELECT * FROM hosted WHERE id = $1', [id]);
    return hosted[0];
};

const updateByIdAsync = async (id, id_event, id_bakery, breads) => {
    console.info(`Updating the hosted with id ${id} in database async...`);

    const hosted =  await queryAsync('UPDATE hosted SET id_event = $1, id_bakery = $2, breads = $3 WHERE id = $4 RETURNING *', [id_event, id_bakery, breads, id]);
    return hosted[0];
};

const deleteByIdAsync = async (id) => {
    console.info(`Deleting the hosted with id ${id} from database async...`);

    const hosted = await queryAsync('DELETE FROM hosted WHERE id = $1 RETURNING *', [id]);
    return hosted[0];
    
};

module.exports = {
    addAsync,
    getAllAsync,
    getByIdAsync,
    updateByIdAsync,
    deleteByIdAsync
}