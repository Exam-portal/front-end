import Button from '@mui/material/Button'
function MyButton()
{

    return(<div>

        <Button variant="contained" onClick={()=>{
            console.log("clicked")
        }}>Login</Button>
     
        <Button variant="contained" onClick={()=>{
            console.log("clicked")
        }}>Register</Button>
        
    </div>)
}
export default MyButton