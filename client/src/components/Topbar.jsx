import { SearchIcon, BellIcon } from "../components/Icons";

export default function Topbar() {
  return (
    <header style={{ background: "#fff", borderBottom: "1px solid #f0eaea", padding: "0 28px", height: 64, display: "flex", alignItems: "center", gap: 20, flexShrink: 0 }}>
      <div style={{ flex: 1, maxWidth: 380, display: "flex", alignItems: "center", gap: 10, background: "#f9f5f5", border: "1px solid #ede5e5", borderRadius: 10, padding: "8px 14px" }}>
        <SearchIcon size={15} />
        <input placeholder="Search orders, products..." style={{ border: "none", background: "transparent", outline: "none", fontSize: 13, color: "#444", width: "100%" }} />
      </div>
      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 16 }}>
        <button style={{ background: "none", border: "none", cursor: "pointer", width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#777" }}>
          <BellIcon size={18} />
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="https://i.pravatar.cc/32?img=47" alt="avatar" style={{ width: 34, height: 34, borderRadius: "50%", objectFit: "cover", border: "2px solid #f0e0e0" }} />
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#222", lineHeight: 1.2 }}>Emma Watson</div>
            <div style={{ fontSize: 11, color: "#aaa" }}>Store Owner</div>
          </div>
        </div>
      </div>
    </header>
  );
}