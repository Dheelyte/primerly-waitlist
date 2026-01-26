"use client";
import { useState } from 'react';
import { useToast } from '@/context/ToastContext';
import { waitlist } from '@/services/api';
import { ZapIcon, CheckIcon } from "@/components/Icons";
import styles from './WaitlistForm.module.css';

export default function WaitlistForm() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const { addToast } = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !email.includes('@')) return;

        setLoading(true);
        try {
            await waitlist.join(email);
            setSubmitted(true);
            setEmail('');
        } catch (error) {
            console.error('Failed to join waitlist:', error);
            addToast(error.message || 'Failed to join waitlist', 'error');
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className={styles.successMessage}>
                <div className={styles.successIcon}>
                    <CheckIcon size={24} color="white" />
                </div>
                <h3>You're on the list!</h3>
                <p>We'll notify you when we launch.</p>
            </div>
        );
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
                <input
                    type="email"
                    className={styles.input}
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className={styles.button} disabled={loading}>
                {loading ? 'Joining...' : 'Join Waitlist'}
                {!loading && <ZapIcon size={20} fill="white" />}
            </button>
        </form>
    );
}
