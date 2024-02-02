export async function generateMetadata({ params }) {
  if (!params.id) {
    params.id = ["earth"];
    console.log(params);
  }

  const name = params.id[0];
  const title = name.charAt(0).toUpperCase() + name.slice(1);
  const description = "Blog about " + title;

  return {
    title: title,
    description: description,
  };
}

export default function ClientLayout({ children }) {
  return children;
}
