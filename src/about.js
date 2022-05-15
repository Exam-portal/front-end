import { Card, Typography } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardActions } from "@mui/material";
import { teal,red } from "@mui/material/colors";

function AboutUs()
{
    return(<div style={{postion:"relative",top:1000,height:30,bottom:500}}>
        <center>
   
        <Card sx={{ position:"relative",width:1000,top:200
}}>

               <CardContent>

                <Typography>
                    
                  <p>

                  Think exam is an Online Examination system, brought to you by Ginger Webs Pvt. Ltd. It was designed with a mission to strive for excellence, with an expertise in driving assessments in the educational domain. We prioritize quality customer experience with a goal to conduct test online assuring minimal human-intervention.

We provide the management of examination and assessment, using an advanced hassle-free transactional interface. The streamlined process flow help with the easy creation of tests, circulation of products, calculation of scores, etc. It provides development of an improved communication link in-between the assessor and the assessee. Multiple tests can be clubbed together to form a product that can be purchased by the candidate and would contribute to the revenue generation. Secured flow of information, multiple payment gateway options, synchronized android and iOS interface will take you to the next level of examination. The panel is self- operational that requires simple online subscription that is extremely easy to use and learn.

Now, perform exams meeting your requirements to restrict and liberate the movement, depute timelines, transparency of the text, shuffle and randomize, define guidelines, use tags assuring smoother search, allocate penalty on incorrect attempts, and more wherever and whenever you want to.

                  </p>

                </Typography>

            </CardContent>
           
        </Card>
        </center>

    </div>)
}
export default AboutUs