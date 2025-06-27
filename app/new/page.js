'use client'
import { useState } from 'react';
import Head from 'next/head';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', mobile: '', email: '', description: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  // Custom SVG Icons
  const AddressPin = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ marginRight: '12px' }}>
      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#0066FF"/>
    </svg>
  );

  const PhoneIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ marginRight: '12px' }}>
      <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z" fill="#0066FF"/>
    </svg>
  );

  const EmailIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ marginRight: '12px' }}>
      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#0066FF"/>
    </svg>
  );

 

  return (
    <div style={{ 
      backgroundColor: '#ffffff', 
      minHeight: '100vh', 
      padding: '0 20px',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      color: '#1a1a1a'
    }}>
      <Head>
        <title>Contact Us | Talank Global</title>
        <meta name="description" content="Get in touch with Talank Global for IT services and solutions" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '100px 0' 
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1.2fr', 
          gap: '80px', 
          alignItems: 'flex-start' 
        }}>
          {/* Left Column - Contact Info */}
          <div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              marginBottom: '48px'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                backgroundColor: '#0066ff10',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '20px'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="#0066FF"/>
                </svg>
              </div>
              <h1 style={{ 
                fontSize: '2.875rem', 
                fontWeight: '700', 
                letterSpacing: '-0.75px',
                lineHeight: '1.15',
                margin: '0'
              }}>
                Get in Touch
              </h1>
            </div>

            <div style={{ 
              marginBottom: '60px',
              paddingLeft: '12px',
              borderLeft: '3px solid #0066ff20'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start',
                marginBottom: '32px'
              }}>
                <AddressPin />
                <div>
                  <h2 style={{ 
                    fontSize: '1rem', 
                    fontWeight: '600', 
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '1.25px',
                    color: '#555'
                  }}>
                    Our Headquarters
                  </h2>
                  <p style={{ 
                    fontSize: '1.05rem', 
                    lineHeight: '1.7',
                    color: '#333',
                    margin: '0'
                  }}>
                    #10, 3rd Main Road, SK Nagar<br />
                    Nandini Layout (PO)<br />
                    Bengaluru - 560096<br />
                    Karnataka, INDIA
                  </p>
                </div>
              </div>

              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start',
                marginBottom: '32px'
              }}>
                <PhoneIcon />
                <div>
                  <h2 style={{ 
                    fontSize: '1rem', 
                    fontWeight: '600', 
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '1.25px',
                    color: '#555'
                  }}>
                    Direct Contact
                  </h2>
                  <div style={{ 
                    fontSize: '1.05rem', 
                    lineHeight: '1.7',
                    color: '#333'
                  }}>
                    <a href="tel:+919741523915" style={{ 
                      color: 'inherit', 
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      display: 'block',
                      marginBottom: '6px'
                    }}>
                      +91 97415 23915
                    </a>
                    <a href="tel:9343371670" style={{ 
                      color: 'inherit', 
                      textDecoration: 'none',
                      transition: 'color 0.2s'
                    }}>
                      +91 93433 71670
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start'
              }}>
                <EmailIcon />
                <div>
                  <h2 style={{ 
                    fontSize: '1rem', 
                    fontWeight: '600', 
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '1.25px',
                    color: '#555'
                  }}>
                    Email Us
                  </h2>
                  <a href="mailto:talankadmin@talankglobal.com" style={{ 
                    fontSize: '1.05rem', 
                    lineHeight: '1.7',
                    color: '#0066ff', 
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}>
                    talankadmin@talankglobal.com
                  </a>
                </div>
              </div>
            </div>

           
          </div>

          {/* Right Column - Contact Form */}
          <div style={{ 
            backgroundColor: '#fff', 
            borderRadius: '20px', 
            padding: '60px',
            border: '1px solid rgba(0,0,0,0.05)',
            boxShadow: '0 25px 50px rgba(0,0,0,0.03)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '0',
              right: '0',
              width: '160px',
              height: '160px',
              background: 'linear-gradient(135deg, rgba(0,102,255,0.05) 0%, rgba(0,102,255,0.01) 100%)',
              borderBottomLeftRadius: '100%',
              zIndex: '0'
            }}></div>
            
            <div style={{ position: 'relative', zIndex: '1' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                marginBottom: '40px'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  backgroundColor: '#0066ff10',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '20px'
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#0066FF"/>
                  </svg>
                </div>
                <h2 style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: '600', 
                  letterSpacing: '-0.25px',
                  margin: '0'
                }}>
                  Send a Message
                </h2>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '28px' }}>
                  <label style={{ 
                    display: 'block', 
                    fontSize: '0.9rem', 
                    color: '#555', 
                    marginBottom: '12px',
                    fontWeight: '500',
                    paddingLeft: '8px'
                  }}>
                    Your Name
                  </label>
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    padding: '4px 4px 4px 16px',
                    border: '1px solid #e5e5e5',
                    borderRadius: '12px',
                    transition: 'all 0.3s',
                    backgroundColor: '#fafafa'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '12px' }}>
                      <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#999"/>
                    </svg>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{ 
                        flex: '1',
                        padding: '14px 12px',
                        border: 'none',
                        outline: 'none',
                        fontSize: '0.95rem',
                        backgroundColor: 'transparent'
                      }}
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <label style={{ 
                    display: 'block', 
                    fontSize: '0.9rem', 
                    color: '#555', 
                    marginBottom: '12px',
                    fontWeight: '500',
                    paddingLeft: '8px'
                  }}>
                    Mobile Number
                  </label>
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    padding: '4px 4px 4px 16px',
                    border: '1px solid #e5e5e5',
                    borderRadius: '12px',
                    transition: 'all 0.3s',
                    backgroundColor: '#fafafa'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '12px' }}>
                      <path d="M17 1H7C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1 17 1ZM17 19H7V5H17V19Z" fill="#999"/>
                      <path d="M12 21C12.55 21 13 20.55 13 20C13 19.45 12.55 19 12 19C11.45 19 11 19.45 11 20C11 20.55 11.45 21 12 21Z" fill="#999"/>
                    </svg>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      style={{ 
                        flex: '1',
                        padding: '14px 12px',
                        border: 'none',
                        outline: 'none',
                        fontSize: '0.95rem',
                        backgroundColor: 'transparent'
                      }}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <label style={{ 
                    display: 'block', 
                    fontSize: '0.9rem', 
                    color: '#555', 
                    marginBottom: '12px',
                    fontWeight: '500',
                    paddingLeft: '8px'
                  }}>
                    Email Address
                  </label>
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    padding: '4px 4px 4px 16px',
                    border: '1px solid #e5e5e5',
                    borderRadius: '12px',
                    transition: 'all 0.3s',
                    backgroundColor: '#fafafa'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '12px' }}>
                      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#999"/>
                    </svg>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{ 
                        flex: '1',
                        padding: '14px 12px',
                        border: 'none',
                        outline: 'none',
                        fontSize: '0.95rem',
                        backgroundColor: 'transparent'
                      }}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <label style={{ 
                    display: 'block', 
                    fontSize: '0.9rem', 
                    color: '#555', 
                    marginBottom: '12px',
                    fontWeight: '500',
                    paddingLeft: '8px'
                  }}>
                    Your Project Details
                  </label>
                  <div style={{ 
                    display: 'flex',
                    padding: '16px',
                    border: '1px solid #e5e5e5',
                    borderRadius: '12px',
                    transition: 'all 0.3s',
                    backgroundColor: '#fafafa'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '12px', flexShrink: '0' }}>
                      <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="#999"/>
                    </svg>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows="6"
                      style={{ 
                        flex: '1',
                        padding: '0',
                        border: 'none',
                        outline: 'none',
                        fontSize: '0.95rem',
                        backgroundColor: 'transparent',
                        resize: 'none',
                        minHeight: '120px'
                      }}
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{ 
                    backgroundColor: '#0066ff', 
                    color: '#fff', 
                    border: 'none', 
                    padding: '18px 30px', 
                    fontSize: '0.95rem', 
                    fontWeight: '600', 
                    borderRadius: '12px', 
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    width: '100%',
                    letterSpacing: '0.5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,102,255,0.2)'
                  }}
                  onMouseOver={(e) => !isSubmitting && (e.target.style.backgroundColor = '#0052cc')}
                  onMouseOut={(e) => !isSubmitting && (e.target.style.backgroundColor = '#0066ff')}
                >
                  {isSubmitting ? (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '10px', animation: 'spin 1s linear infinite' }}>
                        <path d="M12 4V8L16 12L12 16V20C16.42 20 20 16.42 20 12C20 9.79 19.1 7.79 17.66 6.34L19.07 4.93C20.88 6.74 22 9.24 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 8.93 3.47 6.21 5.78 4.6L7.2 6.02C5.3 7.23 4 9.48 4 12C4 16.42 7.58 20 12 20Z" fill="#fff"/>
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '10px' }}>
                        <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="#fff"/>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}