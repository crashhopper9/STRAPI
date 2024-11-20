import { fetchPosts } from '$lib/api'; // Usando o alias $lib
console.log('test server');
  export async function load() {
    try {
      console.log('Loading posts...'); // Verifique se a função está sendo chamada
      const posts = await fetchPosts();
      console.log('Loaded posts:', posts); // Verifique os dados retornados
      return {
        posts
      };
    } catch (error) {
      console.error('Error loading posts:', error);
      return {
        data: {
          posts: null,
          error: error.message
        }
      };
    }
  }