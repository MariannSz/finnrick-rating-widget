class FinnrickRating extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const vendor = this.getAttribute("vendor") || "Unknown Vendor";
    const product = this.getAttribute("product") || "Unknown Product";
    const rating = this.getAttribute("rating") || "A";
    const label = this.getAttribute("label") || "GREAT";
    const samples = this.getAttribute("samples") || "6";
    const date = this.getAttribute("date") || "17 Feb 2025";

    const style = `
      <style>
        .card {
          font-family: sans-serif;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 0.75rem 1rem;
          max-width: 18rem;
          background: #efefef;
          line-height: 1.2;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .header {
          font-size: 0.875rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        p {
          margin: 0;
        }
        .tooltip {
          min-width: 1rem;
          height: 1rem;
          border-radius: 50%;
          border: 1px solid #999999;
          color: #999999;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: lighter;
          cursor: pointer;
        }
        hr {
          border: none;
          border-top: 1px solid #2d2d2d;
          margin-bottom: 1rem;
        }
        .card-content {
          display: flex;
          gap: 1rem;
        }
        .rating {
          display: flex;
          align-items: center;
          background-color: #178846;
          height: 3.25rem;
          color: white;
          border-radius: 9999px;
          padding-right: 1.5rem;
          font-weight: 500;
          font-size: 1.5rem;
        }
        .circle {
          width: 3.25rem;
          height: 3.25rem;
          background-color: #178846;
          border: 1px solid white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 0.75rem;
        }
        .label {
          font-size: 1rem;
          font-weight: 500;
          color: white;
        }
        .details {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .lg-txt {
          font-size: 1rem;
          line-height: 1.25;
          margin: 0;
        }
        .sm-txt {
          font-size: 0.75rem;
          font-weight: 500;
          margin: 0;
        }
        .light-txt {
          color: #666;
        }
        .logo {
          margin-top: 0.5rem;
          display: flex;
          justify-content: center;
        }
        .logo img {
          height: 1.5rem;
          max-width: 100px;
          object-fit: contain;
        }
        @media (max-width: 360px) {
          .card-content {
            flex-wrap: wrap;
          }
        }
      </style>
    `;

    const template = `
      <article class="card">
        <header class="header">
          <p>FINNRICK RATING™</p>
          <p class="tooltip">?</p>
        </header>
        <hr/>
        <div class="card-content">
          <div class="rating">
            <div class="circle">${rating}</div>
            <div class="label">${label}</div>
          </div>
          <div class="details">
            <h3 class="lg-txt">${vendor}</h3>
            <h3 class="lg-txt">${product}</h3>
            <p class="sm-txt">Tested ${samples} samples</p>
            <p class="sm-txt light-txt">Last test: ${date}</p>
          </div>
        </div>
        <div class="logo">
          <img src="./finnrick-logo-black.jpg" alt="Finnrick logo" />
        </div>
      </article>
    `;

    this.shadowRoot!.innerHTML = style + template;
  }
}

customElements.define("finnrick-rating", FinnrickRating);
