import AddPostForm from "./components/PostForm/AddPostForm";
import PostListing from "./components/PostListing";

function App() {
  return (
    <div className="w-[320px] m-auto max-[320px]:w-full mb-20 px-2">
      <AddPostForm />
      <PostListing />
    </div>
  );
}

export default App;
