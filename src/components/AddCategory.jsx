import { useState } from 'react';

      
export const AddCategory = ({ onNewCategory }) => {
   const [ inputvalue, setInputvalue ] = useState('');
   const onInputChange = ({ target }) => {      
      setInputvalue( target.value );
   };
   const onSubmit = ( event ) => {
      event.preventDefault();      
      if( inputvalue.trim().length <= 1) return;            
      setInputvalue('');
      onNewCategory( inputvalue.trim() );      
   };
  return (
      <form onSubmit={ onSubmit }>
         <input 
         type="text"
         placeholder="Buscar Gifs"
         value={ inputvalue }
         onChange={ onInputChange }
         />
      </form>
  );
};

