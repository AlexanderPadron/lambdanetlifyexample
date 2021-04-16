async function verIp(){
    await (await fetch('/.netlify/functions/getusers')).json()
   //await (await fetch('http://localhost:9000/getusers')).json()
    .then(data=>{
        console.log(data)
        document.getElementById("viewIp").innerHTML = data.origin;
    })
}
