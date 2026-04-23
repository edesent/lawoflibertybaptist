// Events are pulled from a published Google Sheet (File → Share → Publish to web → CSV).
// Paste the published ID (the long string between /e/ and /pub in the URL) here.
// When this is empty, the Events section falls back to the hardcoded schedule in Events.tsx.
const PUBLISHED_ID = process.env.NEXT_PUBLIC_EVENTS_SHEET_ID ?? "";

export interface SheetEvent {
  title: string;
  time: string;
  description: string;
  month: string;
  day: string;
  label: string;
  accent: boolean;
}

function parseCSV(csv: string): string[][] {
  const rows: string[][] = [];
  let current = "";
  let inQuotes = false;
  let row: string[] = [];

  for (let i = 0; i < csv.length; i++) {
    const ch = csv[i];
    if (inQuotes) {
      if (ch === '"' && csv[i + 1] === '"') {
        current += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        current += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ",") {
        row.push(current);
        current = "";
      } else if (ch === "\n" || (ch === "\r" && csv[i + 1] === "\n")) {
        row.push(current);
        current = "";
        rows.push(row);
        row = [];
        if (ch === "\r") i++;
      } else {
        current += ch;
      }
    }
  }
  if (current || row.length) {
    row.push(current);
    rows.push(row);
  }
  return rows;
}

export async function getEvents(): Promise<SheetEvent[]> {
  if (!PUBLISHED_ID) return [];

  const url = `https://docs.google.com/spreadsheets/d/e/${PUBLISHED_ID}/pub?gid=0&single=true&output=csv`;

  try {
    // ISR: revalidate every 5 minutes
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) return [];
    const text = await res.text();
    const rows = parseCSV(text);

    return rows
      .slice(1)
      .filter((row) => row[0]?.trim())
      .map((row) => ({
        title: row[0]?.trim() || "",
        time: row[1]?.trim() || "",
        description: row[2]?.trim() || "",
        month: row[3]?.trim() || "",
        day: row[4]?.trim() || "",
        label: row[5]?.trim() || "",
        accent: (row[6]?.trim() || "").toLowerCase() === "true",
      }));
  } catch {
    return [];
  }
}
