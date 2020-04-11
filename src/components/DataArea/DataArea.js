///To make sure the DataArea is rendering, we are taking imporing th eNavbar, API, and the Datatable from the components folder///
import React, { Component } from 'react';
import SearchBox from "../SearchBox/SearchBox.js";
import DataTable from "../DataTable/DataTable.js";
import API from "/Users/joshu/Employee-Directory/employee-app/src/utils/API.js";
import "../DataArea/DataArea.css"
////Extending the DataArea as a clas from the component folder////
class DataArea extends Component{
    ///The search starts as a empty string and employees and fileted employees are empty 
    state ={
        search: "",
        employees: [],
        filteredEmployees: [],
        order: ""
    };
    componentDidMount() {
        API.getUsers().then(res => this.setState({
            employees: res.data.results,
                filteredEmployees: res.data.results
            })).catch(err => console.log(err));
        }

        ///if the employees i clicked then they are picked by ascending and descending ordere///
        sortByName = () => {
            const filter = this.state.filteredEmployees;
            if(this.state.order === 'ascending') {
                const sorteds = filter.sort((a,b) => (a.name.first> b.name.first) ? 1: -1)
                console.log(sorteds);
                this.state({
                    filteredEmployees:sorteds,
                    order: 'descending'
                })
            }else{
                const sorteds = filter.sort ((a,b) => (a.name.first> b.name.first) ? -1: 1);
                console.log(sorteds)
                this.setState({
                    filteredEmployees: sorteds,
                    order: 'ascending'
                })
            }
        } 
          ///Goint to put a handleInputChnage event to make the employees show when the input changes////
          handleInputChange = event => {
              const employees = this.state.employees;
              const UserInput = event.target.value;
              const filteredEmployees=employees.filter(employee=> employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase())
              )
              this.setState({
                  ///Change the state of the filteredEmployees////
                filteredEmployees,
              });
          };
          /////API is called when the page is refreshed////
          employeeSearch=() => {
              API.getUsers()
              .then(response => this.setState({

            ///Going to use props to keep the employee will remain the same but the filteresd Employee will change based ont he input from the user///
            filteredEmployees:response.data.results,
            employees: response.data.results

              }))
              .catch(err => console.log(err));
          }
          ////When the button is clicked the state from fitetred employee will change///
          handleSearch = event => {
              event.preventDefault();
              if(!this.state.search) {
                  alert("Enter a name")
              }
              const {employees, search} =this.state;
              ///Object is filtered through what the user puts in///
              const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().includes(search.toLowerCase()));

              this.setState({
                  filteredEmployees
              });

          }
          render() {
              return (
                  <div>
                      <SearchBox
                      employee={this.state.employees}
                      handleSearch ={this.handleSearch}
                      handleInputChange={this.handleInputChange} />
                      <DataTable results= {this.state.filteredEmployees}
                      sortByName={this.sortByName}
                      />
                  </div>
              )
          }
    }


    export default DataArea