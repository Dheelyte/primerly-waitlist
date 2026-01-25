"use client";
import React from 'react';
import { UsersIcon } from './Icons';
import styles from './CommunityCard.module.css';
import { useCommunity } from './CommunityContext';

export default function CommunityCard({ community }) {
  const { joinCommunity, leaveCommunity, setActiveView } = useCommunity();
  
  const handleJoin = (e) => {
      e.stopPropagation();
      joinCommunity(community.id);
  };

  const handleLeave = (e) => {
      e.stopPropagation();
      leaveCommunity(community.id);
  };

  const handleClick = () => {
      if (community.isJoined) {
          setActiveView(community.id);
      }
  };

  return (
    <div className={styles.card} onClick={handleClick} style={{cursor: community.isJoined ? 'pointer' : 'default'}}>
      <div className={styles.header}>
        <div>
            <h3 className={styles.title}>{community.name}</h3>
            <div className={styles.meta}>
                <UsersIcon size={14} /> {community.memberCount.toLocaleString()} members
            </div>
        </div>
        {community.isJoined ? (
            <button className={styles.joinedBtn} onClick={handleLeave}>Joined</button>
        ) : (
            <button className={styles.joinBtn} onClick={handleJoin}>Join</button>
        )}
      </div>

      <p className={styles.description}>{community.description}</p>

      <div className={styles.tags}>
        {community.tags.map(tag => (
            <span key={tag} className={styles.tag}>#{tag}</span>
        ))}
      </div>
    </div>
  );
}
