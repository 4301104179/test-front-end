import React from 'react'
import banner from '../assets/main-banner.png'
import intro from '../assets/introduction-bg.webp'
import './styles.scss'
import Bestproduct from '../components/best-product/Best-product'
import Collectionoverview from '../components/collection-overview/Collection-overview'
import Brandstory from '../components/brand-story/Brand-story'
import Happendissue from '../components/happen-issues/happend-issue'
import Whathappened from '../components/what-happened/what-happened'
import Footer from '../components/footer/footer'

const Homepage = () => {
    return (
        <div className="home-page">
            <div className="background-banner">
                <img
                    src={banner}
                    alt="banner"
                />
            </div>

            <div className="background-intro">
                <img
                    src={intro}
                    alt="introduction"
                />

                <div className="text-intro">
                    <span className="What-happened">
                        what happened!
                    </span>

                    <span className="How-to-create-mobile-optimized-videos-in-minutes-Not-a-designer">
                        How to create mobile-optimized videos in minutes. Not a designer,
                        every team makes a lot of videos Can be trimmed. Take the first
                        step to your brand's success. How to create
                        mobile-optimized videos in minutes.
                    </span>
                </div>
            </div>
            <Bestproduct />
            <Collectionoverview />
            <Brandstory />
            <Happendissue />
            <Whathappened />
            <Footer />
        </div>
    )
}

export default Homepage
