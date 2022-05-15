import { AvatarGroup, Button, Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { AppBar } from "@mui/material";
import { teal,red } from "@mui/material/colors";
import { ThemeProvider } from "@mui/private-theming";
import MyButton from "./button";
import MyIcon from "./myicon";
import { List } from "@mui/material";
import ForumIcon from '@mui/icons-material/Forum';
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import { ListItemIcon,ListItemButton,ListItemText } from "@mui/material";
import { createTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Register from "./registration";

const apptheme=createTheme({
    palette:{
        primary:{
            main:red[500]
        },
        text:{
            primary:teal[500]
        }
    }
})

function MyAppBar()
{

    return(<div>
        <ThemeProvider  theme={apptheme}>
            <AppBar position="fixed">
                <Toolbar>
                 <Typography sx={{flexGrow:6,}}>ONLINE EXAM PORTAL</Typography>


                 <Typography><Link to="/admin/about"><Button variant="contained" onClick={()=>{

}}>ABOUT</Button></Link></Typography>

<Typography><Link to="/admin/contact"><Button variant="contained" onClick={()=>{


}}>CONTACT</Button></Link></Typography>

<Typography><Link to="/admin/addQuestion"><Button variant="contained" onClick={()=>{

}}>Add Question</Button></Link></Typography>





                    
             <Typography> <Link to="/"><Button  variant="contained" onClick={()=>{

                    }}>LOGOUT</Button>    
                    </Link></Typography>  
                  
                    <MyIcon/>
                
                </Toolbar>
            </AppBar>


           

        <div style={{postion:'relative',top:-150,left:900}}>
          <Outlet/>
      </div>
        </ThemeProvider>



        
        <div style={{position:"relative",left:0,top:80}}></div>
        <List sx={{width:100}}>
            <ListItemText>
                <Typography> <h2> MENU</h2></Typography>
            
            </ListItemText>

            <ListItemButton>
            <Button variant="contained"><Link to="/admin/contact">Contact</Link></Button><br></br>
         
          </ListItemButton>

          <ListItemButton>
          <Button variant="contained" ><Link to="/admin/about">About</Link></Button>
          </ListItemButton>

          <ListItemButton>
                     <ListItemIcon>
                     <ForumIcon>

                     </ForumIcon>
                     </ListItemIcon>

            </ListItemButton>
        
            <ListItemButton>
                     <ListItemIcon>
                    <PermIdentityIcon/>
                     </ListItemIcon>
            </ListItemButton>
       
            </List> 


    </div>)
}
export default MyAppBar