export function recentBlogPosts(posts, {
    sortByDate = true,
    limit = undefined,
  } = {}) {
  
  // sortByDate
  posts.sort((a, b) => new Date(b.frontmatter.pubDate) - new Date(a.frontmatter.pubDate))

  // limit if number is passed
  if (typeof limit === "number") {
    return posts.slice(0, limit);
  }
  
  return posts;
  }