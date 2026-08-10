# 🌊 AquaWorld Dashboard

AquaWorld Dashboard is an enterprise-style React and TypeScript application designed to visualize, monitor, and manage global water-related information. The platform provides country insights, water monitoring stations, interactive maps, analytics dashboards, and reporting capabilities.

---

## 🚀 Features

### 🌍 Country Management
- View countries with flags
- Search countries
- Browse country information
- Country-level insights

### 💧 Water Monitoring Stations
- Add new monitoring stations
- Edit monitoring station details
- Delete monitoring stations
- Local Storage persistence
- Water quality tracking

### 🗺️ Interactive Maps
- React Leaflet integration
- OpenStreetMap support
- Water station location tracking
- Global monitoring visualization

### 📊 Analytics Dashboard
- Water quality overview
- Station statistics
- Global monitoring metrics
- KPI cards

### 📑 Reports
- Water monitoring reports
- Quality trends
- Future analytics integration

---

## 🛠️ Tech Stack

### Frontend
- React 19
- TypeScript
- Vite

### UI & Styling
- Custom CSS
- Enterprise Theme
- Responsive Layout

### APIs
- Countries API
- World Bank API

### Maps
- React Leaflet
- OpenStreetMap

### Data Visualization
- Recharts

### HTTP Client
- Axios

### Storage
- Browser Local Storage

---

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── Navbar.tsx
│   ├── WorldMap.tsx
│   ├── WaterCard.tsx
│   ├── WaterTable.tsx
│
├── pages/
│   ├── Countries.tsx
│   ├── WaterDashboard.tsx
│   ├── WaterStations.tsx
│   ├── CountryDetails.tsx
│   └── Reports.tsx
│
├── services/
│   ├── countryApi.ts
│   └── waterApi.ts
│
├── types/
│   ├── country.ts
│   ├── water.ts
│   └── station.ts
│
├── styles/
│   └── theme.css
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/aquaworld-dashboard.git
```

### Navigate to Project

```bash
cd aquaworld-dashboard
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Application URL:

```text
http://localhost:5173
```

---

## 📦 Required Packages

```bash
npm install axios
npm install react-router-dom
npm install leaflet react-leaflet
npm install recharts
npm install react-icons
npm install @types/leaflet --save-dev
```

---

## 💧 Water Monitoring Station CRUD

### Create
Add new water monitoring stations.

### Read
View all monitoring stations.

### Update
Modify station details.

### Delete
Remove monitoring stations.

### Example

```json
{
  "stationName": "Delhi Water Station",
  "country": "India",
  "latitude": 28.6139,
  "longitude": 77.2090,
  "waterQuality": 89
}
```

---

## 🌍 APIs

### Countries API

```text
https://countriesnow.space/api/v0.1/countries/flag/images
```

### World Bank Water Data API

```text
https://api.worldbank.org/v2/country/all/indicator/SH.H2O.BASW.ZS?format=json
```

---

## 📈 Dashboard Modules

### Dashboard Overview
- Total Countries
- Water Stations
- Water Quality Index
- Risk Areas

### Countries
- Search Countries
- Country Details
- National Insights

### Water Stations
- CRUD Operations
- Water Quality Tracking
- Persisted Data

### Maps
- Global Monitoring
- Station Locations
- GIS Visualization

### Reports
- Analytics
- Trend Reports
- Summary Dashboards

---

## 🎨 Enterprise Theme

```css
--primary: #0284c7;
--secondary: #06b6d4;
--success: #10b981;
--warning: #f59e0b;
--danger: #ef4444;
--background: #f8fafc;
--card: #ffffff;
```

---

## 🔮 Future Enhancements

- User Authentication
- Role-Based Access Control
- Dark Mode
- Export to PDF
- Export to Excel
- Weather Integration
- Flood Monitoring
- Drought Prediction
- AI-Based Water Quality Analysis
- Real-Time Monitoring Dashboard

---

## 📸 Screenshots

Add screenshots of:

- Dashboard
- Water Stations
- Countries Page
- Maps
- Reports

```text
docs/screenshots/dashboard.png
docs/screenshots/stations.png
```

---

## 👨‍💻 Author

**Mahendra Singh**

Lead - Engineering Application Development

---

## 📄 License

This project is licensed under the MIT License.

---

### ⭐ If you like this project, please give it a star!
