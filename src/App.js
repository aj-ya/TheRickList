import "./App.css";
import "./globals.css";
import { ApolloProvider } from "@apollo/client";
import React from "react";
import { client } from "./ApolloClient/client";
//import "antd/dist/antd.css";
import RickWrapper from "./RickList";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
function App() {
  let [pageNum, setPageNum] = React.useState(1);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  // let { pagenum } = useParams();
  // console.log(pagenum);
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1 className="header">The Rick List</h1>
        <RickWrapper pageNum={pageNum} />
        <div className="footer">
          <Button
            shape="circle"
            size="large"
            icon={<LeftOutlined />}
            onClick={() => {
              if (pageNum !== 1) setPageNum(pageNum - 1);
              scrollToTop();
            }}
          />
          &nbsp;&nbsp;A database of Ricks across universes.&nbsp;&nbsp;
          <Button
            shape="circle"
            size="large"
            icon={<RightOutlined />}
            onClick={() => {
              if (pageNum !== 6) setPageNum(pageNum + 1);
              scrollToTop();
            }}
          />
        </div>
        {/* <div className="footerTag">A database of Ricks across universes.</div> */}
      </div>
    </ApolloProvider>
  );
}

export default App;
