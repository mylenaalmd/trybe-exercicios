import { Component } from 'react';
import './App.css';
import Formulario from './Formulario';
import FormularioError from './FormularioError';
import FormDataDisplay from './FormDataDisplay';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  submitted: false,
}

class App extends Component{
  constructor(props){
    super(props);
    
    this.state = INITIAL_STATE;

    this.changeHandler = this.changeHandler.bing(this);
  }

  changeHandler ({ target }){
    let {name, value} = target;

    if(name === 'name') value = value.toUpperCase();
    if(name === 'address') value = this.validateAddress(value);

    this.updateState(name, value);
  }

  changeOnBlur ({target}){
    let {name, value} = target;

    if(name === 'city') value = value.match(/^\d/) ? '' : value;

    this.updateState(name, value);
  }

  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
      formularioError: {
        ...state.formularioError,
        [name]: this.validateField(name, value)
      }
    }));
  }

  validateAddress = address => address.replace(/[^\w\s]/gi, '')

  handleSubmit(event) {
    event.preventDefault()
  }

  validateField(fieldName, value){
    switch(fieldName) {
      case 'email':
        const isValid = value.macth(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)
        return isValid ? '' : 'is invalid';
        default:
        break;
    }
    return '';
  }

  resetFormulario (){
    this.setState(INITIAL_STATE)
  };

  sendFormulario(){
    this.setState({ submitted: true})
  };

  render(){
      const {submitted} = this.state;

      return (
        <main>
          <Formulario 
          sendFormulario={this.sendFormulario}
          resetFormulario={this.resetFormulario}
          changeHandler={this.changeHandler}
          currentState={this.state}
          changeOnBlur={this.changeOnBlur}
          />
          <div className="container">
            <FormularioError formularioError={this.state.formularioError} />
          </div>
          {submitted && <FormDataDisplay currentState={this.state} />}
        </main>
    );
  }
}

export default App;
