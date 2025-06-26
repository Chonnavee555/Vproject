<template>
    <div class="helpdesk-theme">
        <header class="header">
            <h1>Helpdesk</h1>
        </header>
        <main class="main-content">
            <section class="ticket-section">
                <h2>Submit a Ticket</h2>
                <form class="ticket-form">
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Describe your issue"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </section>
            <section class="faq-section">
                <h2>Frequently Asked Questions</h2>
                <ul>
                    <li>How do I reset my password?</li>
                    <li>Where can I find my tickets?</li>
                    <li>How do I contact support?</li>
                </ul>
            </section>
        </main>
        <footer class="footer">
            &copy; 2024 Helpdesk Support
        </footer>
    </div>
</template>

<script setup>
// No logic for this basic theme
</script>

<style scoped>
.helpdesk-theme {
    background: #fff;
    color: #222;
    min-height: 100vh;
    font-family: 'Segoe UI', Arial, sans-serif;
    display: flex;
    flex-direction: column;
}

.header {
    background: #f5f7fa;
    padding: 2rem 1rem 1rem 1rem;
    text-align: center;
    border-bottom: 1px solid #e0e0e0;
}

.main-content {
    flex: 1;
    display: flex;
    gap: 2rem;
    padding: 2rem;
    max-width: 900px;
    margin: 0 auto;
}

.ticket-section, .faq-section {
    background: #fafbfc;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.03);
    padding: 2rem;
    flex: 1;
}

.ticket-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.ticket-form input,
.ticket-form textarea {
    padding: 0.75rem;
    border: 1px solid #d0d7de;
    border-radius: 4px;
    font-size: 1rem;
    background: #fff;
}

.ticket-form button {
    background: #2563eb;
    color: #fff;
    border: none;
    padding: 0.75rem;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;
}

.ticket-form button:hover {
    background: #1e40af;
}

.faq-section ul {
    list-style: disc inside;
    padding-left: 1rem;
}

.footer {
    background: #f5f7fa;
    text-align: center;
    padding: 1rem;
    font-size: 0.95rem;
    border-top: 1px solid #e0e0e0;
}
</style>