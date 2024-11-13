import { Fragment } from "react/jsx-runtime";

function HomePage() {
  return (
    <Fragment>
      <Header />
        <Main />
      <Footer />
    </Fragment>
  );
}

function Header() {
  return (
    <header>
      <div className="flex bg-slate-800">
        <p className="text-white text-5xl p-6">Weather.io</p>
        <textarea className="my-8 w-1/3 rounded-lg text-gray-500  indent-4 caret-white resize-none" placeholder="검색할 지역 이름을 입력하세요."></textarea>
      </div>
    </header>
  )
}

function Main() {
  return (
    <main>
      <p>Important stuff goes here..</p>
    </main>
  )
}

function Footer() {
  return (
    <footer>
      <p>Made with React - 1 Hacker Way Menlo Park, CA 94025</p>
    </footer>
  )
}

export default HomePage;