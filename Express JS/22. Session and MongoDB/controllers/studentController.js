class StudentController {
    //Get Session information
    static get_session_info = (req, res) => {
        console.log(req.session)
        console.log(req.session.id)
        res.send("Session info...")
    }

    static delete_session = (req, res) => {
        req.session.destroy(() =>{
            console.log("Session Deleted")
        })
        res.send("Session Deleted")
    }

    static regenerate_session = (req, res) => {
        req.session.regenerate(()=>{
            console.log(`Session Regenerated... New Session ID: ${req.session.id}`)
        })
        res.send("Session Regenerated...")
    }

    static session_example = (req, res) => {
        req.session.device = "Mobile"
        if (req.session.count){
            req.session.count++
        }else{
            req.session.count = 1
        }
        res.send(`Count: ${req.session.count}`)
    }

    static get_session_data = (req, res) => {
        if(req.session.device){
            res.send(`Device: ${req.session.device} Count: ${req.session.count}`)
        } else{
            res.send("Session Data Device not found")
        }
    }
}

export default StudentController