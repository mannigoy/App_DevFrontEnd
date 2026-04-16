import { PageHeader, Card, StatusBadge } from "../../components/Shared";
import { ORDERS, PRODUCTS } from "../../data/mockData";

export default function DashboardPage({ onNavigate }) {
  const stats = [
    { label: "Total Revenue", value: "$24,860", change: "+12% this month", up: true },
    { label: "Orders", value: "148", change: "+8 today", up: true },
    { label: "Products", value: "48", change: "3 out of stock", up: false },
    { label: "Customers", value: "312", change: "+5 this week", up: true },
  ];
  return (
    <main style={{ flex: 1, overflow: "auto", padding: "28px" }}>
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back, Emma. Here's what's happening."
        actions={<button className="cm-btn-primary" onClick={() => onNavigate("add-product")}>+ Add Product</button>}
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 28 }}>
        {stats.map((s) => (
          <div key={s.label} className="stat-card">
            <div style={{ fontSize: 12, color: "#aaa", fontWeight: 500, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
            <div style={{ fontSize: 26, fontWeight: 700, color: "#1a1a1a", marginBottom: 6 }}>{s.value}</div>
            <div style={{ fontSize: 12, color: s.up ? "#10b981" : "#ef4444", fontWeight: 500 }}>{s.change}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <Card>
          <div style={{ padding: "18px 20px", borderBottom: "1px solid #f5f0f0" }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#222" }}>Recent Orders</div>
          </div>
          {ORDERS.slice(0, 4).map((o) => (
            <div key={o.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px", borderBottom: "1px solid #f9f4f4" }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#333" }}>{o.customer}</div>
                <div style={{ fontSize: 12, color: "#bbb", marginTop: 2 }}>{o.product}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <StatusBadge status={o.status} />
                <div style={{ fontSize: 12, color: "#aaa", marginTop: 4 }}>${o.total.toLocaleString()}</div>
              </div>
            </div>
          ))}
          <div style={{ padding: "12px 20px" }}>
            <button className="cm-btn-ghost" style={{ width: "100%", justifyContent: "center" }} onClick={() => onNavigate("orders")}>View All Orders</button>
          </div>
        </Card>
        <Card>
          <div style={{ padding: "18px 20px", borderBottom: "1px solid #f5f0f0" }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#222" }}>Low Stock Alert</div>
          </div>
          {PRODUCTS.filter(p => p.stock !== null && p.stock <= 4).map((p) => (
            <div key={p.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 20px", borderBottom: "1px solid #f9f4f4" }}>
              <img src={p.image} alt={p.name} style={{ width: 40, height: 40, borderRadius: 8, objectFit: "cover", border: "1px solid #f0e8e8" }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#333" }}>{p.name}</div>
                <div style={{ fontSize: 12, color: p.stock === 0 ? "#ef4444" : "#f97316", fontWeight: 600, marginTop: 2 }}>
                  {p.stock === 0 ? "Out of stock" : `${p.stock} left`}
                </div>
              </div>
              <button className="cm-btn-ghost" style={{ padding: "5px 12px", fontSize: 12 }} onClick={() => onNavigate("products")}>Restock</button>
            </div>
          ))}
          <div style={{ padding: "12px 20px" }}>
            <button className="cm-btn-ghost" style={{ width: "100%", justifyContent: "center" }} onClick={() => onNavigate("products")}>View All Products</button>
          </div>
        </Card>
      </div>
    </main>
  );
}