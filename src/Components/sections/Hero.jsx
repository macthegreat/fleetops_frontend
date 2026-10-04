import './Hero.css'
import Button from '../Button/Button'
import DashboardPreview from '../Dashboard/DashboardPreview'

const Hero = () => {
   
    return (
        <div >
            <section className="hero">
                <div className="hero-content">
                    <p className="eyebrow">SMART FLEET MANAGEMENT</p>

                    <h1>
                        Smarter Fleet.
                        <br />
                        Better Control.
                    </h1>

                    <p className="description">
                        Manage your fleet, monitor operations,
                        track performance and reduce downtime
                        from one powerful platform.
                    </p>

                    <div className="hero-actions">
                        <Button variant="primary">Start Free</Button>
                        <Button variant="secondary">Watch Demo</Button>
                    </div>
                </div>

           
    <DashboardPreview />

            </section>
        </div>
    )
}

export default Hero
