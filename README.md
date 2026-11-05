# findmyhome 🏡 &mdash; PGs & Hostels Near MSRIT Bangalore

A smooth, free-flowing, and interactive web application designed for finding verified student PGs and hostels in the vicinity of **Ramaiah Institute of Technology (MSRIT)**, Mathikere, Bangalore.

Modeled after modern luxury architectural aesthetics (inspired by Dwellio) with warm ambient dusk lighting, frosted glassmorphic navigation, floating cards, real-time bed availability, side-by-side PG comparison, student expense estimator, and a live **Supabase** backend.

---

## 🌟 Key Features

- **🎓 Curated MSRIT Student Living:** Real hostels and PGs across Mathikere 1st/2nd Main, New BEL Road, MSR Nagar, and Gokula Extension categorized by walking distance to Gate 1, Gate 2, and Gate 10.
- **⚡ Live Supabase Integration:** All student visit requests and enquiries are stored directly in a live PostgreSQL database via Supabase. Includes a real-time enquiry viewer dashboard modal.
- **⚖️ Side-by-Side Comparison Engine:** Compare up to 3 PGs at a time across rent, security deposit, curfew timings, food menus, power backup, AC, and Google ratings.
- **🟢 Live Bed Availability:** Live room indicators (e.g., *"1 Bed Left"*, *"Available for Next Sem"*).
- **⭐ Verified Google Ratings & Reviews:** Department-specific reviews from MSRIT engineering and medical seniors.
- **🧮 Student Budget Estimator:** Interactive calculator to simulate total monthly expenses (Rent + Mess + AC + Laundry).
- **📱 Fully Responsive:** Optimized for desktops, tablets, and mobile devices with custom glassmorphism styles and smooth animations.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3 (Custom Glassmorphism, CSS Variables, Flexbox/Grid), Modern Vanilla JavaScript (ES6+).
- **Backend & Database:** [Supabase](https://supabase.com) (PostgreSQL, Row-Level Security, Realtime WebSockets).
- **Typography & Icons:** Google Fonts (`Plus Jakarta Sans` & `Playfair Display`), Font Awesome 6.

---

## 🚀 Getting Started

Clone the repository and launch a local web server:

```bash
git clone https://github.com/palisettyvarish-dotcom/pg-finder-app-near-msrit.git
cd pg-finder-app-near-msrit
python3 -m http.server 8000
```

Open `http://localhost:8000` in any web browser.

---

## 🗄️ Database Setup (Supabase)

The application uses the following tables in Supabase:
- `enquiries`: Tracks student booking requests (`student_name`, `phone`, `pg_name`, `visit_date`, `time_slot`, `room_type`, `status`).
- `pgs`: Hosts verified listings, rates for single/double/triple sharing, and amenities.
- `reviews`: Stores verified Google student reviews.
