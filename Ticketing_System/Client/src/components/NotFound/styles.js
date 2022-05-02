import { makeStyles } from "@mui/material";
import notFound from '../../images/404.png'

export default makeStyles({
    mainContainer: {
    
        backgroundImage: `url(${notFound})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
})