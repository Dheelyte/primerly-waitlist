"use client";
import React, { useState } from 'react';
import styles from './CreateCommunityModal.module.css';

export default function CreateCommunityModal({ onClose, onCreate }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) return;
    
    onCreate({ name, description, tags });
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <h2 className={styles.title}>Create a Community</h2>
        
        <div className={styles.formGroup}>
            <label className={styles.label}>Name</label>
            <input 
                className={styles.input} 
                placeholder="e.g. Rustacean Station" 
                value={name}
                onChange={e => setName(e.target.value)}
                autoFocus
            />
        </div>

        <div className={styles.formGroup}>
            <label className={styles.label}>Description</label>
            <textarea 
                className={`${styles.input} ${styles.textarea}`} 
                placeholder="What is this community about?" 
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
        </div>

        <div className={styles.formGroup}>
            <label className={styles.label}>Tags (comma separated)</label>
            <input 
                className={styles.input} 
                placeholder="Technology, Learning, etc" 
                value={tags}
                onChange={e => setTags(e.target.value)}
            />
        </div>

        <div className={styles.actions}>
            <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
            <button className={styles.createBtn} onClick={handleSubmit}>Create</button>
        </div>
      </div>
    </div>
  );
}
