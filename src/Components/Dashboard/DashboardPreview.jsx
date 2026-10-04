
import './DashboardPreview.css'

const DashboardPreview = () => {
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

    const activity = [
        { id: "mon", day: "Mon", value: 65 },
        { id: "tue", day: "Tue", value: 85 },
        { id: "wed", day: "Wed", value: 45 },
        { id: "thu", day: "Thu", value: 75 },
        { id: "fri", day: "Fri", value: 95 }
    ];

  return (
    <div className="dashboard-preview">
                    <div className="dashboard-header">
                        <h3>Fleet Overview</h3>
                        <button>View All →</button>
                    </div>

                    <div className='stats-grid'>
                        {stats.map((stat) => (
                            <div className='stats-card' key={stat.id}>
                                <span>{stat.value}</span>
                                <p>{stat.label}</p>
                            </div>
                        ))}

                    </div>

                    <div className = 'activity'>
                        <h4>Fleet Activity </h4>
                        <div className='activity-chart'>
                            {activity.map((item) => (
                                <div className='activity-row' key={item.id} >
                                    <span className='activity-label'>{item.day}</span>
                                    <div className='activity-bar'>
                                        <div className='activity-fill' style={{ width: `${item.value}%` }}></div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>


                </div>
  )
}

export default DashboardPreview
