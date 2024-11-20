  <script>
    export let data;
    let posts = data.posts.data;
  
    $: console.log('data:', data.posts.data);
  </script>
  
  <h1>Posts</h1>
    <ul>
      {#each posts as post}
        <li>
          <a href={`/posts/${post.id}`}>{post.attributes.Title}</a>
        </li>
      {/each}
    </ul>

  