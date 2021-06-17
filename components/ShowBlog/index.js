import React from "react";
import moment from "moment";
import Link from 'next/link'
import Section from './ShowBlog.style';


/*const MyButton = React.forwardRef(({ onClick, href }, props) => {
  return (
    <a href={href} onClick={onClick} ref={props.title}>
      {props.title}
    </a>
  )
})*/

export default function ShowBlog(props, p) {
 
  return (
    <Section>
    
        <div>
         <div>{props.thumbnail}</div>
        

    

           
         <Link href={{
              pathname: '/blog/[id]',
              query: { id: props.title },
            }}><a>{props.title}</a>
      
    </Link>
            
     

        
            
            
              <h1>{props.title}</h1>
            
      

         

      
         
            <h1>{props.author}</h1>
          

          
            <span>
            {moment(props.date).format("MMM DD, YYYY hh:mm")}
          </span>
       
    </div>
    </Section>
  )
  }


