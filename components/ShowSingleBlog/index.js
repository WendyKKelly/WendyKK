import React from "react";
import moment from "moment";
import Link from 'next/link'
import Section from './ShowBlog.style';
import ToText from "../../utils/ToText";


/*const MyButton = React.forwardRef(({ onClick, href }, props) => {
  return (
    <a href={href} onClick={onClick} ref={props.title}>
      {props.title}
    </a>
  )
})*/

export default function ShowSingleBlog(props, p) {
 
  return (
    <Section>
    
        <div>
        
        
    

           
         <h1>{props.title}</h1>
      
   
    
          
            <span>
            {moment(props.date).format("MMM DD, YYYY hh:mm")}
          </span>
       
          <div dangerouslySetInnerHTML={{ __html: props.content }} />
              
    </div>
    </Section>
  )
  
  }

