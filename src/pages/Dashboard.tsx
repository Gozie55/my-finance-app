import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "../assets/css/Dashboard.css";



const Dashboard = () => {
  // Monthly Issuance Data
  const monthlyIssuanceData = [
    { name: "May", personalized: 15, instant: 35 },
    { name: "Jun", personalized: 25, instant: 45 },
    { name: "Jul", personalized: 15, instant: 20 },
    { name: "Aug", personalized: 15, instant: 35 },
    { name: "Sep", personalized: 20, instant: 25 },
    { name: "Oct", personalized: 25, instant: 40 },
    { name: "Nov", personalized: 30, instant: 35 },
  ];

  // Weekly Income Data
  const weeklyIncomeData = [
    { name: "Mon", value: 40 },
    { name: "Tue", value: 30 },
    { name: "Wed", value: 45 },
    { name: "Thu", value: 40 },
    { name: "Fri", value: 55 },
    { name: "Sat", value: 75 },
    { name: "Sun", value: 65 },
  ];

  // Card Status Distribution Data
  const cardStatusData = [
    { name: "Active", value: 1800, color: "#20c997" },
    { name: "Expired", value: 400, color: "#ffc107" },
    { name: "Inactive", value: 150, color: "#6c757d" },
    { name: "Blocked", value: 80, color: "#6610f2" },
    { name: "Lost", value: 20, color: "#dc3545" },
  ];

  return (
    <div className="dashboard-container">
      <div className="welcome-section">
        <div>
          <h2 className="welcome-text">
            Hi Nazeer, what would you like to do today?
          </h2>
          <p className="last-login">Last login: 26/11/2024 14:32:58</p>
        </div>
        <div className="date-display">
          <i className="bi bi-calendar me-2"></i>
          Today <span className="date-text">11 Nov 2024</span>
        </div>
      </div>

      <div className="quick-access-section">
        <h3 className="section-title">Your Quick Access</h3>
        <div className="quick-access-cards">
          <Link to="/card-profile" className="quick-access-card">
            <div className="quick-access-icon">
              <i className="bi bi-credit-card-2-front"></i>
            </div>
            <span>Manage a Card</span>
            <i className="bi bi-chevron-right"></i>
          </Link>

          <Link to="/cards" className="quick-access-card">
            <div className="quick-access-icon">
              <i className="bi bi-credit-card-2-front"></i>
            </div>
            <span>Issue Instant Card</span>
            <i className="bi bi-chevron-right"></i>
          </Link>

          <Link to="/cards" className="quick-access-card">
            <div className="quick-access-icon">
              <i className="bi bi-credit-card-2-front"></i>
            </div>
            <span>Issue Personalized Card</span>
            <i className="bi bi-chevron-right"></i>
          </Link>

          <Link to="/card-request" className="quick-access-card">
            <div className="quick-access-icon">
              <i className="bi bi-credit-card-2-front"></i>
            </div>
            <span>Review Card Requests</span>
            <i className="bi bi-chevron-right"></i>
          </Link>
        </div>
      </div>

      <div className="analytics-section">
        <h3 className="section-title">Analytics</h3>
        <div className="analytics-cards">
          <div className="analytics-card">
            <div className="analytics-card-header">
              <i className="bi bi-credit-card-2-front text-primary"></i>
              <span>Total Active Cards</span>
            </div>
            <div className="analytics-card-value">26,478</div>
            <div className="analytics-card-trend positive">
              <i className="bi bi-arrow-up-right"></i>
              <span>+9% this month</span>
            </div>
          </div>

          <div className="analytics-card">
            <div className="analytics-card-header">
              <i className="bi bi-credit-card-2-front text-purple"></i>
              <span>Total Personalized Cards</span>
            </div>
            <div className="analytics-card-value">15,703</div>
            <div className="analytics-card-trend positive">
              <i className="bi bi-arrow-up-right"></i>
              <span>+8.5% this month</span>
            </div>
          </div>

          <div className="analytics-card">
            <div className="analytics-card-header">
              <i className="bi bi-cash text-success"></i>
              <span>Today's Revenue</span>
            </div>
            <div className="analytics-card-value">₦9.3M</div>
            <div className="analytics-card-trend positive">
              <i className="bi bi-arrow-up-right"></i>
              <span>+6% vs yesterday</span>
            </div>
          </div>

          <div className="analytics-card">
            <div className="analytics-card-header">
              <i className="bi bi-hourglass-split text-warning"></i>
              <span>Pending Requests</span>
            </div>
            <div className="analytics-card-value">38</div>
            <div className="analytics-card-attention">
              <i className="bi bi-exclamation-circle"></i>
              <span>Requires attention</span>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart-container">
          <div className="chart-header">
            <h3 className="section-title">Monthly Issuance</h3>
          </div>
          <div className="chart-content">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={monthlyIssuanceData} barGap={0} barSize={20}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e9ecef",
                    borderRadius: "4px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                />
                <Legend
                  align="center"
                  verticalAlign="bottom"
                  iconType="circle"
                  wrapperStyle={{ paddingTop: "15px" }}
                />
                <Bar
                  dataKey="personalized"
                  name="Personalized"
                  fill="#0070ba"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="instant"
                  name="Instant"
                  fill="#e9ecef"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="recent-requests">
          <div className="recent-requests-card">
            <div className="section-header">
              <h3 className="section-title">Recent Card Requests</h3>
              <button className="expand-button" title="Expand">
                <i className="bi bi-arrows-angle-expand" aria-hidden="true"></i>
                <span className="sr-only">Expand</span>
              </button>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Branch</th>
                    <th>Card Type</th>
                    <th>Quantity</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Corporate</td>
                    <td>Instant</td>
                    <td>10</td>
                    <td>
                      <span className="status-ready">Ready</span>
                    </td>
                    <td>
                      <a href="#" className="view-link">
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Corporate</td>
                    <td>Personalized</td>
                    <td>10</td>
                    <td>
                      <span className="status-progress">In Progress</span>
                    </td>
                    <td>
                      <a href="#" className="view-link">
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Corporate</td>
                    <td>Personalized</td>
                    <td>10</td>
                    <td>
                      <span className="status-acknowledged">Acknowledged</span>
                    </td>
                    <td>
                      <a href="#" className="view-link">
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Corporate</td>
                    <td>Instant</td>
                    <td>10</td>
                    <td>
                      <span className="status-pending">Pending</span>
                    </td>
                    <td>
                      <a href="#" className="view-link">
                        View
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-bottom">
        <div className="chart-container">
          <div className="chart-header">
            <h3 className="section-title">This Week's Income</h3>
          </div>
          <div className="chart-content">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={weeklyIncomeData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e9ecef",
                    borderRadius: "4px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#28a745"
                  strokeWidth={2}
                  dot={{ r: 4, fill: "#28a745", strokeWidth: 0 }}
                  activeDot={{ r: 6, fill: "#28a745", strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card-status">
          <div className="section-header">
            <h3 className="section-title">Card Status Distribution</h3>
          </div>
          <div className="chart-content">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={cardStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  label={false}
                >
                  {cardStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e9ecef",
                    borderRadius: "4px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="donut-text">
              <span className="donut-label">Total Cards</span>
              <span className="donut-number">2,450</span>
            </div>
            <div className="donut-legend">
              {cardStatusData.map((entry, index) => (
                <div className="legend-item" key={index}>
                  <div
                    className="legend-color"
                    style={{ backgroundColor: entry.color }}
                  ></div>
                  <span>{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
