import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import { IType, IField } from '../constant'

const Form = ({ formData, submitHandler }: { formData: IField[], submitHandler: Function }) => {
  const [formDataValues, setFormDataValues] = useState(formData || []);
  const [isError, setIsError] = useState([])

  const handleInputChange = (e) => {
    const { value, name } = e?.target;   
    
    formDataValues?.filter(value =>{
      if(value?.validation && value?.id === name){
        const regex = new RegExp(`${value?.validation}`, 'g');
        const check = regex?.test(value?.value);
        if(!check){
            isError.push(value?.id)
        }else{
          setIsError([])
        }
        
      }

    })

    setFormDataValues((prevData) =>
      prevData.map((field) => {    
        if (field.id === name) {
          return { ...field, value };
        }
        return field;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitHandler(formDataValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
      {formDataValues?.map((field) => (
        <TextField
          error={isError?.includes(field?.id)}
          label={`ID: ${field?.id}`}
          key={field?.id}
          multiline={field?.type === IType?.LONG_TEXT}
          rows={field?.type === IType?.LONG_TEXT ? 4 : 1}
          select={field?.type === IType?.DROPDOWN}
          InputProps={{
            inputProps: { 
                max: field?.max_value, min: field?.min_value 
            }
          }}
          sx={{margin: '1rem 0', minWidth: '20rem'}}
          type={field?.type === IType?.NUMBER ? 'number' : 'text'}
          name={field?.id}
          onChange={handleInputChange}
          defaultValue={field?.defaultValue}
          value={field?.value || ''}
        >
            {field?.options?.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
        </TextField>
      ))}
      </Box>
      <Button disabled={isError?.length > 0} sx={{minWidth: '20rem'}} variant="outlined" type="submit">Submit</Button>
    </form>
  );
};

export default Form;
