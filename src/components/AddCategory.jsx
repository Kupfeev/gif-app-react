import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length < 1) {return};
        onNewCategory(inputValue.trim());
        setInputValue('');
    };

    const onChange = (event) => setInputValue(event.target.value);
    
    return (
        <form onSubmit={onSubmit}>
            <input 
                type='text'
                placeholder='Agrega una categoría'
                value={inputValue}
                onChange={onChange}
            />
        </form>
    )
}
