const {
    queryAsync
} = require('..');

const addAsync = async (title, about) => {
    console.info(`Adding post in database async...`);
    const unmarked=0;
    const posts = await queryAsync('INSERT INTO posts (title, about, marked) VALUES ($1, $2, $3) RETURNING *', [title, about, unmarked]);
    return posts[0];
};

const getAllAsync = async () => {
    console.info(`Getting all posts from database async...`);

    return await queryAsync('SELECT * FROM posts');
};

const getByIdAsync = async (id) => {
    console.info(`Getting the post with id ${id} from database async...`);

    const posts = await queryAsync('SELECT * FROM posts WHERE id = $1', [id]);
    return posts[0];
};

const updateByIdAsync = async (id, title, about, marked) => {
    console.info(`Updating the post with id ${id} in database async...`);

    const posts =  await queryAsync('UPDATE posts SET title = $1, about = $2, marked= $3 WHERE id = $4 RETURNING *', [title, about, marked, id]);
    return posts[0];
};

const updateByTitleAsync = async (title) => {
    console.info(`Updating the post with title ${title} in database async...`);

    const posts =  await queryAsync('UPDATE posts SET marked=1 WHERE title = $1 RETURNING *', [title]);
    return posts[0];
};


const deleteByIdAsync = async (id) => {
    console.info(`Deleting the post with id ${id} from database async...`);

    const posts = await queryAsync('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
    return posts[0];
    
};

const getByMarkedAsync = async () => {
    console.info(`Getting the post marked important from database async...`);

    return await queryAsync('SELECT * FROM posts WHERE marked = 1');
  
};

const getByUnmarkedAsync = async () => {
    console.info(`Getting the post unmarked important from database async...`);

    return await queryAsync('SELECT * FROM posts WHERE marked = 0');
  
};


module.exports = {
    addAsync,
    getAllAsync,
    getByIdAsync,
    updateByIdAsync,
    deleteByIdAsync,
    getByMarkedAsync,
    getByUnmarkedAsync,
    updateByTitleAsync
}