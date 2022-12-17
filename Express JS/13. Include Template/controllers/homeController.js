import {join} from 'path';

const homeController = (req, res) => {
    res.render('home', {title: 'Home'});
}

export {homeController};