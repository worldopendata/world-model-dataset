import { readFile } from "node:fs/promises";
const catalog=JSON.parse(await readFile(new URL("../datasets.json",import.meta.url),"utf8"));
const links=catalog.flatMap(record=>Object.entries(record.links).map(([type,url])=>({id:record.id,type,url})));
async function check(item){const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),15000);try{const response=await fetch(item.url,{redirect:"follow",signal:controller.signal,headers:{"user-agent":"WorldModelDataAtlasLinkCheck/1.0"}});return {...item,status:response.status,finalUrl:response.url}}catch(error){return {...item,status:"unverified",error:error.message}}finally{clearTimeout(timer)}}
const results=[];for(let i=0;i<links.length;i+=10)results.push(...await Promise.all(links.slice(i,i+10).map(check)));
const broken=results.filter(item=>typeof item.status==="number"&&item.status>=400);
const unverified=results.filter(item=>item.status==="unverified");
console.log(JSON.stringify({checked:results.length,broken,unverified},null,2));
if(broken.length)process.exitCode=1;
