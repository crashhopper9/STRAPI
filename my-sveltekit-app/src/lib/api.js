const API_URL = 'http://localhost:1337/api';

export async function fetchPosts() {
  console.log('Fetching posts...'); // Verifique se a função está sendo chamada
  try {
    const response = await fetch(`${API_URL}/posts`);
    console.log('test')
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    console.log('Fetched posts:', data); // Verifique os dados retornados
    return data;
  } catch (error) {
    console.error('Error in fetchPosts:', error);
    throw error;
  }
}

export async function fetchPost(id) {
  console.log('Fetching post:', id); // Verifique se a função está sendo chamada
  try {
    const response = await fetch(`${API_URL}/posts/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    const data = await response.json();
    console.log('Fetched post:', data); // Verifique os dados retornados
    return data;
  } catch (error) {
    console.error('Error in fetchPost:', error);
    throw error;
  }
}
