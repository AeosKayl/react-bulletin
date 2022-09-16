import PostLiked from "./PostLiked";
import { useState } from "react";

export default function ReactPost(props){

  const [liked,setLiked] = useState(false);

  return(

    <>
            <div key={props.index}>
              <h2>Fråga: {props.question}</h2>
              <p>Svar: {props.answer}</p>
              {/* {
                liked && (
                  <PostLiked/>
                )
              }  */}
              {/* <button onClick={()=>{setLiked(!liked)}} className={`${liked && "hidden"}`}>Like</button> */}
              {
                liked ? (
                  <PostLiked/>
                ) : 
              <button onClick={()=>{setLiked(!liked)}}>Like</button>              

              } 
            </div>
    </>

  )
}