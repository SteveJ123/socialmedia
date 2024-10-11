import React, { useEffect, useState } from 'react';
import { db, auth } from './firebase'; // Firebase config
import { collection, query, where, getDocs } from 'firebase/firestore';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, 'posts'), where('userId', '==', auth.currentUser.uid));
        const querySnapshot = await getDocs(q);
        const postsData = [];
        querySnapshot.forEach((doc) => {
          postsData.push({ id: doc.id, ...doc.data() });
        });
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <p>{post.text}</p>
          {post.imageUrl && <img src={post.imageUrl} alt="Post" />}
          <p>Posted on: {post.createdAt.toDate().toString()}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
