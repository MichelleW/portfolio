import React, { Component } from 'react';


class TeslaForm extends React.Component {        
        
  handleSubmit = () => {
    console.log('Value for account number:', this.accountValue.value);
    console.log('Value for cvv number:', this.cvvValue.value);
  }
  

  render () {
    return (
      <div className="row">
        <div className="col s6">
          <form onSubmit={this.handleSubmit}>
            <fieldset>
                <legend>Account Details</legend>
                <div className="row">
                  <div className="input-field col s6">
                  <input className="input-field"
                    ref={(accountValue) => this.accountValue = accountValue}/>
                    <input className="input-field"
                    ref={(cvvValue) => this.cvvValue = cvvValue} 
                  />
                  <button type="submit" className="btn">Submit</button>
                </div>
                </div>
              </fieldset>
          </form>
        </div>
        </div>
    )
  }
}

export default TeslaForm;