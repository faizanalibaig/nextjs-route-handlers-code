
export async function GET(){
    return response.json(JSON.stringlify(data),{
        headers:{
           'content-type':'application/json'
        },
        status:200
    })
}


export async function POST(request: Request){
   const data1= await request.json()
   const newComment={
    id: "",
    text:""
   }
   
   

 return response.json(JSON.stringlify(data),{
        headers:{
           'content-type':'application/json'
        },
        status:200
    })
}