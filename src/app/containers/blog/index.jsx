import FeaturedBlog from "@/src/app/components/featured-blog";
import Header from "@/src/app/components/header";

import { getCelestialBodies } from "@/src/app/services/celestial-bodies";

export default async function BlogContainer({ blog }) {
  if (!blog) {
    blog = ["earth"];
  }
  const celestialBodies = await getCelestialBodies();

  return (
    <div>
      <Header blog={blog} celestialBodies={celestialBodies} />
      <FeaturedBlog blog={blog} />
    </div>
  );
}
