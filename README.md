# Smriti Pustkalaya Admin Dashboard

🌐 **स्मृति पुस्तकालय** का Admin Dashboard - React.js और Tailwind CSS के साथ बनाया गया एक modern book donation management system।

## 🚀 Features

### 1️⃣ दानकर्ता विवरण (Donor Details)
- 🙍‍♂️ Donor Name
- 📞 Contact Number  
- 🏠 Address
- 🗓️ Donation Date
- 📚 Total Number of Books Donated
- ✅ Approval Status (Approved/Pending/Rejected)

### 2️⃣ पुस्तक विवरण (Books Details)
- 📖 Book Name
- ✍️ Author Name
- 🧾 Category/Genre
- 🔢 Quantity Donated
- 📦 Current Availability
- 🗣️ Language
- 📘 ISBN

### 3️⃣ खोज और फ़िल्टर (Search & Filter)
- 🔍 Search by Donor Name, Book Name, Author
- 🗂️ Filter by Category/Genre
- 📅 Filter by Donation Date Range
- 🧹 Clear all filters option

### 4️⃣ रिपोर्ट डाउनलोड (Download Reports)
- 📄 PDF Report Download
- 📊 Excel Data Export
- 👥 Donor-specific Reports
- 📚 Book-specific Reports
- 📈 Statistics Dashboard

### 5️⃣ Admin Controls
- ✏️ Edit donor/book details
- ✅ Approve/Reject donations
- ❌ Delete entries
- 📊 Real-time statistics

## 🛠️ Tech Stack

- **Frontend**: React.js (18.2.0)
- **Styling**: Tailwind CSS (3.1.6)
- **Icons**: Heroicons (SVG)
- **Language**: Hindi & English support

## 📁 Project Structure

```
src/
├── components/
│   ├── DonorList.jsx          # दानकर्ता सूची
│   ├── BookList.jsx           # पुस्तक सूची  
│   ├── FilterPanel.jsx        # खोज और फ़िल्टर
│   ├── DownloadReport.jsx     # रिपोर्ट डाउनलोड
│   └── AdminControls.jsx      # Admin कार्रवाई बटन
├── data/
│   └── dummyData.js          # नमूना डेटा
├── styles/
│   └── tailwind.css          # Tailwind CSS
├── App.js                    # मुख्य ऐप कंपोनेंट
└── index.js                  # Entry point
```

## 🎨 Color Palette

### Primary Colors (मुख्य रंग)
- **Primary**: Orange shades (#d97748 to #6d3825)
- **Secondary**: Green shades (#35955b to #194028)  
- **Accent**: Warm orange (#ef751a to #782e14)

### Usage
- **Primary**: Headers, buttons, main elements
- **Secondary**: Success states, availability indicators
- **Accent**: Categories, highlights, warning states

## 🚀 Getting Started

### Prerequisites
- Node.js (14.0.0 या उससे ऊपर)
- npm या yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd PustakalayAdmin
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   ```
   http://localhost:3000
   ```

## 📱 Responsive Design

- **Desktop**: Full feature access with multi-column layouts
- **Tablet**: Optimized grid layouts and responsive tables
- **Mobile**: Stack-based layout with touch-friendly controls

## 🔮 Future Enhancements

### Backend Integration
- [ ] REST API integration
- [ ] Database connectivity (MongoDB/PostgreSQL)
- [ ] User authentication & authorization
- [ ] Real-time notifications

### Advanced Features
- [ ] Barcode scanning for books
- [ ] Email notifications to donors
- [ ] Advanced analytics and charts
- [ ] Multi-language support
- [ ] Export to multiple formats (CSV, JSON)

### UI/UX Improvements
- [ ] Dark mode toggle
- [ ] Advanced filtering options
- [ ] Bulk operations
- [ ] Drag-and-drop file uploads
- [ ] Progressive Web App (PWA)

## 🛡️ Current Status

**यह केवल Frontend UI है** - Backend integration और database connectivity अभी लागू नहीं है। सभी data dummy JSON से आ रहा है।

### Working Features:
- ✅ Responsive UI design
- ✅ Component-based architecture  
- ✅ Search and filtering
- ✅ Dummy data management
- ✅ Modal interactions (alerts)

### Pending Integration:
- ⏳ Real database connectivity
- ⏳ API endpoints
- ⏳ File upload functionality
- ⏳ Actual PDF/Excel generation
- ⏳ User authentication

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

**Developer**: React.js Frontend Specialist
**Project**: Smriti Pustkalaya Admin Dashboard
**Version**: 1.0.0

---

### 🙏 धन्यवाद (Thank You)

स्मृति पुस्तकालय के Admin Dashboard का उपयोग करने के लिए धन्यवाद। यह dashboard पुस्तक दान प्रबंधन को आसान और कुशल बनाने के लिए डिज़ाइन किया गया है।
