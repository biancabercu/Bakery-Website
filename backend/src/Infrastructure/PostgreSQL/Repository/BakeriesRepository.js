const {
    queryAsync
} = require('..');

const addAsync = async (name, about) => {
    console.info(`Adding bakery in database async...`);

    const bakeries = await queryAsync('INSERT INTO bakeries (name, about) VALUES ($1, $2) RETURNING *', [name, about]);
    return bakeries[0];
};

const getAllAsync = async () => {
    console.info(`Getting all bakeries from database async...`);

    return await queryAsync('SELECT * FROM bakeries');
};

const getByIdAsync = async (id) => {
    console.info(`Getting the bakery with id ${id} from database async...`);

    const bakeries = await queryAsync('SELECT * FROM bakeries WHERE id = $1', [id]);
    return bakeries[0];
};

const updateByIdAsync = async (id, name, about) => {
    console.info(`Updating the bakery with id ${id} in database async...`);

    const bakeries =  await queryAsync('UPDATE bakeries SET name = $1, about = $2 WHERE id = $3 RETURNING *', [name, about, id]);
    return bakeries[0];
};

const deleteByIdAsync = async (id) => {
    console.info(`Deleting the bakery with id ${id} from database async...`);

    const bakeries = await queryAsync('DELETE FROM bakeries WHERE id = $1 RETURNING *', [id]);
    return bakeries[0];
    
};

module.exports = {
    addAsync,
    getAllAsync,
    getByIdAsync,
    updateByIdAsync,
    deleteByIdAsync
}