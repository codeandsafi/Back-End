import {join} from 'path';
const aboutController = (req, res) => {
    res.render('about', {'name': 'Safi'});
}


export {aboutController};