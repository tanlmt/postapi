import React from 'react';
import PostForm from '../components/PostForm';
import { useMutation, useQueryClient } from 'react-query';
import { createPost } from '../api/postApi';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
      navigate('/');
    },
  });

  const onSubmit = (data: any) => {
    mutation.mutate(data);
  };

  return (
    
    <div style={{ width: '100vw' }}>
    <Container>
      <h2>Create Post</h2>
      <PostForm onSubmit={onSubmit} />
    </Container>
    </div>
    
  );
};

export default CreatePost;
