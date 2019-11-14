import React, {Component} from "react";
import Controls from "./components/controls";
import Store from "./utils/store";
import Table from "./components/table";

class App extends Component {
    appStore = new Store();

    render(){
        return (
            <div>
                <h1>Mobx table</h1>
                <Controls store={this.appStore}/>
                <Table store={this.appStore} />
            </div>
        )
    }
}

export default App
