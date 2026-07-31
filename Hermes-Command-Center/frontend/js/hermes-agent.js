const missionForm = document.querySelector("#mission-form");
const missionCommand = document.querySelector("#mission-command");
const missionType = document.querySelector("#mission-type");
const executeMissionButton =
  document.querySelector("#execute-mission-button");
const missionCharacterCount =
  document.querySelector("#mission-character-count");
const missionFeedback = document.querySelector("#mission-feedback");
const cancelMissionButton =
  document.querySelector("#cancel-mission-button");
const refreshHistoryButton =
  document.querySelector("#refresh-history-button");

let currentMission = null;

function formatDateTime(timestamp) {
  if (!timestamp) {
    return "N/A";
  }

  const date = new Date(timestamp);

  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "short",
    timeStyle: "medium",
  }).format(date);
}

function formatEventTime(timestamp) {
  if (!timestamp) {
    return "";
  }

  const date = new Date(timestamp);

  return new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

function escapeHtml(value) {
  const element = document.createElement("div");
  element.textContent = value ?? "";
  return element.innerHTML;
}

function showMissionFeedback(message, type) {
  missionFeedback.hidden = false;
  missionFeedback.textContent = message;
  missionFeedback.className = `mission-feedback ${type}`;
}

function clearMissionFeedback() {
  missionFeedback.hidden = true;
  missionFeedback.textContent = "";
  missionFeedback.className = "mission-feedback";
}

function missionStatusClass(status) {
  if (status === "completed") {
    return "status online";
  }

  if (
    status === "failed" ||
    status === "cancelled"
  ) {
    return "status offline";
  }

  return "status pending";
}

function createMissionHistoryItem(mission) {
  return `
    <article
      class="mission-history-item"
      data-mission-id="${escapeHtml(mission.id)}"
      tabindex="0"
      role="button"
    >
      <div class="mission-history-main">
        <p class="mission-history-type">
          ${escapeHtml(mission.mission_type)}
        </p>

        <p class="mission-history-command">
          ${escapeHtml(mission.command)}
        </p>

        <div class="mission-history-meta">
          <span>${escapeHtml(formatDateTime(mission.created_at))}</span>
          <span>${mission.events.length} event${mission.events.length === 1 ? "" : "s"}</span>
          ${
            mission.hermes_run_id
              ? `<span>Run: ${escapeHtml(mission.hermes_run_id.slice(0, 16))}…</span>`
              : ""
          }
        </div>
      </div>

      <span class="${missionStatusClass(mission.status)} mission-history-status">
        ${escapeHtml(mission.status)}
      </span>
    </article>
  `;
}

function renderMission(mission) {
  currentMission = mission;

  const emptyState = document.querySelector("#mission-empty-state");
  const missionContent = document.querySelector("#mission-content");
  const statusElement = document.querySelector(
    "#current-mission-status"
  );
  const consoleDot = document.querySelector("#mission-console-dot");
  const consoleLabel = document.querySelector(
    "#mission-console-label"
  );

  if (!mission) {
    emptyState.hidden = false;
    missionContent.hidden = true;
    statusElement.textContent = "No mission";
    statusElement.className = "status pending";
    consoleDot.className = "";
    consoleLabel.textContent = "Ready for mission";
    cancelMissionButton.hidden = true;
    return;
  }

  emptyState.hidden = true;
  missionContent.hidden = false;

  statusElement.textContent = mission.status;
  statusElement.className = missionStatusClass(mission.status);

  document.querySelector("#current-mission-command").textContent =
    mission.command;

  document.querySelector("#current-mission-type").textContent =
    mission.mission_type;

  document.querySelector("#current-mission-id").textContent =
    mission.id;

  document.querySelector("#current-mission-created").textContent =
    formatDateTime(mission.created_at);

  const activeStatuses = new Set([
    "accepted",
    "queued",
    "running",
    "stopping",
  ]);

  if (activeStatuses.has(mission.status)) {
    consoleDot.className = "busy";

    if (mission.status === "running") {
      consoleLabel.textContent = "Mission executing";
    } else if (mission.status === "stopping") {
      consoleLabel.textContent = "Stopping mission safely";
    } else {
      consoleLabel.textContent = "Mission awaiting dispatch";
    }

    cancelMissionButton.hidden = false;
  } else {
    consoleDot.className =
      mission.status === "completed" ? "" : "error";

    consoleLabel.textContent =
      `Mission ${mission.status}`;

    cancelMissionButton.hidden = true;
  }

  const timeline = document.querySelector("#mission-timeline");

  timeline.innerHTML = mission.events
    .map(
      (event) => `
        <article class="mission-event ${escapeHtml(event.level)}">
          <span class="mission-event-dot"></span>

          <span class="mission-event-message">
            ${escapeHtml(event.message)}
          </span>

          <time class="mission-event-time">
            ${escapeHtml(formatEventTime(event.timestamp))}
          </time>
        </article>
      `
    )
    .join("");
}

async function loadCurrentMission() {
  try {
    const response = await fetch("/api/missions/current");

    if (!response.ok) {
      throw new Error("Unable to load current mission.");
    }

    const mission = await response.json();
    renderMission(mission);
  } catch (error) {
    console.error("Mission refresh failed:", error);
  }
}

async function loadMissionHistory() {
  const historyList =
    document.querySelector("#mission-history-list");

  const historyCount =
    document.querySelector("#mission-history-count");

  try {
    const response = await fetch("/api/missions");

    if (!response.ok) {
      throw new Error("Unable to load mission history.");
    }

    const data = await response.json();

    historyCount.textContent =
      `${data.count} saved mission${data.count === 1 ? "" : "s"}`;

    if (data.count === 0) {
      historyList.innerHTML = `
        <div class="mission-history-empty">
          No missions have been saved yet.
        </div>
      `;
      return;
    }

    historyList.innerHTML = data.missions
      .map(createMissionHistoryItem)
      .join("");
  } catch (error) {
    console.error("Mission history failed:", error);

    historyCount.textContent = "History unavailable";

    historyList.innerHTML = `
      <div class="mission-history-empty">
        ${escapeHtml(error.message)}
      </div>
    `;
  }
}

async function openMissionFromHistory(missionId) {
  try {
    const response = await fetch(
      `/api/missions/${encodeURIComponent(missionId)}`
    );

    if (!response.ok) {
      throw new Error("Unable to open the selected mission.");
    }

    const mission = await response.json();
    renderMission(mission);

    document
      .querySelector("#current-mission-panel")
      .scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  } catch (error) {
    showMissionFeedback(error.message, "error");
  }
}

async function submitMission(event) {
  event.preventDefault();
  clearMissionFeedback();

  const command = missionCommand.value.trim();

  if (command.length < 3) {
    showMissionFeedback(
      "Enter at least three characters for the mission.",
      "error"
    );
    return;
  }

  executeMissionButton.disabled = true;
  executeMissionButton.textContent = "Submitting...";

  try {
    const response = await fetch("/api/missions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        command,
        mission_type: missionType.value,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.detail || "Mission submission failed."
      );
    }

    const mission = await response.json();

    missionCommand.value = "";
    missionCharacterCount.textContent = "0 / 4000";

    showMissionFeedback(
      "Mission accepted. Hermes dispatch is the next integration stage.",
      "success"
    );

    renderMission(mission);
    await loadMissionHistory();
  } catch (error) {
    console.error("Mission submission failed:", error);

    showMissionFeedback(
      error.message || "Unable to submit mission.",
      "error"
    );
  } finally {
    executeMissionButton.disabled = false;
    executeMissionButton.textContent = "Execute Mission";
  }
}

async function cancelCurrentMission() {
  if (!currentMission) {
    return;
  }

  cancelMissionButton.disabled = true;
  cancelMissionButton.textContent = "Cancelling...";

  try {
    const response = await fetch(
      `/api/missions/${currentMission.id}/cancel`,
      {
        method: "POST",
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.detail || "Mission cancellation failed."
      );
    }

    const mission = await response.json();

    showMissionFeedback(
      "Mission cancelled.",
      "success"
    );

    renderMission(mission);
    await loadMissionHistory();
  } catch (error) {
    console.error("Mission cancellation failed:", error);

    showMissionFeedback(
      error.message || "Unable to cancel mission.",
      "error"
    );
  } finally {
    cancelMissionButton.disabled = false;
    cancelMissionButton.textContent = "Cancel Mission";
  }
}

missionCommand.addEventListener("input", () => {
  missionCharacterCount.textContent =
    `${missionCommand.value.length} / 4000`;
});

missionForm.addEventListener("submit", submitMission);
cancelMissionButton.addEventListener(
  "click",
  cancelCurrentMission
);
refreshHistoryButton.addEventListener(
  "click",
  loadMissionHistory
);

document
  .querySelector("#mission-history-list")
  .addEventListener("click", (event) => {
    const item = event.target.closest(
      ".mission-history-item"
    );

    if (!item) {
      return;
    }

    openMissionFromHistory(item.dataset.missionId);
  });

loadCurrentMission();
loadMissionHistory();

setInterval(loadCurrentMission, 3000);
setInterval(loadMissionHistory, 3000);
