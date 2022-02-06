import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const RecentPosts = ({ posts }) => (
  <>
    <h4 className="widget-title">Recent Posts</h4>
    <ul>
      {posts.map(({ id, title }) => (
        <li key={id}>
          <FontAwesomeIcon icon={faChevronRight} />{" "}
          <Link href={`/posts/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  </>
);

export default RecentPosts;
