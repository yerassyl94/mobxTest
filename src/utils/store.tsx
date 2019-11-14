import {action, computed, decorate, observable} from "mobx";
import makeInspectable from "mobx-devtools-mst"

class Store {
    employeesList = [
        { name: "RDJ", salary: 200},
        { name: "Cap", salary: 50}
    ];

    clearList() {
        this.employeesList = []
    }

    pushEmployee(e){
        this.employeesList.push(e)
    }

    get totalSum() {
        let sum = 0;
        this.employeesList.map(e => sum = sum + e.salary)
        return sum
    }

    get highEarnersCount(){
        return this.employeesList.filter(e => e.salary > 500).length
    }
}

decorate(Store, {
    employeesList: observable,
    clearList: action,
    pushEmployee: action,
    totalSum: computed
});

makeInspectable(Store);

export default Store
