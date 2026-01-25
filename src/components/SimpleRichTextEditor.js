"use client";
import React, { useRef, useState } from 'react';
import { BoldIcon, ItalicIcon, LinkIcon, CodeIcon, TerminalIcon } from './Icons';

export default function SimpleRichTextEditor({ value, onChange, placeholder, minHeight = '100px' }) {
    // For this simple MVP, we will stick to a textarea but with helper buttons that insert markdown.
    // Making a full contentEditable w/ robust HTML is surprisingly hard to get right quickly without libraries.
    // We will render standard Markdown-like syntax or HTML.
    // Actually, user asked for "rich text", let's try a very simple contentEditable.
    
    // DECISION: contentEditable is risky for bugs.
    // Let's use a Textarea that supports new lines (requested) and has buttons that wrap text.
    // We will then render this with a simple parser in the PostCard.
    
    const textareaRef = useRef(null);

    const insertFormat = (startTag, endTag) => {
        const textarea = textareaRef.current;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = textarea.value;
        const before = text.substring(0, start);
        const selection = text.substring(start, end);
        const after = text.substring(end);

        const newText = before + startTag + selection + endTag + after;
        onChange(newText);
        
        // Restore selection
        setTimeout(() => {
            textarea.focus();
            textarea.setSelectionRange(start + startTag.length, end + startTag.length);
        }, 0);
    };

    return (
        <div style={{border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', background: 'var(--card)'}}>
            <div style={{
                display: 'flex', 
                gap: '8px', 
                padding: '8px 12px', 
                background: 'rgba(255,255,255,0.02)',
                borderBottom: '1px solid var(--border)'
            }}>
                <button onClick={() => insertFormat('**', '**')} title="Bold" style={btnStyle}><BoldIcon size={16} /></button>
                <button onClick={() => insertFormat('*', '*')} title="Italic" style={btnStyle}><ItalicIcon size={16} /></button>
                <button onClick={() => insertFormat('`', '`')} title="Inline Code" style={btnStyle}><CodeIcon size={16} /></button>
                <button onClick={() => insertFormat('\n```\n', '\n```\n')} title="Code Block" style={btnStyle}><TerminalIcon size={16} /></button>
            </div>
            <textarea
                ref={textareaRef}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                style={{
                    width: '100%',
                    minHeight: minHeight,
                    padding: '12px',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--foreground)',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    lineHeight: '1.6',
                    outline: 'none'
                }}
            />
        </div>
    );
}

const btnStyle = {
    background: 'transparent',
    border: 'none',
    color: 'var(--secondary)',
    cursor: 'pointer',
    padding: '4px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};
