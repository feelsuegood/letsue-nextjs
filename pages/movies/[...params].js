import { useRouter } from "next/router";
import Seo from "../../components/Seo";

// [...id].js -> catch-all url

// export default function Detail() {
export default function Detail({ params }) {
  const router = useRouter();
  // if user access through incogmito mode, router doesn't exist
  //! don't forget to put empty array
  // in this case search engine can't find the data in the page
  //* can try getServerSideProps()
  // const [title, id] = router.query.params || [];
  const [title, id] = params || [];
  // console.log(params);
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}
//! this console on the server side (terminal)
// export function getServerSideProps(ctx) {
export function getServerSideProps({ params: { params } }) {
  // console.log(ctx);
  // console.log(params);
  return {
    props: { params },
  };
}
