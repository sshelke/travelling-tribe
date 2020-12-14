const { Component } = require("react");

class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            clicks:0,
            show:true
        };
    };

    IncrementItem=()=>{
        this.state({clicks:this.state.clicks+1});
    };

    DecrementItem=()=>{
        this.state({clicks:this.state.clicks-1});
    };

    ToggleClick=()=>{
        this.setState({show:!this.state.show});
    };
}