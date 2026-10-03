import './Hero.css'
import Button from '../Button/Button'

const Hero = () => {
    const stats = [
        {
            id: "total",
            value: 24,
            label: "Total Vehicles"
        },
        {
            id: "active",
            value: 18,
            label: "Active Vehicles"
        },
        {
            id: "maintenance",
            value: 3,
            label: "Maintenance"
        }
    ];
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

                <div className="dashboard-preview">
                    <h3>Fleet Overview</h3>
                    <div className='stats-grid'>
                    {stats.map((stat, index) => (
                        <div className='stats-card' key={stat.id}>
                            <span>{stat.value}</span>
                            <p>{stat.label}</p>
                        </div>
                    ))}

                    </div>
                   
                </div>
            </section>
        </div>
    )
}

export default Hero
