import { useState } from "react";
import ReactPost from "./ReactPost";
export default function BulletinBoard(){
  
  let data = [
    {
      question: "Vad är tre fördelar med att använda React?",
      answer: `1) React hjälper att skapa enkel och intuitiv kod. 2) Den modulära strukturen hos ReactJS gör det till ett av de bästa flexibla verktygen som finns. 
      3) Man kan öka utvecklingsprocessen eftersom man kan använda enskilda delar av applikationen och göra ändringar i den, utan att påverka applikationens logik`
    },
    {
      question: "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
      answer: "Single Page Application innebär att hela sidan laddas en gång och efterföjande klick till nya `sidor` eller routes resulterar i mindre trafik över nätverk och endast relevant data för routen skickas som JSON, till skillnad från en vanlig webbplats där varje klick på en länk laddar en helt ny sida och allt som kommer därtill."
    },
    {
      question: "Nämn tre skillnader mellan React och Angular.",
      answer: "I React använder man JSX och I Angular använder man Typescript. React används för att skapa UI komponenter i vilken app som helst som använder dynamisk data och Angulär används för att skapa komplexa företagsappar, SPA etc. React är ett bibliotek medans Angular är ett ramverk."
    }

  ]
  
  const [questions,setQuestions] = useState(data);
  console.log(data);

  return(
      <div> 
        {/* <h1>This is a bulletin board</h1> */}
        {data.map((questions,index)=>{
          return (
            <ReactPost key={index} question={questions.question} answer={questions.answer}  />
          )
        })}
         
      </div>
    );
}
