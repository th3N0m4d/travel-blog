import { dateFormatOptions, summarizeContent } from "../utils";
import Link from "next/link";
import Image from "next/image";

const THUMBNAIL_WIDTH = 290;
const THUMBNAIL_HEIGHT = 193;

const Header = ({ id, children, publishedOn, title, comments = 0 }) => (
  <header className="entry-header">
    <h1 className="entry-title">
      <Link href={`/posts/${id}`}>{title}</Link>
    </h1>
    <div className="entry-meta">
      <span className="posted-on">
        <time className="entry-date published">
          {new Intl.DateTimeFormat("en-US", dateFormatOptions).format(
            Date.parse(publishedOn)
          )}
        </time>
      </span>
      <span className="comments-link">
        <a href="https://www.free-css.com/free-css-templates">
          {`${comments} Comments`}
        </a>
      </span>
    </div>
    {children}
  </header>
);

const Thumbnail = ({ src }) => (
  <div className="entry-thumbnail">
    <Image
      src={src}
      alt="Post Thumbnail"
      width={THUMBNAIL_WIDTH}
      height={THUMBNAIL_HEIGHT}
    />
  </div>
);

const Content = ({ children, summary }) =>
  summary ? (
    <div className="entry-summary">
      <p>
        {summarizeContent(children)}{" "}
        <a className="more-link" href="blog-single.php">
          Read more
        </a>
      </p>
    </div>
  ) : (
    <div className="entry-content">{children}</div>
  );

const Footer = ({}) => (
  <footer className="entry-footer">
    <span className="cat-links">
      Posted in <a href="https://www.free-css.com/free-css-templates">audio</a>,{" "}
      <a href="https://www.free-css.com/free-css-templates">embed</a>,{" "}
      <a href="https://www.free-css.com/free-css-templates">media</a>
    </span>
  </footer>
);

const BlogEntry = ({ children }) => {
  return <article>{children}</article>;
};

BlogEntry.Header = Header;
BlogEntry.Content = Content;
BlogEntry.Footer = Footer;
BlogEntry.Thumbnail = Thumbnail;

export default BlogEntry;
