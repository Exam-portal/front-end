import { Card } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
function Exam(){
    const [question,setQuestion] =useState({

        "id":1,
        "questionBankId":1,
        "questionDes":"",
        "optionA":"",
        "optionB":"",
        "optionC":"",
        "optionD":"",
        "rightAnswer":""
    })

    const [questionId,setQuestionId]=useState(0)
     useEffect(()=>{
        
    

     },[])
     
    return(<div>

        <Card>

            <Typography>

                Exam
            </Typography>
            
            <label>Question</label>
            <input type="radio" name="abc"></input>
            <label>{question.questionDes}</label><br/>

            <label>A</label>   
            <input type="radio" name="abc"></input>
            <label>{question.optionA}</label><br/>


            <label>B.</label>
            <input type="radio" name="abc"></input>
            <label>{question.optionB}</label><br/>

            <label>C.</label>
            <input type="radio" name="abc"></input>
            <label>{question.optionC}</label><br/>

            <label>D.</label>
            <input type="radio" name="abc"></input>
            <label>{question.optionD}</label><br/>
            

            <Button variant="contained" onClick={()=>{
            setQuestionId(questionId+1)
                axios.get(`http://localhost:8081/findQuestion/${questionId}`).then((e)=>{
                    console.log(e.data)
                    setQuestion(e.data)
                })

}}>


    Next
</Button>



        </Card>
    </div>)
}
export default Exam