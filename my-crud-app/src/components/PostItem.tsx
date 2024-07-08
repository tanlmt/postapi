import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { deletePost } from '../api/postApi';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

const PostItem: React.FC<{ post: any }> = ({ post }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(() => deletePost(post.id), {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });

  return (
    <div style={{ width: '100vw' }}>
      
    <Card>
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="body2">{post.body}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate(`/update/${post.id}`)}>Edit</Button>
        <Button onClick={() => deleteMutation.mutate()}>Delete</Button>
      </CardActions>
    </Card>
    </div>
    
  );
};

export default PostItem;
