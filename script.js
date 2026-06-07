/* Reveal Animation */

.hidden {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s ease;
}

.show {
    opacity: 1;
    transform: translateY(0);
}

/* Active Navigation */

.nav-links a.active {
    color: var(--accent);
    font-weight: 600;
}

/* Navbar Scroll Effect */

.header.scrolled {
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}