import BlogContainer from "@/src/app/containers/blog";

export default function BlogPage({ params }) {
  return (
    <div>
      <BlogContainer blog={params.id} />
    </div>
  );
}
