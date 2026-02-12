# 🤝 Contributing to Solar Load Calculator

Thank you for your interest in contributing to the Solar Load Calculator - Pakistan Edition! This document provides guidelines and information for contributors.

## 🎯 How to Contribute

### 🐛 Reporting Bugs

- Use the [GitHub Issues](https://github.com/net2t/Solar-Load-Calculator/issues) page
- Provide a clear and descriptive title
- Include steps to reproduce the issue
- Add screenshots if applicable
- Specify your browser and device information

### 💡 Suggesting Features

- Open an issue with the "enhancement" label
- Provide a clear description of the feature
- Explain why this feature would be useful
- Consider including mockups or examples

### 🔧 Code Contributions

1. **Fork the Repository**

   ```bash
   git clone https://github.com/your-username/Solar-Load-Calculator.git
   ```

2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**

   - Follow the existing code style
   - Add comments for complex logic
   - Test your changes thoroughly

4. **Commit Your Changes**

   ```bash
   git commit -m "feat: add your feature description"
   ```

5. **Push to Your Branch**

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**

   - Provide a clear title and description
   - Reference any related issues
   - Include screenshots if applicable

## 📝 Development Guidelines

### 🎨 Code Style

- Use ES6+ JavaScript features
- Follow semantic naming conventions
- Add meaningful comments
- Keep functions small and focused
- Use consistent indentation (2 spaces)

### 🧪 Testing

- Test your changes in multiple browsers
- Check mobile responsiveness
- Verify calculations are accurate
- Ensure no console errors

### 📱 Mobile Compatibility

- Ensure all features work on mobile devices
- Test touch interactions
- Verify responsive design
- Check performance on slower devices

## 🏠 Adding New Appliances

To add a new Pakistan-specific appliance:

1. **Edit `src/main.js`**
2. **Add to the `initialAppliances` array:**
   ```javascript
   { id: newId, name: 'Appliance Name', watts: wattage, quantity: 0, icon: '🏠' }
   ```

3. **Consider:**
   - Use realistic wattage for Pakistani market
   - Choose an appropriate emoji icon
   - Test the calculation works correctly

## 🌍 Localization

The app is designed for Pakistan with:
- Voltage: 230V
- Power Factor: 0.8
- Safety Margin: 1.25
- Local appliance wattages
- Market-available inverter sizes

## 📋 Pull Request Checklist

Before submitting a PR, ensure:

- [ ] Code follows the project style guidelines
- [ ] All tests pass (if applicable)
- [ ] Mobile responsiveness is maintained
- [ ] No console errors
- [ ] Documentation is updated (if needed)
- [ ] Commit messages are clear and descriptive
- [ ] PR description explains the changes

## 🏷️ Commit Message Convention

Use semantic commit messages:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Examples:
```
feat: add custom appliance validation
fix: correct calculation for high wattage appliances
docs: update installation instructions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 22+
- npm 11+

### Setup

```bash
# Clone your fork
git clone https://github.com/your-username/Solar-Load-Calculator.git
```

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📞 Get Help

If you need help:

- 📧 Email: net2outlawzz@gmail.com

- 💬 GitHub Issues: Create an issue for questions

- 📖 Documentation: Check the README.md

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Special thanks in commit messages

---

Thank you for contributing to Pakistan's solar future! ⚡
