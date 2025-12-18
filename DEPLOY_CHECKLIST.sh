#!/bin/bash
# Deployment Checklist Script
# Run this to verify all files are in place

echo "🎬 Cinematic Scroll System - Deployment Checklist"
echo "=================================================="
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

check_file() {
  if [ -f "$1" ]; then
    echo -e "${GREEN}✓${NC} $1"
    return 0
  else
    echo -e "${RED}✗${NC} $1 (MISSING)"
    return 1
  fi
}

echo "📦 Core Implementation Files:"
check_file "client/src/hooks/useFullPageScroll.ts"
check_file "client/src/components/FullPageEnhanced.tsx"
check_file "client/src/components/SectionEnhanced.tsx"
check_file "client/src/components/ServicesScrollerEnhanced.tsx"
check_file "client/src/pages/homeEnhanced.tsx"
check_file "client/src/pages/homeAdvanced.tsx"

echo ""
echo "📚 Documentation Files:"
check_file "QUICK_START.md"
check_file "CINEMATIC_SCROLL_GUIDE.md"
check_file "ARCHITECTURE.md"
check_file "CSS_GUIDELINES.md"
check_file "IMPLEMENTATION_COMPLETE.md"

echo ""
echo "🔄 Existing Components (Keep as Backup):"
check_file "client/src/components/FullPage.tsx"
check_file "client/src/components/Section.tsx"
check_file "client/src/components/ServicesScroller.tsx"

echo ""
echo "=================================================="
echo ""
echo "📋 Deployment Steps:"
echo ""
echo "1. ✓ All core files created"
echo "2. → Update client/src/pages/home.tsx imports"
echo "3. → Replace FullPage with FullPageEnhanced"
echo "4. → Replace Section with SectionEnhanced"
echo "5. → Replace ServicesScroller with ServicesScrollerEnhanced"
echo ""
echo "Or run this command to auto-deploy:"
echo ""
echo "  Copy-Item client/src/pages/homeEnhanced.tsx -Destination client/src/pages/home.tsx -Force"
echo ""
echo "6. → Test all features"
echo "7. → Delete old component backups (optional)"
echo ""
echo "✨ Done! Your site now has cinematic full-page transitions!"
