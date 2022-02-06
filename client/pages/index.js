import Layout from "../components/layout";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import BlogEntry from "../components/BlogEntry";

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Welcome to Travel Blog!</title>
      </Head>
      <Layout>
        <div id="primary" className="content-area column two-thirds">
          <main id="main" className="site-main" role="main">
            <div className="grid bloggrid">
              {posts.map(({ id, title, publishedOn, thumbnail }) => (
                <BlogEntry key={id}>
                  <BlogEntry.Header
                    id={id}
                    publishedOn={publishedOn}
                    title={title}
                  >
                    {thumbnail && <BlogEntry.Thumbnail src={thumbnail} />}
                  </BlogEntry.Header>
                  <BlogEntry.Content summary>
                    {`When Mary Lennox was sent to Manor to live with her uncle everybody said she was the most disagreeablelooking child ever seen. It was true, too. She had a little thin face and a little thin body, thin light hair and a sour expression. Her hair was yellow, and her face was yellow because she`}
                  </BlogEntry.Content>
                  <BlogEntry.Footer />
                </BlogEntry>
              ))}
            </div>
            <div className="clearfix"></div>
            <nav className="pagination"></nav>
          </main>
        </div>
        <div id="secondary" className="column third">
          <div id="sidebar-1" className="widget-area" role="complementary">
            <aside id="text-5" className="widget widget_text">
              <h4 className="widget-title">About Me</h4>
              <div className="textwidget">
                <p>
                  <img
                    src="/images/avatar5.png"
                    alt="website template image"
                    className="alignleft"
                    style={{
                      width: "80px",
                      borderRadius: "50%",
                      marginBottom: 0,
                    }}
                  />{" "}
                  I'm a professional photographer for 10 years. It is a long
                  established fact that a reader will be distracted by the
                  readable content of a page when looking at its layout.
                </p>
              </div>
            </aside>
            <aside id="recent-posts-2" className="widget widget_recent_entries">
              <h4 className="widget-title">Recent Posts</h4>
              <ul>
                <li>
                  <a href="blog-single.php">Somewhere in time</a>
                </li>
                <li>
                  <a href="blog-single.php">Thanks for watching!</a>
                </li>
                <li>
                  <a href="blog-single.php">Who could have thought?</a>
                </li>
                <li>
                  <a href="blog-single.php">Text Alignement</a>
                </li>
                <li>
                  <a href="blog-single.php">HTML Tags and Formatting</a>
                </li>
              </ul>
            </aside>
            {/* <aside id="text-6" className="widget widget_text">
            <h4 className="widget-title">Like us on Facebook</h4>
            <div className="textwidget">
              <img
                src="../assets/images/like-us.png"
                alt="website template image"
              />
            </div>
          </aside>
          <aside
            id="recent-comments-2"
            className="widget widget_recent_comments"
          >
            <h4 className="widget-title">Recent Comments</h4>
            <ul id="recentcomments">
              <li className="recentcomments">
                <span>ThemePush</span> on{" "}
                <a href="blog-single.php">Male T-Shirt</a>
              </li>
              <li className="recentcomments">
                <span>ThemePush</span> on{" "}
                <a href="blog-single.php">Male T-Shirt</a>
              </li>
              <li className="recentcomments">
                <span>
                  <a
                    href="https://www.free-css.com/free-css-templates"
                    className="url"
                  >
                    Mr WordPress
                  </a>
                </span>{" "}
                on <a href="blog-single.php">Thanks for watching!</a>
              </li>
              <li className="recentcomments">
                <span>Maria</span> on <a href="blog-single.php">Gray Blouse</a>
              </li>
              <li className="recentcomments">
                <span>Maria</span> on <a href="blog-single.php">Retro Dress</a>
              </li>
            </ul>
          </aside> */}
          </div>
        </div>
      </Layout>
    </>
  );
}
