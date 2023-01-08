import studentModel from '../modules/Student.js'
class studentController {
    static createDoc = async (req, res) => {
        try {
            const {name, age, fees} = req.body
            const doc = new studentModel({
                name: name,
                age: age,
                fees: fees
            })
            const result = await doc.save()
            res.status(201).send(result)
        } catch (error) {
            console.log(error)
        }
    }
    static getAllDoc = async (req, res) => {
        try{
            const result = await studentModel.find()
                    res.send(result)
                } catch(err){
                    console.log(err)
                }
    }
    static getSingleDocById = async (req, res) => {
        try{
            const result = await studentModel.findById(req.params.id);
                    res.send(result)
                } catch(err){
                    console.log(err)
                }
    }
    static updateDocById = async (req, res) => {
        try{
            const result = await studentModel.findByIdAndUpdate(req.params.id, req.body)
                    res.send(result)
                } catch(err){
                    console.log(err)
                }
    }
    static deleteDocById = async (req, res) => {
        try{
            const result = await studentModel.findByIdAndDelete(req.params.id);
                    res.status(204).send(result)
                } catch(err){
                    console.log(err)
                }
    
    }
}

export default studentController