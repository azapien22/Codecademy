from pathlib import Path
import unittest


PROJECT_ROOT = Path(__file__).resolve().parents[1]
INDEX_HTML = PROJECT_ROOT / "frontend" / "index.html"
DASHBOARD_JS = PROJECT_ROOT / "frontend" / "js" / "dashboard.js"
STYLES_CSS = PROJECT_ROOT / "frontend" / "css" / "styles.css"


class MissionHistoryFrontendContractTests(unittest.TestCase):
    def test_dashboard_exposes_mission_history_controls(self) -> None:
        html = INDEX_HTML.read_text(encoding="utf-8")

        self.assertIn('class="panel mission-history-panel"', html)
        self.assertIn('class="mission-history-controls"', html)
        self.assertIn('id="mission-history-count"', html)
        self.assertIn('id="refresh-history-button"', html)
        self.assertIn('id="mission-history-list"', html)
        self.assertIn('class="mission-history-empty"', html)

    def test_dashboard_loads_and_renders_persistent_mission_history(self) -> None:
        javascript = DASHBOARD_JS.read_text(encoding="utf-8")

        self.assertIn('fetch("/api/missions")', javascript)
        self.assertIn("function missionStatusClass", javascript)
        self.assertIn("function createMissionHistoryItem", javascript)
        self.assertIn('data-mission-id="${escapeHtml(mission.id)}"', javascript)
        self.assertIn("loadMissionHistory()", javascript)

    def test_history_entries_open_the_selected_persistent_mission(self) -> None:
        javascript = DASHBOARD_JS.read_text(encoding="utf-8")

        self.assertIn("async function openMissionFromHistory", javascript)
        self.assertIn("encodeURIComponent(missionId)", javascript)
        self.assertIn('refreshHistoryButton.addEventListener(', javascript)
        self.assertIn('document\n  .querySelector("#mission-history-list")', javascript)
        self.assertIn("openMissionFromHistory(item.dataset.missionId)", javascript)

    def test_mission_history_reuses_dashboard_visual_language(self) -> None:
        css = STYLES_CSS.read_text(encoding="utf-8")

        self.assertIn(".mission-history-controls", css)
        self.assertIn(".mission-history-item:hover", css)
        self.assertIn(".mission-history-type", css)
        self.assertIn(".mission-history-command", css)
        self.assertIn(".mission-history-meta", css)
        self.assertIn(".mission-history-status", css)


if __name__ == "__main__":
    unittest.main()
