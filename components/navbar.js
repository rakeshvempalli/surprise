class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: linear-gradient(135deg, rgba(255, 182, 193, 0.9) 0%, rgba(199, 21, 133, 0.9) 100%);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          backdrop-filter: blur(5px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .logo { 
          color: white; 
          font-weight: bold; 
          font-size: 1.5rem;
          font-family: 'Dancing Script', cursive;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        ul { 
          display: flex; 
          gap: 1.5rem; 
          list-style: none; 
          margin: 0; 
          padding: 0; 
        }
        a { 
          color: white; 
          text-decoration: none; 
          transition: all 0.3s ease;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        a:hover { 
          transform: translateY(-2px);
          text-shadow: 0 2px 8px rgba(255, 255, 255, 0.4);
        }
        @media (max-width: 768px) {
          nav {
            flex-direction: column;
            padding: 1rem;
          }
          ul {
            margin-top: 1rem;
          }
        }
      </style>
      <nav>
        <div class="logo">Aliya's Birthday</div>
        <ul>
          <li><a href="#"><i data-feather="home"></i> Home</a></li>
          <li><a href="#"><i data-feather="heart"></i> Love</a></li>
          <li><a href="#"><i data-feather="gift"></i> Surprises</a></li>
        </ul>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);
