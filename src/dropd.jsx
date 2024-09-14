import React, { useState } from "react";
import img from './assets/phoenix.webp'
import orc from './assets/orc.webp'
import az from './assets/az.webp'
import sn from './assets/sn.webp'
import vm from './assets/vm.webp'
function Dropd(){
  const [i,seti]=useState('');
  const [im,setim]=useState('');
  const [v,setv]=useState('');
const [t,sett]=useState('');
  const [p1,setp1]=useState('');
function disp(e){
    switch(e.target.value){
      case 'ITOM':
        seti(e.target[1].text);
      setp1('Transforms your business into automated operation by customizing and integrating advanced Artificial Intelligence.');
        break;
      case 'ITSM':
        seti(e.target[2].text);
      setp1('Phoenix Digital Technologies deliver IT Service Management (ITSM) services that improve your business insights, productivity.');
        break;
        case 'cloud':
        seti(e.target[3].text);
      setp1('Cloud solution helps to achieve customer’s goal for business growth, faster innovation and greater resilience.');
        break;
case 'am':
        seti(e.target[4].text);
      setp1('Focused on creating a new business value from the existing application? If yes then Application Modernization is best.');
        break;

case 'orc':
      setim(orc);break;
case 'vm':
      setim(vm);break;
case 'sn':
      setim(sn);break;
case 'az':
      setim(az);break;
    }
  }
return(
<>
      <div id="bar">
      <img src={img}/>
  <select id="s" onChange={(e)=>{setv(e.target.value);
disp(e);}} value={v}>
    <option value="">SERVICES</option>
    <option value="ITOM">IT Operations Management</option>
    <option value="ITSM">IT Service Management</option>
    <option value="cloud">Cloud</option>
    <option value="am">Application Modernization</option>
  </select>
  <select id="t" onChange={(e)=>{sett(e.target.value);
disp(e);}} value={t}>
    <option value="">TECHNOLOGIES</option>
    <option value="orc">Oracle Cloud</option>
    <option value="vm">Vmware</option>
    <option value="sn">ServiceNow</option>
    <option value="az">Microsoft Azure</option>
  </select>

</div>
      <div id="par">
      <p id="para1">
       <h2>SERVICES</h2> 
        <h4>{i}</h4>
        {p1}
      </p>
      <p id='para2'>
        <h2>TECHNOLOGIES</h2>
        <img src={im}/>
      </p>
      </div>
  </>);
}
export default Dropd
