import React, { Component } from "react";
import "./SideDrawer.css"

import dash from "../asset/images/Stroke-1.png";
import Dashboard  from "./Dashboard";
import Lead from "./Lead"
import AddLead from "./AddLead"
import Lead001 from "./Lead001"
import Connector from './Connector'
import AddConnector from './AddConnector'
import Banner from './Banner'
import AddBanner from './AddBanner'
import Notification from  "./Notification"
import Appcontent from  "./Appcontent"
import LoanProduct from  "./LoanProduct"
import ManageEmployee from  "./ManageEmployee"
import Lender from  "./Lender"
import ManageDepartment from  "./ManageDepartment"
import Locations from  "./Locations"
import Designation from  "./Designation"
import AddEmployee from  "./AddEmployee"
import logo1 from "../asset/images/logo1.png";
import logo3 from "../asset/images/logo3.png";
import logo4 from "../asset/images/sidebar/Home.png";
import logo5 from "../asset/images/sidebar/lead.png";
import logo6 from "../asset/images/sidebar/connector.png";
import logo7 from "../asset/images/sidebar/employees.png";
import logo8 from "../asset/images/sidebar/roles.png";
import logo9 from "../asset/images/sidebar/permission.png";
import logo10 from "../asset/images/sidebar/hieracy.png";
import logo11 from "../asset/images/sidebar/agent.png";
import logo12 from "../asset/images/sidebar/loan.png";
import logo13 from "../asset/images/sidebar/Home.png";
import logo14 from "../asset/images/sidebar/Banner.png";
import logo15 from "../asset/images/sidebar/Document.png";
import logo16 from "../asset/images/sidebar/Bell.png";
import logo17 from "../asset/images/sidebar/appcontent.png";
import logo18 from "../asset/images/sidebar/branches.png";
import logo19 from "../asset/images/sidebar/department.png";
import logo20 from "../asset/images/sidebar/designation.png";
import logo21 from "../asset/images/sidebar/Location.png";
import logo22 from "../asset/images/sidebar/Union.png";
export class SideDrawer extends Component {
    constructor(props){
        super(props)
        this.state = {
            backgroundColor1:"",
            opacity1:1,
            borderRadius1:"",
            backgroundColor2:"",
            opacity2:1,
            borderRadius2:"",
            drawer:0
        }
    }
    changeColor1 = () =>{
        this.setState({
           drawer:1

        })
    }
    changeColor2 = () =>{
        this.setState({
    drawer:2

        })
    }
    changeColor3 = () =>{
        this.setState({
           drawer:3

        })
    }
    changeColor4 = () =>{
        this.setState({
    drawer:4

        })
    }
    changeColor5 = () =>{
        this.setState({
           drawer:5

        })
    }
    changeColor6 = () =>{
        this.setState({
        drawer:6
       })
    }
    changeColor7 = () =>{
        this.setState({
           drawer:7

        })
    }
    changeColor8 = () =>{
        this.setState({
    drawer:8

        })
    }
    changeColor9 = () =>{
        this.setState({
           drawer:9

        })
    }
    changeColor10 = () =>{
        this.setState({
    drawer:10

        })
    }
    changeColor11 = () =>{
        this.setState({
           drawer:11

        })
    }
    changeColor12 = () =>{
        this.setState({
    drawer:12

        })
    }
    changeColor13 = () =>{
        this.setState({
           drawer:13

        })
    }
    changeColor14 = () =>{
        this.setState({
    drawer:14

        })
    }
    changeColor15 = () =>{
        this.setState({
           drawer:15

        })
    }
    changeColor16 = () =>{
        this.setState({
    drawer:16

        })
    }
    changeColor17 = () =>{
        this.setState({
           drawer:17

        })
    }
    changeColor18 = () =>{
        this.setState({
    drawer:18

        })
    }
 
  render() {
      console.log(this.state)
    return (
      <div style={{display:"flex",flexDirection:"row"}}>

     <div className="side-drawer">
   <div style={{marginTop:"9%",width:"100%",display:"flex",flexDirection:"row"}}>
     <img style={{ width:"40%",}} src={logo1} alt="" />
     <img style={{  }} src={logo3} alt="" />
    </div>

    <div style={{display:"flex",flexDirection:"column" ,marginTop:"6%",}}>
    {this.state.drawer === 1 ?
        <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
        <img src={logo4}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Dashboard</span>
        </div>
        :
        <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor1()}>
        <img src={logo4}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Dashboard</span>
        </div>
        }
       
       {this.state.drawer === 2 ?
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
       <img src={logo5}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Lead</span>
       </div>
       :
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor2()}>
       <img src={logo5}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Lead</span>
       </div>
       
         }
       
       {this.state.drawer === 3 ?
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
       <img src={logo6}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Connections</span>
       </div>
       :
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor3()}>
       <img src={logo6}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Connections</span>
       </div>
       
         }
       
       {this.state.drawer === 4 ?
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
       <img src={logo7}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Employee</span>
       </div>
       :
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor4()}>
       <img src={logo7}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Employee</span>
       </div>
       
         }
         {this.state.drawer === 5 ?
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
       <img src={logo8}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Roles</span>
       </div>
       :
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor5()}>
       <img src={logo8}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Roles</span>
       </div>
       
         }
         {this.state.drawer === 6 ?
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
       <img src={logo9}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Permissions</span>
       </div>
       :
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor6()}>
       <img src={logo9}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Permissions</span>
       </div>
       
         }
         {this.state.drawer === 7 ?
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
       <img src={logo10}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Hierarcy</span>
       </div>
       :
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor7()}>
       <img src={logo10}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Hierarcy</span>
       </div>
       
         }
         {this.state.drawer === 8 ?
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
       <img src={logo11}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Agent</span>
       </div>
       :
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor8()}>
       <img src={logo11}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Agent</span>
       </div>
       
         }
         {this.state.drawer === 9 ?
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
       <img src={logo12}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Loan Product</span>
       </div>
       :
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor9()}>
       <img src={logo12}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Loan Product</span>
       </div>
       
         }
         {this.state.drawer === 10 ?
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
       <img src={logo13}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Lenders</span>
       </div>
       :
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor10()}>
       <img src={logo13}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Lenders</span>
       </div>
       
         }
         {this.state.drawer === 11 ?
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
       <img src={logo14}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Banners</span>
       </div>
       :
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor11()}>
       <img src={logo14}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Banners</span>
       </div>
       
         }
         {this.state.drawer === 12 ?
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
       <img src={logo15}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Report</span>
       </div>
       :
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor12()}>
       <img src={logo15}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Report</span>
       </div>
       
         }
         <a href="/noti"  style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor13()}>
         <img src={logo16}/>
         <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Notification</span>
         </a>
         {this.state.drawer === 14 ?
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
       <img src={logo17}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>App Content</span>
       </div>
       :
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor14()}>
       <img src={logo17}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>App Content</span>
       </div>
       
         }
         {this.state.drawer === 15 ?
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
       <img src={logo18}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Branches</span>
       </div>
       :
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor15()}>
       <img src={logo18}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Branches</span>
       </div>
       
         }
         {this.state.drawer === 16 ?
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
       <img src={logo19}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Department</span>
       </div>
       :
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor16()}>
       <img src={logo19}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Department</span>
       </div>
       
         }
         {this.state.drawer === 17 ?
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
       <img src={logo20}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Designation</span>
       </div>
       :
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor17()}>
       <img src={logo20}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Designation</span>
       </div>
       
         }
         {this.state.drawer === 18 ?
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
       <img src={logo21}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Location</span>
       </div>
       :
           <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor18()}>
       <img src={logo21}/>
       <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Location</span>
       </div>
       
         }
</div>

 </div>
 <div style={{width:"83%"}}>
 </div>
      </div>
    );
  }
}

export default SideDrawer;