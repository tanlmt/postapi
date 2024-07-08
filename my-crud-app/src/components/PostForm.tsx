import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';

type PostFormProps = {
  onSubmit: (data: any) => void;
  defaultValues?: any;
};

const PostForm: React.FC<PostFormProps> = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit } = useForm({
    defaultValues,
  });

  return (
    <div style={{ width: '100vw' }}>
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextField
        label="Title"
        {...register('title')}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Body"
        {...register('body')}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
</div>
  );
};

export default PostForm;
