import PostService from './PostService';
import MemoryStorage from './MemoryStorage';
import MockedStorage from './MockedStorage';

const mS = new MemoryStorage();

const postService1 = new PostService(new MockedStorage());
const postService2 = new PostService(mS);

postService1.setPost('post1');
postService2.setPost('post2');

postService1.getPosts();
postService2.getPosts();