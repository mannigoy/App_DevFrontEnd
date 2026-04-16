import { PageHeader, Card } from "../../components/Shared";

export default function AnalyticsPage() {
  const bars = [
    { month: "Nov", val: 62 }, { month: "Dec", val: 85 }, { month: "Jan", val: 54 },
    { month: "Feb", val: 71 }, { month: "Mar", val: 90 }, { month: "Apr", val: 78 },
  ];
  const top = [
    { name: "Tank Must Watch Gold", revenue: "$81,600", units: 24 },
    { name: "Cashmere Belted Coat", revenue: "$67,200", units: 16 },
    { name: "Woven Leather Tote Bag", revenue: "$29,400", units: 12 },
    { name: "Opyum Leather Pumps", revenue: "$13,800", units: 12 },
  ];
  return (
    <main style={{ flex: 1, overflow: "auto", padding: "28px" }}>
      <PageHeader title="Analytics" subtitle="Track your store's performance over time." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 24 }}>
        {[
          { label: "Revenue This Month", value: "$24,860", sub: "+12% vs last month" },
          { label: "Orders This Month", value: "148", sub: "+8 vs last month" },
          { label: "Avg. Order Value", value: "$168", sub: "Based on 148 orders" },
        ].map(s => (
          <div key={s.label} className="stat-card">
            <div style={{ fontSize: 12, color: "#aaa", fontWeight: 500, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.label}</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#1a1a1a", marginBottom: 4 }}>{s.value}</div>
            <div style={{ fontSize: 12, color: "#10b981", fontWeight: 500 }}>{s.sub}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <Card style={{ padding: 24 }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: "#222", marginBottom: 20 }}>Monthly Revenue</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 160 }}>
            {bars.map(b => (
              <div key={b.month} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <div style={{ width: "100%", background: b.val === 90 ? "#8b0000" : "#f5e0e0", borderRadius: "4px 4px 0 0", height: `${b.val * 1.6}px`, transition: "height 0.3s" }} />
                <span style={{ fontSize: 11, color: "#bbb", fontWeight: 500 }}>{b.month}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card style={{ padding: 24 }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: "#222", marginBottom: 16 }}>Top Products</div>
          {top.map((p, i) => (
            <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: i < top.length - 1 ? "1px solid #f5f0f0" : "none" }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: "#fdf0f0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#8b0000" }}>{i + 1}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#333" }}>{p.name}</div>
                <div style={{ fontSize: 12, color: "#bbb", marginTop: 2 }}>{p.units} units sold</div>
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#333" }}>{p.revenue}</div>
            </div>
          ))}
        </Card>
      </div>
    </main>
  );
}