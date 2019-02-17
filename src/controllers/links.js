const links = {};

// Connection Database
const pool = require('../database');

links.read = async (req, res) => {
    const links = await pool.query('SELECT * FROM links WHERE user_id = ?', [req.user.id]);

    res.render('links/list', { links });
}

links.readById = async (req, res) => {
    const { id } = req.params;
    const link = await pool.query('SELECT * FROM links WHERE id = ?', [id]);

    res.render('links/update', { link: link[0] });
}

links.create = async (req, res) => {
    const { title, url, description } = req.body;
    const new_link = {
        title,
        url,
        description,
        user_id: req.user.id
    };

    await pool.query('INSERT INTO links SET ?', [new_link]);

    req.flash('success', 'Link saved successfuly!');
    res.redirect('/links');
}

links.update = async (req, res) => {
    const id = req.params.id;
    const { title, url, description } = req.body;
    const update_link = {
        title,
        url,
        description
    };

    await pool.query('UPDATE links SET ? WHERE id = ?', [update_link, id]);
    req.flash('success', 'Link updated successfuly!');
    res.redirect('/links');
}

links.delete = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM links WHERE id = ?', [id]);

    req.flash('success', 'Link deleted successfuly!');
    res.redirect('/links');
}

module.exports = links;