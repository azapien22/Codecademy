from pathlib import Path
import unittest


PROJECT_ROOT = Path(__file__).resolve().parents[1]
DASHBOARD_HTML = PROJECT_ROOT / "frontend" / "index.html"
HERMES_HTML = PROJECT_ROOT / "frontend" / "hermes-agent.html"
DASHBOARD_JS = PROJECT_ROOT / "frontend" / "js" / "dashboard.js"
HERMES_JS = PROJECT_ROOT / "frontend" / "js" / "hermes-agent.js"
BACKEND_APP = PROJECT_ROOT / "backend" / "app.py"


class PageSeparationTests(unittest.TestCase):
    def test_dashboard_contains_only_system_monitoring_content(self) -> None:
        html = DASHBOARD_HTML.read_text(encoding="utf-8")

        self.assertIn('class="active" href="/">Dashboard</a>', html)
        self.assertIn('href="/hermes-agent">Hermes Agent</a>', html)
        self.assertNotIn('id="mission-form"', html)
        self.assertNotIn('id="current-mission-panel"', html)
        self.assertNotIn('id="mission-history-list"', html)
        self.assertIn('id="cpu-usage"', html)
        self.assertIn('id="memory-usage"', html)
        self.assertIn('id="disk-usage"', html)
        self.assertIn('class="panel hermes-activity-panel"', html)
        self.assertIn('class="panel gpu-panel"', html)
        self.assertIn('src="/static/js/dashboard.js"', html)
        self.assertNotIn('src="/static/js/hermes-agent.js"', html)

    def test_hermes_agent_page_owns_all_mission_interfaces(self) -> None:
        html = HERMES_HTML.read_text(encoding="utf-8")

        self.assertIn('href="/">Dashboard</a>', html)
        self.assertIn('class="active" href="/hermes-agent">Hermes Agent</a>', html)
        self.assertIn('id="mission-form"', html)
        self.assertIn('id="current-mission-panel"', html)
        self.assertIn('id="mission-history-list"', html)
        self.assertIn('src="/static/js/hermes-agent.js"', html)
        self.assertNotIn('src="/static/js/dashboard.js"', html)
        self.assertNotIn('id="cpu-usage"', html)
        self.assertNotIn('class="panel gpu-panel"', html)

    def test_javascript_polling_is_isolated_by_page(self) -> None:
        dashboard_javascript = DASHBOARD_JS.read_text(encoding="utf-8")
        hermes_javascript = HERMES_JS.read_text(encoding="utf-8")

        self.assertNotIn("/api/missions", dashboard_javascript)
        self.assertNotIn("missionForm", dashboard_javascript)
        self.assertIn('fetch("/api/system")', dashboard_javascript)
        self.assertIn('fetch("/api/services")', dashboard_javascript)
        self.assertIn('fetch("/api/gpus")', dashboard_javascript)
        self.assertIn('fetch("/api/hermes")', dashboard_javascript)

        self.assertIn('fetch("/api/missions")', hermes_javascript)
        self.assertIn('fetch("/api/missions/current")', hermes_javascript)
        self.assertIn("submitMission", hermes_javascript)
        self.assertIn("cancelCurrentMission", hermes_javascript)
        self.assertNotIn('fetch("/api/system")', hermes_javascript)
        self.assertNotIn('fetch("/api/gpus")', hermes_javascript)

    def test_backend_serves_the_hermes_agent_page(self) -> None:
        backend = BACKEND_APP.read_text(encoding="utf-8")

        self.assertIn('@app.get("/hermes-agent")', backend)
        self.assertIn(
            'return FileResponse(FRONTEND_DIR / "hermes-agent.html")',
            backend,
        )


if __name__ == "__main__":
    unittest.main()
