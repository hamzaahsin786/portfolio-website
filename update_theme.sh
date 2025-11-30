#!/bin/bash

# Update About.jsx
sed -i 's/bg-gradient-to-b from-dark to-gray-900/bg-gradient-to-b from-white to-gray-50/g' src/components/About.jsx
sed -i 's/bg-gray-800\/50/bg-white/g' src/components/About.jsx
sed -i 's/border-gray-700/border-gray-200/g' src/components/About.jsx
sed -i 's/text-gray-300/text-textSecondary/g' src/components/About.jsx
sed -i 's/text-gray-400/text-textSecondary/g' src/components/About.jsx

# Update Experience.jsx
sed -i 's/bg-gray-900/bg-gray-50/g' src/components/Experience.jsx
sed -i 's/bg-gray-800\/50/bg-white/g' src/components/Experience.jsx
sed -i 's/border-gray-700/border-gray-200/g' src/components/Experience.jsx
sed -i 's/text-gray-300/text-textSecondary/g' src/components/Experience.jsx
sed -i 's/text-gray-400/text-textSecondary/g' src/components/Experience.jsx
sed -i 's/text-white/text-textPrimary/g' src/components/Experience.jsx
sed -i 's/border-dark/border-white/g' src/components/Experience.jsx

# Update Projects.jsx
sed -i 's/bg-gradient-to-b from-gray-900 to-dark/bg-gradient-to-b from-gray-50 to-white/g' src/components/Projects.jsx
sed -i 's/bg-gray-800\/50/bg-white/g' src/components/Projects.jsx
sed -i 's/border-gray-700/border-gray-200/g' src/components/Projects.jsx
sed -i 's/text-gray-300/text-textSecondary/g' src/components/Projects.jsx
sed -i 's/text-gray-400/text-textSecondary/g' src/components/Projects.jsx
sed -i 's/text-white/text-textPrimary/g' src/components/Projects.jsx

# Update Skills.jsx
sed -i 's/bg-dark/bg-white/g' src/components/Skills.jsx
sed -i 's/bg-gray-800\/50/bg-white/g' src/components/Skills.jsx
sed -i 's/border-gray-700/border-gray-200/g' src/components/Skills.jsx
sed -i 's/text-gray-300/text-textSecondary/g' src/components/Skills.jsx
sed -i 's/text-gray-400/text-textSecondary/g' src/components/Skills.jsx
sed -i 's/bg-gray-700/bg-gray-200/g' src/components/Skills.jsx

echo "Theme update complete!"
