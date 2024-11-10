import { useEffect, useState } from 'react';
import { Box ,Grid2 } from '@mui/material';
import { API } from '../../../service/api';


//components
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            let response = await API.getAllPosts();
            if (response.isSuccess) {
                setPosts(response.data);
            }
        }
        fetchData();
    },[])

    return (
        <>
            {
                posts && posts.length > 0 ? posts.map(post => (
                    <Grid2 item lg={3} sm={4} xs={12}>
                        <Post post={post}/>
                    </Grid2>
                )) : <Box style={{ color:'#878787', margin:'30px 80px'}}>No data to display</Box>
            }

        </>
        
    )
}
export default Posts;