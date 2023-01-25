import './styles.css'

export function Card() {
  return(
    <div className="product-card">
        <picture>
          <img src="" alt="Product" />
        </picture>
        <section className="product-info">
          <div className="product-title">
            <p>perfume</p>
            <h1>Gabrielle Essence Eau De Parfum</h1>
          </div>
          <div className="product-description">
            <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
          </div>
          <div className="product-price">
            <p className='price'>$149.99</p>
            <small>$169.99</small>
          </div>
          <button className="primary-button">
            <span>Add to Cart</span>
          </button>
        </section>
      </div>
  )
}