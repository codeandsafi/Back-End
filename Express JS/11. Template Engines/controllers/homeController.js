import {join} from 'path';

const homeController = (req, res) => {
    res.render('home', {'name': 'Sarnali'});
}

export {homeController};