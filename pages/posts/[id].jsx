import BlogEntry from "../../components/BlogEntry";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData, getSortedPostsData } from "../../lib";
import AboutMe from "../../components/AboutMe";
import RecentPosts from "../../components/RecentPosts";

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostData(params.id);
  const posts = getSortedPostsData();
  return {
    props: {
      post,
      posts,
    },
  };
}

export default function Post({ post, posts }) {
  const { id, title, publishedOn, content } = post;
  return (
    <Layout>
      <div id="primary" className="content-area column two-thirds">
        <main id="main" className="site-main" role="main">
          <BlogEntry key={id}>
            <BlogEntry.Header id={id} publishedOn={publishedOn} title={title} />
            <BlogEntry.Content>{content}</BlogEntry.Content>
            <BlogEntry.Footer />
          </BlogEntry>
        </main>
      </div>
      <div id="secondary" className="column third">
        <div id="sidebar-1" className="widget-area" role="complementary">
          <aside id="text-5" className="widget widget_text">
            <AboutMe avatarSrc="/images/avatar5.png">
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            </AboutMe>
          </aside>
          <aside id="recent-posts-2" className="widget widget_recent_entries">
            <RecentPosts posts={posts} />
          </aside>
        </div>
      </div>
    </Layout>
  );
}
