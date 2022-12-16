import {join} from 'path';

const homeController = (req, res) => {
    console.log(join(process.cwd(), 'views', 'home.html'));
    res.sendFile(join(process.cwd(), 'views', 'home.html'));
}

export {homeController};