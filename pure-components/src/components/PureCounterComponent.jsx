import { PureComponent } from "react"
import "../App.css"

export default class PureCounterComponent extends PureComponent {


    constructor(){

        super()

        this.state={
            count:0,
            toggle:true
        }
    }

    handleCounter=()=>{
        if(this.state.toggle==true){
            this.setState({
                ...this.state,
                count:this.state.count+1
            })
        }else{
            this.setState({
                ...this.state,
                count:this.state.count
            })
        }
    }

    handleToggle=()=>{
        this.setState({
            ...this.state,
            toggle:!this.state.toggle
        })
    }

   
    render(){
      console.log("This is Pure Component")
      return(
   
        <>
            <h1>Pure Component</h1>
            <h3>{this.state.count}</h3>
            <button className="button" onClick={this.handleToggle}>Set toggle</button>
            <button className="button" onClick={this.handleCounter}>Counter</button>
        </>
   
      )
    }
   }