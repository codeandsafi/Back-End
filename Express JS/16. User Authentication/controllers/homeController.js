import {join} from 'path';

const homeController = (req, res) => {
    const data = {
        'name': 'Sarnali'
    }
    res.render('home', data);
}

export {homeController};