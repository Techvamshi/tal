'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductCard = ({ product, isActive, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      style={{
        background: `linear-gradient(135deg, ${product.color} 0%, #f8f9fa 100%)`,
        borderRadius: '20px',
        padding: '30px',
        cursor: 'pointer',
        boxShadow: isActive ? `0 0 30px ${product.color}40` : '0 4px 20px rgba(0,0,0,0.08)',
        position: 'relative',
        overflow: 'hidden',
        height: isActive ? '500px' : '200px',
        transition: 'height 0.5s ease',
        marginBottom: '20px',
        border: '1px solid rgba(0,0,0,0.05)'
      }}
      whileHover={{ y: -10 }}
    >
      <motion.div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}
      >
        <h3 style={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#2d3748',
          margin: '0'
        }}>{product.title}</h3>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: product.color,
          fontSize: '20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          {product.icon}
        </div>
      </motion.div>
      
      <p style={{
        color: '#4a5568',
        fontSize: '16px',
        marginBottom: '20px'
      }}>{product.tagline}</p>
      
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              marginBottom: '30px'
            }}>
              {product.features.map((feature, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.7)',
                  padding: '15px',
                  borderRadius: '10px',
                  backdropFilter: 'blur(5px)',
                  boxShadow: '0 2px 15px rgba(0,0,0,0.05)',
                  border: '1px solid rgba(0,0,0,0.05)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '10px'
                  }}>
                    <div style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      background: product.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '10px',
                      flexShrink: '0'
                    }}>
                      <span style={{ color: '#fff', fontSize: '14px' }}>{i+1}</span>
                    </div>
                    <h4 style={{
                      color: '#2d3748',
                      margin: '0',
                      fontSize: '16px'
                    }}>{feature.title}</h4>
                  </div>
                  <p style={{
                    color: '#4a5568',
                    fontSize: '14px',
                    margin: '0',
                    marginLeft: '40px'
                  }}>{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div style={{
              display: 'flex',
              gap: '15px',
              marginTop: 'auto'
            }}>
              <motion.button
                style={{
                  padding: '12px 25px',
                  background: product.color,
                  border: 'none',
                  borderRadius: '50px',
                  color: '#ffffff',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '14px',
                  boxShadow: `0 4px 15px ${product.color}60`
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Demo
              </motion.button>
              <motion.button
                style={{
                  padding: '12px 25px',
                  background: 'transparent',
                  border: `1px solid ${product.color}`,
                  borderRadius: '50px',
                  color: product.color,
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
                whileHover={{ background: `${product.color}10` }}
                whileTap={{ scale: 0.95 }}
              >
                Documentation
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        fontSize: '12px',
        color: '#718096'
      }}>
        {product.id}
      </div>
    </motion.div>
  );
};

const FloatingOrbs = ({ activeProduct }) => {
  const [orbs, setOrbs] = useState([]);

  useEffect(() => {
    const newOrbs = Array.from({ length: 5 }).map(() => ({
      width: `${Math.random() * 200 + 100}px`,
      height: `${Math.random() * 200 + 100}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      x: (Math.random() - 0.5) * 100,
      y: (Math.random() - 0.5) * 100,
      duration: Math.random() * 20 + 10,
    }));
    setOrbs(newOrbs);
  }, []);

  // Prevent rendering until client-side
  if (orbs.length === 0) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
    }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: `${Math.random() * 200 + 100}px`,
            height: `${Math.random() * 200 + 100}px`,
            borderRadius: '50%',
            background: activeProduct 
              ? `radial-gradient(circle, ${activeProduct.color}10 0%, transparent 70%)`
              : 'radial-gradient(circle, #5B7DB110 0%, transparent 70%)',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: 'blur(40px)'
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 100],
            y: [0, (Math.random() - 0.5) * 100],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      ))}
    </div>
  );
};

export default function DigiceuticsDashboard() {
  const [activeProduct, setActiveProduct] = useState(null);
  
  const products = [
    {
      id: 'ideateX',
      title: 'ideateX',
      tagline: 'Transforming ideas into winning businesses - NextGen digital ideation lab',
      icon: '💡',
      color: '#00CECB',
      features: [
        {
          title: 'Step-by-step ideation',
          description: 'Guided process from concept to business plan'
        },
        {
          title: 'Business Canvas',
          description: 'Structured templates for business modeling'
        },
        {
          title: 'Validation Engine',
          description: 'Data-driven go/no-go decision making'
        },
        {
          title: 'Financial Planning',
          description: 'Revenue, expenses, cashflow and profit calculations'
        },
        {
          title: 'Program Management',
          description: 'End-to-end idea development tracking'
        },
        {
          title: 'All-in-One Solution',
          description: '360-degree view of your business concept'
        }
      ]
    },
    {
      id: 'iQLIMS',
      title: 'iQLIMS',
      tagline: 'Modern laboratory informatics for improved QC/QA and data management',
      icon: '🔬',
      color: '#FFC145',
      features: [
        {
          title: 'E2E Diagnostic Solution',
          description: 'Complete workflow from sample to report'
        },
        {
          title: 'Clinical Trial Management',
          description: 'Specialized tools for research labs'
        },
        {
          title: 'Compliance Analytics',
          description: 'Protocol analysis with automated alerts'
        },
        {
          title: 'Modular Informatics',
          description: 'Flexible MMIS architecture'
        },
        {
          title: 'Workflow Automation',
          description: 'Increased lab productivity'
        },
        {
          title: 'Regulatory Compliance',
          description: '21 CFR Part 11, HIPAA, HL7 ready'
        }
      ]
    },
    {
      id: 'IoMT',
      title: 'IoMT',
      tagline: 'Secure medical device connectivity for healthcare automation',
      icon: '⚕️',
      color: '#A05EB5',
      features: [
        {
          title: 'Universal Connectivity',
          description: 'RS232, WIFI, Bluetooth, USB, RJ45'
        },
        {
          title: 'Secure Middleware',
          description: 'Encrypted device-to-application communication'
        },
        {
          title: 'Offline Storage',
          description: 'Data persistence without network'
        },
        {
          title: 'Protocol Translation',
          description: 'Bridging diverse medical devices'
        },
        {
          title: 'Healthcare Automation',
          description: 'Environmental monitoring solutions'
        },
        {
          title: 'Reliable Transmission',
          description: 'Guaranteed data delivery'
        }
      ]
    },
    {
      id: 'iQFORMS',
      title: 'iQFORMS',
      tagline: 'Cloud-based forms solution for clinical research and patient management',
      icon: '📋',
      color: '#5B7DB1',
      features: [
        {
          title: 'Real World EDC/eCRF',
          description: 'Electronic data capture for research'
        },
        {
          title: 'Site Management',
          description: 'Tools for SMO operations'
        },
        {
          title: 'Patient Wellness',
          description: 'Integrated patient solutions'
        },
        {
          title: 'AI Analytics',
          description: 'Data models and insights'
        },
        {
          title: 'Cloud Architecture',
          description: 'Single-stack simplified IT'
        },
        {
          title: 'Regulatory Ready',
          description: 'Compliant data collection'
        }
      ]
    },
    {
      id: 'aiotroniX',
      title: 'aiotroniX',
      tagline: 'Industrial IoT automation for smart factories and intelligent systems',
      icon: '🏭',
      color: '#FF5E5B',
      features: [
        {
          title: 'Industrial Automation',
          description: 'IIoT for smart manufacturing'
        },
        {
          title: 'Real-time Monitoring',
          description: 'Equipment and process tracking'
        },
        {
          title: 'Predictive Analytics',
          description: 'AI-driven operational insights'
        },
        {
          title: 'Single-stack Architecture',
          description: 'Unified device management'
        },
        {
          title: 'Process Optimization',
          description: 'Efficiency and productivity gains'
        },
        {
          title: 'Safety Systems',
          description: 'Adaptive risk mitigation'
        }
      ]
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      padding: '40px',
      color: '#2d3748',
      fontFamily: "'Inter', sans-serif",
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
    }}>
      <FloatingOrbs activeProduct={activeProduct} />
      
      <header style={{
        marginBottom: '50px',
        textAlign: 'center'
      }}>
        <motion.h1 
          style={{
            fontSize: '48px',
            fontWeight: '800',
            marginBottom: '20px',
            background: activeProduct 
              ? `-webkit-linear-gradient(45deg, ${activeProduct.color}, #2d3748)`
              : '-webkit-linear-gradient(45deg, #00CECB, #5B7DB1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: '1.2'
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Digiceutics Product Ecosystem
        </motion.h1>
        <motion.p
          style={{
            fontSize: '18px',
            color: '#4a5568',
            maxWidth: '700px',
            margin: '0 auto'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Five integrated solutions powering the future of digital healthcare and industrial automation
        </motion.p>
      </header>
      
      <motion.div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginBottom: '40px'
        }}>
          {products.map(product => (
            <motion.div
              key={product.id}
              style={{
                background: 'rgba(255,255,255,0.7)',
                borderRadius: '15px',
                padding: '20px',
                cursor: 'pointer',
                border: activeProduct?.id === product.id 
                  ? `2px solid ${product.color}`
                  : '2px solid rgba(0,0,0,0.05)',
                backdropFilter: 'blur(5px)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
              }}
              whileHover={{ 
                y: -5,
                background: 'rgba(255,255,255,0.9)'
              }}
              onClick={() => setActiveProduct(product)}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '15px',
                  background: product.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '15px',
                  fontSize: '24px',
                  color: '#ffffff',
                  boxShadow: `0 4px 15px ${product.color}60`
                }}>
                  {product.icon}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  margin: '0',
                  color: '#2d3748'
                }}>{product.title}</h3>
              </div>
              <p style={{
                color: '#4a5568',
                fontSize: '14px',
                margin: '0'
              }}>{product.tagline}</p>
            </motion.div>
          ))}
        </div>
        
        <div style={{ display: 'grid', gap: '20px' }}>
  {products.map(product => (
    <ProductCard 
      key={product.id}
      product={product}
      isActive={true} // Always expanded
      onClick={() => {}} // Do nothing on click
    />
  ))}
</div>

      </motion.div>
      
      <footer style={{
        marginTop: '80px',
        textAlign: 'center',
        color: '#718096',
        fontSize: '14px'
      }}>
        <p>© {new Date().getFullYear()} Digiceutics. All rights reserved.</p>
      </footer>
    </div>
  );
}