import { fetchPost } from '$lib/api';
  
export async function load({ params }) {
    console.log('single psot');
  const post = await fetchPost(params.id);
  return {
    post
  };
}