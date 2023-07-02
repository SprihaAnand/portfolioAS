import React, { useState } from "react";
import "./Search.css";

function Search() {
  const [location, setLocation] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [showList, setShowList] = useState(false);

  const handleSearch = () => {
    // Simulating fetching candidates based on location and job role
    // Replace this with your actual API call or data fetching logic
    const fetchedCandidates = [
      { name: "Candidate 1", location: "City A", jobRole: "Role A" },
      { name: "Candidate 2", location: "City B", jobRole: "Role B" },
      { name: "Candidate 3", location: "City C", jobRole: "Role C" },
    ];

    setCandidates(fetchedCandidates);
    setShowList(true);
  };

  return (
    <div className="search-container">
      <div className="search-form">
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Job Role"
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <a href="#/list">
          <button onClick={() => setShowList(false)}>See List</button>
        </a>
      </div>
      {showList && (
        <div className="candidates-section">
          <h2>Found Candidates:</h2>
          {candidates.length > 0 ? (
            <ul className="candidates-list">
              {candidates.map((candidate, index) => (
                <li key={index}>
                  <span>{candidate.name}</span>
                  <span>{candidate.location}</span>
                  <span>{candidate.jobRole}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No candidates found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
