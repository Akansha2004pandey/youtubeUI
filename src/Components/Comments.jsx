import React from 'react'

import user from '../images/user.png'
const commentsData=[
     {
        name:"Akansha",
        text:"Akansha is a good girl",
        replies:[{
            name:"Akansha",
            text:"Akansha is a good girl",
            replies:[]
         },
         {
            name:"Akansha",
            text:"Akansha is a good girl",
            replies:[ {
                name:"Akansha",
                text:"Akansha is a good girl",
                replies:[]
             },
             {
                name:"Akansha",
                text:"Akansha is a good girl",
                replies:[]
             },
             {
                name:"Akansha",
                text:"Akansha is a good girl",
                replies:[]
             }]
         }]
     },
     {
        name:"Akansha",
        text:"Akansha is a good girl",
        replies:[]
     },
     {
        name:"Akansha",
        text:"Akansha is a good girl",
        replies:[]
     },
     {
        name:"Akansha",
        text:"lAkansha is a good girl",
        replies:[]
     },
     
]

const Comment=({data})=>{
    const {name,text,replies}=data;
    return (
        <div className='flex shadow-sm bg-gray-200 rounded-md p-2  my-2'>
           <img src={user} className="w-8 h-8" alt=""/>
           <div className="px-3">
            <p className='font-bold'>{name}</p>
            <p className="font-md">{text}</p>
           
           </div>

        </div>
    )
}
const CommentsList=({comments})=>{
    return comments.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          <div className="pl-5 border border-l-black ml-5">
            <CommentsList comments={comment.replies} />
          </div>
        </div>
      ));
}
const Comments = () => {
  return (
    <div className='m-5 p-2'>
    <h1 className="text-2xl font-bold">Comments:</h1>
    <CommentsList comments={commentsData}/>
    </div>
  )
}

export default Comments
