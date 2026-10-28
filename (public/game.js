const $=id=>document.getElementById(id);
const people={
culture:[
{id:"oprah",name:"Oprah Winfrey",trait:"Voice of the People",desc:"Culture, morale, and public support.",b:{influence:2,morale:2}},
{id:"maya",name:"Maya Angelou",trait:"Unbreakable Spirit",desc:"Cultural legacy and resilience.",b:{influence:2,morale:3}},
{id:"tupac",name:"Tupac Shakur",trait:"Voice of a Movement",desc:"Public support and morale.",b:{influence:3,morale:1}},
{id:"biggie",name:"The Notorious B.I.G.",trait:"King of the Borough",desc:"Urban influence and commercial growth.",b:{influence:2,economy:1}},
{id:"nas",name:"Nas",trait:"Illmatic Vision",desc:"Strategic insight and cultural development.",b:{strategy:2,influence:1}},
{id:"jayz",name:"Jay-Z",trait:"Empire State of Mind",desc:"Cultural reach and commercial growth.",b:{influence:1,economy:2}},
{id:"game",name:"The Game",trait:"West Coast Presence",desc:"Morale after successful expansion.",b:{morale:2,command:1}},
{id:"nipsey",name:"Nipsey Hussle",trait:"Marathon Builder",desc:"Community investment and long-term development.",b:{economy:2,influence:1}},
{id:"bruce",name:"Bruce Lee",trait:"Focused Discipline",desc:"Readiness and tactical discipline.",b:{command:1,strategy:2}},
{id:"ali",name:"Muhammad Ali",trait:"Champion's Resolve",desc:"Morale and resilience.",b:{morale:3,command:1}}
],
politics:[
{id:"obama",name:"Barack Obama",trait:"United Front",desc:"Coalition-building and diplomacy.",b:{diplomacy:3,strategy:1}},
{id:"bill",name:"Bill Clinton",trait:"The Grand Bargain",desc:"Negotiations and trade agreements.",b:{diplomacy:2,economy:1}},
{id:"hillary",name:"Hillary Clinton",trait:"Strategic Summit",desc:"Diplomacy and intelligence.",b:{diplomacy:2,strategy:2}},
{id:"kennedy",name:"John F. Kennedy",trait:"New Frontier",desc:"Crisis management and development.",b:{diplomacy:2,morale:1,strategy:1}},
{id:"napoleon",name:"Napoleon Bonaparte",trait:"Grand Strategy",desc:"Coordinated expansion and command.",b:{command:3,strategy:2}},
{id:"stalin",name:"Joseph Stalin",trait:"Industrial Mobilization",desc:"Recruitment and industrial mobilization.",b:{command:2,economy:1}},
{id:"saddam",name:"Saddam Hussein",trait:"Iron Citadel",desc:"Defensive planning and centralized command.",b:{command:2,defense:2}},
{id:"trump",name:"Donald Trump",trait:"Art of the Deal",desc:"Negotiation and trade options.",b:{diplomacy:2,economy:1}},
{id:"sun",name:"Sun Tzu",trait:"Know the Terrain",desc:"Strategic planning and intelligence.",b:{strategy:3,command:1}},
{id:"shaka",name:"Shaka Zulu",trait:"Bull Horn Formation",desc:"Command and coordinated attacks.",b:{command:3,defense:1}},
{id:"khan",name:"Genghis Khan",trait:"Unstoppable Horde",desc:"Mobility and rapid expansion.",b:{command:3,strategy:1}}
],
economy:[
{id:"john-d",name:"John D. Rockefeller",trait:"Industrial Empire",desc:"Industrial development and resource efficiency.",b:{economy:4}},
{id:"david-r",name:"David Rockefeller",trait:"Global Financial Network",desc:"International finance and trade.",b:{economy:2,diplomacy:2}},
{id:"rothschild",name:"Mayer Amschel Rothschild",trait:"Banking Network",desc:"Banking and financial connections.",b:{economy:3,diplomacy:1}},
{id:"mansa",name:"Mansa Musa",trait:"Golden Trade Routes",desc:"Trade, gold, and prosperity.",b:{economy:3,influence:1}},
{id:"jayz-econ",name:"Jay-Z (Business Profile)",trait:"Business Blueprint",desc:"Investment and commercial development.",b:{economy:3,influence:1}},
{id:"oprah-econ",name:"Oprah Winfrey (Business Profile)",trait:"Media Enterprise",desc:"Media-business income and development.",b:{economy:2,influence:2}}
]};
const empires=[
{id:"rome",name:"Roman Empire",desc:"Roads, organized armies, infrastructure.",b:{command:2,defense:2,economy:1}},
{id:"persia",name:"Persian Empire",desc:"Administration, cavalry, regional connectivity.",b:{command:2,diplomacy:1,economy:1}},
{id:"egypt",name:"Egyptian Empire",desc:"River agriculture, engineering, fortified settlements.",b:{economy:2,defense:2}},
{id:"greek",name:"Greek City-States",desc:"Tactical formations, naval access, alliances.",b:{strategy:2,diplomacy:1,command:1}},
{id:"mali",name:"Mali Empire",desc:"Gold, commerce, trade networks.",b:{economy:3,influence:1}},
{id:"kush",name:"Kingdom of Kush",desc:"Nubian history, river corridors, regional defense.",b:{defense:2,command:1}},
{id:"songhai",name:"Songhai Empire",desc:"Trade-route control and regional administration.",b:{economy:2,command:1,influence:1}},
{id:"mongol",name:"Mongol Empire",desc:"Mobility, mounted forces, rapid expansion.",b:{command:3,strategy:1}},
{id:"uk",name:"United Kingdom (Modern)",desc:"Maritime reach, alliances, expeditionary logistics.",b:{diplomacy:2,command:1,economy:1}},
{id:"usa",name:"United States (Modern)",desc:"Industrial scale, logistics, force projection.",b:{command:2,economy:2,strategy:1}},
{id:"russia",name:"Russia (Modern)",desc:"Strategic depth and territorial defense.",b:{defense:3,command:1}},
{id:"japan",name:"Japan (Modern)",desc:"Maritime defense and technology development.",b:{strategy:2,economy:1,defense:1}},
{id:"skorea",name:"South Korea (Modern)",desc:"Industrial development and defensive readiness.",b:{economy:2,defense:2}},
{id:"nkorea",name:"North Korea (Modern)",desc:"Fortified defense and mobilization.",b:{defense:3,command:1}},
{id:"china",name:"China (Modern)",desc:"Industrial capacity and large-scale development.",b:{economy:3,command:1}},
{id:"zulu",name:"Zulu Kingdom",desc:"Coordinated infantry tactics and regional command.",b:{command:2,defense:2}}
];
const campaigns={
frontier:{title:"Frontier of Crowns",gold:110,food:45,manpower:12,influence:30,intelligence:10,ai:"Rival Council",map:[["Sunspire","you",5,[2,5]],["Iron Pass","ai",4,[1,3,6]],["Cedar Reach","ai",3,[2,4,7]],["Crown Harbor","neutral",2,[3,8]],["Red Mesa","you",3,[1,6,9]],["Stormfield","you",4,[2,5,7,10]],["Moon Valley","ai",4,[3,6,8,11]],["Blackwater","neutral",2,[4,7,12]],["Golden Steppe","you",3,[5,10,13]],["Kingsfall","ai",4,[6,9,11,14]],["Ashen Woods","you",3,[7,10,12,15]],["Dragon's Gate","ai",5,[8,11,16]],["Jade Coast","neutral",2,[9,14]],["Lion's Rest","ai",3,[10,13,15]],["Obsidian Field","ai",4,[11,14,16]],["Throne of Dawn","neutral",2,[12,15]]]},
rome:{title:"Rise of Rome",gold:125,food:50,manpower:14,influence:28,intelligence:12,ai:"Carthaginian League",map:[["Latium","you",5,[2,3]],["Etruria","neutral",2,[1,4]],["Campania","you",4,[1,5]],["Alpine Gate","ai",4,[2,6]],["Sicily","neutral",3,[3,7]],["Carthage","ai",5,[4,8]],["Sardinia","ai",3,[5,8,9]],["Numidia","neutral",2,[6,7,10]],["Hispania","ai",4,[7,11]],["Africa Coast","neutral",2,[8,12]],["Massilia","ai",3,[9,12]],["Eastern Port","neutral",2,[10,11]]]},
mali:{title:"Golden Routes of Mali",gold:150,food:60,manpower:10,influence:38,intelligence:14,ai:"Desert Trade Coalition",map:[["Niani","you",4,[2,3]],["Goldfields","you",3,[1,4]],["River Bend","neutral",2,[1,5]],["Salt Road","ai",3,[2,6]],["Market Oasis","neutral",2,[3,6,7]],["Timbuktu","ai",4,[4,5,8]],["Sahel Gate","ai",3,[5,9]],["Niger Crossing","neutral",2,[6,10]],["Caravan City","ai",3,[7,10]],["Southern Forest","you",3,[8,9]]]},
mongol:{title:"Mongol Expansion",gold:105,food:55,manpower:16,influence:24,intelligence:12,ai:"Border Kingdoms",map:[["Steppe Camp","you",5,[2,3]],["Western Range","ai",4,[1,4]],["Great Grassland","you",4,[1,5]],["River Fortress","ai",5,[2,6]],["Northern Pass","neutral",2,[3,6,7]],["Imperial Road","ai",4,[4,5,8]],["Forest March","neutral",2,[5,9]],["Eastern Plain","ai",4,[6,10]],["Mountain Gate","ai",3,[7,10]],["Frontier City","neutral",2,[8,9]]]},
modern:{title:"Modern World Order",gold:140,food:55,manpower:15,influence:35,intelligence:18,ai:"Global Coalition",map:[["Pacific Hub","you",4,[2,3]],["Industrial Belt","you",4,[1,4]],["Northern Alliance","ai",5,[1,5]],["Trade Corridor","neutral",2,[2,6]],["Eastern Command","ai",4,[3,6,7]],["Energy Basin","neutral",2,[4,5,8]],["Maritime Gate","ai",4,[5,9]],["Capital District","you",3,[6,10]],["Resource Frontier","ai",4,[7,10]],["Southern Port","neutral",2,[8,9]]]}
};
const $sel=id=>$(id).value;
function fill(id,arr){$(id).innerHTML="";arr.forEach(x=>{let o=document.createElement("option");o.value=x.id;o.textContent=x.name;$(id).append(o)})}
fill("culture",people.culture);fill("politics",people.politics);fill("economy",people.economy);fill("empire",empires);
let team=null,world=[],chosen=1,turnNo=1,actions=3,pacts=new Set(),alliances=new Set(),neutrality=new Set(),logLines=[],gameOver=false, state={}, abilityReadyTurn=1, achievements=new Set(), objectiveState={builds:0,conquests:0,treaties:0,spies:0};
let currentCampaign=campaigns.frontier;

campaigns.living={title:"The Living World",gold:170,food:80,manpower:20,influence:45,intelligence:24,ai:"Northern Dominion",map:[
["Crown Capital","you",6,[2,5]],["Western March","you",4,[1,3,6]],["Highland Pass","ai",5,[2,4,7]],["Iron Coast","league",4,[3,8]],["Golden Plains","you",4,[1,6,9]],["River Kingdom","neutral",3,[2,5,7,10]],["Sunset Province","ai",4,[3,6,11]],["Eastern Harbor","league",5,[4,12]],["Silver Basin","ai",4,[5,10,13]],["Old City","neutral",3,[6,9,11,14]],["Jade Frontier","league",4,[7,10,15]],["Storm Islands","neutral",2,[8,16]],["Amber Hills","ai",4,[9,14,17]],["Crossroads","league",5,[10,13,15,18]],["Blackwood","neutral",3,[11,14,19]],["Pearl Coast","ai",4,[12,20]],["Red Canyon","neutral",3,[13,18,21]],["Imperial Road","ai",5,[14,17,19,22]],["Lake District","league",4,[15,18,23]],["Southern Gate","neutral",3,[16,24]],["Ashen Reach","ai",4,[17,22]],["Grand Market","neutral",3,[18,21,23]],["Blue River","league",4,[19,22,24]],["Throne of Dawn","neutral",3,[20,23]]
]};

function chosenTeam(){return {culture:people.culture.find(p=>p.id===$sel("culture")),politics:people.politics.find(p=>p.id===$sel("politics")),economy:people.economy.find(p=>p.id===$sel("economy")),empire:empires.find(p=>p.id===$sel("empire"))}}
function bonuses(){let b={economy:0,influence:0,morale:0,diplomacy:0,strategy:0,command:0,defense:0};Object.values(team||{}).forEach(p=>Object.entries(p.b||{}).forEach(([k,v])=>b[k]=(b[k]||0)+v));return b}
function say(s){logLines.unshift(`Turn ${turnNo}: ${s}`);logLines=logLines.slice(0,12);$("log").innerHTML=logLines.map(x=>`<div>• ${x}</div>`).join("")}
function setupChanged(){let t=chosenTeam();["culture","politics","economy","empire"].forEach(k=>$(k+"Info").textContent=(t[k].trait?t[k].trait+" — ":"")+t[k].desc);let b=Object.values(t).reduce((acc,p)=>acc+Object.values(p.b||{}).reduce((x,v)=>x+v,0),0);$("synergy").textContent=b+3;$("teamTitle").textContent=`${t.culture.name} • ${t.politics.name} • ${t.economy.name} • ${t.empire.name}`;$("teamSummary").textContent=$("mode").value==="fixed"?"One specialist in each pillar gives a balanced starting council.":"Flexible role choices let you shape your strengths while keeping all four pillars represented."}
["culture","politics","economy","empire","mode"].forEach(id=>$(id).addEventListener("change",setupChanged));
$("campaign").addEventListener("change",()=>{let c=campaigns[$sel("campaign")];$("campaignInfo").textContent=`${c.title}: ${c.map.length} territories, unique starting resources, and competing rival factions. Fictionalized strategy setting.`});
setupChanged();
function launch(){team=chosenTeam();currentCampaign=campaigns[$sel("campaign")];$("setup").classList.add("hidden");$("game").classList.remove("hidden");$("campaignTitle").textContent=currentCampaign.title+" — "+team.empire.name;$("teamLine").textContent=`Culture: ${team.culture.name} · Politics: ${team.politics.name} · Economy: ${team.economy.name}`;$("bonuses").innerHTML=Object.entries(bonuses()).filter(([k,v])=>v>0).map(([k,v])=>`<li><b>${k[0].toUpperCase()+k.slice(1)} +${v}</b></li>`).join("");resetGame()}
function resetGame(){world=currentCampaign.map.map((r,i)=>({id:i+1,name:r[0],owner:(r[1]==="ai" && i%3===1)?"league":r[1],troops:r[2],neighbors:r[3],buildings:[],farm:0,market:0,barracks:0,culture:0,units:{infantry:r[2],cavalry:0,archers:0},fort:0}));world.forEach(t=>{if(t.owner==="you"){t.farm=1;t.market=1}});chosen=world.find(t=>t.owner==="you").id;turnNo=1;actions=3;pacts=new Set();alliances=new Set();neutrality=new Set();logLines=[];gameOver=false;abilityReadyTurn=1;achievements=new Set();objectiveState={builds:0,conquests:0,treaties:0,spies:0};state={gold:currentCampaign.gold,food:currentCampaign.food,manpower:currentCampaign.manpower,influence:currentCampaign.influence,intelligence:currentCampaign.intelligence};render();say(`${currentCampaign.title} begins. Rival factions will adapt to your expansion, economy, and defenses.`)}
function tile(id){return world.find(t=>t.id===id)}function here(){return tile(chosen)}function count(owner){return world.filter(t=>t.owner===owner).length}function totalTroops(owner){return world.filter(t=>t.owner===owner).reduce((a,t)=>a+t.troops,0)}
function income(){let b=bonuses(),mine=world.filter(t=>t.owner==="you");return {gold:10+mine.reduce((a,t)=>a+1+2*t.market,0)+Math.floor(b.economy/2),food:5+mine.reduce((a,t)=>a+2*t.farm,0),manpower:2+mine.reduce((a,t)=>a+t.barracks,0),influence:2+mine.reduce((a,t)=>a+2*t.culture,0)+Math.floor(b.influence/2),intelligence:1+Math.floor(b.strategy/3)}}
function render(){if(!team)return;let inc=income();$("resources").innerHTML=[["Gold",state.gold,"+"+inc.gold+"/turn"],["Food",state.food,"+"+inc.food+"/turn"],["Manpower",state.manpower,"+"+inc.manpower+"/turn"],["Influence",state.influence,"+"+inc.influence+"/turn"],["Intelligence",state.intelligence,"+"+inc.intelligence+"/turn"]].map(v=>`<div class="resource"><span>${v[0]}</span><strong>${v[1]}</strong><small>${v[2]}</small></div>`).join("");
$("map").innerHTML="";world.forEach(t=>{let bt=document.createElement("button");bt.className="tile "+(t.owner==="you"?"you":t.owner==="neutral"?"neutral":t.owner==="ai"?"enemy":"enemy2")+(t.id===chosen?" selected":"");bt.innerHTML=`<b>${t.name}</b><small>${t.owner==="you"?"Your realm":t.owner==="neutral"?"Unclaimed":t.owner==="ai"?currentCampaign.ai:"Eastern League"}</small><span>⚔ ${t.troops}</span><small>${t.buildings.join(", ")||"No buildings"}</small>`;bt.onclick=()=>{chosen=t.id;render()};$("map").append(bt)});
let t=here();$("territoryInfo").innerHTML=`<b>${t.name}</b> · Owner: ${t.owner==="you"?"You":t.owner==="neutral"?"Neutral":t.owner==="ai"?currentCampaign.ai:"Eastern League"} · Troops: ${t.troops}<br>Units: Infantry ${t.units.infantry}, Cavalry ${t.units.cavalry}, Archers ${t.units.archers}<br>Connected to: ${t.neighbors.map(id=>tile(id)?.name).join(", ")}<br>Buildings: ${t.buildings.join(", ")||"None"}${t.fort?" · Fortified":""}`;
document.querySelectorAll("[data-build]").forEach(b=>b.disabled=gameOver||t.owner!=="you"||t[b.dataset.build]>0||state.gold<({farm:25,market:35,barracks:40,culture:30}[b.dataset.build]));
$("reinforce").disabled=gameOver||t.owner!=="you"||state.gold<20||state.manpower<2||actions<1;
$("attack").disabled=gameOver||t.owner==="you"||actions<1;
$("pact").disabled=gameOver||state.influence<10||pacts.has($sel("diplomat"))||alliances.has($sel("diplomat"));
$("alliance").disabled=gameOver||state.influence<15||alliances.has($sel("diplomat"))||pacts.has($sel("diplomat"));
$("spy").disabled=gameOver||state.intelligence<5;
$("trade").disabled=gameOver||state.gold<15;
$("tribute").disabled=gameOver||count("you")<count($sel("diplomat"))||neutrality.has($sel("diplomat"));
$("breakPact").disabled=!(pacts.has($sel("diplomat"))||alliances.has($sel("diplomat")));
$("diplomacyStatus").textContent=alliances.has($sel("diplomat"))?`Strategic alliance active with ${factionName($sel("diplomat"))}.`:pacts.has($sel("diplomat"))?`Non-aggression pact active with ${factionName($sel("diplomat"))}.`:neutrality.has($sel("diplomat"))?"Relations strained after a broken pact or hostile demand.":"No active agreement with this faction.";
$("councilAbility").disabled=gameOver||turnNo<abilityReadyTurn;
$("abilityStatus").textContent=turnNo<abilityReadyTurn?`Ability recharges on turn ${abilityReadyTurn}.`:`Ready: ${team.culture.trait} / ${team.politics.trait} council power.`;
renderProgress();
$("overview").innerHTML=[["Your territories",count("you")],["Rival Council",count("ai")],["Eastern League",count("league")],["Unclaimed",count("neutral")],["Your troops",totalTroops("you")],["Turn",turnNo],["Actions left",actions]].map(x=>`<div class="stat"><span>${x[0]}</span><b>${x[1]}</b></div>`).join("");
$("aiStatus").textContent=`${currentCampaign.ai}: ${aiMood("ai")} · Eastern League: ${aiMood("league")}`;
}

function award(name,desc){if(achievements.has(name))return;achievements.add(name);say(`🏆 Achievement unlocked: ${name} — ${desc}`)}
function renderProgress(){
 if(!$("objectives")||!$("achievements"))return;
 const target=Math.ceil(world.length*.6), owned=count("you");
 const objectives=[
  [`Expand the realm`,`${owned}/${target} territories`,owned>=target],
  [`Develop the heartland`,`${objectiveState.builds}/3 buildings built`,objectiveState.builds>=3],
  [`Master diplomacy`,`${objectiveState.treaties}/1 treaty or alliance`,objectiveState.treaties>=1],
  [`Know your rivals`,`${objectiveState.spies}/1 intelligence operation`,objectiveState.spies>=1]
 ];
 $("objectives").innerHTML=objectives.map(o=>`<div class="objective ${o[2]?"complete":""}"><span>${o[2]?"✓":"○"} ${o[0]}</span><small>${o[1]}</small></div>`).join("");
 $("achievements").innerHTML=achievements.size?[...achievements].map(a=>`<span class="badge">🏆 ${a}</span>`).join(""):"No achievements yet — your legend starts here.";
 if(owned>=target)award("Realm Builder","control 60% of the campaign map");
 if(objectiveState.builds>=3)award("Master Builder","construct three improvements");
 if(objectiveState.treaties>=1)award("Diplomatic Hand","secure a pact or alliance");
 if(objectiveState.spies>=1)award("Eyes Everywhere","complete an intelligence operation");
 if(count("ai")===0||count("league")===0)award("Rival Breaker","eliminate one rival faction");
}

function factionName(id){return id==="ai"?currentCampaign.ai:"Eastern League"}
function aiMood(owner){let n=count(owner),troops=totalTroops(owner),us=totalTroops("you");if(pacts.has(owner))return "treaty active";if(n>count("you")&&troops>us)return "confident and expansion-minded";if(troops<us*.65)return "cautious; likely to reinforce";return "watchful; testing border weaknesses"}
function build(kind){let t=here(),cost={farm:25,market:35,barracks:40,culture:30}[kind];if(gameOver||t.owner!=="you"||t[kind]>0||state.gold<cost)return;state.gold-=cost;t[kind]=1;t.buildings.push({farm:"Farm",market:"Market",barracks:"Barracks",culture:"Cultural Center"}[kind]);objectiveState.builds++;render();say(`${t.buildings[t.buildings.length-1]} built in ${t.name}.`)}
document.querySelectorAll("[data-build]").forEach(b=>b.addEventListener("click",()=>build(b.dataset.build)));
$("reinforce").onclick=()=>{let t=here(),unit=$sel("unitType");if(t.owner!=="you"||state.gold<20||state.manpower<2||actions<1)return;state.gold-=20;state.manpower-=2;t.units[unit]++;t.troops++;if(unit==="cavalry")t.troops+=Math.floor(bonuses().command/8);actions--;render();say(`Recruited ${unit} in ${t.name}. Army is now ${t.troops} strong.`)}
function adjacentSource(target){return world.filter(x=>x.owner==="you"&&x.neighbors.includes(target.id)&&x.troops>1).sort((a,b)=>b.troops-a.troops)[0]}
$("attack").onclick=()=>{let t=here(),s=adjacentSource(t);if(t.owner==="you"||actions<1)return;if(!s){say("No adjacent friendly army can attack this territory.");return}let b=bonuses(),tactic=$sel("tactic"),unitBonus=s.units.cavalry>0?2:0,atk=s.troops-1+Math.floor(b.strategy/3)+Math.floor(b.command/4)+unitBonus+Math.floor(Math.random()*4),def=t.troops+Math.floor(Math.random()*4)+(t.fort?2:0);if(tactic==="blitz"){atk+=3;def+=1}else if(tactic==="ambush")atk+=Math.floor(b.strategy/2)+1;else if(tactic==="fortify")def+=2;actions--;s.troops=Math.max(1,s.troops-1);if(atk>def){t.owner="you";t.troops=Math.max(1,Math.floor((atk-def+s.troops)/2));t.units.infantry=t.troops;s.units.infantry
