import React from 'react';
import PostList from '../components/PostList';
import { Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/create')}
      >
        Create Post
      </Button>
      <PostList />
    </Container>
  );
};

export default Home;
