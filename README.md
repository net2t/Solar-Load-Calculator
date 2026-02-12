# ☀️ Solar Load Calculator - Pakistan Edition

[![Netlify Status](https://api.netlify.com/api/v1/badges/0fdd04b6-34a6-434c-a9cd-c7502d2d5b1f/deploy-status)](https://solarload-calculator.netlify.app)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=netlify)](https://solarload-calculator.netlify.app)
[![GitHub stars](https://img.shields.io/github/stars/net2t/Solar-Load-Calculator?style=for-the-badge&logo=github)](https://github.com/net2t/Solar-Load-Calculator/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/net2t/Solar-Load-Calculator?style=for-the-badge&logo=github)](https://github.com/net2t/Solar-Load-Calculator/network)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Email](https://img.shields.io/badge/Email-net2outlawzz@gmail.com-red?style=for-the-badge&logo=gmail)](mailto:net2outlawzz@gmail.com)

> 🏠 **Calculate your home's solar load requirements with Pakistan-specific appliances and get the perfect inverter size recommendation.**

---

## 🌟 Features

### ⚡ Core Functionality
- **Real-time Load Calculation**: Instantly calculate total wattage and current requirements
- **Pakistan-Specific Appliances**: Pre-configured with common household appliances in Pakistan
- **Smart Inverter Sizing**: Get accurate KVA recommendations with safety margins
- **Custom Appliance Addition**: Add any appliance with custom wattage
- **Modern UI/UX**: Beautiful, responsive design with glass morphism effects

### 🏠 Pre-configured Appliances
- 🌪️ Ceiling Fans (Standard & Energy Saver)
- 💡 LED Lights & Tube Lights
- ❄️ Air Conditioners (1.0 & 1.5 Ton Inverter)
- 🧊 Refrigerators & Deep Freezers
- 💧 Water Pumps
- 🧺 Washing Machines
- 🔥 Iron (Istari)
- 📺 LED TVs
- 💻 Laptops & Mobile Chargers

### 📊 Calculations
- **Total Wattage**: Sum of all appliance loads
- **Current Calculation**: `I = P / (V × PF)` where PF = 0.8
- **Inverter Sizing**: `KVA = (Watts / PF × Safety Margin) / 1000`
- **Market-Ready Recommendations**: Common inverter sizes available in Pakistan

---

## 🚀 Live Demo

**🌐 [Try it now!](https://solarload-calculator.netlify.app)**

Experience the Solar Load Calculator in action - no installation required!

---

## 🛠️ Technology Stack

| Technology | Version | Description |
|------------|---------|-------------|
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript) | ES6+ | Core application logic |
| ![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?style=flat&logo=vite) | 7.3.1 | Build tool & dev server |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3) | Modern | Styling with glass morphism |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5) | Modern | Semantic markup |
| ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify) | - | Hosting & deployment |

---

## 📦 Installation & Setup

### Prerequisites
- ![Node.js](https://img.shields.io/badge/Node.js-22+-green?style=flat&logo=node.js) v22 or higher
- ![npm](https://img.shields.io/badge/npm-11+-red?style=flat&logo=npm) v11 or higher

### 📋 Clone & Run

```bash
# Clone the repository
git clone https://github.com/net2t/Solar-Load-Calculator.git

# Navigate to the project directory
cd Solar-Load-Calculator

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 🌐 Development
- **Dev Server**: `http://localhost:5173`
- **Hot Reload**: Enabled
- **Source Maps**: Included

---

## 🧮 How It Works

### 1. **Load Calculation**
```javascript
Total Watts = Σ (Appliance Wattage × Quantity)
Total Amps = Total Watts / (Voltage × Power Factor)
```

### 2. **Inverter Sizing**
```javascript
Required KVA = (Total Watts / Power Factor × Safety Margin) / 1000
```

### 3. **Market Recommendations**
The app suggests common inverter sizes available in Pakistan:
- 1.2, 2.2, 3.2, 4.2, 5.2, 6.2, 8, 10 KVA

---

## 🎨 UI/UX Features

### 🎯 Design Highlights
- **Glass Morphism**: Modern frosted glass effect
- **Responsive Design**: Works on all devices
- **Smooth Animations**: Micro-interactions and transitions
- **Intuitive Controls**: Easy-to-use quantity selectors
- **Real-time Updates**: Instant calculation feedback

### 📱 Mobile Optimized
- Touch-friendly interface
- Responsive grid layout
- Optimized for all screen sizes

---

## 🔧 Configuration

### ⚙️ Constants
```javascript
VOLTAGE = 230V          // Pakistan standard voltage
POWER_FACTOR = 0.8      // Standard power factor
SAFETY_MARGIN = 1.25    // 25% safety margin
```

### 🏠 Appliance Data
All appliance wattages are calibrated for Pakistani market standards and can be easily modified in `src/main.js`.

---

## 📁 Project Structure

```
solar-calculator/
├── 📁 src/
│   ├── 📄 main.js          # Main application logic
│   ├── 📄 style.css        # Styling and animations
│   └── 📄 counter.js       # Counter utilities
├── 📁 public/
│   └── 📁 dist/            # Production build
├── 📄 package.json         # Dependencies and scripts
├── 📄 netlify.toml         # Netlify configuration
├── 📄 README.md            # This file
└── 📄 .gitignore           # Git ignore rules
```

---

## 🚀 Deployment

### 🌐 Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main branch

### 🔧 Manual Deployment
```bash
# Build the project
npm run build

# Deploy the dist/ folder to any static hosting service
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. 🍴 **Fork** the repository
2. 🌿 **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. 💾 **Commit** your changes: `git commit -m 'Add amazing feature'`
4. 📤 **Push** to the branch: `git push origin feature/amazing-feature`
5. 🔃 **Open** a Pull Request

### 📝 Contribution Guidelines
- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact & Support

### 📧 Email
**net2outlawzz@gmail.com**

### 🌐 Social
- **GitHub**: [OutLawZ](https://github.com/net2t)
- **Damadam**: [OutLawZ](http://damadam.pk/users/OutLawZ)
- **Live Demo**: [solarload-calculator.netlify.app](https://solarload-calculator.netlify.app)

### 💬 Feedback
We'd love to hear your feedback! Please:
- 🐛 Report issues via GitHub Issues
- 💡 Suggest features via GitHub Discussions
- ⭐ Star the repository if you find it useful

---

## 🙏 Acknowledgments

- **Pakistan Solar Market** for appliance wattage standards
- **Vite Team** for the amazing build tool
- **Netlify** for seamless deployment
- **Open Source Community** for inspiration and support

---

<div align="center">

### 🌟 Made with ❤️ for Pakistan's Solar Revolution

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=netlify)](https://solarload-calculator.netlify.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/net2t/Solar-Load-Calculator)

*⚡ Powering Pakistan's Solar Future, One Home at a Time ⚡*

</div>
