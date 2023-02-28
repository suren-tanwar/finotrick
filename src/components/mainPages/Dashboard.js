import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import logo1 from "../asset/images/home.png";
import logo2 from "../asset/images/lap.png";
import logo3 from "../asset/images/bill.png";
import logo4 from "../asset/images/over.png";
import logo5 from "../asset/images/lead.png";
import logo6 from "../asset/images/visits.png";
import logo7 from "../asset/images/docs.png";
import logo8 from "../asset/images/lender.png";
import logo9 from "../asset/images/Rectangle393.png";

import logo53 from "../asset/images/girl.png";
import logo51 from "../asset/images/bell.png";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
export class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
         
        }
    }
   
 
  render() {
      console.log(this.state)
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

    <div>
    <Carousel autoPlay={true} controls={false} indicators={true} fade={true} interval={100}>
      <Carousel.Item>
        <img className="d-block w-100" src ={logo9} alt="First slide"/>
        </Carousel.Item>

                    <Carousel.Item>
                <img className="d-block w-100" src ={logo9} alt="second slide"/>
              
                    </Carousel.Item>
                    <Carousel.Item>
                <img className="d-block w-100" src ={logo9} alt="Third slide" />
    
                    </Carousel.Item>
                </Carousel>
            </div>


        
         <div style={{marginTop:20}}>
          <span style={{fontSize:20,fontStyle:"italic",fontWeight:600,display:"flex",justifyContent:"flex-start",marginLeft:25}}>Create Lead</span>
          </div>
          <div style={{display:"flex",flexDirection:"row",marginLeft:25,marginTop:10,justifyContent:"space-between",width:"40%"}}>
          <div className="dashboard-box">
        <img src={logo1}  style={{width:50,height:50,padding:12}}/>
        <span style={{fontSize:12,display:"flex",justifyContent:"flex-start",marginLeft:16}}>Home Loan</span>      
          </div>
          <div className="dashboard-box">
            
                <img src={logo2}  style={{width:50,height:50,padding:12}}/>
        <span style={{fontSize:12,display:"flex",justifyContent:"flex-start",marginLeft:20}}>Lap</span>   
         
          </div>
          <div className="dashboard-box">
                <img src={logo3}  style={{width:50,height:50,padding:12}}/>
        <span style={{fontSize:12,display:"flex",justifyContent:"flex-start",marginLeft:15}}>Bill</span>      
          </div>
          <div className="dashboard-box">
                <img src={logo4}  style={{width:50,height:50,padding:12}}/>
        <span style={{fontSize:12,display:"flex",justifyContent:"flex-start",marginLeft:15}}>Overdraft</span>      
          </div>

          </div>
         



          <div style={{marginTop:15}}>
          <span style={{fontSize:20,fontStyle:"italic",fontWeight:600,display:"flex",justifyContent:"flex-start",marginLeft:25}}>My Dashboard</span>
          </div>
          <div style={{display:"flex",flexDirection:"row",marginLeft:25,marginTop:10,justifyContent:"space-between",width:"40%"}}>
          <div className="dashboard-box">
        <img src={logo5}  style={{width:50,height:50,padding:12}}/>
        <span style={{fontSize:12,display:"flex",justifyContent:"flex-start",marginLeft:16}}>Lead</span>      
          </div>
          <div className="dashboard-box">
            
                <img src={logo6}  style={{width:60,height:50,padding:12}}/>
        <span style={{fontSize:12,display:"flex",justifyContent:"flex-start",marginLeft:20}}>Visits</span>   
         
          </div>
          <div className="dashboard-box">
                <img src={logo7}  style={{width:50,height:50,padding:12}}/>
        <span style={{fontSize:12,display:"flex",justifyContent:"flex-start",marginLeft:15}}>Docs</span>      
          </div>
          <div className="dashboard-box">
                <img src={logo8}  style={{width:50,height:50,padding:12}}/>
        <span style={{fontSize:12,display:"flex",justifyContent:"flex-start",marginLeft:15}}>Lender</span>      
          </div>

          </div>
      </div>
    );
  }
}

export default Dashboard;