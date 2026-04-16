import { useState } from "react";
import { PageHeader, Card, StatusBadge } from "../../components/Shared";
import { PRODUCTS } from "../../data/mockData";

export default function ProductsPage() {
  const TABS = ["All Products", "Active", "Draft", "Out of Stock"];
  const [activeTab, setActiveTab] = useState("All Products");
  const [selected, setSelected] = useState([]);
  
  const filtered = PRODUCTS.filter(p => {
    if (activeTab === "All Products") return true;
    if (activeTab === "Active") return p.status === "Active";
    if (activeTab === "Draft") return p.status === "Draft";
    if (activeTab === "Out of Stock") return p.status === "Out of Stock";
    return true;
  });
  
  const toggleAll = () => setSelected(selected.length === filtered.length ? [] : filtered.map(p => p.id));
  const toggleRow = (id) => setSelected(prev => prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]);

  return (
    <main style={{ flex: 1, overflow: "auto", padding: "28px" }}>
      <PageHeader
        title="Products"
        subtitle="Manage your store's inventory, pricing, and availability."
        actions={<><button className="cm-btn-ghost">⬇ Export</button><button className="cm-btn-primary">+ Add Product</button></>}
      />
      <Card>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", borderBottom: "1px solid #f5f0f0" }}>
          <div style={{ display: "flex", gap: 4 }}>
            {TABS.map(tab => (
              <button key={tab} className="cm-tab" onClick={() => setActiveTab(tab)} style={{
                border: activeTab === tab ? "1.5px solid #d8b8b8" : "1.5px solid transparent",
                background: activeTab === tab ? "#fff" : "transparent",
                color: activeTab === tab ? "#8b0000" : "#888",
                fontWeight: activeTab === tab ? 600 : 400,
              }}>{tab}</button>
            ))}
          </div>
          <button className="cm-btn-ghost" style={{ padding: "6px 14px", fontSize: 13 }}>⚙ More Filters</button>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #f5f0f0" }}>
              <th style={{ padding: "11px 20px", width: 40 }}>
                <input type="checkbox" className="cm-checkbox" checked={selected.length === filtered.length && filtered.length > 0} onChange={toggleAll} />
              </th>
              {["Product", "SKU", "Price", "Stock", "Status", "Actions"].map(h => (
                <th key={h} style={{ padding: "11px 12px", textAlign: "left", fontSize: 12, fontWeight: 600, color: "#aaa", letterSpacing: "0.05em", textTransform: "uppercase" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, i) => (
              <tr key={p.id} className="cm-row" style={{ borderBottom: i < filtered.length - 1 ? "1px solid #f8f2f2" : "none", background: selected.includes(p.id) ? "#fdf8f8" : "#fff" }}>
                <td style={{ padding: "14px 20px" }}><input type="checkbox" className="cm-checkbox" checked={selected.includes(p.id)} onChange={() => toggleRow(p.id)} /></td>
                <td style={{ padding: "14px 12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <img src={p.image} alt={p.name} style={{ width: 46, height: 46, borderRadius: 8, objectFit: "cover", border: "1px solid #f0e8e8" }} />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#222" }}>{p.name}</div>
                      <div style={{ fontSize: 12, color: "#bbb", marginTop: 2 }}>{p.category}</div>
                    </div>
                  </div>
                </td>
                <td style={{ padding: "14px 12px", fontSize: 13, color: "#aaa", fontWeight: 500 }}>{p.sku}</td>
                <td style={{ padding: "14px 12px", fontSize: 14, fontWeight: 600, color: "#333" }}>${p.price.toLocaleString()}.00</td>
                <td style={{ padding: "14px 12px" }}>
                  {p.stock === null ? <span style={{ color: "#ccc" }}>—</span>
                    : p.stock === 0 ? <span style={{ fontSize: 13, color: "#ef4444", fontWeight: 600 }}>0 in stock</span>
                    : <div><div style={{ fontSize: 13, color: "#333", fontWeight: 500 }}>{p.stock} in stock</div>{p.lowStock && <div style={{ fontSize: 11, color: "#f97316", fontWeight: 600, marginTop: 1 }}>Low stock</div>}</div>}
                </td>
                <td style={{ padding: "14px 12px" }}><StatusBadge status={p.status} /></td>
                <td style={{ padding: "14px 12px" }}>
                  <button style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 10px", borderRadius: 6, color: "#aaa", fontSize: 18, letterSpacing: 1 }}>···</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", borderTop: "1px solid #f5f0f0" }}>
          <span style={{ fontSize: 13, color: "#bbb" }}>Showing 1 to {filtered.length} of 48 products</span>
          <div style={{ display: "flex", gap: 4 }}>
            {["‹", "1", "2", "3", "›"].map((p, i) => (
              <button key={i} className={`cm-pg-btn${p === "1" ? " active" : ""}`}>{p}</button>
            ))}
          </div>
        </div>
      </Card>
    </main>
  );
}