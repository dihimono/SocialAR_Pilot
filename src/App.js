import React, { Component } from 'react';
import Video from "./Video.js";
import Forms from "./Forms.js";

class App extends Component {
    constructor() {
        super();
        this.clickNext = this.clickNext.bind(this);
        this.clickBack = this.clickBack.bind(this);
        this.state = {
            page: 1
        };  
    }

    clickNext() {
        console.log('====== clickNext');
        this.setState({
            page: this.state.page + 1
        })
    }

    clickBack() {
        console.log('===== clickBack');
        this.setState({
            page: this.state.page == 1 ? 1 : this.state.page - 1
        })
    }
    
    render() {
        console.log('============= this.state.page', this.state.page);
        return (
            <div className="App">
                <p className="App-intro">
                    台大資工所行動與人機互動實驗室(NTU mobile HCI lab) 對話情境中 AR 文字擺放位置偏好調查
                </p>
                <div className="parent">  
                    <Video />
                    <Forms myclickNext={this.clickNext} myclickBack={this.clickBack} page={this.state.page} />    
                </div>  
                
            </div>
        );
    }
}

export default App;
