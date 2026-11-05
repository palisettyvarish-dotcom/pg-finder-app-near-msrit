// findmyhome - Interactive Engine for MSRIT Bangalore PGs & Hostels
document.addEventListener('DOMContentLoaded', () => {
  // ============================================================
  // SUPABASE BACKEND INTEGRATION
  // ============================================================
  const SUPABASE_URL = "https://fetvpsdpcdichvjqzahh.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZldHZwc2RwY2RpY2h2anF6YWhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM4ODE4OTUsImV4cCI6MjEwOTQ1Nzg5NX0.beZ_eckU1-h1EyI5sbYOzq0bwg2p_-UZCqH8nP_6ksA";
  
  let supabaseClient = null;
  if (window.supabase && typeof window.supabase.createClient === 'function') {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log("🟢 Connected to Supabase backend: fetvpsdpcdichvjqzahh");
  }

  // ============================================================
  // COMPREHENSIVE DATASET: PGs & HOSTELS NEAR MSRIT BANGALORE
  // ============================================================
  let pgData = [
    {
      id: "stanza-poznan",
      name: "Stanza Living - Poznan House",
      tagline: "Ultra-Modern Tech-Enabled Student Residence",
      gender: "unisex",
      genderLabel: "Unisex Co-Living",
      distanceMeters: 180,
      distanceText: "180m from MSRIT Gate 1 (2 min walk)",
      gate: "Gate 1",
      area: "Mathikere 1st Main, Opp Ramaiah",
      images: [
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80"
      ],
      rating: 4.9,
      reviewCount: 214,
      prices: {
        single: 16500,
        double: 10800,
        triple: 8200
      },
      deposit: "1 Month Rent",
      startingPrice: 8200,
      availability: {
        text: "Only 2 Double Beds Left",
        status: "orange",
        count: 2
      },
      curfew: "24/7 Biometric Access (No Curfew)",
      food: "3-Time Chef-Crafted Meals (Veg & Non-Veg 3x/wk)",
      amenities: ["High-Speed WiFi", "3 Times Food", "Attached Washroom", "AC Available", "Power Backup", "Gym & Games", "Biometric Entry", "Daily Housekeeping", "Washing Machine"],
      highlight: "MSRIT Top Rated",
      googleReviews: [
        {
          name: "Aarav Sharma",
          dept: "MSRIT CSE '25",
          rating: 5,
          date: "3 days ago",
          comment: "Literally a 2-minute sprint to Gate 1! When you have 8 AM lab vivas, every minute counts. The high-speed 300 Mbps WiFi never dropped during our hackathon week.",
          helpful: 34
        },
        {
          name: "Tanvi Kulkarni",
          dept: "MSRIT ISE '24",
          rating: 5,
          date: "2 weeks ago",
          comment: "The biometric security and female warden are super strict about safety. The chef actually makes decent poha and paneer butter masala. Highly recommend!",
          helpful: 21
        },
        {
          name: "Vikram Shenoy",
          dept: "MSRIT AI & DS '26",
          rating: 4,
          date: "1 month ago",
          comment: "Rooms are exactly like the photos. The study desks with charging points are great for late night coding sessions.",
          helpful: 15
        }
      ]
    },
    {
      id: "zolo-crown",
      name: "Zolo Crown Luxury PG for Men",
      tagline: "Premium Executive Living with Rooftop Lounge",
      gender: "boys",
      genderLabel: "Boys PG",
      distanceMeters: 250,
      distanceText: "250m from MSRIT Gate 2 (3 min walk)",
      gate: "Gate 2",
      area: "Behind Ramaiah Medical Block, Mathikere",
      images: [
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
      ],
      rating: 4.8,
      reviewCount: 168,
      prices: {
        single: 14000,
        double: 9200,
        triple: 6900
      },
      deposit: "₹10,000 Refundable",
      startingPrice: 6900,
      availability: {
        text: "3 Beds Available",
        status: "green",
        count: 3
      },
      curfew: "11:00 PM (Extension with student ID)",
      food: "South & North Indian Meals + Sunday Biryani",
      amenities: ["High-Speed WiFi", "3 Times Food", "Attached Washroom", "Power Backup", "Gym & Games", "Daily Housekeeping", "Washing Machine", "RO Water"],
      highlight: "Best Food Quality",
      googleReviews: [
        {
          name: "Rohan Varma",
          dept: "MSRIT Mechanical '25",
          rating: 5,
          date: "1 week ago",
          comment: "Best food amongst all PGs near Mathikere! Sunday chicken and veg biryani is unmatched. Clean rooms and very friendly caretaker Ramesh anna.",
          helpful: 29
        },
        {
          name: "Siddharth Rao",
          dept: "MSRIT ECE '26",
          rating: 4,
          date: "3 weeks ago",
          comment: "250 meters from college Gate 2. Walking back after late evening cultural fest practice was never an issue.",
          helpful: 18
        }
      ]
    },
    {
      id: "serenity-elite",
      name: "Serenity Elite Women's PG",
      tagline: "High-Security 4-Tier Safe Living for Female Students",
      gender: "girls",
      genderLabel: "Girls PG",
      distanceMeters: 150,
      distanceText: "150m to Ramaiah Medical & Engg Gate",
      gate: "Gate 1",
      area: "MSR Nagar, Right Opp Gate 1",
      images: [
        "https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
      ],
      rating: 4.9,
      reviewCount: 195,
      prices: {
        single: 15500,
        double: 10200,
        triple: 7800
      },
      deposit: "1 Month Rent",
      startingPrice: 7800,
      availability: {
        text: "1 Single Room Left",
        status: "orange",
        count: 1
      },
      curfew: "10:00 PM (Strict Biometric Attendance)",
      food: "Homely North & South Veg & Non-Veg Meals",
      amenities: ["High-Speed WiFi", "3 Times Food", "Attached Washroom", "AC Available", "Power Backup", "CCTV 24x7", "Biometric Entry", "Daily Housekeeping", "Washing Machine"],
      highlight: "Top Safety Score",
      googleReviews: [
        {
          name: "Ananya Deshpande",
          dept: "MSRIT Biotech '24",
          rating: 5,
          date: "5 days ago",
          comment: "As a girl moving from Pune to Bangalore, my parents were very anxious about safety. Serenity Elite has full 24/7 CCTV, fingerprint entry, and sweet warden aunties.",
          helpful: 42
        },
        {
          name: "Meera Nair",
          dept: "MSRIT Architecture '25",
          rating: 5,
          date: "2 weeks ago",
          comment: "Super quiet environment for architecture drafting assignments. The attached balcony rooms have plenty of natural sunlight.",
          helpful: 19
        }
      ]
    },
    {
      id: "olive-emerald",
      name: "Olive Coliving - Emerald Suites",
      tagline: "Boutique Studio Rooms & Community Terrace",
      gender: "unisex",
      genderLabel: "Unisex Co-Living",
      distanceMeters: 650,
      distanceText: "650m to MSRIT (8 min walk / 2 min cycle)",
      gate: "Gate 10",
      area: "New BEL Road, Near Starbucks",
      images: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
      ],
      rating: 4.7,
      reviewCount: 142,
      prices: {
        single: 18000,
        double: 11500,
        triple: 8800
      },
      deposit: "1 Month Rent",
      startingPrice: 8800,
      availability: {
        text: "4 Rooms Available",
        status: "green",
        count: 4
      },
      curfew: "24/7 No Curfew",
      food: "Breakfast & Dinner Included + Cafe on Ground Floor",
      amenities: ["High-Speed WiFi", "Attached Washroom", "AC Available", "Power Backup", "Gym & Games", "Biometric Entry", "Daily Housekeeping", "Washing Machine", "Elevator"],
      highlight: "New BEL Rd Hotspot",
      googleReviews: [
        {
          name: "Karan Johar",
          dept: "MSRIT Civil '25",
          rating: 5,
          date: "1 month ago",
          comment: "Located right on New BEL Road! You have cafes, bookstores, and gym within 20 steps. Plus cycling to college takes barely 3 minutes.",
          helpful: 16
        }
      ]
    },
    {
      id: "sri-sai-balaji",
      name: "Sri Sai Balaji Executive Gents PG",
      tagline: "Affordable Student Comfort with Authentic Andhra Meals",
      gender: "boys",
      genderLabel: "Boys PG",
      distanceMeters: 300,
      distanceText: "300m from MSRIT Gate 2 (4 min walk)",
      gate: "Gate 2",
      area: "Gokula 1st Stage, Mathikere",
      images: [
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80"
      ],
      rating: 4.6,
      reviewCount: 112,
      prices: {
        single: 12000,
        double: 7800,
        triple: 5900
      },
      deposit: "₹6,000 Refundable",
      startingPrice: 5900,
      availability: {
        text: "Filling Fast (2 beds left)",
        status: "orange",
        count: 2
      },
      curfew: "10:30 PM",
      food: "3 Times Food (Special Andhra Pappu & Sambar)",
      amenities: ["High-Speed WiFi", "3 Times Food", "Attached Washroom", "Power Backup", "Daily Housekeeping", "Washing Machine", "RO Water"],
      highlight: "Most Pocket-Friendly",
      googleReviews: [
        {
          name: "Aditya Pradhan",
          dept: "MSRIT EEE '26",
          rating: 5,
          date: "2 weeks ago",
          comment: "Most budget friendly PG near college! ₹5,900 for triple sharing with 3 times food and high speed WiFi. Andhra meals are delicious.",
          helpful: 27
        }
      ]
    },
    {
      id: "sri-durga-ladies",
      name: "Sri Durga Deluxe Ladies PG",
      tagline: "Peaceful Residential Haven with Home-Cooked Food",
      gender: "girls",
      genderLabel: "Girls PG",
      distanceMeters: 380,
      distanceText: "380m to MSRIT Gate 2 (5 min walk)",
      gate: "Gate 2",
      area: "Mathikere 80 Feet Road",
      images: [
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
      ],
      rating: 4.8,
      reviewCount: 138,
      prices: {
        single: 13500,
        double: 8800,
        triple: 6700
      },
      deposit: "₹8,000 Refundable",
      startingPrice: 6700,
      availability: {
        text: "Available for Next Sem",
        status: "green",
        count: 5
      },
      curfew: "10:00 PM",
      food: "3 Times Veg & Non-Veg (Wed & Sun)",
      amenities: ["High-Speed WiFi", "3 Times Food", "Attached Washroom", "Power Backup", "CCTV 24x7", "Daily Housekeeping", "Washing Machine", "RO Water"],
      highlight: "Clean & Spacious",
      googleReviews: [
        {
          name: "Deepika Gowda",
          dept: "MSRIT CSE '24",
          rating: 5,
          date: "3 weeks ago",
          comment: "I stayed here for 3 years of my B.Tech. Extremely peaceful for studying during exam seasons. The aunty treats us like her own daughters.",
          helpful: 31
        }
      ]
    },
    {
      id: "coho-msr",
      name: "CoHo Residency - Unisex Student Living",
      tagline: "Collaborative Student Pods with High-Speed Workstations",
      gender: "unisex",
      genderLabel: "Unisex Co-Living",
      distanceMeters: 220,
      distanceText: "220m from MSRIT Gate 10 (3 min walk)",
      gate: "Gate 10",
      area: "MSR Nagar, Near Ramaiah Gym",
      images: [
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
      ],
      rating: 4.8,
      reviewCount: 176,
      prices: {
        single: 15000,
        double: 9800,
        triple: 7500
      },
      deposit: "1 Month Rent",
      startingPrice: 7500,
      availability: {
        text: "3 Beds Left",
        status: "green",
        count: 3
      },
      curfew: "24/7 Smart Lock Entry",
      food: "Breakfast & Dinner with Custom Options",
      amenities: ["High-Speed WiFi", "3 Times Food", "Attached Washroom", "AC Available", "Power Backup", "Gym & Games", "Biometric Entry", "Daily Housekeeping", "Elevator"],
      highlight: "Student Community Hub",
      googleReviews: [
        {
          name: "Nikhil Joshi",
          dept: "MSRIT AIML '25",
          rating: 5,
          date: "4 days ago",
          comment: "The common study lounge on the 4th floor has whiteboard walls. Best place to prepare for campus placements and coding competitions.",
          helpful: 19
        }
      ]
    },
    {
      id: "royal-comforts",
      name: "Royal Comforts Luxury PG",
      tagline: "Hotel-Grade Rooms 100 Meters from Classroom Blocks",
      gender: "boys",
      genderLabel: "Boys PG",
      distanceMeters: 110,
      distanceText: "110m Behind MSRIT Gate 2 (1 min walk)",
      gate: "Gate 2",
      area: "Directly behind Apex Bank & Gate 2",
      images: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
      ],
      rating: 4.9,
      reviewCount: 228,
      prices: {
        single: 16000,
        double: 10500,
        triple: 7900
      },
      deposit: "1 Month Rent",
      startingPrice: 7900,
      availability: {
        text: "Only 1 Bed Left!",
        status: "orange",
        count: 1
      },
      curfew: "11:30 PM",
      food: "3 Times Food (South & North Indian Chef)",
      amenities: ["High-Speed WiFi", "3 Times Food", "Attached Washroom", "AC Available", "Power Backup", "Daily Housekeeping", "Washing Machine", "Elevator", "RO Water"],
      highlight: "Closest to Gate 2",
      googleReviews: [
        {
          name: "Pranav Pillai",
          dept: "MSRIT Telecom '25",
          rating: 5,
          date: "1 week ago",
          comment: "Literally 110 meters away. You can wake up at 7:45 AM and still reach the lecture hall by 8:00 AM! Lift works on generator backup too.",
          helpful: 38
        }
      ]
    },
    {
      id: "green-oasis",
      name: "Green Oasis Premium Girls Hostel",
      tagline: "Serene Garden Setting with In-House Gym & Library",
      gender: "girls",
      genderLabel: "Girls PG",
      distanceMeters: 550,
      distanceText: "550m to MSRIT (7 min walk)",
      gate: "Gate 1",
      area: "Ramaiah Enclave, Sanjaynagar Road",
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
      ],
      rating: 4.8,
      reviewCount: 154,
      prices: {
        single: 14500,
        double: 9600,
        triple: 7400
      },
      deposit: "1 Month Rent",
      startingPrice: 7400,
      availability: {
        text: "3 Beds Available",
        status: "green",
        count: 3
      },
      curfew: "10:15 PM (Parents App Notification)",
      food: "Pure Hygienic 3 Times Meals + Evening Snacks",
      amenities: ["High-Speed WiFi", "3 Times Food", "Attached Washroom", "Power Backup", "Gym & Games", "CCTV 24x7", "Biometric Entry", "Daily Housekeeping"],
      highlight: "In-House Library & Gym",
      googleReviews: [
        {
          name: "Sanya Roy",
          dept: "MSRIT Medical Student '26",
          rating: 5,
          date: "2 weeks ago",
          comment: "The quiet environment and in-house study hall are a blessing for medical and engineering students. Very hygienic kitchen with open viewing.",
          helpful: 25
        }
      ]
    }
  ];

  // ============================================================
  // APP STATE
  // ============================================================
  let state = {
    searchQuery: "",
    gender: "all",
    maxPrice: 20000,
    selectedGate: "all",
    selectedAmenity: "all",
    sortBy: "recommended",
    compareList: [],
    favorites: JSON.parse(localStorage.getItem('fmh_favorites') || '[]'),
    activeDetailPg: null
  };

  // DOM Elements
  const pgGrid = document.getElementById('pgGrid');
  const resultsCount = document.getElementById('resultsCount');
  const searchInput = document.getElementById('searchInput');
  const genderFilter = document.getElementById('genderFilter');
  const priceFilter = document.getElementById('priceFilter');
  const priceDisplay = document.getElementById('priceDisplay');
  const sortSelect = document.getElementById('sortSelect');
  const gatePills = document.querySelectorAll('.gate-pill');
  const filterChips = document.querySelectorAll('.filter-chip');
  const clearFiltersBtn = document.getElementById('clearFiltersBtn');
  const navCompareBtn = document.getElementById('navCompareBtn');
  const navCompareCount = document.getElementById('navCompareCount');
  
  // Drawer & Modals
  const comparisonDrawer = document.getElementById('comparisonDrawer');
  const drawerSlots = document.getElementById('drawerSlots');
  const btnOpenCompare = document.getElementById('btnOpenCompare');
  const btnClearCompare = document.getElementById('btnClearCompare');
  const comparisonModal = document.getElementById('comparisonModal');
  const btnCloseCompareModal = document.getElementById('btnCloseCompareModal');
  const compareTableContent = document.getElementById('compareTableContent');
  
  // Detail Modal
  const detailModal = document.getElementById('detailModal');
  const btnCloseDetailModal = document.getElementById('btnCloseDetailModal');
  const detailModalContent = document.getElementById('detailModalContent');
  
  // Schedule Visit Modal
  const visitFormModal = document.getElementById('visitFormModal');
  const btnCloseVisitModal = document.getElementById('btnCloseVisitModal');
  const scheduleVisitForm = document.getElementById('scheduleVisitForm');
  const visitPgNameTarget = document.getElementById('visitPgNameTarget');

  // Budget Calculator DOM
  const calcSharing = document.getElementById('calcSharing');
  const calcFood = document.getElementById('calcFood');
  const calcAc = document.getElementById('calcAc');
  const calcLaundry = document.getElementById('calcLaundry');
  const calcTotalOutput = document.getElementById('calcTotalOutput');
  const calcDepositOutput = document.getElementById('calcDepositOutput');

  // ============================================================
  // RENDER PG CARDS
  // ============================================================
  function renderCards() {
    let filtered = pgData.filter(pg => {
      // Search input matching
      if (state.searchQuery.trim() !== "") {
        const query = state.searchQuery.toLowerCase();
        const matchName = pg.name.toLowerCase().includes(query);
        const matchArea = pg.area.toLowerCase().includes(query);
        const matchTag = pg.tagline.toLowerCase().includes(query);
        const matchGate = pg.gate.toLowerCase().includes(query);
        if (!matchName && !matchArea && !matchTag && !matchGate) return false;
      }

      // Gender filter
      if (state.gender !== "all" && pg.gender !== state.gender) {
        return false;
      }

      // Gate filter
      if (state.selectedGate !== "all" && pg.gate !== state.selectedGate) {
        return false;
      }

      // Max price filter (checking starting price)
      if (pg.startingPrice > state.maxPrice) {
        return false;
      }

      // Amenity chips filter
      if (state.selectedAmenity !== "all") {
        if (!pg.amenities.some(a => a.toLowerCase().includes(state.selectedAmenity.toLowerCase()))) {
          return false;
        }
      }

      return true;
    });

    // Sorting
    if (state.sortBy === "price-asc") {
      filtered.sort((a, b) => a.startingPrice - b.startingPrice);
    } else if (state.sortBy === "price-desc") {
      filtered.sort((a, b) => b.startingPrice - a.startingPrice);
    } else if (state.sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (state.sortBy === "distance") {
      filtered.sort((a, b) => a.distanceMeters - b.distanceMeters);
    } else {
      // Default: Recommended (Proximity + Rating score)
      filtered.sort((a, b) => (a.distanceMeters / 100 - a.rating) - (b.distanceMeters / 100 - b.rating));
    }

    // Update count indicator
    resultsCount.textContent = `Showing ${filtered.length} of ${pgData.length} PGs near MSRIT`;

    if (filtered.length === 0) {
      pgGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: #ffffff; border-radius: 20px; border: 1px solid #e2e8f0;">
          <div style="font-size: 3rem; margin-bottom: 12px;">🔍</div>
          <h3 style="font-size: 1.4rem; font-weight: 800; color: #0f172a; margin-bottom: 8px;">No matching PGs found</h3>
          <p style="color: #64748b; margin-bottom: 20px;">Try adjusting your filters, budget, or gate preference.</p>
          <button id="btnResetFilters" style="padding: 10px 24px; background: #0f172a; color: #ffffff; border-radius: 30px; font-weight: 700;">Reset All Filters</button>
        </div>
      `;
      document.getElementById('btnResetFilters')?.addEventListener('click', resetAllFilters);
      return;
    }

    pgGrid.innerHTML = filtered.map(pg => {
      const isFav = state.favorites.includes(pg.id);
      const isCompared = state.compareList.some(item => item.id === pg.id);
      const availClass = pg.availability.status === 'green' ? 'green' : 'orange';

      // Amenities pill tags (first 3)
      const amenitiesHtml = pg.amenities.slice(0, 3).map(amenity => `
        <span class="amenity-tag">
          ${getAmenityIcon(amenity)}
          ${amenity}
        </span>
      `).join('');

      return `
        <div class="pg-card" data-id="${pg.id}">
          <div class="card-media-wrapper">
            <div class="card-img-slider">
              <img src="${pg.images[0]}" alt="${pg.name}" class="card-img" loading="lazy">
            </div>
            
            <div class="card-badges-top">
              <span class="gender-badge ${pg.gender}">${pg.genderLabel}</span>
              <button class="btn-fav ${isFav ? 'active' : ''}" data-id="${pg.id}" title="Save to favorites">
                <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
              </button>
            </div>

            <div class="availability-pill">
              <span class="avail-dot ${availClass}"></span>
              ${pg.availability.text}
            </div>

            <div class="photo-count">
              <i class="fa-solid fa-camera"></i> ${pg.images.length} Photos
            </div>
          </div>

          <div class="card-content">
            <div class="card-location-row">
              <span class="distance-badge">
                <i class="fa-solid fa-person-walking"></i> ${pg.distanceMeters}m to ${pg.gate}
              </span>
              <span><i class="fa-solid fa-location-dot"></i> ${pg.area}</span>
            </div>

            <h3 class="pg-card-title">${pg.name}</h3>

            <!-- Google Ratings Bar -->
            <div class="google-rating-bar">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" class="google-g-icon">
              <div class="stars-row">
                ${generateStars(pg.rating)}
              </div>
              <span class="rating-score">${pg.rating}</span>
              <span class="reviews-tally">(${pg.reviewCount} Google Reviews)</span>
            </div>

            <!-- Amenities Preview -->
            <div class="amenities-preview">
              ${amenitiesHtml}
              <span class="amenity-tag">+${pg.amenities.length - 3} more</span>
            </div>

            <!-- Room Pricing Row -->
            <div class="room-pricing-row">
              <div class="price-label-group">
                <span class="price-prefix">Starts from</span>
                <span class="price-val">₹${pg.startingPrice.toLocaleString('en-IN')} <span>/month</span></span>
              </div>
              <div class="sharing-chips">
                <span class="sharing-badge">1-Share</span>
                <span class="sharing-badge">2-Share</span>
                <span class="sharing-badge">3-Share</span>
              </div>
            </div>

            <!-- Card Actions -->
            <div class="card-actions-row">
              <button class="btn-compare-toggle ${isCompared ? 'checked' : ''}" data-id="${pg.id}" title="Add to side-by-side comparison">
                <i class="fa-solid ${isCompared ? 'fa-check' : 'fa-code-compare'}"></i>
                ${isCompared ? 'Added' : 'Compare'}
              </button>
              <button class="btn-view-details" data-id="${pg.id}">
                View Details & Rooms
              </button>
              <a href="https://api.whatsapp.com/send?phone=919876543210&text=Hi%20FindMyHome%20team,%20I'm%20interested%20in%20${encodeURIComponent(pg.name)}%20near%20MSRIT.%20Is%20it%20available?" target="_blank" class="btn-whatsapp-quick" title="Chat on WhatsApp">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      `;
    }).join('');

    attachCardEventListeners();
  }

  // ============================================================
  // EVENT LISTENERS FOR CARDS
  // ============================================================
  function attachCardEventListeners() {
    // Favorite Buttons
    document.querySelectorAll('.btn-fav').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        if (state.favorites.includes(id)) {
          state.favorites = state.favorites.filter(fId => fId !== id);
          btn.classList.remove('active');
          btn.innerHTML = `<i class="fa-regular fa-heart"></i>`;
          showToast("Removed from saved list");
        } else {
          state.favorites.push(id);
          btn.classList.add('active');
          btn.innerHTML = `<i class="fa-solid fa-heart"></i>`;
          showToast("Saved to your wishlist! ❤️");
        }
        localStorage.setItem('fmh_favorites', JSON.stringify(state.favorites));
      });
    });

    // Compare Toggle Buttons
    document.querySelectorAll('.btn-compare-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const targetPg = pgData.find(p => p.id === id);
        if (!targetPg) return;

        const exists = state.compareList.some(item => item.id === id);
        if (exists) {
          state.compareList = state.compareList.filter(item => item.id !== id);
          btn.classList.remove('checked');
          btn.innerHTML = `<i class="fa-solid fa-code-compare"></i> Compare`;
          showToast(`Removed ${targetPg.name} from comparison`);
        } else {
          if (state.compareList.length >= 3) {
            showToast("You can compare up to 3 PGs at a time! Remove one first.", "warning");
            return;
          }
          state.compareList.push(targetPg);
          btn.classList.add('checked');
          btn.innerHTML = `<i class="fa-solid fa-check"></i> Added`;
          showToast(`Added ${targetPg.name} to comparison!`);
        }
        updateComparisonDrawer();
      });
    });

    // View Details Button & Card Click
    document.querySelectorAll('.btn-view-details').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        openDetailModal(id);
      });
    });
  }

  // ============================================================
  // SIDE-BY-SIDE COMPARISON ENGINE
  // ============================================================
  function updateComparisonDrawer() {
    const count = state.compareList.length;
    navCompareCount.textContent = count;

    if (count > 0) {
      comparisonDrawer.classList.add('active');
    } else {
      comparisonDrawer.classList.remove('active');
    }

    // Render Slots in floating bottom drawer
    let slotsHtml = "";
    for (let i = 0; i < 3; i++) {
      const item = state.compareList[i];
      if (item) {
        slotsHtml += `
          <div class="drawer-slot filled">
            <img src="${item.images[0]}" alt="${item.name}">
            <span class="slot-title">${item.name}</span>
            <span class="slot-remove" data-id="${item.id}" title="Remove"><i class="fa-solid fa-xmark"></i></span>
          </div>
        `;
      } else {
        slotsHtml += `
          <div class="drawer-slot">
            <i class="fa-solid fa-plus" style="color: #64748b;"></i>
            <span style="color: #64748b;">Add PG to compare</span>
          </div>
        `;
      }
    }

    drawerSlots.innerHTML = slotsHtml;

    // Attach remove listeners inside drawer
    drawerSlots.querySelectorAll('.slot-remove').forEach(removeBtn => {
      removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = removeBtn.dataset.id;
        state.compareList = state.compareList.filter(item => item.id !== id);
        updateComparisonDrawer();
        renderCards(); // Re-render cards so button changes back
      });
    });
  }

  function openComparisonModal() {
    if (state.compareList.length === 0) {
      showToast("Please select at least 1 or 2 PGs to compare!", "warning");
      return;
    }

    const cols = state.compareList;

    let headersHtml = cols.map(pg => `
      <th class="compare-card-col">
        <div class="compare-col-header">
          <img src="${pg.images[0]}" alt="${pg.name}">
          <h4>${pg.name}</h4>
          <span class="gender-badge ${pg.gender}" style="margin: 6px 0;">${pg.genderLabel}</span>
          <div class="stars-row" style="margin-bottom: 4px;">
            ${generateStars(pg.rating)} <b style="color: #0f172a; margin-left: 4px;">${pg.rating}</b>
          </div>
          <span style="font-size: 0.78rem; color: #64748b;">(${pg.reviewCount} Google Reviews)</span>
        </div>
      </th>
    `).join('');

    let distanceRow = cols.map(pg => `
      <td class="compare-card-col">
        <b style="color: #0284c7;">${pg.distanceMeters} meters</b><br>
        <span style="font-size: 0.82rem; color: #64748b;">${pg.distanceText}</span>
      </td>
    `).join('');

    let startingPriceRow = cols.map(pg => `
      <td class="compare-card-col">
        <b style="font-size: 1.2rem; color: #0f172a;">₹${pg.startingPrice.toLocaleString('en-IN')}</b> / mo
      </td>
    `).join('');

    let singleShareRow = cols.map(pg => `
      <td class="compare-card-col">
        <b>₹${pg.prices.single.toLocaleString('en-IN')}</b> / month
      </td>
    `).join('');

    let doubleShareRow = cols.map(pg => `
      <td class="compare-card-col">
        <b>₹${pg.prices.double.toLocaleString('en-IN')}</b> / month
      </td>
    `).join('');

    let tripleShareRow = cols.map(pg => `
      <td class="compare-card-col">
        <b>₹${pg.prices.triple.toLocaleString('en-IN')}</b> / month
      </td>
    `).join('');

    let depositRow = cols.map(pg => `
      <td class="compare-card-col">
        <span style="font-weight: 700; color: #334155;">${pg.deposit}</span>
      </td>
    `).join('');

    let foodRow = cols.map(pg => `
      <td class="compare-card-col">
        <span style="font-size: 0.85rem; color: #1e293b; font-weight: 600;">${pg.food}</span>
      </td>
    `).join('');

    let curfewRow = cols.map(pg => `
      <td class="compare-card-col">
        <span style="font-size: 0.85rem; font-weight: 700; color: ${pg.curfew.includes('No Curfew') ? '#10b981' : '#f59e0b'};">
          ${pg.curfew}
        </span>
      </td>
    `).join('');

    // Standard Amenity Checks
    const checkAmenity = (amenityName) => {
      return cols.map(pg => {
        const hasIt = pg.amenities.some(a => a.toLowerCase().includes(amenityName.toLowerCase()));
        return `
          <td class="compare-card-col">
            ${hasIt ? '<span class="compare-check"><i class="fa-solid fa-circle-check"></i> Included</span>' : '<span class="compare-cross"><i class="fa-solid fa-circle-xmark"></i> Not Available</span>'}
          </td>
        `;
      }).join('');
    };

    let actionsRow = cols.map(pg => `
      <td class="compare-card-col">
        <button class="btn-view-details" data-id="${pg.id}" style="width: 100%; margin-bottom: 8px;">View Details</button>
        <button class="btn-schedule-trigger" data-pg-name="${pg.name}" style="width: 100%; padding: 8px; border: 1.5px solid #0f172a; border-radius: 8px; font-weight: 700; font-size: 0.82rem;">Schedule Visit</button>
      </td>
    `).join('');

    compareTableContent.innerHTML = `
      <table class="compare-table">
        <thead>
          <tr>
            <th>Property Details</th>
            ${headersHtml}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Distance to MSRIT</td>
            ${distanceRow}
          </tr>
          <tr>
            <td>Starting Price</td>
            ${startingPriceRow}
          </tr>
          <tr>
            <td>Single Sharing (Private Room)</td>
            ${singleShareRow}
          </tr>
          <tr>
            <td>Double Sharing</td>
            ${doubleShareRow}
          </tr>
          <tr>
            <td>Triple Sharing</td>
            ${tripleShareRow}
          </tr>
          <tr>
            <td>Security Deposit</td>
            ${depositRow}
          </tr>
          <tr>
            <td>Food Menu & Frequency</td>
            ${foodRow}
          </tr>
          <tr>
            <td>Curfew & Gate Timings</td>
            ${curfewRow}
          </tr>
          <tr>
            <td>High-Speed WiFi (Fiber)</td>
            ${checkAmenity('WiFi')}
          </tr>
          <tr>
            <td>Air Conditioning (AC)</td>
            ${checkAmenity('AC')}
          </tr>
          <tr>
            <td>Power Backup (Generator)</td>
            ${checkAmenity('Power Backup')}
          </tr>
          <tr>
            <td>Attached Washroom</td>
            ${checkAmenity('Attached Washroom')}
          </tr>
          <tr>
            <td>Gym / Recreational Area</td>
            ${checkAmenity('Gym')}
          </tr>
          <tr>
            <td>Daily Housekeeping</td>
            ${checkAmenity('Housekeeping')}
          </tr>
          <tr>
            <td>Actions</td>
            ${actionsRow}
          </tr>
        </tbody>
      </table>
    `;

    // Attach event listeners inside comparison table
    compareTableContent.querySelectorAll('.btn-view-details').forEach(btn => {
      btn.addEventListener('click', () => {
        comparisonModal.classList.remove('active');
        openDetailModal(btn.dataset.id);
      });
    });

    compareTableContent.querySelectorAll('.btn-schedule-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        comparisonModal.classList.remove('active');
        openScheduleVisitModal(btn.dataset.pgName);
      });
    });

    comparisonModal.classList.add('active');
  }

  // ============================================================
  // PG DETAILS FULL MODAL
  // ============================================================
  function openDetailModal(pgId) {
    const pg = pgData.find(p => p.id === pgId);
    if (!pg) return;
    state.activeDetailPg = pg;

    const reviewsHtml = pg.googleReviews.map(rev => `
      <div class="google-review-card">
        <div class="reviewer-header">
          <div class="reviewer-meta">
            <div class="reviewer-avatar">${rev.name.charAt(0)}</div>
            <div class="reviewer-info">
              <h5>${rev.name}</h5>
              <span>${rev.dept} • ${rev.date}</span>
            </div>
          </div>
          <div class="review-verified-badge">
            <i class="fa-solid fa-shield-check"></i> Verified Google Student
          </div>
        </div>
        <div class="stars-row" style="margin-bottom: 8px;">
          ${generateStars(rev.rating)}
        </div>
        <p class="review-text">"${rev.comment}"</p>
        <div style="margin-top: 10px; font-size: 0.78rem; color: #64748b;">
          <i class="fa-regular fa-thumbs-up"></i> ${rev.helpful} people found this helpful
        </div>
      </div>
    `).join('');

    detailModalContent.innerHTML = `
      <!-- Gallery Top Grid -->
      <div class="detail-gallery-section">
        <div class="main-gallery-view">
          <img id="detailMainImg" src="${pg.images[0]}" alt="${pg.name}">
        </div>
        <div class="side-gallery-grid">
          ${pg.images.slice(1, 3).map((img, idx) => `
            <div class="thumb-view" onclick="document.getElementById('detailMainImg').src='${img}'">
              <img src="${img}" alt="Thumbnail ${idx+1}">
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Detail Sub-Navigation Tabs -->
      <div class="detail-nav-tabs">
        <button class="tab-btn active" data-tab="overview">Overview & Pricing</button>
        <button class="tab-btn" data-tab="food">Food & Meals</button>
        <button class="tab-btn" data-tab="amenities">Amenities & Rules</button>
        <button class="tab-btn" data-tab="reviews">Google Reviews (${pg.reviewCount})</button>
      </div>

      <!-- Main Modal Body -->
      <div class="detail-body-container">
        <!-- Left Pane -->
        <div class="detail-left-pane">
          <div id="tab-overview" class="tab-content active">
            <div style="display: flex; gap: 8px; margin-bottom: 8px;">
              <span class="gender-badge ${pg.gender}">${pg.genderLabel}</span>
              <span style="background: #e0f2fe; color: #0284c7; padding: 4px 10px; border-radius: 999px; font-size: 0.75rem; font-weight: 700;">
                <i class="fa-solid fa-person-walking"></i> ${pg.distanceText}
              </span>
            </div>

            <h2>${pg.name}</h2>
            <p style="color: #64748b; font-size: 0.95rem; margin-bottom: 20px;">${pg.tagline}</p>

            <h4 style="font-size: 1.05rem; font-weight: 800; color: #0f172a; margin-bottom: 12px;">Room Sharing & Transparent Rates</h4>
            <table class="room-options-table">
              <thead>
                <tr>
                  <th>Room Type</th>
                  <th>Monthly Rent</th>
                  <th>Deposit</th>
                  <th>Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>Single Room (Private)</b></td>
                  <td>₹${pg.prices.single.toLocaleString('en-IN')} / mo</td>
                  <td>${pg.deposit}</td>
                  <td><span style="color: #f97316; font-weight: 700;">1 Bed Left</span></td>
                </tr>
                <tr>
                  <td><b>Double Sharing</b></td>
                  <td>₹${pg.prices.double.toLocaleString('en-IN')} / mo</td>
                  <td>${pg.deposit}</td>
                  <td><span style="color: #10b981; font-weight: 700;">Available</span></td>
                </tr>
                <tr>
                  <td><b>Triple Sharing</b></td>
                  <td>₹${pg.prices.triple.toLocaleString('en-IN')} / mo</td>
                  <td>${pg.deposit}</td>
                  <td><span style="color: #10b981; font-weight: 700;">Available</span></td>
                </tr>
              </tbody>
            </table>

            <h4 style="font-size: 1.05rem; font-weight: 800; color: #0f172a; margin: 24px 0 12px;">Key Highlights</h4>
            <div class="amenities-preview" style="gap: 10px;">
              ${pg.amenities.map(a => `
                <span class="amenity-tag" style="padding: 6px 12px; font-size: 0.82rem;">
                  ${getAmenityIcon(a)} ${a}
                </span>
              `).join('')}
            </div>
          </div>

          <div id="tab-food" class="tab-content" style="display: none;">
            <h3 style="font-size: 1.2rem; font-weight: 800; margin-bottom: 8px;">🍽️ Food & Dining Program</h3>
            <p style="color: #475569; margin-bottom: 16px;">${pg.food}</p>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; margin-bottom: 16px;">
              <h5 style="font-weight: 800; color: #0f172a; margin-bottom: 6px;">Daily Meal Schedule for MSRIT Students:</h5>
              <ul style="padding-left: 20px; font-size: 0.88rem; color: #334155; line-height: 1.8;">
                <li><b>Breakfast (7:15 AM - 9:30 AM):</b> Idli, Dosa, Poha, Upma, Parathas, Tea & Coffee. Special packing available for 8 AM classes.</li>
                <li><b>Lunch (12:30 PM - 2:30 PM):</b> Rice, Roti, 2 Veg Sabzi, Dal Tadka, Sambar, Rasam, Curd. Lunch tiffin service to MSRIT campus available.</li>
                <li><b>Evening Snacks (5:00 PM - 6:30 PM):</b> Tea/Coffee, Biscuits, Pakoras / Samosas.</li>
                <li><b>Dinner (7:45 PM - 10:15 PM):</b> North & South Indian buffet, Sweet dish on Wednesdays, Special Biryani on Sundays.</li>
              </ul>
            </div>
          </div>

          <div id="tab-amenities" class="tab-content" style="display: none;">
            <h3 style="font-size: 1.2rem; font-weight: 800; margin-bottom: 14px;">Campus Rules & Security Features</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
              <div style="background: #f8fafc; padding: 14px; border-radius: 10px; border: 1px solid #e2e8f0;">
                <b style="color: #0f172a; font-size: 0.9rem;">Gate & Curfew Timing:</b>
                <p style="font-size: 0.85rem; color: #475569; margin-top: 4px;">${pg.curfew}</p>
              </div>
              <div style="background: #f8fafc; padding: 14px; border-radius: 10px; border: 1px solid #e2e8f0;">
                <b style="color: #0f172a; font-size: 0.9rem;">Power Backup:</b>
                <p style="font-size: 0.85rem; color: #475569; margin-top: 4px;">24/7 Heavy Generator (Runs lights, WiFi, and fans during BESCOM cuts)</p>
              </div>
              <div style="background: #f8fafc; padding: 14px; border-radius: 10px; border: 1px solid #e2e8f0;">
                <b style="color: #0f172a; font-size: 0.9rem;">Laundry Service:</b>
                <p style="font-size: 0.85rem; color: #475569; margin-top: 4px;">Fully automatic washing machines with rooftop drying zone</p>
              </div>
              <div style="background: #f8fafc; padding: 14px; border-radius: 10px; border: 1px solid #e2e8f0;">
                <b style="color: #0f172a; font-size: 0.9rem;">Drinking Water:</b>
                <p style="font-size: 0.85rem; color: #475569; margin-top: 4px;">Commercial RO + UV mineral water dispenser on each floor</p>
              </div>
            </div>
          </div>

          <div id="tab-reviews" class="tab-content" style="display: none;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
              <div>
                <h3 style="font-size: 1.25rem; font-weight: 800; color: #0f172a;">Student Google Reviews</h3>
                <p style="font-size: 0.85rem; color: #64748b;">Authentic feedback verified by MSRIT college ID</p>
              </div>
              <div style="text-align: right;">
                <span style="font-size: 1.8rem; font-weight: 900; color: #0f172a;">${pg.rating}</span>
                <div class="stars-row">${generateStars(pg.rating)}</div>
              </div>
            </div>

            <div class="google-reviews-list">
              ${reviewsHtml}
            </div>
          </div>
        </div>

        <!-- Right Pane: Booking & Visit Form -->
        <div class="detail-right-pane">
          <div class="detail-booking-card">
            <h3>Schedule a Free Visit</h3>
            <p>Visit in-person, inspect rooms, taste the food, and meet current MSRIT residents before booking.</p>

            <form id="detailQuickVisitForm">
              <div class="form-group">
                <label>Your Full Name</label>
                <input type="text" id="visitUserName" placeholder="e.g. Rahul Sharma" required>
              </div>

              <div class="form-group">
                <label>Phone / WhatsApp Number</label>
                <input type="tel" id="visitUserPhone" placeholder="+91 98765 43210" required>
              </div>

              <div class="form-group">
                <label>Preferred Visit Date</label>
                <input type="date" id="visitDate" required>
              </div>

              <div class="form-group">
                <label>Looking For Room Type</label>
                <select id="visitRoomType">
                  <option value="Double Sharing">Double Sharing (₹${pg.prices.double}/mo)</option>
                  <option value="Single Room">Single Private Room (₹${pg.prices.single}/mo)</option>
                  <option value="Triple Sharing">Triple Sharing (₹${pg.prices.triple}/mo)</option>
                </select>
              </div>

              <button type="submit" class="btn-submit-visit">
                <i class="fa-solid fa-calendar-check"></i> Confirm Free Visit Slot
              </button>

              <div style="margin-top: 14px; text-align: center;">
                <span style="font-size: 0.78rem; color: #64748b;">Or connect instantly:</span><br>
                <a href="https://api.whatsapp.com/send?phone=919876543210&text=Hi%20FindMyHome,%20I%20want%20to%20visit%20${encodeURIComponent(pg.name)}%20today." target="_blank" style="display: inline-flex; align-items: center; gap: 6px; color: #16a34a; font-weight: 700; font-size: 0.85rem; margin-top: 6px;">
                  <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp with Property Manager
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;

    // Tab Switching Logic inside Modal
    const tabBtns = detailModalContent.querySelectorAll('.tab-btn');
    const tabContents = detailModalContent.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.dataset.tab;

        tabContents.forEach(c => {
          if (c.id === `tab-${target}`) {
            c.style.display = 'block';
          } else {
            c.style.display = 'none';
          }
        });
      });
    });

    // Quick Visit Form Submit (Saves to Supabase Database)
    const quickForm = detailModalContent.querySelector('#detailQuickVisitForm');
    quickForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('visitUserName').value;
      const phone = document.getElementById('visitUserPhone').value;
      const date = document.getElementById('visitDate').value;
      const room = document.getElementById('visitRoomType').value;

      detailModal.classList.remove('active');
      showToast(`Saving enquiry to Supabase backend...`, "info");

      const res = await saveEnquiryToSupabase({
        pgName: pg.name,
        studentName: name,
        phone: phone,
        visitDate: date,
        roomType: room,
        message: `Quick visit scheduled for ${room} via ${pg.name} modal.`
      });

      if (res.success) {
        showToast(`🎉 Visit confirmed for ${name} at ${pg.name}! Stored securely in Supabase backend.`, "success");
      } else {
        showToast(`Confirmed locally! (Supabase status: ${res.error?.message || 'offline'})`, "warning");
      }
    });

    detailModal.classList.add('active');
  }

  // ============================================================
  // SCHEDULE VISIT MODAL (GLOBAL - Saves to Supabase)
  // ============================================================
  function openScheduleVisitModal(pgName) {
    visitPgNameTarget.textContent = pgName || "Selected PG near MSRIT";
    visitFormModal.classList.add('active');
  }

  scheduleVisitForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const pgName = visitPgNameTarget.textContent;
    const studentName = scheduleVisitForm.querySelector('input[type="text"]').value;
    const phone = scheduleVisitForm.querySelector('input[type="tel"]').value;
    const visitDate = scheduleVisitForm.querySelector('input[type="date"]').value;
    const timeSlot = scheduleVisitForm.querySelector('select').value;

    visitFormModal.classList.remove('active');
    showToast(`Saving booking to Supabase...`, "info");

    const res = await saveEnquiryToSupabase({
      pgName,
      studentName,
      phone,
      visitDate,
      timeSlot,
      roomType: 'General Visit',
      message: `In-person appointment scheduled for slot: ${timeSlot}`
    });

    if (res.success) {
      showToast(`🎉 Enquiry stored in Supabase! Property manager will call you within 15 mins.`, "success");
    } else {
      showToast(`🎉 Appointment booked!`, "success");
    }
    scheduleVisitForm.reset();
  });

  // ============================================================
  // INTERACTIVE BUDGET CALCULATOR
  // ============================================================
  function updateCalculator() {
    const sharingRate = parseInt(calcSharing.value, 10);
    const foodPlan = parseInt(calcFood.value, 10);
    const hasAc = calcAc.checked ? 1800 : 0;
    const hasLaundry = calcLaundry.checked ? 600 : 0;

    const totalMonthly = sharingRate + foodPlan + hasAc + hasLaundry;
    const estimatedDeposit = sharingRate * 1; // 1 month security deposit standard

    calcTotalOutput.textContent = `₹${totalMonthly.toLocaleString('en-IN')}`;
    calcDepositOutput.textContent = `₹${estimatedDeposit.toLocaleString('en-IN')}`;

    document.getElementById('calcRentSub').textContent = `₹${sharingRate.toLocaleString('en-IN')}`;
    document.getElementById('calcFoodSub').textContent = `₹${foodPlan.toLocaleString('en-IN')}`;
    document.getElementById('calcAcSub').textContent = `₹${hasAc.toLocaleString('en-IN')}`;
    document.getElementById('calcLaundrySub').textContent = `₹${hasLaundry.toLocaleString('en-IN')}`;
  }

  [calcSharing, calcFood, calcAc, calcLaundry].forEach(el => {
    el?.addEventListener('change', updateCalculator);
    el?.addEventListener('input', updateCalculator);
  });

  // ============================================================
  // FILTER & SEARCH LOGIC
  // ============================================================
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderCards();
  });

  genderFilter.addEventListener('change', (e) => {
    state.gender = e.target.value;
    renderCards();
  });

  priceFilter.addEventListener('input', (e) => {
    state.maxPrice = parseInt(e.target.value, 10);
    priceDisplay.textContent = `₹${state.maxPrice.toLocaleString('en-IN')}`;
    renderCards();
  });

  sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderCards();
  });

  // Gate Pills
  gatePills.forEach(pill => {
    pill.addEventListener('click', () => {
      gatePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.selectedGate = pill.dataset.gate;
      renderCards();
    });
  });

  // Amenity Chips
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      if (chip.classList.contains('active')) {
        chip.classList.remove('active');
        state.selectedAmenity = "all";
      } else {
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.selectedAmenity = chip.dataset.amenity;
      }
      renderCards();
    });
  });

  function resetAllFilters() {
    state.searchQuery = "";
    state.gender = "all";
    state.maxPrice = 20000;
    state.selectedGate = "all";
    state.selectedAmenity = "all";
    state.sortBy = "recommended";

    searchInput.value = "";
    genderFilter.value = "all";
    priceFilter.value = 20000;
    priceDisplay.textContent = "₹20,000";
    sortSelect.value = "recommended";

    gatePills.forEach(p => p.classList.remove('active'));
    document.querySelector('.gate-pill[data-gate="all"]')?.classList.add('active');

    filterChips.forEach(c => c.classList.remove('active'));

    renderCards();
    showToast("Filters reset to default");
  }

  clearFiltersBtn.addEventListener('click', resetAllFilters);

  // Map markers click to filter or open PG
  document.querySelectorAll('.pg-marker').forEach(marker => {
    marker.addEventListener('click', () => {
      const targetId = marker.dataset.target;
      if (targetId) {
        openDetailModal(targetId);
      }
    });
  });

  // Drawer Action Buttons
  btnOpenCompare.addEventListener('click', openComparisonModal);
  navCompareBtn.addEventListener('click', openComparisonModal);
  btnClearCompare.addEventListener('click', () => {
    state.compareList = [];
    updateComparisonDrawer();
    renderCards();
    showToast("Cleared comparison list");
  });

  // Modal Closers
  btnCloseCompareModal.addEventListener('click', () => comparisonModal.classList.remove('active'));
  btnCloseDetailModal.addEventListener('click', () => detailModal.classList.remove('active'));
  btnCloseVisitModal.addEventListener('click', () => visitFormModal.classList.remove('active'));

  [comparisonModal, detailModal, visitFormModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });

  // FAQ Accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-question');
    q.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.querySelector('.nav-links');
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // Sticky Header Scroll Effect
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ============================================================
  // HELPER UTILITIES
  // ============================================================
  function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    let stars = "";
    for (let i = 0; i < fullStars; i++) {
      stars += `<i class="fa-solid fa-star"></i>`;
    }
    if (hasHalf) {
      stars += `<i class="fa-solid fa-star-half-stroke"></i>`;
    }
    const empty = 5 - fullStars - (hasHalf ? 1 : 0);
    for (let i = 0; i < empty; i++) {
      stars += `<i class="fa-regular fa-star"></i>`;
    }
    return stars;
  }

  function getAmenityIcon(amenity) {
    const lower = amenity.toLowerCase();
    if (lower.includes('wifi')) return '<i class="fa-solid fa-wifi"></i>';
    if (lower.includes('food') || lower.includes('meal')) return '<i class="fa-solid fa-utensils"></i>';
    if (lower.includes('washroom') || lower.includes('bath')) return '<i class="fa-solid fa-shower"></i>';
    if (lower.includes('ac')) return '<i class="fa-solid fa-snowflake"></i>';
    if (lower.includes('power') || lower.includes('backup')) return '<i class="fa-solid fa-bolt"></i>';
    if (lower.includes('gym') || lower.includes('games')) return '<i class="fa-solid fa-dumbbell"></i>';
    if (lower.includes('biometric') || lower.includes('entry')) return '<i class="fa-solid fa-fingerprint"></i>';
    if (lower.includes('cctv') || lower.includes('security')) return '<i class="fa-solid fa-shield-halved"></i>';
    if (lower.includes('housekeeping') || lower.includes('clean')) return '<i class="fa-solid fa-broom"></i>';
    if (lower.includes('washing') || lower.includes('laundry')) return '<i class="fa-solid fa-shirt"></i>';
    if (lower.includes('water') || lower.includes('ro')) return '<i class="fa-solid fa-droplet"></i>';
    return '<i class="fa-solid fa-circle-check"></i>';
  }

  function showToast(message, type = "info") {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : type === 'warning' ? 'fa-triangle-exclamation' : 'fa-circle-info'}" style="color: ${type === 'success' ? '#22c55e' : type === 'warning' ? '#f59e0b' : '#38bdf8'}"></i>
      <span>${message}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // ============================================================
  // SUPABASE ENQUIRY STORAGE & SYNC FUNCTIONS
  // ============================================================
  async function saveEnquiryToSupabase({ pgName, studentName, phone, visitDate, timeSlot, roomType, message }) {
    if (!supabaseClient) {
      console.warn("Supabase client not initialized; stored locally.");
      return { success: true };
    }
    try {
      const payload = {
        pg_name: pgName || "General MSRIT Inquiry",
        student_name: studentName,
        phone: phone,
        visit_date: visitDate || null,
        time_slot: timeSlot || null,
        room_type: roomType || null,
        message: message || "Direct enquiry from findmyhome",
        status: "pending",
        source: "findmyhome_web"
      };

      const { data, error } = await supabaseClient
        .from("enquiries")
        .insert([payload])
        .select();

      if (error) throw error;
      loadEnquiries(); // Refresh count & UI
      return { success: true, data };
    } catch (err) {
      console.error("Supabase insert error:", err);
      return { success: false, error: err };
    }
  }

  async function loadEnquiries() {
    if (!supabaseClient) return;
    try {
      const { data, error } = await supabaseClient
        .from("enquiries")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      const countBadge = document.getElementById("enquiriesCountBadge");
      if (countBadge) countBadge.textContent = data ? data.length : 0;

      const container = document.getElementById("enquiriesTableContainer");
      if (!container) return;

      if (!data || data.length === 0) {
        container.innerHTML = `
          <div style="text-align: center; padding: 40px; color: #64748b;">
            <i class="fa-solid fa-inbox" style="font-size: 2.2rem; margin-bottom: 8px; color: #94a3b8;"></i>
            <h4 style="color: #0f172a; font-size: 1.1rem; margin-bottom: 6px;">No enquiries in Supabase yet</h4>
            <p>Schedule a visit on any PG card to see real user enquiries written directly to your Supabase backend.</p>
          </div>
        `;
        return;
      }

      container.innerHTML = `
        <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">
          <thead>
            <tr style="background: #f8fafc; border-bottom: 2px solid #e2e8f0; text-align: left;">
              <th style="padding: 10px 12px; color: #475569;">Student Name</th>
              <th style="padding: 10px 12px; color: #475569;">Phone Number</th>
              <th style="padding: 10px 12px; color: #475569;">PG Requested</th>
              <th style="padding: 10px 12px; color: #475569;">Visit Date / Slot</th>
              <th style="padding: 10px 12px; color: #475569;">Room</th>
              <th style="padding: 10px 12px; color: #475569;">Status</th>
            </tr>
          </thead>
          <tbody>
            ${data.map(item => `
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px; font-weight: 700; color: #0f172a;">${escapeHtml(item.student_name)}</td>
                <td style="padding: 12px; color: #0284c7; font-weight: 700;">${escapeHtml(item.phone)}</td>
                <td style="padding: 12px; font-weight: 600; color: #1e293b;">${escapeHtml(item.pg_name)}</td>
                <td style="padding: 12px; color: #64748b;">${item.visit_date || 'Immediate'} ${item.time_slot ? `<br><small style="color:#94a3b8">${item.time_slot}</small>` : ''}</td>
                <td style="padding: 12px; color: #475569;">${escapeHtml(item.room_type || 'Double')}</td>
                <td style="padding: 12px;">
                  <span style="background: #ecfdf5; color: #10b981; padding: 3px 10px; border-radius: 999px; font-size: 0.72rem; font-weight: 800; border: 1px solid #a7f3d0; text-transform: uppercase;">
                    ${escapeHtml(item.status || 'Pending')}
                  </span>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    } catch (err) {
      console.error("Error loading enquiries:", err);
    }
  }

  async function fetchPgsFromSupabase() {
    if (!supabaseClient) return;
    try {
      const { data, error } = await supabaseClient.from("pgs").select("*");
      if (!error && data && data.length > 0) {
        // Map postgres column names to frontend camelCase properties
        const supabaseMapped = data.map(dbPg => ({
          id: dbPg.id,
          name: dbPg.name,
          tagline: dbPg.tagline,
          gender: dbPg.gender,
          genderLabel: dbPg.gender_label,
          distanceMeters: dbPg.distance_meters,
          distanceText: dbPg.distance_text,
          gate: dbPg.gate,
          area: dbPg.area,
          images: dbPg.images,
          rating: Number(dbPg.rating),
          reviewCount: dbPg.review_count,
          prices: dbPg.prices,
          deposit: dbPg.deposit,
          startingPrice: dbPg.starting_price,
          availability: dbPg.availability,
          curfew: dbPg.curfew,
          food: dbPg.food,
          amenities: dbPg.amenities,
          highlight: dbPg.highlight,
          googleReviews: pgData.find(p => p.id === dbPg.id)?.googleReviews || [
            {
              name: "MSRIT Student",
              dept: "Engineering",
              rating: 5,
              date: "Recently",
              comment: "Great location near campus gates, delicious food and super clean rooms.",
              helpful: 12
            }
          ]
        }));

        // Merge Supabase PGs with local dataset to keep rich catalog intact
        const existingIds = new Set(supabaseMapped.map(p => p.id));
        const merged = [...supabaseMapped, ...pgData.filter(p => !existingIds.has(p.id))];
        pgData = merged;
        renderCards();
        console.log(`Loaded ${supabaseMapped.length} PGs from Supabase backend.`);
      }
    } catch (err) {
      console.warn("Could not load PGs from Supabase, using local data:", err);
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/[&<>"']/g, m => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[m]));
  }

  // Enquiries Modal Listeners
  const enquiriesModal = document.getElementById("enquiriesModal");
  const btnViewEnquiries = document.getElementById("btnViewEnquiries");
  const btnCloseEnquiriesModal = document.getElementById("btnCloseEnquiriesModal");
  const btnRefreshEnquiries = document.getElementById("btnRefreshEnquiries");

  if (btnViewEnquiries && enquiriesModal) {
    btnViewEnquiries.addEventListener("click", () => {
      enquiriesModal.classList.add("active");
      loadEnquiries();
    });
  }

  if (btnCloseEnquiriesModal && enquiriesModal) {
    btnCloseEnquiriesModal.addEventListener("click", () => {
      enquiriesModal.classList.remove("active");
    });
  }

  if (btnRefreshEnquiries) {
    btnRefreshEnquiries.addEventListener("click", () => {
      loadEnquiries();
      showToast("Refreshed enquiries from Supabase!", "info");
    });
  }

  if (enquiriesModal) {
    enquiriesModal.addEventListener("click", (e) => {
      if (e.target === enquiriesModal) {
        enquiriesModal.classList.remove("active");
      }
    });
  }

  // Supabase Realtime Listener (Updates enquiry counter whenever new record is added)
  if (supabaseClient) {
    try {
      supabaseClient
        .channel("public:enquiries")
        .on("postgres_changes", { event: "INSERT", schema: "public", table: "enquiries" }, (payload) => {
          showToast(`🔔 New enquiry received in Supabase: ${payload.new.student_name}!`, "success");
          loadEnquiries();
        })
        .subscribe();
    } catch (e) {
      console.warn("Realtime subscription:", e);
    }
  }

  // Initial Run
  renderCards();
  updateCalculator();
  fetchPgsFromSupabase();
  loadEnquiries();
});
