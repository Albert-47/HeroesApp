import { useState } from "react";

export const useForm = ( initialState = {} ) => {
  
const [values, setValues] = useState(initialState);

const handleInput = ( { target } ) => {
    setValues({
        ...values,
        [target.name]: target.value
    });
}

    return [ values, handleInput, setValues ];
}
