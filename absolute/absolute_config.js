// Apps Script web-app URL for the ABSOLUTE-rating study (single-clip 0-100 +
// flag).  Set up a NEW sheet + deployment (do not reuse the pairwise study's
// URL — the row shapes differ).  Follow APPS_SCRIPT_SETUP.md, with the
// appendRow columns replaced by:
//   ["received_at", "rater_id", "clip_id", "rating", "flag",
//    "confidence", "why", "seconds", "answered_at"]
// and the forEach body by:
//   sheet.appendRow([now, data.rater_id, a.clip_id, a.rating, a.flag,
//                    a.confidence, a.why || "", a.seconds, a.ts]);
// Leave empty to disable remote submission (CSV download still works).
const ABS_SUBMIT_URL = "https://script.google.com/macros/s/AKfycbwG5ANkOqWCsPBZDUrDmF0iIXlQKtFaIJa28euUXg-EJpnPgy3wsQ1HOyvE_PztQgle9A/exec";
