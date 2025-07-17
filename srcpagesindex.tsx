import React from 'react';
import Button from '../components/Button';

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🎬 Faith-Based AI Video Studio</h1>
      <p>
        Create stunning Bible-inspired storyboards, motion videos, and
        AI-powered scenes—all in one platform.
      </p>
      <Button>Get Started</Button>
    </main>
  );
}
