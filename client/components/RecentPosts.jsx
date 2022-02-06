import Link from "next/link";

const RecentPosts = ({ posts }) => (
  <>
    <h4 className="widget-title">Recent Posts</h4>
    <ul>
      {posts.map(({ id, title }) => (
        <li key={id}>
          <Link href={`/posts/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  </>
);

export default RecentPosts;
