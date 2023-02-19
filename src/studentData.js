import React from "react";
import b1 from "./b1.jpg";
import b2 from "./b2.png";
import b3 from "./b3.jpg";
import b4 from "./b4.jpg";
import b5 from "./b5.jpg";
import b6 from "./b6.jpg";
import b7 from "./b7.jpg";
import styles from "./result.module.css";

const StudentData = (props) => {
  const food = [
    {
      rank: 1,

      image: b1,
      userName: "Ikenna Duru",
      description: "An enterprising young man who loves to code",
      score: "91",
    },
    {
      rank: 2,

      image: b2,
      userName: "john doe",
      description: "Good coder and bad developer",
      score: "88",
    },
    {
      rank: 3,

      image: b3,
      userName: "luke samuel",
      description: " reflective lifestyle and extravagant",
      score: "85",
    },
    {
      rank: 4,

      image: b4,
      userName: "profit samuel",
      description: "Definitive and firm. Always angry",
      score: "82",
    },
    {
      rank: 5,

      image: b5,
      userName: "Uka Charles",
      description: "Problem solver,cold hearted.Front end guy",
      score: "81",
    },
    {
      rank: 6,

      image: b6,
      userName: "paul ike",
      description: "Love coding and developing.Insightful writer",
      score: "78",
    },
    {
      rank: 7,

      image: b7,
      userName: "Aka Chukwu",
      description: "Everything i touch turns to gold",
      score: "12",
    },
  ];

  return (
    <div>
      <div className={styles.container}>
        <h3>Rank</h3>
        <h3>Image</h3>
        <h3>Name</h3>
        <h3>Description</h3>
        <h3>Score</h3>
      </div>

      {food.map((food, index) => (
        <div className={styles.containers}>
          <p>{food.rank}</p>

          <img src={food.image} className={styles.img} />

          <p className={styles.student_name}>{food.userName}</p>
          <p className={styles.aboutme}>{food.description}</p>
          <p className={styles.overall_score}>{food.score}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentData;
