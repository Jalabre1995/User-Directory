import React from 'react';
import "../SearchBox/SearchBox.css";


function SearchBox (props) {
    return (
      ///Create a div class fro the searchBox/////
      <div className="searchBox">
          <header className ="SearchHeader">
              <div className="row">
                  {/*<header className=" > */}
                  <div className= "col-md-s6">
                      <h1 id= "title">Employee Directory</h1>
                      <h3 className= 'right-align headerText'>Search</h3>

                  </div>
                  <div className= 'col-md-s6'>
                      <div className= "col s6 inputAndButton right-align">
                          <input 
                          onChange={props.handleInputChange}
                          value = {props.value}
                          id= "emplpoyees"
                          type="text"
                          name="search"
                          list = "employee"
                          className= 'inputBox'
                          placeholde= 'Search by employee name'/>

                      </div>
                      <div className= 'col-md-4'>
                          <button 
                          type= 'submit'
                          vlaue = ""
                          className= 'searchBttn'
                          onClick={props.handleSearch} >Search</button> 
                      </div>
                  </div>
              </div>
          </header>
      </div>
    );
}

export default SearchBox;