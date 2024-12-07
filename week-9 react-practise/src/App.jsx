

function App() {
 

  return(
    <PostComponent></PostComponent>
  )
   
}
const style={ width:200,backgroundcolor:"white",bordeRadius:10,borderColor:"gray",borderwidth:1, display:"flex"}

function PostComponent(){
  return <div> style={style} 
  <img src={"assets/cynthia.png"} style={{
    width:20,
    height:20,
    borderRadius:20
  }}/>


<div style={{font:10}}> <b>
  100xdevs
 </b>


 <div>234 followers</div>
 <div>12m</div>
 </div>
 <div>
  what to know to 
 </div>
 
 
 </div>
}

export default App

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





// import React, { useState } from 'react';


// function App() {
//   return(
//     <div style={{background:"#dfe6e9",height:"100vh"}}>
// <ToggleMessage/>
// <ToggleMessage/>
// <ToggleMessage/>
// {/* these two component state variable is diffrenent from each other */}
//     </div>

//   )
// }

// const ToggleMessage=()=>{
//   // let isVisible=true;

//   let [isVisible,setIsVisible]=useState(true)
//   function toggle(){
//   setIsVisible(!isVisible)

//     // when the value of a state variable changes,
//   }

// return(
//   <div>
//     <button onClick={toggle}>
//       Toggle Message
//     </button>
//     {isVisible && <p> This message is conditionally rendered</p>}
//   </div>
// )
// }

// export default App



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// import React from "react";

// function App(){
// return (

// <div>
//   // dont write onClick=setcurrenttab("fed") setcurrenttab return nothig it need function correct is this onClick={()=>setcurrenttab("fed")}


//   <button>feed</button>
//   <button>Nottifecatio</button>
//   <button>message</button>
//   <button>jobs</button>
// </div>
 
// )


// }

// export default App




// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// props
// import React from "react";

// function App(){
//   const [showTimer,setShowTimer]=useState(true);

//   return <div>
//     <Card innerContent={<div> hi there</div>} />

//   </div>

// }

// function Card({children}){
//   return <div style={{background:"black",borderRadius:10,color:"white"}}>
//     { children}
//   </div>
// }

// export default App


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// list and keys

// import React from "react";

// function App(){
//   const todos=[{
//     title:"go to gym",
//     done:false

//   },
//   {
//   title:"go to class",
//   done:true
// }

//   ];



// const todoComponent=todos.map(todo=><Todo
//   title={todo.title} done={todo.done}/>
// )

//   return(
//     <div>
//       {todoComponent}
//     </div>

//   )

// }

// function Todo({title}){
//   return <div>
//     {title}-{done?"Done":"not done!"}
//   </div>
// }


// export default App