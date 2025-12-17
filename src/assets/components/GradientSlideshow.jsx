import React, { useState, useEffect } from "react";

const slides = [
  {
    title: 'Paris, France',
    category: 'Romantic Getaway',
    description: 'Explore the Eiffel Tower, stroll along the Seine, and indulge in world-class cuisine and art.',
    image: 'src/paris-word-sign-logo-on-letter-a-eiffel-tower-vector-44031096.jpg',
    link: 'Discover Paris →',
  },
  {
    title: 'Kyoto, Japan',
    category: 'Cultural Escape',
    description: 'Visit ancient temples, experience traditional tea ceremonies, and enjoy cherry blossom season.',
    image: 'st,small,507x507-pad,600x600,f8f8f8.jpg',
    link: 'Explore Kyoto →',
  },
  {
    title: 'Cape Town, South Africa',
    category: 'Nature & Adventure',
    description: 'Hike Table Mountain, tour the Cape Winelands, and enjoy stunning coastal views.',
    image: 'cape-town-south-africa-skyline-600w-1642449211.webp',
    link: 'Visit Cape Town →',
  },
  {
    title: 'New York City, USA',
    category: 'Urban Exploration',
    description: 'From Times Square to Central Park, experience the energy, culture, and skyline of NYC.',
    image: 'new-york-city-logo-vector-27268410.jpg',
    link: 'See New York →',
  },
  {
    title: 'Rome, Italy',
    category: 'Historic Journey',
    description: 'Walk through ancient ruins, admire Renaissance art, and savor authentic Italian cuisine.',
    image: 'logo-for-roma-vector-50860542.jpg',
    link: 'Tour Rome →',
  },
  {
    title: 'Sydney, Australia',
    category: 'Coastal Lifestyle',
    description: 'Relax at Bondi Beach, explore the Opera House, and enjoy vibrant waterfront dining.',
    image: 'src/logo-for-sydney-vector-30901374.jpg',
    link: 'Experience Sydney →',
  },
];

export default function GradientSlideshow() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth <= 768) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  const nextSlide = () => {
    setStartIndex((startIndex + visibleCount) % slides.length);
  };

  const prevSlide = () => {
    setStartIndex((startIndex - visibleCount + slides.length) % slides.length);
  };

  const visibleProjects = slides.slice(startIndex, startIndex + visibleCount);
  const overflow = startIndex + visibleCount > slides.length;
  const displaySlides = overflow
    ? [...visibleProjects, ...slides.slice(0, (startIndex + visibleCount) % slides.length)]
    : visibleProjects;

  return (
    <div className="carousel-wrapper">
      <div className="carousel-inner">
        <div className="lf"><button className="carousel-nav left" onClick={prevSlide}>❮</button></div>

        <div className="carousel-track">
          {displaySlides.map((proj, i) => (
            <div key={i} className="project-card">
              <img src={proj.image} alt={proj.title} className="project-logo" />
              <span className="project-category">{proj.category}</span>
              <h2>{proj.title}</h2>
              <p>{proj.description}</p>
              <a href="#">{proj.link}</a>
            </div>
          ))}
        </div>
        <div className="lf"><button className="carousel-nav right" onClick={nextSlide}>❯</button></div>
          <div className="bit">
            <button className="carousel-nav left" onClick={prevSlide}>❮</button>
        <button className="carousel-nav right" onClick={nextSlide}>❯</button>
          </div>
      </div>
    </div>
  );
}