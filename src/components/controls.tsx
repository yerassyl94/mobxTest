import React, {Component} from "react";

interface IProps {
    store: any
}

class Controls extends Component<IProps> {
    addEmployee = () => {
        const name = prompt("The name:")
        const salary = parseInt(prompt("The salary:")!, 10)

        this.props.store.pushEmployee({name, salary})
    };

    clearList = () => {
        console.log(this.props);
        this.props.store.clearList()
    };

    render(){
        return (
            <div className="controls">
                <button onClick={this.clearList}>clear table</button>
                <button onClick={this.addEmployee}>add record</button>
            </div>
        )
    }
}

export default Controls
