import React, { Component } from "react";
import "./SideDrawer.css"
import logo53 from "../asset/images/girl.png";
import logo51 from "../asset/images/bell.png";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
export class AddConnector extends Component {
    constructor(props){
        super(props)
        this.state = {
         
        }
    }
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
      <span style={{fontSize:20,fontWeight:700,display:"flex",justifyContent:"flex-start",marginLeft:30}}>Add Connectors</span>
      </div>

<div style={{display:"flex",flexDirection:"row"}}>

<div style={{width:"50%",paddingRight:20,borderRight:"1px solid gray"}}>
      <div style={{marginTop:10}}>
         <span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:30,fontWeight:600}}>Select Profession</span>
        </div>
        <div style={{display:"flex",marginTop:10,marginLeft:25}}>
        <div style={{backgroundColor:"#C71C8E",width:90,padding:10,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
     <span style={{fontSize:15,color:"white"}}>Builder</span> 
    </div>
    <div style={{backgroundColor:"white",width:90,padding:10,border:"1px solid black",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",marginLeft:10}}>
     <span style={{fontSize:15,color:"black"}}>Ex Banker</span> 
    </div>
    <div style={{backgroundColor:"white",width:90,padding:10,border:"1px solid black",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",marginLeft:10}}>
     <span style={{fontSize:15,color:"black"}}>Agent</span> 
    </div>
    <div style={{backgroundColor:"white",width:90,padding:10,border:"1px solid black",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",marginLeft:10}}>
     <span style={{fontSize:15,color:"black"}}>RE Broker</span> 
    </div>
    
    </div> 

    <div style={{display:"flex",marginTop:5,marginLeft:10}}>
    
    <div style={{backgroundColor:"white",width:90,padding:10,border:"1px solid black",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",marginLeft:20}}>
     <span style={{fontSize:15,color:"black"}}>Freelance</span> 
    </div>
   
    
    <div style={{backgroundColor:"white",width:90,padding:10,border:"1px solid black",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",marginLeft:10}}>
     <span style={{fontSize:15,color:"black"}}>Other</span> 
    </div>
    </div> 


    <div style={{marginTop:10}}>
         <span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:30,fontWeight:600}}>Select Gender</span>
        </div>
        <div style={{display:"flex",marginTop:10,marginLeft:25}}>
        <div style={{backgroundColor:"#C71C8E",width:90,padding:10,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
     <span style={{fontSize:15,color:"white"}}>Male</span> 
    </div>
    <div style={{backgroundColor:"white",width:90,padding:10,border:"1px solid black",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",marginLeft:20}}>
     <span style={{fontSize:15,color:"black"}}>Female</span> 
    </div>
    <div style={{backgroundColor:"white",width:90,padding:10,border:"1px solid black",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",marginLeft:20}}>
     <span style={{fontSize:15,color:"black"}}>Other</span> 
    </div>
    </div>
    <div style={{marginTop:10}}>
         <span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:30,fontWeight:600}}>Basic Detail</span>
        </div>
        <div style={{display:"flex",flexDirection:"column",marginLeft:28,marginTop:10}}>
        <input type="text"  placeholder="name" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:300,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
        <input type="text"  placeholder="Email id" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:300,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
        <input type="text"  placeholder="phone" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:300,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
        </div>
        <div style={{marginTop:10}}>
         <span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:30,fontWeight:600}}>Additional Detail</span>
        </div>
        <div style={{display:"flex",flexDirection:"column",marginLeft:28,marginTop:10}}>
        <input type="text"  placeholder="Pan" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:300,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
        <input type="text"  placeholder="Company Name" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:300,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
     </div>
    </div> 


{/* right div */}
<div style={{width:"50%",paddingLeft:20}}>
<div style={{marginTop:10}}>
         <span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:25,fontWeight:600}}>Current Address</span>
        </div>
        <div style={{display:"flex",flexDirection:"column",marginLeft:28,marginTop:15}}>
        <input type="text"  placeholder="Pin" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:300,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
        <input type="text"  placeholder="Address" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:300,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
        <input type="text"  placeholder="City" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:300,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
        <input type="text"  placeholder="State" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:300,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
        <textarea type="text" rows="6" cols="50" placeholder="comment" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:300,height:80,outline:"none",paddingLeft:5,borderRadius:5,marginTop:25}} />
</div>
    </div>
    </div>
    <div style={{marginTop:5,display:"flex",justifyContent:"flex-end",marginRight:"5%",marginTop:30}}>
<button style={{marginRight:20,backgroundColor:"transparent" , border: "1px solid pink", borderRadius: 10, width: 130, height: 50}}>
  <span style={{color:"pink",fontSize:15}}> Cancel</span>
  </button>
<button style={{backgroundColor:"#273896" , border: "none", borderRadius: 10, width: 160, height: 50,}}>
  <span style={{color:"white",fontSize:15}}> Submit</span>
  </button>

</div>
      </div>
    );
  }
}

export default AddConnector;