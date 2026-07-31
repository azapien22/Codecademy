const connectionDot = document.querySelector("#connection-dot");
const connectionText = document.querySelector("#connection-text");
const refreshButton = document.querySelector("#refresh-button");

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

function escapeHtml(value) {
  const element = document.createElement("div");
  element.textContent = value ?? "";
  return element.innerHTML;
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

refreshButton.addEventListener("click", loadDashboard);

loadDashboard();
setInterval(loadDashboard, 10000);
