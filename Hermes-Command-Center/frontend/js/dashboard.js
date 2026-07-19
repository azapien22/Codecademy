const connectionDot = document.querySelector("#connection-dot");
const connectionText = document.querySelector("#connection-text");
const refreshButton = document.querySelector("#refresh-button");

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

function setServiceStatus(elementId, service) {
  const element = document.querySelector(`#${elementId}`);

  if (!element) {
    return;
  }

  if (service.online) {
    element.textContent = "Online";
    element.className = "status online";
  } else {
    element.textContent = "Offline";
    element.className = "status offline";
  }
}

function formatPower(value) {
  if (value === null || value === undefined) {
    return "N/A";
  }

  return `${value} W`;
}

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

function createGpuCard(gpu) {
  const safeUtilization = Math.min(
    Math.max(gpu.utilization_percent, 0),
    100
  );

  const safeMemoryUsage = Math.min(
    Math.max(gpu.memory.usage_percent, 0),
    100
  );

  return `
    <article class="gpu-card">
      <div class="gpu-card-header">
        <div>
          <p class="gpu-index">GPU ${gpu.index}</p>
          <h4 class="gpu-name">${escapeHtml(gpu.name)}</h4>
        </div>

        <span class="gpu-health" title="GPU detected"></span>
      </div>

      <div class="metric">
        <div class="metric-heading">
          <span>GPU utilization</span>
          <strong>${gpu.utilization_percent}%</strong>
        </div>

        <div class="progress-track">
          <div
            class="progress-fill"
            style="width: ${safeUtilization}%"
          ></div>
        </div>
      </div>

      <div class="metric">
        <div class="metric-heading">
          <span>VRAM usage</span>
          <strong>${gpu.memory.usage_percent}%</strong>
        </div>

        <div class="progress-track">
          <div
            class="progress-fill memory"
            style="width: ${safeMemoryUsage}%"
          ></div>
        </div>
      </div>

      <div class="gpu-stats">
        <div class="gpu-stat">
          <span class="gpu-stat-label">VRAM</span>
          <span class="gpu-stat-value">
            ${gpu.memory.used_gb} / ${gpu.memory.total_gb} GB
          </span>
        </div>

        <div class="gpu-stat">
          <span class="gpu-stat-label">Temperature</span>
          <span class="gpu-stat-value">
            ${gpu.temperature_c}°C
          </span>
        </div>

        <div class="gpu-stat">
          <span class="gpu-stat-label">Power draw</span>
          <span class="gpu-stat-value">
            ${formatPower(gpu.power.draw_w)}
          </span>
        </div>

        <div class="gpu-stat">
          <span class="gpu-stat-label">Power limit</span>
          <span class="gpu-stat-value">
            ${formatPower(gpu.power.limit_w)}
          </span>
        </div>
      </div>
    </article>
  `;
}

function renderGpus(gpuData) {
  const gpuGrid = document.querySelector("#gpu-grid");
  const gpuCount = document.querySelector("#gpu-count");

  if (!gpuGrid || !gpuCount) {
    return;
  }

  if (!gpuData.online) {
    gpuCount.textContent = "NVIDIA monitoring unavailable";

    gpuGrid.innerHTML = `
      <div class="gpu-error">
        ${escapeHtml(
          gpuData.error || "Unable to retrieve GPU information."
        )}
      </div>
    `;

    return;
  }

  gpuCount.textContent =
    `${gpuData.count} NVIDIA GPU` +
    `${gpuData.count === 1 ? "" : "s"} online`;

  gpuGrid.innerHTML = gpuData.gpus
    .map(createGpuCard)
    .join("");
}

function renderHermesStatus(hermesData) {
  const statusElement = document.querySelector("#hermes-status");
  const detailsElement = document.querySelector("#hermes-details");

  if (!statusElement || !detailsElement) {
    return;
  }

  if (!hermesData.online) {
    statusElement.textContent = "Offline";
    statusElement.className = "status offline";
    detailsElement.textContent =
      hermesData.error || "Hermes backend unavailable";
    return;
  }

  const gatewayState = hermesData.gateway.busy ? "Busy" : "Idle";

  const telegramState = hermesData.telegram.connected
    ? "Telegram connected"
    : "Telegram disconnected";

  statusElement.textContent = gatewayState;
  statusElement.className = hermesData.gateway.busy
    ? "status pending"
    : "status online";

  detailsElement.textContent =
    `v${hermesData.version} · ` +
    `${telegramState} · ` +
    `${hermesData.agents.active} active agent` +
    `${hermesData.agents.active === 1 ? "" : "s"} · ` +
    `${hermesData.agents.sessions} session` +
    `${hermesData.agents.sessions === 1 ? "" : "s"}`;
}

function renderHermesActivity(hermesData) {
  const panel = document.querySelector(".hermes-activity-panel");
  const activityDot = document.querySelector("#hermes-activity-dot");
  const activityLabel = document.querySelector(
    "#hermes-activity-label"
  );
  const currentState = document.querySelector(
    "#hermes-current-state"
  );
  const stateBadge = document.querySelector("#hermes-state-badge");
  const stateDescription = document.querySelector(
    "#hermes-state-description"
  );

  if (!panel || !activityDot || !currentState) {
    return;
  }

  panel.classList.remove("is-busy");
  activityDot.className = "activity-dot";

  if (!hermesData.online) {
    activityDot.classList.add("offline");
    activityLabel.textContent = "Hermes unavailable";
    currentState.textContent = "Offline";
    stateBadge.textContent = "Offline";
    stateBadge.className = "status offline";
    stateDescription.textContent =
      hermesData.error || "Unable to reach the Hermes backend.";

    return;
  }

  const isBusy =
    hermesData.gateway.busy ||
    hermesData.agents.active > 0;

  if (isBusy) {
    panel.classList.add("is-busy");
    activityDot.classList.add("busy");
    activityLabel.textContent = "Hermes is working";
    currentState.textContent = "Executing";
    stateBadge.textContent = "Busy";
    stateBadge.className = "status pending";
    stateDescription.textContent =
      `${hermesData.agents.active} active agent` +
      `${hermesData.agents.active === 1 ? "" : "s"} ` +
      "currently executing.";
  } else {
    activityDot.classList.add("online");
    activityLabel.textContent = "Hermes operational";
    currentState.textContent = "Standing By";
    stateBadge.textContent = "Idle";
    stateBadge.className = "status online";
    stateDescription.textContent =
      "Hermes is online and ready to accept a new task.";
  }

  document.querySelector("#hermes-active-agents").textContent =
    hermesData.agents.active;

  document.querySelector("#hermes-active-sessions").textContent =
    hermesData.agents.sessions;

  document.querySelector("#hermes-telegram-state").textContent =
    hermesData.telegram.connected ? "Connected" : "Disconnected";

  document.querySelector("#hermes-gateway-pid").textContent =
    hermesData.gateway.pid ?? "N/A";

  document.querySelector("#hermes-version").textContent =
    `v${hermesData.version}`;

  document.querySelector("#hermes-profile").textContent =
    hermesData.profile;

  document.querySelector("#hermes-gateway-state").textContent =
    hermesData.gateway.state;
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

async function loadDashboard() {
  refreshButton.disabled = true;
  refreshButton.textContent = "Refreshing...";

  try {
    const [
      healthResponse,
      systemResponse,
      servicesResponse,
      gpuResponse,
      hermesResponse,
    ] = await Promise.all([
      fetch("/api/health"),
      fetch("/api/system"),
      fetch("/api/services"),
      fetch("/api/gpus"),
      fetch("/api/hermes"),
    ]);

    if (
      !healthResponse.ok ||
      !systemResponse.ok ||
      !servicesResponse.ok ||
      !gpuResponse.ok ||
      !hermesResponse.ok
    ) {
      throw new Error("One or more API requests failed.");
    }

    const system = await systemResponse.json();
    const services = await servicesResponse.json();
    const gpuData = await gpuResponse.json();
    const hermesData = await hermesResponse.json();

    document.querySelector("#cpu-usage").textContent =
      `${system.cpu.usage_percent}%`;

    document.querySelector("#cpu-details").textContent =
      `${system.cpu.physical_cores} physical / ` +
      `${system.cpu.logical_cores} logical cores`;

    document.querySelector("#memory-usage").textContent =
      `${system.memory.usage_percent}%`;

    document.querySelector("#memory-details").textContent =
      `${system.memory.available_gb} GB available of ` +
      `${system.memory.total_gb} GB`;

    document.querySelector("#disk-usage").textContent =
      `${system.disk.usage_percent}%`;

    document.querySelector("#disk-details").textContent =
      `${system.disk.free_gb} GB free of ` +
      `${system.disk.total_gb} GB`;

    document.querySelector("#hostname").textContent =
      system.hostname;

    setServiceStatus("comfyui-status", services.comfyui);
    setServiceStatus("ollama-status", services.ollama);

    renderHermesStatus(hermesData);
    renderHermesActivity(hermesData);
    renderGpus(gpuData);

    connectionDot.style.background = "#42cf88";
    connectionText.textContent = "Backend connected";
  } catch (error) {
    console.error("Dashboard refresh failed:", error);

    connectionDot.style.background = "#ef6262";
    connectionText.textContent = "Backend unavailable";
  } finally {
    refreshButton.disabled = false;
    refreshButton.textContent = "Refresh";
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
refreshButton.addEventListener("click", async () => {
  await Promise.all([
    loadDashboard(),
    loadCurrentMission(),
    loadMissionHistory(),
  ]);
});
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

loadDashboard();
loadCurrentMission();
loadMissionHistory();

setInterval(loadDashboard, 10000);
setInterval(loadCurrentMission, 3000);
setInterval(loadMissionHistory, 3000);
