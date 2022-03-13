import "./App.css";
import "./globals.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./ApolloClient/client";
import RickWrapper from "./RickList";
import { useParams } from "react-router";
function App() {
  let { pagenum } = useParams();
  if (pagenum === undefined || pagenum < 0) pagenum = 1;
  console.log(pagenum);
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <a href="/">
          <h1 className="header">The Rick List</h1>
        </a>
        <RickWrapper pageNum={pagenum} />
        <div className="footer">
          <div className="navigate">
            <a title="previous page" href={`/${parseInt(pagenum) - 1}`}>
              &nbsp;&#60;&#60;&nbsp;
            </a>
            &nbsp;&nbsp;A database of Ricks across universes.&nbsp;&nbsp;
            <a title="next page" href={`/${parseInt(pagenum) + 1}`}>
              &nbsp;&#62;&#62;&nbsp;
            </a>
          </div>
          <a />
          {/* <div className="footerTag">A database of Ricks across universes.</div> */}
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
