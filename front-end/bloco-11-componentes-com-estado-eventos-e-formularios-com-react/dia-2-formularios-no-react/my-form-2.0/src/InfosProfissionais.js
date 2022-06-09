import React from "react";

class InfosProfissionais extends React.Component{
  render(){
    const {changeHandler} = this.props;
    return(
      <fieldset>
        <legend>Dados Profissionais:</legend>
        <div className="container">
          Resumo do curriculo:
          <textarea 
          name="resume"
          maxlength="1000" 
          required
          onChange={changeHandler}
          />
        </div>
        <div className="container">
          Cargo:
        <input
        type="text"
        maxLength="40" 
        name="role"
        required
        onChange={changeHandler}
        onMouseEnter={() => {
          alert('Preencha com cuidado esta informação.')
        }}
        />
        </div>
        < div className="container">
          Descrição do Cargo:
        <textarea
        onChange={ changeHandler }
        name="roleDescription" 
        maxLength="500" 
        />
        </div>
      </fieldset>
    )
  }
}

export default InfosProfissionais