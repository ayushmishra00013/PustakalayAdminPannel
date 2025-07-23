// Dummy data for the admin dashboard
export const donorsData = [
  {
    id: 1,
    name: "राजेश शर्मा",
    contact: "+91 9876543210",
    address: "123, गांधी नगर, नई दिल्ली - 110001",
    donationDate: "2024-01-15",
    totalBooks: 25,
    status: "approved",
    photo: null
  },
  {
    id: 2,
    name: "प्रिया गुप्ता",
    contact: "+91 8765432109",
    address: "456, सरस्वती विहार, मुंबई - 400001",
    donationDate: "2024-01-20",
    totalBooks: 18,
    status: "pending",
    photo: null
  },
  {
    id: 3,
    name: "अमित कुमार",
    contact: "+91 7654321098",
    address: "789, शिवाजी नगर, पुणे - 411001",
    donationDate: "2024-02-05",
    totalBooks: 32,
    status: "approved",
    photo: null
  },
  {
    id: 4,
    name: "सुनीता वर्मा",
    contact: "+91 6543210987",
    address: "321, लक्ष्मी नगर, जयपुर - 302001",
    donationDate: "2024-02-10",
    totalBooks: 15,
    status: "approved",
    photo: null
  },
  {
    id: 5,
    name: "विकास सिंह",
    contact: "+91 5432109876",
    address: "654, रामनगर, लखनऊ - 226001",
    donationDate: "2024-02-18",
    totalBooks: 28,
    status: "pending",
    photo: null
  }
];

export const booksData = [
  {
    id: 1,
    donorId: 1,
    bookName: "गीता रहस्य",
    author: "बाल गंगाधर तिलक",
    category: "धार्मिक",
    quantityDonated: 5,
    currentAvailability: 3,
    isbn: "978-81-7086-123-4",
    language: "हिंदी"
  },
  {
    id: 2,
    donorId: 1,
    bookName: "गणित की मूल बातें",
    author: "डॉ. आर.के. शर्मा",
    category: "शिक्षा",
    quantityDonated: 10,
    currentAvailability: 8,
    isbn: "978-81-7086-456-7",
    language: "हिंदी"
  },
  {
    id: 3,
    donorId: 2,
    bookName: "हरी घास और नीला आसमान",
    author: "फणीश्वरनाथ रेणु",
    category: "साहित्य",
    quantityDonated: 8,
    currentAvailability: 5,
    isbn: "978-81-7086-789-0",
    language: "हिंदी"
  },
  {
    id: 4,
    donorId: 2,
    bookName: "बच्चों की कहानियां",
    author: "मुंशी प्रेमचंद",
    category: "बाल साहित्य",
    quantityDonated: 10,
    currentAvailability: 7,
    isbn: "978-81-7086-012-3",
    language: "हिंदी"
  },
  {
    id: 5,
    donorId: 3,
    bookName: "भारतीय इतिहास",
    author: "डॉ. ए.एल. बाशम",
    category: "इतिहास",
    quantityDonated: 12,
    currentAvailability: 10,
    isbn: "978-81-7086-345-6",
    language: "हिंदी"
  },
  {
    id: 6,
    donorId: 3,
    bookName: "विज्ञान के चमत्कार",
    author: "डॉ. ए.पी.जे. अब्दुल कलाम",
    category: "विज्ञान",
    quantityDonated: 15,
    currentAvailability: 12,
    isbn: "978-81-7086-678-9",
    language: "हिंदी"
  },
  {
    id: 7,
    donorId: 4,
    bookName: "योग और स्वास्थ्य",
    author: "स्वामी रामदेव",
    category: "स्वास्थ्य",
    quantityDonated: 8,
    currentAvailability: 6,
    isbn: "978-81-7086-901-2",
    language: "हिंदी"
  },
  {
    id: 8,
    donorId: 4,
    bookName: "आयुर्वेद के सिद्धांत",
    author: "डॉ. वसंत लाड",
    category: "आयुर्वेद",
    quantityDonated: 7,
    currentAvailability: 4,
    isbn: "978-81-7086-234-5",
    language: "हिंदी"
  },
  {
    id: 9,
    donorId: 5,
    bookName: "प्रेमचंद की श्रेष्ठ कहानियां",
    author: "मुंशी प्रेमचंद",
    category: "साहित्य",
    quantityDonated: 20,
    currentAvailability: 15,
    isbn: "978-81-7086-567-8",
    language: "हिंदी"
  },
  {
    id: 10,
    donorId: 5,
    bookName: "अंग्रेजी व्याकरण",
    author: "रेन एंड मार्टिन",
    category: "भाषा",
    quantityDonated: 8,
    currentAvailability: 6,
    isbn: "978-81-7086-890-1",
    language: "अंग्रेजी"
  }
];

export const categories = [
  "धार्मिक",
  "शिक्षा", 
  "साहित्य",
  "बाल साहित्य",
  "इतिहास",
  "विज्ञान",
  "स्वास्थ्य",
  "आयुर्वेद",
  "भाषा",
  "तकनीकी",
  "कला",
  "संस्कृति"
];

export const languages = [
  "हिंदी",
  "अंग्रेजी",
  "संस्कृत",
  "उर्दू",
  "बंगाली",
  "तमिल",
  "तेलुगु",
  "मराठी"
];
