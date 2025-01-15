import React from 'react';

const PolicyPage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Our Policies</h1>
        <p style={styles.tagline}>Committed to Transparency and Excellence</p>
      </header>
      <section style={styles.content}>
        <h2 style={styles.heading}>Privacy Policy</h2>
        <p style={styles.paragraph}>
          At **Floral Gems**, we value your privacy and are committed to protecting your personal information. Any data collected during your interactions with us, such as your name, email, and purchase history, is handled with the utmost confidentiality and used solely to enhance your shopping experience.
        </p>

        <h2 style={styles.heading}>Return and Exchange Policy</h2>
        <p style={styles.paragraph}>
          We strive to provide you with high-quality jewellery. If you’re not satisfied with your purchase, we offer a **7-day return or exchange policy**, provided the item is in its original condition and packaging. Custom-made or engraved items are not eligible for returns.
        </p>

        <h2 style={styles.heading}>Shipping Policy</h2>
        <p style={styles.paragraph}>
          We deliver within Kenya and East Africa through our trusted delivery partners. Delivery times vary by location, typically taking **3–5 business days** for local orders. Shipping fees are calculated during checkout.
        </p>

        <h2 style={styles.heading}>Terms of Service</h2>
        <p style={styles.paragraph}>
          By accessing or using our website, you agree to comply with our terms. These include:
        </p>
        <ul style={styles.list}>
          <li>Using our platform for lawful purposes only.</li>
          <li>Refraining from reproducing or distributing content without permission.</li>
          <li>Providing accurate and truthful information when making purchases.</li>
        </ul>

        <h2 style={styles.heading}>Contact Us</h2>
        <p style={styles.paragraph}>
          Have questions or need assistance? Reach out to us at:  
          <strong>Email:</strong> support@floralgems.com  
          <strong>Phone:</strong> +2547-9930-9978
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    padding: '20px',
    lineHeight: '1.6',
    backgroundColor: '#f9f9f9',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#d64550', // Floral-inspired color
  },
  tagline: {
    fontSize: '1.2rem',
    fontStyle: 'italic',
    color: '#888',
  },
  content: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '1rem',
    marginBottom: '15px',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    marginBottom: '15px',
  },
};

export default PolicyPage;