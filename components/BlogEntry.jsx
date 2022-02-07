import { dateFormatOptions, summarizeContent } from "../utils";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

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
      priority
    />
  </div>
);

const ContentSummary = ({ id, children }) => (
  <>
    <div className="entry-summary">
      <p>
        {summarizeContent(children)}{" "}
        <Link href={`/posts/${id}`}>
          <a className="more-link">Read more</a>
        </Link>
      </p>
    </div>
  </>
);

const Content = ({ children }) => (
  <div className="entry-content">
    <ReactMarkdown>{children}</ReactMarkdown>
  </div>
);

const Footer = () => (
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
BlogEntry.ContentSummary = ContentSummary;
BlogEntry.Footer = Footer;
BlogEntry.Thumbnail = Thumbnail;

export default BlogEntry;
