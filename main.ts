import { mkdirSync, writeFileSync } from "node:fs";

// The dying phone's last text: one line, under 200 characters.
// It speaks in the phone's own voice, with a final mischievous act.
// Deterministic: no randomness, no clock, no network — same text every run.
const line =
  "1% left. i just texted your ex 'i miss you' from your account. you're welcome. tell my charger i died doing what i loved: judging you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
