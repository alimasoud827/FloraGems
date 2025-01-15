import React from 'react';

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Floral Gems</h1>
        <p style={styles.tagline}>Floral Beauty, Gemstone Brilliance</p>
      </header>
      <section style={styles.content}>
        <h2 style={styles.heading}>About Us</h2>
        <p style={styles.paragraph}>
          Founded with a passion for elegance and sophistication, **Floral Gems** is your ultimate destination for **floral-inspired gemstone jewellery**. We pride ourselves on crafting pieces that merge the natural beauty of flowers with the brilliance of gemstones, offering you timeless creations that leave a lasting impression.
        </p>
        <h3 style={styles.subheading}>Our Mission</h3>
        <p style={styles.paragraph}>
          To bring nature's beauty and gemstone brilliance into the hands of our clients through unique, high-quality jewellery.
        </p>
        <h3 style={styles.subheading}>Our Vision</h3>
        <p style={styles.paragraph}>
          To be the leading floral-inspired jeweller in Kenya and East Africa, synonymous with creativity, quality, and trust.
        </p>
        <h3 style={styles.subheading}>Our Services</h3>
        <ul style={styles.list}>
          <li>Custom Jewellery Design</li>
          <li>Engraving Services</li>
          <li>Polishing and Repairs</li>
          <li>Elegant Packaging</li>
          <li>Delivery Services</li>
        </ul>
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
  subheading: {
    fontSize: '1.5rem',
    marginTop: '20px',
    color: '#555',
  },
  paragraph: {
    fontSize: '1rem',
    marginBottom: '15px',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
  },
};

export default AboutUs;