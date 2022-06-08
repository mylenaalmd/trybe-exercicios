import React from 'react';
import InfosPessoais from './InfosPessoais';
import InfosProfissionais from './InfosProfissionais';

class Formulario extends Component {
  render(){
    const {sendFormulario, resetFormulario, changeHandler, currentState, changeOnBlur} = this.props;

    return (
    <form>
      <InfosPessoais 
      changeHandler={changeHandler}
      changeOnBlur={ changeOnBlur}
      currentState={currentState}
      />
      <InfosProfissionais changeHandler={ changeHandler }/>
      <input 
      type="button"
      onClick={ sendFormulario }
      value="Enviar"
      />
      <input 
      type="reset"
      onClick={ resetFormulario }
      value="Limpar"
      />
    </form>
    );
  }
}

export default Formulario