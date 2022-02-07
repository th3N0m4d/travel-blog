import Layout from "../components/Layout";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import BlogEntry from "../components/BlogEntry";
import AboutMe from "../components/AboutMe";
import RecentPosts from "../components/RecentPosts";

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
                  <BlogEntry.ContentSummary>
                    Proin eget tortor risus. Nulla quis lorem ut libero
                    malesuada feugiat. Vestibulum ante ipsum primis in faucibus
                    orci luctus et ultrices posuere cubilia Curae; Donec velit
                    neque, auctor sit amet aliquam vel, ullamcorper sit amet
                    ligula. Nulla porttitor accumsan tincidunt.
                  </BlogEntry.ContentSummary>
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
              <AboutMe avatarSrc="/images/avatar5.png">
                Praesent sapien massa, convallis a pellentesque nec, egestas non
                nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
                a.
              </AboutMe>
            </aside>
            <aside id="recent-posts-2" className="widget widget_recent_entries">
              <RecentPosts posts={posts} />
            </aside>
          </div>
        </div>
      </Layout>
    </>
  );
}
