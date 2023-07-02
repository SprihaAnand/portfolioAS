import React from "react";
import "./List.css";

const candidatesData = [
  {
    image:
      "https://st2.depositphotos.com/1441511/9157/i/450/depositphotos_91576128-stock-photo-business-woman-holding-a-tablet.jpg",
    name: "Candidate 1",
    location: "City A",
    jobRole: "Role A",
    rank: 3,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHXHYgFcmNVH1wYlepRy8QbXc-76lyo-o5SbvYDzC&s",
    name: "Candidate 2",
    location: "City B",
    jobRole: "Role B",
    rank: 1,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo2Zpq_aAjMRXzvUWjvIbTfQ8D28VIW_q9ekagwx1dJjNxM2fRM3Yrb3oUm24fWSNu4YM&usqp=CAU",
    name: "Candidate 3",
    location: "City C",
    jobRole: "Role C",
    rank: 5,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlFSZvFhwW2Rp9mBy0fvgvfqnv0Qv5x_DfxiL7afPl&s",
    name: "Candidate 4",
    location: "City D",
    jobRole: "Role D",
    rank: 2,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbjd3Z4Ipg0Azp9PiDnE_IvPOTb0ymR5tbqGXaCzT&s",
    name: "Candidate 5",
    location: "City E",
    jobRole: "Role E",
    rank: 4,
  },
];

function List() {
  const sortedCandidates = candidatesData.sort((a, b) => a.rank - b.rank);

  return (
    <div className="list-container">
      <h2>Candidate List</h2>
      <ul className="candidates-list">
        {sortedCandidates.map((candidate, index) => (
          <li key={index}>
            <div className="candidate-info">
              <img
                className="candidate-image"
                src={candidate.image}
                alt={candidate.name}
              />
              <div className="candidate-details">
                <h3>{candidate.name}</h3>
                <p>{candidate.location}</p>
                <p>{candidate.jobRole}</p>
              </div>
            </div>
            <div className="rank-badge">{candidate.rank}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
