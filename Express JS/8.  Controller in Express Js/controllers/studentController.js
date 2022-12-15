const allStudent = (req, res) => {
    res.send('All Student');
}

const deleteStudent = (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    console.log(id);
    if(id == 10){
        res.send('This ID cannot be deleted.');
    }else{
        res.send(`ID Deleted ${id}`);
    }
}

export {allStudent, deleteStudent};