
"use client";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    const handleTabClick = (button: Element) => {
        tabButtons.forEach(btn => {
            btn.classList.remove('bg-blue-600', 'text-white');
            btn.classList.add('bg-gray-200', 'text-gray-700');
        });
        tabContents.forEach(content => content.classList.remove('active'));

        button.classList.remove('bg-gray-200', 'text-gray-700');
        button.classList.add('bg-blue-600', 'text-white');
        
        const tabId = button.getAttribute('data-tab');
        if (tabId) {
            const activeTab = document.getElementById(tabId);
            if (activeTab) {
                activeTab.classList.add('active');
            }
        }
    };

    tabButtons.forEach(button => {
        button.addEventListener('click', () => handleTabClick(button));
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href) {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    const statsCounters = document.querySelectorAll('.stats-counter');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                (entry.target as HTMLElement).style.transform = 'scale(1.05)';
                (entry.target as HTMLElement).style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
            }
        });
    }, { threshold: 0.1 });

    statsCounters.forEach(counter => observer.observe(counter));

    // Initial active tab
    const initialActiveButton = document.querySelector('.tab-btn.bg-blue-600');
    if (initialActiveButton) {
        handleTabClick(initialActiveButton);
    }


    return () => {
        // Cleanup event listeners
        tabButtons.forEach(button => {
            button.removeEventListener('click', () => handleTabClick(button));
        });
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.removeEventListener('click', function (e) {
                e.preventDefault();
            });
        });
        statsCounters.forEach(counter => observer.unobserve(counter));
    };
  }, []);

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
              <div className="text-2xl font-bold text-blue-600">EVIDECIA FLOW</div>
              <nav>
                  <a href="#features" className="mx-2 text-gray-600 hover:text-blue-600">Features</a>
                  <a href="#how-it-works" className="mx-2 text-gray-600 hover:text-blue-600">How It Works</a>
                  <a href="#contact" className="mx-2 text-gray-600 hover:text-blue-600">Contact</a>
                  <a href="#" className="mx-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Get Started</a>
              </nav>
          </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20">
          <div className="container mx-auto px-6">
              <h1 className="text-5xl font-bold mb-4">EVIDECIA FLOW</h1>
              <p className="text-xl mb-8">Your one-stop solution for academic research, from literature review to publication.</p>
              <a href="#" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">Start for Free</a>
          </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
          <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
              <div className="flex flex-wrap -mx-4">
                  <div className="w-full md:w-1/3 px-4 mb-8">
                      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                          <i className="fas fa-book-open text-4xl text-blue-600 mb-4"></i>
                          <h3 className="text-2xl font-bold mb-2">Comprehensive Literature Review</h3>
                          <p className="text-gray-600">Access a vast database of academic papers and articles.</p>
                      </div>
                  </div>
                  <div className="w-full md:w-1/3 px-4 mb-8">
                      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                          <i className="fas fa-cogs text-4xl text-blue-600 mb-4"></i>
                          <h3 className="text-2xl font-bold mb-2">Advanced Analysis Tools</h3>
                          <p className="text-gray-600">Utilize our powerful tools for data analysis and visualization.</p>
                      </div>
                  </div>
                  <div className="w-full md:w-1/3 px-4 mb-8">
                      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                          <i className="fas fa-share-alt text-4xl text-blue-600 mb-4"></i>
                          <h3 className="text-2xl font-bold mb-2">Collaborate Seamlessly</h3>
                          <p className="text-gray-600">Work with your team in real-time on your research projects.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gray-200 py-20">
          <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
              <div className="flex justify-center mb-8">
                  <button data-tab="title-page" className="tab-btn bg-blue-600 text-white px-6 py-3 rounded-l-full">Title Page</button>
                  <button data-tab="abstract" className="tab-btn bg-gray-200 text-gray-700 px-6 py-3">Abstract</button>
                  <button data-tab="introduction" className="tab-btn bg-gray-200 text-gray-700 px-6 py-3">Introduction</button>
                  <button data-tab="literature-review" className="tab-btn bg-gray-200 text-gray-700 px-6 py-3 rounded-r-full">Literature Review</button>
              </div>
              <div id="title-page" className="tab-content active bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">1. Title Page</h3>
                  <p>Includes the research title, author(s), affiliation(s), and date. This is the first impression of your work, so make it clear and concise.</p>
              </div>
              <div id="abstract" className="tab-content hidden bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">2. Abstract</h3>
                  <p>A brief summary covering the purpose, methods, key findings, and conclusions. It should be a standalone section that gives a complete overview.</p>
              </div>
              <div id="introduction" className="tab-content hidden bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">3. Introduction</h3>
                  <p>Presents background information, the problem statement, research objectives, and research questions or hypotheses. This sets the stage for your research.</p>
              </div>
              <div id="literature-review" className="tab-content hidden bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">4. Literature Review</h3>
                  <p>Reviews existing studies, relevant theories, and identifies gaps in the current research. This demonstrates your knowledge of the field.</p>
              </div>
          </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-6">
              <div className="flex flex-wrap justify-center text-center">
                  <div className="w-full md:w-1/4 px-4 mb-8 stats-counter">
                      <div className="bg-white text-blue-600 p-6 rounded-lg shadow-lg">
                          <h4 className="text-4xl font-bold">1M+</h4>
                          <p>Papers Indexed</p>
                      </div>
                  </div>
                  <div className="w-full md:w-1/4 px-4 mb-8 stats-counter">
                      <div className="bg-white text-blue-600 p-6 rounded-lg shadow-lg">
                          <h4 className="text-4xl font-bold">50k+</h4>
                          <p>Active Researchers</p>
                      </div>
                  </div>
                  <div className="w-full md:w-1/4 px-4 mb-8 stats-counter">
                      <div className="bg-white text-blue-600 p-6 rounded-lg shadow-lg">
                          <h4 className="text-4xl font-bold">10k+</h4>
                          <p>Universities</p>
                      </div>
                  </div>
                  <div className="w-full md:w-1/4 px-4 mb-8 stats-counter">
                      <div className="bg-white text-blue-600 p-6 rounded-lg shadow-lg">
                          <h4 className="text-4xl font-bold">98%</h4>
                          <p>Satisfaction Rate</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-6">
              <div className="flex flex-wrap justify-between">
                  <div className="w-full md:w-1/3 mb-8">
                      <h3 className="text-2xl font-bold mb-4">EVIDECIA FLOW</h3>
                      <p className="text-gray-400">Empowering researchers with the best tools and resources.</p>
                  </div>
                  <div className="w-full md:w-1/3 mb-8">
                      <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                      <ul>
                          <li className="mb-2"><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                          <li className="mb-2"><a href="#how-it-works" className="text-gray-400 hover:text-white">How It Works</a></li>
                          <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                          <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                      </ul>
                  </div>
                  <div className="w-full md:w-1/3 mb-8">
                      <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                      <div className="flex space-x-4">
                          <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600">
                              <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600">
                              <i className="fab fa-linkedin-in"></i>
                          </a>
                          <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600">
                              <i className="fab fa-facebook-f"></i>
                          </a>
                      </div>
                  </div>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                  <p>© 2024 EVIDECIA FLOW. All rights reserved.</p>
              </div>
          </div>
      </footer>
    </div>
  );
}

    