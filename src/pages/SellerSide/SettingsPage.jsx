import { useState } from "react";
import { PageHeader, Card } from "../../components/Shared";

export default function SettingsPage() {
  const [store, setStore] = useState({ name: "Campus Marketplace", email: "store@citu.edu.ph", currency: "PHP", description: "CIT-U Official Store" });
  const set = (k, v) => setStore(p => ({ ...p, [k]: v }));
  return (
    <main style={{ flex: 1, overflow: "auto", padding: "28px" }}>
      <PageHeader title="Settings" subtitle="Manage your store preferences and account details." actions={<button className="cm-btn-primary">Save Changes</button>} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <Card style={{ padding: 24 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 16 }}>Store Details</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[{ label: "Store Name", key: "name" }, { label: "Contact Email", key: "email" }, { label: "Store Description", key: "description" }].map(f => (
              <div key={f.key}>
                <label style={{ fontSize: 12, color: "#888", fontWeight: 500, display: "block", marginBottom: 6 }}>{f.label}</label>
                <input className="cm-input" value={store[f.key]} onChange={e => set(f.key, e.target.value)} />
              </div>
            ))}
            <div>
              <label style={{ fontSize: 12, color: "#888", fontWeight: 500, display: "block", marginBottom: 6 }}>Currency</label>
              <select className="cm-select" style={{ width: "100%" }} value={store.currency} onChange={e => set("currency", e.target.value)}>
                <option>PHP</option><option>USD</option><option>EUR</option>
              </select>
            </div>
          </div>
        </Card>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <Card style={{ padding: 24 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 16 }}>Account</div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <img src="https://i.pravatar.cc/60?img=47" alt="avatar" style={{ width: 56, height: 56, borderRadius: "50%", border: "2px solid #f0e0e0" }} />
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#222" }}>Emma Watson</div>
                <div style={{ fontSize: 13, color: "#aaa" }}>Store Owner · store@citu.edu.ph</div>
              </div>
            </div>
            <button className="cm-btn-ghost" style={{ width: "100%", justifyContent: "center" }}>Change Avatar</button>
          </Card>
          <Card style={{ padding: 24 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 16 }}>Notifications</div>
            {[
              { label: "New orders", desc: "Get notified for each new order" },
              { label: "Low stock alerts", desc: "Alert when stock drops below 5" },
              { label: "Weekly summary", desc: "Weekly performance report" },
            ].map((n, i) => (
              <div key={n.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: i < 2 ? "1px solid #f5f0f0" : "none" }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#333" }}>{n.label}</div>
                  <div style={{ fontSize: 12, color: "#bbb" }}>{n.desc}</div>
                </div>
                <input type="checkbox" defaultChecked style={{ accentColor: "#8b0000", width: 16, height: 16 }} />
              </div>
            ))}
          </Card>
        </div>
      </div>
    </main>
  );
}