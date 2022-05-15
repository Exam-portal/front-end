
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { Button } from '@mui/material'
import {Link} from 'react-router-dom'
import { red } from '@mui/material/colors'
function AdminLogin() {

    const [userEmail,setUserEmail]=useState('')
    const [Email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [status,setStatus]=useState('')
    const [mailerr,setMailerr]=useState('')
    const [pswderr,setPswderr]=useState('')
    const navigate=useNavigate()
    return (
        <>
    <div style={{backgroundColor:"skyblue",height:700}}>
    <div style={{position:"relative",top:10}}>
    <h2> <center>Login Page </center></h2>
    </div>

    <center>
     <div style={{postion:"relative",top:-15}}>

    <div style={{position:"relative"}}>
      
        <input style={{position:"relative",width:230,height:30,top:-5,fontSize:'17px',boxShadow:'2px 2px 2px'}} type='text' placeholder="Email"  onChange={(e)=>{
            let mail=e.target.value
            var exp=String(mail).toLowerCase().match(/\S+@\S+\.\S+/)
            if(exp){
                setUserEmail(e.target.value)
                setMailerr('')
            }
            else{
                setMailerr('email is not correct')
            }
        }}/> <br/>
        <spam style={{color:'red'}}>{mailerr}</spam>
        </div>

     <div style={{position:"relative"}}>
        <input style={{position:"relative",width:230,height:30,top:-5,fontSize:'17px',boxShadow:'2px 2px 2px'}} type='password' placeholder="Password"  onChange={(e)=>{
            let psw=e.target.value
            if(psw.length>=6){
                setPassword(e.target.value)
                setPswderr('')
            }
            else{
                setPswderr("password must contain 6 characters")
            }
          
        }}/> <br/>
        <span style={{color:red}}>{pswderr}</span>
        </div>
     
        <Button style={{position:"relative",top:-5,bottom:6,width:160,height:35}} variant="contained" onClick={()=>{
   

   
       axios.get(`http://localhost:8081/findadmin/${userEmail}`)
            .then((res)=>{
                
                var data=res.data
                if(data.role==="admin")
                {
                        if(data.email===userEmail && data.password===password )
                        {
                       
                           navigate("/admin")        
                        }
                        else
                        {
                            setStatus("invalid details")
                        }
                }

            })



     }} >Login</Button><br/>
     {status}
     </div>
     
     </center>
  
    </div>
   
    </>
    )
}

export default AdminLogin