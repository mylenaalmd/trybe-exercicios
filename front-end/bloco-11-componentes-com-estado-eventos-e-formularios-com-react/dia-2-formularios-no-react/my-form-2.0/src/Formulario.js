import React from 'react';
import InfosPessoais from './InfosPessoais';
import InfosProfissionais from './InfosProfissionais';

class Formulario extends Component {
  render(){
    const {sendForm, resetForm, changeHandler, currentState, changeOnBlur} = this.props;

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
      onClick={ sendForm }
      value="Enviar"
      />
      <input 
      type="reset"
      onClick={ resetForm }
      value="Limpar"
      />
    </form>
    );
  }
}

export default Formulario