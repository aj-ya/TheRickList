import React from "react";
import { useQuery, gql } from "@apollo/client";
import styles from "./RickList.module.css";
import loadingPNG from "./assets/loading.png";
import fourNotfourPNG from "./assets/404.gif";
function GetRicks(props) {
  const allRicks = gql`
  query {
    characters(page: ${props.pageNum},filter: { name: "Rick" }) {
      info {
        count
      }
      results {
        image
        name
        status
      }
    }
  }
`;
  console.log(props.pageNum);
  const { data, loading, error } = useQuery(allRicks);
  if (loading) {
    return (
      <div>
        <img src={loadingPNG} alt="loading" className={styles.loading}></img>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.fourNotfour}>
        <div>Portal Gun Broke?</div>
        <img src={fourNotfourPNG} alt="Error"></img>
      </div>
    );
  }
  console.log(data);
  return data.characters.results.map(({ image, name, status }) => (
    <div key={name} className={styles.RickCard}>
      <div className={styles.nameStyle}>{name}</div>
      <img className={styles.imageStyle} src={image} alt={name + " img"} />
      <div className={status + " " + styles.status}>{status}</div>
    </div>
  ));
}
function RickWrapper(props) {
  return (
    <div className={styles.CardContainer}>
      <GetRicks pageNum={props.pageNum} />
    </div>
  );
}
export default RickWrapper;
