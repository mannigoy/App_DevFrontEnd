export const PRODUCTS = [
  { id: 1, name: "Woven Leather Tote Bag", category: "Accessories", sku: "ACC-104", price: 2450, stock: 12, status: "Active", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=80&h=80&fit=crop" },
  { id: 2, name: "Opyum Leather Pumps", category: "Footwear", sku: "FTW-882", price: 1150, stock: 4, status: "Active", lowStock: true, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=80&h=80&fit=crop" },
  { id: 3, name: "Printed Silk Twill Scarf", category: "Accessories", sku: "ACC-301", price: 495, stock: 0, status: "Out of Stock", image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=80&h=80&fit=crop" },
  { id: 4, name: "Tank Must Watch Gold", category: "Watches", sku: "WAT-505", price: 3400, stock: 24, status: "Active", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80&h=80&fit=crop" },
  { id: 5, name: "Cashmere Belted Coat", category: "Outerwear", sku: "OUT-210", price: 4200, stock: null, status: "Draft", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=80&h=80&fit=crop" },
  { id: 6, name: "Silk Midi Dress", category: "Apparel", sku: "APP-118", price: 1800, stock: 9, status: "Active", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=80&h=80&fit=crop" },
];

export const ORDERS = [
  { id: "#ORD-001", customer: "Ana Reyes", product: "Woven Leather Tote Bag", date: "Apr 14, 2025", total: 2450, status: "Delivered" },
  { id: "#ORD-002", customer: "Mark Santos", product: "Opyum Leather Pumps", date: "Apr 13, 2025", total: 1150, status: "Processing" },
  { id: "#ORD-003", customer: "Lea Cruz", product: "Tank Must Watch Gold", date: "Apr 12, 2025", total: 3400, status: "Shipped" },
  { id: "#ORD-004", customer: "Carlo Diaz", product: "Cashmere Belted Coat", date: "Apr 11, 2025", total: 4200, status: "Cancelled" },
  { id: "#ORD-005", customer: "Mia Flores", product: "Silk Midi Dress", date: "Apr 10, 2025", total: 1800, status: "Delivered" },
];