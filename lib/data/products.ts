export interface Specification {
  label: string;
  value: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  detailedDescription: string;
  features: string[];
  specifications: Specification[];
  image: string;
  images?: string[];
  slug: string;
  price: number;
  unit: string;
  faqs: FAQ[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Double Door Safety Locker",
    category: "Safety Lockers",
    description: "Premium double door locker with fire-resistant design up to 1000°C.",
    detailedDescription: "Our Double Door Safety Locker is a premium security solution manufactured with precision engineering and superior materials. Featuring fire-resistant capabilities up to 1000°C, special groove and tongue construction, and chrome shooting bolts, this locker provides unmatched protection for your valuables. The sturdy walls and multi-blend doors ensure maximum security while the scratch-resistant enamel paint maintains its appearance for years. Perfect for banks, offices, factories, and hotels.",
    features: [
      "Fire-resistant up to 1000°C",
      "Special groove and tongue construction",
      "Chrome shooting bolts",
      "Scratch-resistant enamel paint",
      "Can be fitted with Instadex Lateral filing system",
      "Multi-blend doors for enhanced security"
    ],
    specifications: [
      { label: "Material", value: "Mild Steel" },
      { label: "Weight", value: "800 kg" },
      { label: "Size", value: "36\" x 30\" x 30\"" },
      { label: "Color", value: "Cream & Grey" },
      { label: "Surface Treatment", value: "Spray Paint" },
      { label: "Lock Type", value: "Key Lock" },
      { label: "Fire Rating", value: "Up to 1000°C" },
      { label: "Doors", value: "Double Door" }
    ],
    image: "https://2.wlimg.com/product_images/bc-full/2021/5/8855636/double-door-safety-locker-1622201310-5839493.jpeg",
    slug: "double-door-safety-locker",
    price: 40500,
    unit: "Piece",
    faqs: [
      {
        question: "What is the fire resistance capacity?",
        answer: "This locker can withstand temperatures up to 1000°C, protecting your valuables from fire damage for extended periods."
      },
      {
        question: "Can it be customized for specific requirements?",
        answer: "Yes, we can customize the size, color, and internal configuration including fitting with Instadex Lateral filing system."
      },
      {
        question: "What is the warranty period?",
        answer: "We provide a comprehensive 5-year warranty on structure and 1-year warranty on the locking mechanism."
      },
      {
        question: "Is installation service provided?",
        answer: "Yes, we provide professional installation service. Our expert team ensures proper setup and anchoring for maximum security."
      }
    ]
  },
  {
    id: "2",
    name: "Electronic Locker Safe",
    category: "Security Safes",
    description: "Digital safe with LED display and 4-6 digit programmable code.",
    detailedDescription: "Globe Safe Company's Electronic Locker Safe represents the pinnacle of modern security technology. Featuring a battery-powered electronic keypad with LED display, this safe allows you to set a personalized 4-6 digit combination code. The fire-resistant construction ensures your valuables remain protected even in extreme conditions. With its user-friendly interface and robust security features, this safe is perfect for both home and office use.",
    features: [
      "LED display panel",
      "4-6 digit programmable code",
      "Battery-powered operation",
      "Fire resistant construction",
      "Easy to use interface",
      "Emergency key override"
    ],
    specifications: [
      { label: "Material", value: "Iron" },
      { label: "Color", value: "Black" },
      { label: "Door Type", value: "Single Door" },
      { label: "Weight", value: "30-40 kg" },
      { label: "Display", value: "LED" },
      { label: "Lock Type", value: "Electronic Keypad" },
      { label: "Power", value: "Battery Operated" },
      { label: "Fire Resistant", value: "Yes" }
    ],
    image: "https://2.wlimg.com/product_images/bc-full/2021/5/8855636/electronic-locker-safe-1622200991-5830897.jpeg",
    slug: "electronic-locker-safe",
    price: 9500,
    unit: "Piece",
    faqs: [
      {
        question: "What happens if the battery dies?",
        answer: "The safe includes an emergency key override system and external battery terminals for emergency power supply."
      },
      {
        question: "Can multiple codes be programmed?",
        answer: "Yes, you can program multiple user codes and change them as needed for enhanced security."
      },
      {
        question: "Is it suitable for wall mounting?",
        answer: "Yes, this safe can be wall-mounted or floor-mounted with the provided mounting hardware."
      },
      {
        question: "What is the battery life?",
        answer: "With normal use, batteries typically last 12-18 months. The LED display shows low battery warning."
      }
    ]
  },
  {
    id: "3",
    name: "Jewellery Locker",
    category: "Safety Lockers",
    description: "Specialized locker for jewelry storage with customizable compartments.",
    detailedDescription: "Our Jewellery Locker is specifically designed to meet the unique storage needs of jewelry retailers and collectors. Made with high-quality stainless steel or mild steel, these lockers feature customizable compartments and fire-resistant construction. The spacious interior and specialized design ensure your precious jewelry remains organized, secure, and protected from theft, fire, and environmental damage.",
    features: [
      "Fire resistant construction",
      "Customizable safe size",
      "Stainless steel or mild steel options",
      "Steel paint surface finishing",
      "Multiple compartment options",
      "Suitable for all door types"
    ],
    specifications: [
      { label: "Material", value: "Stainless Steel / Mild Steel" },
      { label: "Door Type", value: "All Types Available" },
      { label: "Size", value: "Customizable" },
      { label: "Surface Finishing", value: "Steel Paint" },
      { label: "Fire Resistant", value: "Yes" },
      { label: "Compartments", value: "Multiple (Customizable)" },
      { label: "Lock Type", value: "High Security Lock" },
      { label: "Usage", value: "Jewelry Storage" }
    ],
    image: "https://2.wlimg.com/product_images/bc-full/2021/5/8855636/jewellery-locker-1622201494-5839501.jpeg",
    slug: "jewellery-locker",
    price: 25000,
    unit: "Piece",
    faqs: [
      {
        question: "Can the compartments be customized?",
        answer: "Yes, we offer fully customizable compartment layouts to suit different types of jewelry including rings, necklaces, and watches."
      },
      {
        question: "Is it suitable for commercial jewelry stores?",
        answer: "Absolutely! Our jewellery lockers are widely used by jewelry retailers and meet all commercial security standards."
      },
      {
        question: "What materials are available?",
        answer: "We offer both stainless steel and mild steel options, each with specific benefits for different requirements."
      },
      {
        question: "Can it be integrated with alarm systems?",
        answer: "Yes, our jewellery lockers can be integrated with existing security and alarm systems for enhanced protection."
      }
    ]
  },
  {
    id: "4",
    name: "Strong Room Door",
    category: "Strong Room Doors",
    description: "Heavy-duty metal door with 950kg weight for maximum security.",
    detailedDescription: "Our Strong Room Door is an ultra-heavy-duty security solution designed for banks, financial institutions, and high-security facilities. Weighing 950kg and constructed from premium metal with spray paint finish, this door provides impenetrable security for strong rooms and vaults. The hinged design with advanced locking mechanisms ensures authorized access only while maintaining the highest security standards.",
    features: [
      "950kg heavy-duty construction",
      "Premium metal build",
      "Hinged door design",
      "Spray paint finish",
      "Advanced locking system",
      "Bank-grade security"
    ],
    specifications: [
      { label: "Material", value: "Metal" },
      { label: "Open Style", value: "Hinged" },
      { label: "Number of Doors", value: "Single" },
      { label: "Weight", value: "950 kg" },
      { label: "Surface Finish", value: "Spray Paint" },
      { label: "Lock Type", value: "Multi-point Locking" },
      { label: "Thickness", value: "Heavy Gauge Steel" },
      { label: "Application", value: "Banks, Vaults, Strong Rooms" }
    ],
    image: "https://2.wlimg.com/product_images/bc-full/2021/5/8855636/strong-room-door-1622201611-5839507.jpeg",
    slug: "strong-room-door",
    price: 105000,
    unit: "Piece",
    faqs: [
      {
        question: "What is the installation process?",
        answer: "Professional installation is required due to the 950kg weight. Our team handles complete installation including frame reinforcement."
      },
      {
        question: "Can it be customized to existing door frames?",
        answer: "Yes, we can customize the door dimensions to fit existing strong room openings with proper reinforcement."
      },
      {
        question: "What security certifications does it have?",
        answer: "Our strong room doors meet RBI guidelines and international banking security standards."
      },
      {
        question: "Is regular maintenance required?",
        answer: "Annual maintenance is recommended to ensure optimal performance of locking mechanisms and hinges."
      }
    ]
  },
  {
    id: "5",
    name: "Fire Resisting Record Cabinet",
    category: "Fire Resistant",
    description: "Fire-resistant cabinet protecting documents up to 1000°C for 2 hours.",
    detailedDescription: "Our Fire Resisting Record Cabinet is engineered to protect your critical business records from fire, burglary, and theft. With the ability to withstand temperatures up to 1000°C and protect contents for up to 2 hours, this cabinet features tongue and groove construction to restrict hot gases and flames. The multibend robust walled body with thick fire insulation on all sides ensures your documents, files, and records remain safe even in extreme fire conditions.",
    features: [
      "Withstands up to 1000°C temperature",
      "2-hour fire protection",
      "Tongue and groove construction",
      "Four adjustable shelves",
      "Anti-corrosion steel body",
      "Scratch-resistant enamel paint"
    ],
    specifications: [
      { label: "Dimensions", value: "74\" H x 32\" W x 28\" D" },
      { label: "Fire Rating", value: "1000°C for 2 hours" },
      { label: "Material", value: "Anti-corrosion Steel" },
      { label: "Shelves", value: "4 Adjustable" },
      { label: "Door Type", value: "Single Door" },
      { label: "Surface Finish", value: "Enamel Paint" },
      { label: "Insulation", value: "Thick Fire Insulation" },
      { label: "Construction", value: "Tongue & Groove" }
    ],
    image: "https://2.wlimg.com/product_images/bc-full/2021/5/8855636/fire-resisting-record-cabinet-1622201784-5839516.jpeg",
    slug: "fire-resisting-record-cabinet",
    price: 35000,
    unit: "Piece",
    faqs: [
      {
        question: "What types of documents can be stored?",
        answer: "Perfect for storing box files, bound reports, legal documents, certificates, and other important business records."
      },
      {
        question: "How effective is the fire protection?",
        answer: "Tested to protect contents at 1000°C for up to 2 hours, maintaining internal temperature below paper combustion point."
      },
      {
        question: "Can shelves be adjusted?",
        answer: "Yes, all four shelves are adjustable to accommodate different sizes of files and documents."
      },
      {
        question: "Is it suitable for digital media storage?",
        answer: "While primarily designed for paper documents, it can also protect CDs, DVDs, and other media with appropriate storage."
      }
    ]
  },
  {
    id: "6",
    name: "Single Door Cash Boxes",
    category: "Cash Boxes",
    description: "Compact cash box with 30-40kg weight for retail operations.",
    detailedDescription: "Globe Safe Company's Single Door Cash Boxes are the perfect solution for retail businesses, small offices, and market vendors. Manufactured with mild steel and featuring a spray-polished finish, these cash boxes offer secure storage for daily cash operations. The rectangular design with optimal thickness ensures durability while maintaining portability for businesses that need mobile cash management solutions.",
    features: [
      "Mild steel construction",
      "30-40 kg weight for portability",
      "Spray polished finish",
      "Rectangle shape design",
      "1.5-1.8mm material thickness",
      "Globe brand quality"
    ],
    specifications: [
      { label: "Material", value: "MS (Mild Steel)" },
      { label: "Weight", value: "30-40 kg" },
      { label: "Material Thickness", value: "1.5-1.8mm" },
      { label: "Surface Finish", value: "Spray Polished" },
      { label: "Shape", value: "Rectangle" },
      { label: "Brand", value: "Globe" },
      { label: "Lock Type", value: "Key Lock" },
      { label: "Application", value: "Retail, Small Business" }
    ],
    image: "https://2.wlimg.com/product_images/bc-full/2021/5/8855636/single-door-cash-boxes-1622201555-5839504.jpeg",
    slug: "single-door-cash-boxes",
    price: 5500,
    unit: "Piece",
    faqs: [
      {
        question: "Is it suitable for daily retail use?",
        answer: "Yes, specifically designed for daily retail operations with easy access and secure storage features."
      },
      {
        question: "Can it be bolted to a counter?",
        answer: "Yes, it comes with pre-drilled holes for secure mounting to counters or drawers."
      },
      {
        question: "What is the internal capacity?",
        answer: "The cash box can hold substantial amounts of cash and includes compartments for organized storage."
      },
      {
        question: "Is it portable?",
        answer: "At 30-40kg, it's portable enough for transport while being heavy enough to deter quick theft."
      }
    ]
  },
  {
    id: "7",
    name: "Vault",
    category: "Vaults",
    description: "Advanced digital vault with automatic keypad freeze security.",
    detailedDescription: "Globe Safe Company's Vault represents the apex of security technology, featuring advanced digital pin code access with programmable combinations. Built with premium steel construction, this vault includes automatic keypad freeze after 4 incorrect attempts, advanced shooting bolts, and pre-drilling mounting holes for easy installation. Perfect for storing jewelry, important documents, cash, and other high-value items in homes or offices.",
    features: [
      "Advanced digital pin code system",
      "Automatic keypad freeze after 4 incorrect attempts",
      "Premium steel construction",
      "Advanced shooting bolts",
      "Pre-drilling mounting holes",
      "Damage and scratch resistant"
    ],
    specifications: [
      { label: "Material", value: "Premium Steel" },
      { label: "Lock Type", value: "Digital Pin Code" },
      { label: "Keypad", value: "Numeric Digital" },
      { label: "Security Feature", value: "Auto-freeze after 4 wrong attempts" },
      { label: "Bolts", value: "Advanced Shooting Bolts" },
      { label: "Installation", value: "Pre-drilled Mounting Holes" },
      { label: "Finish", value: "Scratch Resistant" },
      { label: "Application", value: "Home & Office" }
    ],
    image: "https://2.wlimg.com/product_images/bc-full/2021/9/8855636/vault-1631180407-5983191.jpeg",
    slug: "vault",
    price: 75000,
    unit: "Piece",
    faqs: [
      {
        question: "What happens after 4 incorrect password attempts?",
        answer: "The keypad automatically freezes for a set period to prevent unauthorized access attempts, enhancing security."
      },
      {
        question: "Can the digital code be changed?",
        answer: "Yes, the programmable system allows you to change the digital pin code whenever needed for enhanced security."
      },
      {
        question: "Is professional installation required?",
        answer: "While it comes with pre-drilled mounting holes for easier installation, professional installation is recommended for optimal security."
      },
      {
        question: "What can be stored in this vault?",
        answer: "Ideal for jewelry, important documents, cash, digital devices, and other valuable items requiring maximum security."
      }
    ]
  },
  {
    id: "8",
    name: "4 Door Security Safe",
    category: "Security Safes",
    description: "Multi-compartment safe with four separate secure doors.",
    detailedDescription: "The 4 Door Security Safe offers unparalleled organization and security with four separate compartments, each with its own secure door. This innovative design allows for categorized storage of different valuables while maintaining individual security for each section. Perfect for businesses or homes requiring organized, secure storage for various items with different access requirements.",
    features: [
      "Four separate secure compartments",
      "Individual locks for each door",
      "Heavy-duty steel construction",
      "Fire-resistant design",
      "Organized storage solution",
      "Commercial grade security"
    ],
    specifications: [
      { label: "Material", value: "Heavy-duty Steel" },
      { label: "Number of Doors", value: "4" },
      { label: "Lock Type", value: "Individual Key Locks" },
      { label: "Fire Resistant", value: "Yes" },
      { label: "Weight", value: "4000 kg" },
      { label: "Compartments", value: "4 Separate" },
      { label: "Surface Finish", value: "Spray Polished" },
      { label: "Application", value: "Commercial & Residential" }
    ],
    image: "https://2.wlimg.com/product_images/bc-full/2021/5/8855636/4-door-security-safe-1622200652-5839474.jpeg",
    slug: "4-door-security-safe",
    price: 208000,
    unit: "Piece",
    faqs: [
      {
        question: "Can different users have access to different compartments?",
        answer: "Yes, each door has its own lock, allowing you to give different keys to different users for controlled access."
      },
      {
        question: "Are all compartments the same size?",
        answer: "The compartments can be customized in size based on your specific storage requirements."
      },
      {
        question: "Is it fire-resistant?",
        answer: "Yes, the entire safe features fire-resistant construction to protect contents in all compartments."
      },
      {
        question: "Can it be wall-mounted?",
        answer: "Due to its weight and size, this safe is designed for floor installation with anchoring options."
      }
    ]
  },
  {
    id: "9",
    name: "Fire Resistance Safe",
    category: "Fire Resistant",
    description: "Specialized fire-resistant safe for critical document protection.",
    detailedDescription: "Our Fire Resistance Safe is specifically engineered to protect your most critical documents and valuables from fire damage. With advanced fire-resistant materials and construction techniques, this safe maintains safe internal temperatures even when exposed to extreme heat. Perfect for storing irreplaceable documents, digital media, and valuable items that require protection from both fire and theft.",
    features: [
      "Advanced fire-resistant materials",
      "Maintains safe internal temperature",
      "Dual protection from fire and theft",
      "Suitable for documents and digital media",
      "Heavy-duty construction",
      "Long-duration fire protection"
    ],
    specifications: [
      { label: "Size", value: "(H)5 x (W)2.75 x (D)2 ft" },
      { label: "Material", value: "Iron" },
      { label: "Internal Temperature", value: "Below 175°C" },
      { label: "Weight", value: "1500 kg" },
      { label: "Lock Type", value: "Combination Lock" },
      { label: "Capacity", value: "2 cubic feet" },
      { label: "Door Seal", value: "Expandable Fire Seal" },
      { label: "Certification", value: "Fire Safety Certified" }
    ],
    image: "https://2.wlimg.com/product_images/bc-full/2021/5/8855636/fire-resistance-safe-1622201125-5839490.jpeg",
    slug: "fire-resistance-safe",
    price: 95000,
    unit: "Piece",
    faqs: [
      {
        question: "How long can it protect documents from fire?",
        answer: "This safe provides 90 minutes of protection at 1000°C, keeping internal temperature below paper ignition point."
      },
      {
        question: "Can it protect digital media?",
        answer: "Yes, it's designed to protect both paper documents and digital media like hard drives, USBs, and CDs."
      },
      {
        question: "Does it also provide security from theft?",
        answer: "Yes, besides fire protection, it features robust construction and secure locking for theft protection."
      },
      {
        question: "What happens to the seal during a fire?",
        answer: "The expandable fire seal activates during high heat, creating an airtight barrier against smoke and flames."
      }
    ]
  },
  {
    id: "10",
    name: "Heavy Security Safe",
    category: "Security Safes",
    description: "Extra heavy-duty safe for maximum security applications.",
    detailedDescription: "The Heavy Security Safe is built for maximum protection with reinforced steel construction and advanced security features. Designed for high-value storage in banks, businesses, and homes, this safe combines substantial weight with sophisticated locking mechanisms to provide uncompromising security. The heavy-duty build ensures resistance against all forms of physical attack while maintaining fire-resistant properties.",
    features: [
      "Reinforced steel construction",
      "Extra heavy-duty build",
      "Advanced locking mechanism",
      "Fire-resistant properties",
      "Anti-drill protection",
      "Bank-grade security features"
    ],
    specifications: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Weight", value: "300-400 kg" },
      { label: "Wall Thickness", value: "10mm" },
      { label: "Lock Type", value: "High Strength Lock" },
      { label: "Fire Rating", value: "2 hours" },
      { label: "Capacity", value: "4 cubic feet" },
      { label: "Bolts", value: "8 Active Bolts" },
      { label: "Grade", value: "Commercial Security" }
    ],
    image: "https://2.wlimg.com/product_images/bc-full/2021/5/8855636/heavy-security-safe-1622200814-5839479.jpeg",
    slug: "heavy-security-safe",
    price: 208000,
    unit: "Piece",
    faqs: [
      {
        question: "What makes this safer than regular safes?",
        answer: "The reinforced steel construction, 200kg weight, and advanced locking mechanisms provide superior protection against break-ins."
      },
      {
        question: "Can it be moved after installation?",
        answer: "While possible, the 200kg weight requires professional movers and reinstallation for security."
      },
      {
        question: "What is the dual control system?",
        answer: "It requires two separate keys or combinations to open, providing enhanced security for high-value storage."
      },
      {
        question: "Is it suitable for home use?",
        answer: "Yes, though commonly used commercially, it's perfect for homes requiring maximum security for valuables."
      }
    ]
  },
  {
    id: "11",
    name: "Mild Steel Hidden Floor Safe",
    category: "Hidden Floor Safes",
    description: "Concealed floor safe with mild steel construction for discrete storage.",
    detailedDescription: "Our Mild Steel Hidden Floor Safe offers the perfect combination of security and concealment. Designed to be installed beneath floor surfaces and completely hidden from view, this safe provides discrete storage for cash, jewelry, and important documents. The mild steel construction ensures durability while the concealed installation makes it virtually impossible for intruders to locate.",
    features: [
      "Concealed floor installation",
      "Mild steel construction",
      "Completely hidden from view",
      "Waterproof sealing available",
      "Suitable for various floor types",
      "Discrete security solution"
    ],
    specifications: [
      { label: "Material", value: "Mild Steel" },
      { label: "Installation", value: "In-floor Concealed" },
      { label: "Depth", value: "12 inches" },
      { label: "Opening", value: "10 x 10 inches" },
      { label: "Wall Thickness", value: "10-12mm" },
      { label: "Lock Type", value: "Combination Lock" },
      { label: "Weight", value: "80 kg" },
      { label: "Waterproof", value: "Optional Sealing" }
    ],
    image: "https://2.wlimg.com/product_images/bc-full/2021/5/8855636/mild-steel-hidden-floor-safe-1622201964-5839528.jpeg",
    slug: "mild-steel-hidden-floor-safe",
    price: 10500,
    unit: "Piece",
    faqs: [
      {
        question: "How is it installed in the floor?",
        answer: "Professional installation involves cutting into the floor, placing the safe, and concealing with matching flooring material."
      },
      {
        question: "Can it be detected by metal detectors?",
        answer: "While metal detectors could detect it, proper installation with floor covering makes visual detection impossible."
      },
      {
        question: "Is it waterproof?",
        answer: "Optional waterproof sealing is available to protect contents from moisture and water damage."
      },
      {
        question: "What types of floors is it suitable for?",
        answer: "Can be installed in concrete, wooden, or tiled floors with appropriate installation techniques."
      }
    ]
  },
  {
    id: "12",
    name: "Stainless Steel Hidden Floor Safe",
    category: "Hidden Floor Safes",
    description: "Premium hidden floor safe with corrosion-resistant stainless steel.",
    detailedDescription: "The Stainless Steel Hidden Floor Safe offers superior concealed storage with the added benefit of corrosion resistance. Perfect for areas with high humidity or moisture exposure, this safe combines the security of hidden installation with the durability of stainless steel. The premium construction ensures long-lasting protection for your valuables while remaining completely invisible to potential intruders.",
    features: [
      "Stainless steel construction",
      "Corrosion-resistant",
      "Hidden floor installation",
      "Superior moisture protection",
      "Long-lasting durability",
      "Premium security solution"
    ],
    specifications: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Grade", value: "SS304" },
      { label: "Installation", value: "In-floor Concealed" },
      { label: "Depth", value: "14 inches" },
      { label: "Opening", value: "12 x 12 inches" },
      { label: "Wall Thickness", value: "6mm" },
      { label: "Lock Type", value: "Digital Lock" },
      { label: "Weight", value: "45 kg" }
    ],
    image: "https://2.wlimg.com/product_images/bc-full/2021/5/8855636/stainless-steel-hidden-floor-safe-1622201904-5839523.jpeg",
    slug: "stainless-steel-hidden-floor-safe",
    price: 10500,
    unit: "Piece",
    faqs: [
      {
        question: "Why choose stainless steel over mild steel?",
        answer: "Stainless steel offers superior corrosion resistance, making it ideal for humid environments or long-term installations."
      },
      {
        question: "Can it be installed in bathrooms or basements?",
        answer: "Yes, the stainless steel construction makes it perfect for moisture-prone areas like bathrooms and basements."
      },
      {
        question: "How much can it hold?",
        answer: "With 14-inch depth and 12x12 inch opening, it provides substantial storage for documents, jewelry, and cash."
      },
      {
        question: "Is the digital lock waterproof?",
        answer: "The digital lock features water-resistant design suitable for the installation environment."
      }
    ]
  },
  {
    id: "13",
    name: "Single Door Safety Locker",
    category: "Safety Lockers",
    description: "Compact single door locker for personal and small business use.",
    detailedDescription: "The Single Door Safety Locker provides reliable security in a compact design, perfect for personal use or small businesses with limited space. Featuring robust construction and efficient locking mechanisms, this locker offers excellent protection for documents, cash, and valuables. The single door design allows for easy access while maintaining security standards suitable for home and office environments.",
    features: [
      "Compact single door design",
      "Space-efficient storage",
      "Robust construction",
      "Multiple shelf options",
      "Easy access design",
      "Suitable for limited spaces"
    ],
    specifications: [
      { label: "Material", value: "Mild Steel" },
      { label: "Door Type", value: "Single Door" },
      { label: "Dimensions", value: "24\" x 18\" x 18\"" },
      { label: "Weight", value: "65 kg" },
      { label: "Shelves", value: "2 Adjustable" },
      { label: "Lock Type", value: "Key Lock" },
      { label: "Finish", value: "Powder Coated" },
      { label: "Color Options", value: "Grey, Black" }
    ],
    image: "https://2.wlimg.com/product_images/bc-full/2021/5/8855636/single-door-safety-locker-1622201365-5839496.jpeg",
    slug: "single-door-safety-locker",
    price: 8500,
    unit: "Piece",
    faqs: [
      {
        question: "Is it suitable for home use?",
        answer: "Yes, the compact design makes it perfect for home use in bedrooms, studies, or closets."
      },
      {
        question: "Can additional shelves be added?",
        answer: "Yes, we can customize the internal configuration with additional shelves based on your requirements."
      },
      {
        question: "What is the weight capacity per shelf?",
        answer: "Each shelf can safely hold up to 30 kg of evenly distributed weight."
      },
      {
        question: "Can it be anchored to the wall?",
        answer: "Yes, it comes with wall-anchoring provisions for added security against removal."
      }
    ]
  },
  {
    id: "14",
    name: "Mild Steel Single Door Safety Locker",
    category: "Safety Lockers",
    description: "Economical mild steel locker with reliable security features.",
    detailedDescription: "Our Mild Steel Single Door Safety Locker offers an economical security solution without compromising on protection. Built with quality mild steel and featuring reliable locking mechanisms, this locker provides excellent value for money. Perfect for small businesses, homes, and offices looking for affordable yet effective security storage for their valuables and important documents.",
    features: [
      "Economical security solution",
      "Mild steel construction",
      "Reliable locking mechanism",
      "Value for money",
      "Durable build quality",
      "Easy maintenance"
    ],
    specifications: [
      { label: "Material", value: "Mild Steel" },
      { label: "Thickness", value: "2mm" },
      { label: "Door Type", value: "Single Door" },
      { label: "Size", value: "30\" x 20\" x 20\"" },
      { label: "Weight", value: "250 kg" },
      { label: "Lock Type", value: "7-Lever Lock" },
      { label: "Finish", value: "Enamel Paint" },
      { label: "Warranty", value: "3 Years" }
    ],
    image: "https://2.wlimg.com/product_images/bc-full/2021/5/8855636/mild-steel-single-door-safety-locker-1622201434-5839500.jpeg",
    slug: "mild-steel-single-door-safety-locker",
    price: 15500,
    unit: "Piece",
    faqs: [
      {
        question: "What makes this different from other single door lockers?",
        answer: "This model focuses on providing essential security features at an economical price point, perfect for budget-conscious buyers."
      },
      {
        question: "Is the 7-lever lock secure?",
        answer: "Yes, the 7-lever lock provides excellent security and is difficult to pick or duplicate."
      },
      {
        question: "Can it be painted in custom colors?",
        answer: "Yes, we can provide custom color options with our enamel paint finish."
      },
      {
        question: "What is covered under the 3-year warranty?",
        answer: "The warranty covers structural defects, lock mechanism issues, and paint finish problems under normal use."
      }
    ]
  },
  {
    id: "15",
    name: "Mild Steel Wall Safe",
    category: "Wall Safes",
    description: "Wall-mounted safe with concealed installation option.",
    detailedDescription: "The Mild Steel Wall Safe offers discrete security through wall-mounted installation that can be concealed behind pictures or furniture. Built with durable mild steel and featuring modern locking mechanisms, this safe maximizes floor space while providing secure storage for valuables. Perfect for homes and offices where space is at a premium but security cannot be compromised.",
    features: [
      "Wall-mounted design",
      "Space-saving solution",
      "Concealable installation",
      "Mild steel construction",
      "Modern locking mechanism",
      "Easy access height"
    ],
    specifications: [
      { label: "Material", value: "Mild Steel" },
      { label: "Mounting", value: "Wall-mounted" },
      { label: "Dimensions", value: "16\" x 14\" x 6\"" },
      { label: "Weight", value: "3-4 kg" },
      { label: "Door Thickness", value: "4mm" },
      { label: "Lock Type", value: "Digital/Key Option" },
      { label: "Interior", value: "Felt Lined" },
      { label: "Installation", value: "In-wall or Surface" }
    ],
    image: "https://2.wlimg.com/product_images/bc-full/2021/5/8855636/mild-steel-wall-safe-1622201700-5839511.jpeg",
    slug: "mild-steel-wall-safe",
    price: 3000,
    unit: "Piece",
    faqs: [
      {
        question: "Can it be installed in any wall type?",
        answer: "It can be installed in most wall types including drywall, concrete, and brick with appropriate mounting hardware."
      },
      {
        question: "How much weight can it hold?",
        answer: "The safe can securely hold up to 50 kg when properly wall-mounted."
      },
      {
        question: "Is the felt lining removable?",
        answer: "Yes, the felt lining can be removed for cleaning or replacement if needed."
      },
      {
        question: "Can it be hidden behind a picture?",
        answer: "Yes, when recessed into the wall, it can be completely concealed behind pictures or mirrors."
      }
    ]
  }
];

export const categories = [
  "All Products",
  "Safety Lockers",
  "Security Safes",
  "Hidden Floor Safes",
  "Strong Room Doors",
  "Fire Resistant",
  "Cash Boxes",
  "Vaults",
  "Wall Safes"
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "All Products") return products;
  return products.filter(product => product.category === category);
};