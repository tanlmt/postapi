import React from 'react';
import { useQuery } from 'react-query';
import { getPosts } from '../api/postApi';
import PostItem from './PostItem';
import { List, ListItem } from '@mui/material';

const PostList = () => {
  const { data, error, isLoading } = useQuery('posts', getPosts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  return (
   
    <div style={{ width: '100vw' }}>
    <List>
      {data.map((post: any) => (
        <ListItem key={post.id}>
          <PostItem post={post} />
        </ListItem>
      ))}
    </List>
    </div>
    
  );
};

export default PostList;
