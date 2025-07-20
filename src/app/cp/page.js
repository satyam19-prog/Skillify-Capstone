'use client';
import React, { useState, useEffect } from 'react';
import './Cp.css';

const TOPICS = [
  { label: 'Greedy', tag: 'greedy' },
  { label: 'Dynamic Programming', tag: 'dp' },
  { label: 'Graphs', tag: 'graphs' },
  { label: 'Binary Search', tag: 'binary search' },
  { label: 'Bitmasks', tag: 'bitmasks' },
  { label: 'Math', tag: 'math' },
  { label: 'Number Theory', tag: 'number theory' },
  { label: 'Combinatorics', tag: 'combinatorics' },
  { label: 'Constructive Algorithms', tag: 'constructive algorithms' },
  { label: 'Data Structures', tag: 'data structures' },
  { label: 'Two Pointers', tag: 'two pointers' },
  { label: 'Divide and Conquer', tag: 'divide and conquer' },
  { label: 'DSU', tag: 'dsu' },
  { label: 'Geometry', tag: 'geometry' },
  { label: 'Shortest Paths', tag: 'shortest paths' },
  { label: 'Trees', tag: 'trees' },
  { label: 'Strings', tag: 'strings' },
  { label: 'Hashing', tag: 'hashing' },
  { label: 'Game Theory', tag: 'games' },
  { label: 'Recursion', tag: 'recursion' },
  { label: 'Segment Tree', tag: 'segment tree' },
  { label: 'Implementation', tag: 'implementation' },
  { label: 'Brute Force', tag: 'brute force' },
  { label: 'Interactive', tag: 'interactive' },
  { label: 'Flows', tag: 'flows' },
  { label: 'Meet in the Middle', tag: 'meet-in-the-middle' },
  { label: '2-SAT', tag: '2-sat' },
  { label: 'Matrices', tag: 'matrices' },
];

const RATINGS = [0, 800, 1000, 1200, 1400, 1600, 1800, 2000];

export default function Competitive() {
  const [topic, setTopic] = useState(TOPICS[0].tag);
  const [rating, setRating] = useState(0);
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProblems = (tag, rating) => {
    setLoading(true);
    fetch(`https://codeforces.com/api/problemset.problems?tags=${tag}`)
      .then(res => res.json())
      .then(data => {
        if (data.status === 'OK') {
          const filtered = data.result.problems
            .filter(p => rating === 0 || (p.rating && p.rating === rating))
            .sort(() => Math.random() - 0.5)
            .slice(0, 12);
          setProblems(filtered);
          setError(null);
        } else {
          setError('Failed to fetch problems');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Network error');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProblems(topic, rating);
  }, [topic, rating]);

  return (
    <div className="cp-container">
      <h1 className="cp-title">Competitive Programming Problems</h1>
      <div className="dropdown-wrapper">
        <select value={topic} onChange={e => setTopic(e.target.value)}>
          {TOPICS.map(t => (
            <option key={t.tag} value={t.tag}>{t.label}</option>
          ))}
        </select>

        <select value={rating} onChange={e => setRating(parseInt(e.target.value))}>
          {RATINGS.map(r => (
            <option key={r} value={r}>{r === 0 ? 'All Ratings' : `${r}`}</option>
          ))}
        </select>
      </div>

      {loading && <p className="centered">Loading problems...</p>}
      {error && <p className="centered error">{error}</p>}

      <div className="problem-list">
        {!loading && !error && problems.map((p, idx) => (
          <a
            key={idx}
            className="problem-card"
            href={`https://codeforces.com/problemset/problem/${p.contestId}/${p.index}`}
            target="_blank" rel="noopener noreferrer"
          >
            <h3>{p.name}</h3>
            <p className="meta">
              {p.rating ? `⭐ ${p.rating}` : '⭐ unrated'}
              · tags: {p.tags.join(', ')}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}