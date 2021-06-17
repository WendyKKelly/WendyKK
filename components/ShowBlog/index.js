import React from "react";
import moment from "moment";
import Link from 'next/link'
import Section from './ShowBlog.style';

export default function ShowBlog(props, p) {
 
  return (
    <Section>
    
        <div>
         <div>{props.thumbnail}</div>
        

    

           
        
            <h1>
              Written By Wendy
            </h1>
            
     

        
            
            
              <h1>{props.title}</h1>
            
      

         

      
         
            <h1>{props.author}</h1>
          

          
            <span>
            {moment(props.date).format("MMM DD, YYYY hh:mm")}
          </span>
       
    </div>
    </Section>
  )
  }


