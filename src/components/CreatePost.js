"use client";
import React, { useState } from 'react';
import { SendIcon } from './Icons';
import SimpleRichTextEditor from './SimpleRichTextEditor';

export default function CreatePost({ onPost }) {
    const [content, setContent] = useState('');

    const handleSubmit = () => {
        if (!content.trim()) return;
        onPost(content);
        setContent('');
    };

    return (
        <div style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: '16px',
            marginBottom: '24px'
        }}>
            <div style={{display:'flex', justifyContent:'space-between', marginBottom:'12px'}}>
                <span style={{fontWeight:'600'}}>Create Post</span>
            </div>
            
            <SimpleRichTextEditor 
                value={content} 
                onChange={setContent} 
                placeholder="What's on your mind? Use **bold** or *italic*..."
                minHeight="120px"
            />
            
            <div style={{display:'flex', justifyContent:'flex-end', marginTop:'16px'}}>
                <button 
                    onClick={handleSubmit}
                    style={{
                        background: 'var(--primary)',
                        color: 'white',
                        border: 'none',
                        padding: '8px 24px',
                        borderRadius: '8px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        gap: '8px',
                        alignItems: 'center'
                    }}
                >
                    Post <SendIcon size={16} />
                </button>
            </div>
        </div>
    );
}
