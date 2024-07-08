import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getPost, updatePost } from '../api/postApi';
import PostForm from '../components/PostForm';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UpdatePost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(['post', id], () => getPost(Number(id)));

  const mutation = useMutation((data: any) => updatePost(Number(id), data), {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
      navigate('/');
    },
  });

  const onSubmit = (data: any) => {
    mutation.mutate(data);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    
    <div style={{ width: '100vw' }}>
    <Container>
      <h2>Update Post</h2>
      <PostForm onSubmit={onSubmit} defaultValues={data} />
    </Container>
    </div>
    
  );
};

export default UpdatePost;
