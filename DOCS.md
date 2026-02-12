# 📚 Solar Load Calculator - Technical Documentation

## 🏗️ Architecture Overview

The Solar Load Calculator is a **single-page application (SPA)** built with vanilla JavaScript and Vite. The application follows a modular architecture with clear separation of concerns.

### 📁 File Structure

```text
solar-calculator/
├── 📁 .github/
│   └── 📁 workflows/           # GitHub Actions workflows
│       ├── ci.yml             # Continuous Integration
│       └── netlify-deploy.yml # Netlify Deployment
├── 📁 src/
│   ├── 📄 main.js             # Main application logic
│   ├── 📄 style.css           # Styling and animations
│   └── 📄 counter.js          # Counter utilities
├── 📁 public/
│   └── 📁 dist/               # Production build output
├── 📄 package.json            # Project metadata and dependencies
├── 📄 netlify.toml            # Netlify configuration
├── 📄 README.md               # User documentation
├── 📄 CONTRIBUTING.md         # Contribution guidelines
├── 📄 LICENSE                 # MIT License
└── 📄 .gitignore              # Git ignore patterns
```

## ⚙️ Core Components

### 1. **Appliance Management System**
Located in `src/main.js`, this system handles:
- Pre-defined Pakistan-specific appliances
- Dynamic appliance addition
- Quantity management
- Real-time load calculation

### 2. **Calculation Engine**
```javascript
// Core calculation formulas
Total Watts = Σ (Appliance Wattage × Quantity)
Total Amps = Total Watts / (Voltage × Power Factor)
Required KVA = (Total Watts / Power Factor × Safety Margin) / 1000
```

### 3. **UI/UX System**
- Glass morphism design system
- Responsive grid layout
- Real-time updates
- Touch-friendly controls

## 🔧 Configuration

### Constants
```javascript
const VOLTAGE = 230;          // Pakistan standard voltage
const POWER_FACTOR = 0.8;     // Standard power factor
const SAFETY_MARGIN = 1.25;   // 25% safety margin
```

### Market Sizes
```javascript
const marketSizes = [1.2, 2.2, 3.2, 4.2, 5.2, 6.2, 8, 10]; // Common in PK
```

## 🎨 Design System

### Color Palette
- **Primary**: Glass morphism with backdrop blur
- **Accent**: Green for positive actions
- **Warning**: Orange for high load warnings
- **Text**: High contrast for readability

### Typography
- **Font**: Outfit (Google Fonts)
- **Weights**: 300, 400, 600, 700
- **Responsive**: Scales with viewport

### Animations
- **Micro-interactions**: Button hover states
- **Transitions**: Smooth quantity changes
- **Load animations**: Progress indicators

## 🌐 Deployment

### Netlify Configuration
```toml
[build]
  command = "npm run build"
  publish = "dist"
  functions = "netlify/functions"

[build.environment]
  NODE_VERSION = "22"
```

### GitHub Actions
- **CI Pipeline**: Multi-node version testing
- **Deployment**: Automatic Netlify deployment
- **Smoke Tests**: Build validation

## 📊 Performance

### Optimization Techniques
- **Code Splitting**: Vite automatic splitting
- **Asset Optimization**: CSS/JS minification
- **Image Optimization**: WebP format support
- **Caching**: Netlify edge caching

### Metrics
- **Performance**: 96/100 (Lighthouse)
- **Accessibility**: 91/100
- **Best Practices**: 100/100
- **SEO**: 90/100

## 🧪 Testing Strategy

### Smoke Tests
- Build process validation
- File existence checks
- Basic functionality testing

### Manual Testing
- Cross-browser compatibility
- Mobile responsiveness
- Calculation accuracy
- User interaction flows

## 🔒 Security

### Considerations
- **No server-side processing**: Client-side only
- **No data storage**: No personal data collection
- **HTTPS enforced**: Netlify automatic SSL
- **CSP headers**: Can be added if needed

## 🚀 Future Enhancements

### Planned Features
- [ ] Data persistence (localStorage)
- [ ] Advanced appliance categories
- [ ] Solar panel sizing recommendations
- [ ] Battery capacity calculations
- [ ] Cost estimation module
- [ ] Multi-language support (Urdu)
- [ ] Export functionality (PDF reports)

### Technical Improvements
- [ ] Unit testing with Jest
- [ ] E2E testing with Playwright
- [ ] TypeScript migration
- [ ] PWA capabilities
- [ ] Offline functionality

## 📱 Browser Support

### Target Browsers
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Safari**: 14+
- **Chrome Mobile**: 90+

### Features Used
- ES6+ JavaScript
- CSS Grid and Flexbox
- CSS Custom Properties
- Fetch API (for future features)
- Web Components (potential future use)

## 🔄 Development Workflow

### Local Development
```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run preview # Preview production build
```

### Git Workflow
- **main**: Production-ready code
- **develop**: Feature development
- **feature/***: Individual features
- **hotfix/***: Critical fixes

### Code Quality
- ESLint configuration (planned)
- Prettier formatting (planned)
- Conventional commits
- Pull request reviews

---

*This documentation is continuously updated as the project evolves.*
