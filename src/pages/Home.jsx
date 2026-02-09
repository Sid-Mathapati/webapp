import React from 'react';
import Hero from '../components/Hero/Hero';
import LogoCarousel from '../components/LogoCarousel/LogoCarousel';
import Features from '../components/Features/Features';
import Solutions from '../components/Solutions/Solutions';
import Platform from '../components/Platform/Platform';
import Statistics from '../components/Statistics/Statistics';
import FAQ from '../components/FAQ/FAQ';
import CTA from '../components/CTA/CTA';

const Home = () => {
    return (
        <main id="main-content" className="main-content">
            <Hero />
            <LogoCarousel />
            <Features />
            <Solutions />
            <Platform />
            <Statistics />
            <FAQ />
            <CTA />
        </main>
    );
};

export default Home;
