import { useState } from "react";
import { PageHeader, Card } from "../../components/Shared";

export default function AddProductPage({ onNavigate }) {
  const [form, setForm] = useState({ name: "", category: "", sku: "", price: "", stock: "", status: "Active", description: "" });
  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }));
  
  return (
    <main style={{ flex: 1, overflow: "auto", padding: "28px" }}>
      <PageHeader
        title="Add Product"
        subtitle="Fill in the details to list a new product in your store."
        actions={<><button className="cm-btn-ghost" onClick={() => onNavigate("products")}>Cancel</button><button className="cm-btn-primary">Save Product</button></>}
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 20 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <Card style={{ padding: 24 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 16 }}>Product Information</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <label style={{ fontSize: 12, color: "#888", fontWeight: 500, display: "block", marginBottom: 6 }}>Product Name</label>
                <input className="cm-input" placeholder="e.g. Woven Leather Tote Bag" value={form.name} onChange={e => set("name", e.target.value)} />
              </div>
              <div>
                <label style={{ fontSize: 12, color: "#888", fontWeight: 500, display: "block", marginBottom: 6 }}>Description</label>
                <textarea className="cm-input" rows={4} placeholder="Describe the product..." value={form.description} onChange={e => set("description", e.target.value)} style={{ resize: "vertical" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <label style={{ fontSize: 12, color: "#888", fontWeight: 500, display: "block", marginBottom: 6 }}>SKU</label>
                  <input className="cm-input" placeholder="e.g. ACC-104" value={form.sku} onChange={e => set("sku", e.target.value)} />
                </div>
                <div>
                  <label style={{ fontSize: 12, color: "#888", fontWeight: 500, display: "block", marginBottom: 6 }}>Category</label>
                  <select className="cm-select" style={{ width: "100%" }} value={form.category} onChange={e => set("category", e.target.value)}>
                    <option value="">Select category</option>
                    {["Accessories", "Footwear", "Watches", "Outerwear", "Apparel"].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </Card>
          <Card style={{ padding: 24 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 16 }}>Pricing & Inventory</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <label style={{ fontSize: 12, color: "#888", fontWeight: 500, display: "block", marginBottom: 6 }}>Price (₱)</label>
                <input className="cm-input" type="number" placeholder="0.00" value={form.price} onChange={e => set("price", e.target.value)} />
              </div>
              <div>
                <label style={{ fontSize: 12, color: "#888", fontWeight: 500, display: "block", marginBottom: 6 }}>Stock Quantity</label>
                <input className="cm-input" type="number" placeholder="0" value={form.stock} onChange={e => set("stock", e.target.value)} />
              </div>
            </div>
          </Card>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <Card style={{ padding: 24 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 16 }}>Status</div>
            {["Active", "Draft"].map((s, i) => (
              <label key={s} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", cursor: "pointer", fontSize: 14, color: "#444", borderBottom: i === 0 ? "1px solid #f5f0f0" : "none" }}>
                <input type="radio" name="status" checked={form.status === s} onChange={() => set("status", s)} style={{ accentColor: "#8b0000" }} />
                <div>
                  <div style={{ fontWeight: 500 }}>{s}</div>
                  <div style={{ fontSize: 12, color: "#bbb" }}>{s === "Active" ? "Visible in store" : "Hidden from store"}</div>
                </div>
              </label>
            ))}
          </Card>
          <Card style={{ padding: 24 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 16 }}>Product Image</div>
            <div style={{ border: "2px dashed #f0dede", borderRadius: 10, padding: "32px 20px", textAlign: "center", cursor: "pointer" }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>📷</div>
              <div style={{ fontSize: 13, fontWeight: 500, color: "#888" }}>Click to upload image</div>
              <div style={{ fontSize: 12, color: "#bbb", marginTop: 4 }}>PNG, JPG up to 5MB</div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}