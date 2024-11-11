import { styled, Box, Typography } from '@mui/material';

const Container = styled(Box)`
    border: 1px solid #d3cede;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 250px;  // Reduced height to make it smaller
    width: 200px;   // Added fixed width for consistency
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.03);
    }

    & > img, & > p {
        padding: 0 5px 5px 5px;
    }
`;

const Image = styled('img')({
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    height: 120,  // Reduced height of the image
});

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
    margin: 5px 0;
`;

const Heading = styled(Typography)`
    font-size: 16px;  // Slightly smaller font size for title
    font-weight: 600;
    margin: 5px 0;
`;

const Details = styled(Typography)`
    font-size: 12px;  // Reduced font size for description
    word-break: break-word;
    padding: 5px;
    text-align: center;
`;

const Post = ({ post }) => {
    const url = post.picture 
        ? post.picture.replace("https://localhost", "http://localhost")
        : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
    
    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    }; 

    return (
        <Container>
            <Image src={url} alt="post" />
            <Text>{post.categories}</Text>
            <Heading>{addEllipsis(post.title, 15)}</Heading>
            <Text>Author: {post.username}</Text>
            <Details>{addEllipsis(post.description, 50)}</Details>
        </Container>
    );
};

export default Post;
