export function toDiscord(player:string,text:string,webhook:string){
    if(!text.trim())return;
    fetch(webhook,{method:"POST",body:JSON.stringify({content:"**"+player+":** "+text.slice(0,1900)}),headers:{"Content-Type":"application/json"}});
}
