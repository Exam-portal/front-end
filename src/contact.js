import { Card, Typography } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardActions } from "@mui/material";
import { Button } from "@mui/material";
function ContactUs()
{
    return(<div style={{postion:"relative",}}>
             <center>
        <Card sx={{postion:"relative",width:1000,top:-300,height:300}}>
            <CardContent>
                <Typography>
                   ONLINEEXAMPORTAL@GMAIL.COM
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained">
                     Send A Mail
                </Button>
            </CardActions>
            <CardContent>
                <Typography>
                 ContactUs Through call  
                    08810-556677
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained">
                    call 
                </Button>
            </CardActions>
        </Card>
        </center>
 </div>)
}
export default ContactUs