import React, { Component } from "react";

class FormularioError extends Component{
  render(){
    const { formularioError } = this.props
    return(
      <div>
        {
          Object.keys(formularioError).filter((fieldName) => (
            formularioError[fieldName].length > 0
          )).map((fieldName, i) => (
            <p key={i}>
              {fieldName}
              {formularioError[fieldName]}
            </p>
          ))
        }
      </div>
    );
  }
}
export default FormularioError