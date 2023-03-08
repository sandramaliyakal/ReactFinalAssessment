import { useState, useEffect } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function PostComments() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));

    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => setComments(data));
  }, []);

  const getCommentsByPostId = (postId) => {
    return comments.filter(comment => comment.postId === postId);
  }

  return (
    <Box sx={{ width: '100%' }}>
      {posts.map(post => (
        <Accordion key={post.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`post-${post.id}-content`} id={`post-${post.id}-header`}>
            <Typography variant="h5">{post.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">{post.body}</Typography>
          </AccordionDetails>
          <AccordionDetails>
            {getCommentsByPostId(post.id).map(comment => (
              <Box key={comment.id} sx={{ display: 'flex', flexDirection: 'column', marginTop: '8px' }}>
                <Typography variant="subtitle1">{comment.name}</Typography>
                <Typography variant="body2">{comment.body}</Typography>
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default PostComments;