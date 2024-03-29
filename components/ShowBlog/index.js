import React from "react";
import moment from "moment";

import Section from './ShowBlog.style';
import ToText from "../../utils/ToText";
import {Link, withRouter} from 'react-router-dom'


/*const MyButton = React.forwardRef(({ onClick, href }, props) => {
  return (
    <a href={href} onClick={onClick} ref={props.title}>
      {props.title}
    </a>
  )
})*/

function ShowBlog(props, p, ) {
 
  return (
    <Section>
    
        <div>
         <div style={{ backgroundImage: `url(${props.thumbnail})`}}>
         
         </div>
        
         <div>
           
           
          </div>
    

           
         <Link to={props.title}><a>{props.title}</a>
      
    </Link>
            
     

        
            
            
             
            
      

         

      
         
            <h1>{props.author}</h1>
          

          
            <span>
            {moment(props.date).format("MMM DD, YYYY hh:mm")}
          </span>
       
    </div>
    </Section>
  )
  }

  export default withRouter(ShowBlog)
