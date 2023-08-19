const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.set('view engine','ejs');
const students=[];
// const students=[{
//     name:"John ",
//     roll_no:123,
//     dob:6/12/1997,
//     city:"jabalpur",
//     phone_number:98245678,
//     father_name:"shashi B prasad",
//     room_no:12025,
//     hostel_number:12,
//     hostel_name:"nivedita bhawan"
// }]
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    //res.render("index",{variableName:"Srishti & shubhanshi"});
    res.render("index",{data:students}) //1st parameter --> index.ejs(view template) ,2nd parameter-->  
})
app.post("/", (req, res) => {
    const name = req.body.name
    const rollNo = req.body.rollNo
    const dateOfBirth = req.body.dateOfBirth
    const city = req.body.city
    const number = req.body.number
    const fatherNumber = req.body.fatherNumber
    const roomNo = req.body.roomNo
    const hostelName = req.body.hostelName
    
    students.push({
        name: name,
        rollNo: rollNo,
        dateOfBirth: dateOfBirth,
        city: city,
        number: number,
        fatherNumber: fatherNumber,
        roomNo: roomNo,
        hostelName: hostelName
    })
    console.log(students);
    res.render("index", {
        data: students
    })
 })

app.post('/information',(req,res)=>{
    var requestedRollNo=req.body.rollNo;
    students.forEach(student=>{
        if(student.rollNo===requestedRollNo)
        {
            res.json(student); //Since we want to send json data to array
        }
    })
})

app.post("/update",(req,res)=>{
var requestedRollNo=req.body.rollNo;
var newroomno=req.body.newroomno;
students.map(student=>{
    if(student.rollNo===requestedRollNo)
    {
        student.roomNo=newroomno
    }
})
res.render('index',{data:students})
})

app.post('/delete', (req, res) => {
    var requestedRollNo = req.body.rollNo;
    var j = 0;
    students.forEach(student => {
        j = j + 1;
        if (student.rollNo === requestedRollNo) {
            students.splice((j - 1), 1)
        }
    })
    res.render("index", {
        data: students
    })
})
array.forEach()
app.listen(3000,(req,res)=>{
    console.log('app is running')
})