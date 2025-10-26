class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: linear-gradient(to right, rgba(75, 59, 113, 0.9), rgba(101, 83, 156, 0.9));
          color: white;
          padding: 2rem;
          text-align: center;
          font-size: 0.9rem;
          position: relative;
          z-index: 10;
        }
        .heart {
          color: #ff6b81;
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }
        .copyright {
          margin-top: 1rem;
          opacity: 0.8;
        }
      </style>
      <footer>
        <p>Made with <span class="heart">❤️</span> for Aliya's Birthday - November 2, 2024</p>
        <p class="copyright">&copy; 2024 - Forever Yours</p>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);
