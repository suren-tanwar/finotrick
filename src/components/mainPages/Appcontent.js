import React, { Component } from 'react'
import logo53 from "../asset/images/girl.png";
import logo51 from "../asset/images/bell.png";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
export class Appcontent extends Component {
  render() {
    return (
        <div>
        <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center",marginTop:15}}>
        <div style={{marginRight:10,borderRadius:15,boxShadow:  "1px 1px 4px 1px  grey",border: "1px solid #fff",width:25,height:25}}>
        <img src={logo51} />
        </div>
         <div style={{marginRight:30}}>
        <Chip
        avatar={<Avatar alt="Natacha" src={logo53} />}
        label="Leselie A.."
        variant="outlined"
        style={{ boxShadow:  "1px 1px 4px 1px  grey",border: "1px solid #fff"}}
      />
      </div>
      </div>
        <div style={{marginTop:25}}>
        <span style={{fontSize:20,fontWeight:600,display:"flex",justifyContent:"flex-start",marginLeft:35}}>App Content</span>
        </div>
 <div style={{display:"flex",marginLeft:35,marginTop:15}}>
 <textarea type="text" row="30" cols="90" placeholder="Privacy Policy" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:950,height:130,outline:"none",borderRadius:5}} />
    </div>

    <div style={{display:"flex",justifyContent:"flex-end",marginRight:"15%",marginTop:13}}>
 <button style={{backgroundColor:"#273896" , border: "none", borderRadius: 10, width: 200, height: 50,}}>
    <span style={{color:"white",fontSize:15}}> Save</span>
    </button>
  </div>
  
  <div style={{display:"flex",marginLeft:35,marginTop:15}}>
  <textarea type="text" row="30" cols="90" placeholder="Terms & Condition" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:950,height:130,outline:"none",borderRadius:5}} />
    </div>

    <div style={{display:"flex",justifyContent:"flex-end",marginRight:"15%",marginTop:13}}>
  <button style={{backgroundColor:"#273896" , border: "none", borderRadius: 10, width: 200, height: 50,}}>
    <span style={{color:"white",fontSize:15}}> Save</span>
    </button>
   </div>
  <div style={{marginTop:10}}>
  <span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:35}}>Help</span>
  </div>
  <div style={{display:"flex",marginLeft:35,marginTop:10}}>
    <input type="text"  placeholder="WHY WE DO IT" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:950,height:50,outline:"none",borderRadius:5}} />
    </div>
    <div style={{display:"flex",marginLeft:35,marginTop:10}}>
    <textarea type="text" row="50" cols="90"
     placeholder="We believe that no dream should go unfulfilled because of the lack of funds. Be it the First House or First Working Capital Loan to grow the company, we are there to support you to making the dream possible. After fulfilling many such dreams, our customers’ trust has fueled our own dream- to become the Largest Retail Finance Distribution Company in the Country. Being one of the fastest growing economies, India is high on aspirations but low on funding, that’s where we step in.

    " style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:950,height:65,outline:"none",borderRadius:5,overflow:"hidden"}} />
    </div>

    <div style={{display:"flex",justifyContent:"space-between",marginTop:13,marginRight:"15%",marginLeft:"3%"}}>
    <button style={{backgroundColor:"#273896" , border: "none", borderRadius: 10, width: 230, height: 50,}}>
       <span style={{color:"white",fontSize:15}}> Add New FAQ Item</span>
       </button>
       <button style={{backgroundColor:"#273896" , border: "none", borderRadius: 10, width: 230, height: 50,}}>
       <span style={{color:"white",fontSize:15}}> Save</span>
       </button>
     </div>
        </div>
    )
  }
}

export default Appcontent