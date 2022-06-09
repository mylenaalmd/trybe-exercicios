import React from "react";

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

class InfosPessoais extends React.Component{
  render(){
    const {changeHandler, changeOnBlur, currentState} = this.props;
    return(
      <fieldset>
        <legend>Dados Pessoais</legend>
          <div className="container">
            Nome:
        <input 
        name="name" 
        type="name" 
        maxLength="40" 
        required 
        onChange={changeHandler}
        />
        </div>
        <div className="container">
          Email:
        <input 
        type="email" 
        name="email"
        maxLength="50" 
        required
        onChange={changeHandler}
        />
        </div>
        <div className="container">
          CPF:
        <input 
        type="text" 
        name="cpf"
        maxLength="11" 
        required
        onChange={changeHandler}
        />
        </div>
        <div className="container">
          Endereço:
          <input 
          type="text" 
          maxLength="200" 
          name= "address" 
          required
          onChange={changeHandler}
        />
        </div>
        <div className="container">
          Cidade:
          <input
            type="text" 
            maxLength="28" 
            name="city"
            onBlur={changeOnBlur} 
            value={currentState.city}
            required
            onChange={changeHandler}
        />
        </div>
        <div className="container">
          Estado:
          <select
          name="countryState"
          required
          onChange={changeHandler}
          defaultValue=""
        >
          <option value="">Selecione</option>
          {
            states.map((value, key) => (
              <option key={ key }>{value}</option>
            ))
          }
          </select>
        </div>
        <div className="container">
        <label htmlFor="house">
          <input
          type="radio" 
          id="house" 
          name="addressType" 
          value="house"
          onChange={changeHandler}
          />
          Casa:
        </label>
        <label htmlFor="apart">
          <input
          type="radio" 
          id="apart" 
          name="addressType" 
          value="apartment"
          onChange={changeHandler}
          />
          Apartamento:
        </label>
        </div>
      </fieldset>
    );
  }
}

export default InfosPessoais