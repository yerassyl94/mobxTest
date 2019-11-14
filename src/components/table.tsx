import React, {Component} from "react";
import {observer} from "mobx-react";

interface IProps {
    store: any
}

const Row = (props) => {
    return (
        <tr>
            <td>{props.data.name}</td>
            <td>{props.data.salary}</td>
        </tr>
    )
};

@observer
class Table extends Component<IProps> {
    render(){
        const {store} = this.props;
        return(
            <div>
                <table>
                    <thead>
                    <tr>
                        <td>Name:</td>
                        <td>Salary:</td>
                    </tr>
                    </thead>
                    <tbody>
                    {store.employeesList.map((e,i) =>
                        <Row key={i} data={e}/>
                    )}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td>Total:</td>
                        <td>{store.totalSum}</td>
                    </tr>
                    </tfoot>
                </table>
                <div className="fade">
                    You have <u>{store.highEarnersCount}</u> team members
                </div>
            </div>
        )
    }
}

export default Table
