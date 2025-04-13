import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import SearchForm from "../components/Searchform";

export default function Home() {
  return (
    <>
      <SearchForm />
      <Hero />
      <Introduction />
    </>
  );
}
