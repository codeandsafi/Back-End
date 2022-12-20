import {join} from 'path';
const aboutController = (req, res) => {
    const data = {
        'name': 'Safi'
    }
    res.render('about', data);
}


export {aboutController};