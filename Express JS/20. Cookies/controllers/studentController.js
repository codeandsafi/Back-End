class StudentController {
    static set_cookie = (req, res) => {
        res.cookie("username", "Safiul")
        res.cookie("Semester", 4)
        // res.cookie("Semester", 4, {maxAge: 30000})
        res.send("Cookie set...")
    }
    static get_cookie = (req, res) => {
        console.log(req.cookies)
        console.log(req.cookies.username)
        console.log(req.cookies.Semester)
        res.send("Got Cookie...")
    }
    static delete_cookie = (req, res) => {
        req.clearCookie("username")
        res.send("Cookie deleted...")
    }
}

export default StudentController    