import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  
  let rdmWho = who[Math.floor(Math.random() * who.length)];
  let rdmAction = action[Math.floor(Math.random() * action.length)];
  let rdmWhat = what[Math.floor(Math.random() * what.length)];
  let rdmWhen = when[Math.floor(Math.random() * when.length)];

  
  let excuse = rdmWho + ' ' + rdmAction + ' ' + rdmWhat + ' ' + rdmWhen;

  
  document.querySelector('#excuse').innerHTML = excuse;

 
  console.log("Tu excusa es: " + excuse);
};