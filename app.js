// ==========================================================================
// Apple Fluid Interface Logic & State Engine - LinkedIn Manager Dashboard
// Creator: Ram chandar Sanaboyina (@ramchandarsanaboyina)
// Realistic 7,500 Follower Goal | Apple Activity Rings | Interactive Analytics
// ==========================================================================

const STORAGE_KEY = 'ram_linkedin_dashboard_state_v2';
const THEME_KEY = 'ram_linkedin_theme_pref';

class LinkedInDashboard {
  constructor() {
    this.state = this.loadState();
    this.currentCarouselIdx = 0;
    this.currentSlideIdx = 0;
    this.currentChartMetric = 'impressions'; // 'impressions' | 'engagements'
    this.currentHookFormulaId = 'f1';
    
    this.initTheme();
    this.initAudio();
    this.renderAll();
    this.initEvents();
    this.startCountdownTimer();
  }

  // ------------------------------------------------------------------------
  // State Management & LocalStorage Persistence
  // ------------------------------------------------------------------------
  loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.version === DEFAULT_LINKEDIN_DATA.version) {
          return { ...DEFAULT_LINKEDIN_DATA, ...parsed };
        }
      }
    } catch (e) {
      console.warn('Failed to load state from localStorage, falling back to defaults', e);
    }
    const fresh = JSON.parse(JSON.stringify(DEFAULT_LINKEDIN_DATA));
    this.saveState(fresh);
    return fresh;
  }

  saveState(customState) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customState || this.state));
    } catch (e) {
      console.error('Failed to save state to localStorage', e);
    }
  }

  resetState() {
    if (confirm('Reset dashboard to original verified LinkedIn analytics data?')) {
      this.state = JSON.parse(JSON.stringify(DEFAULT_LINKEDIN_DATA));
      this.saveState();
      this.renderAll();
      this.showToast('✅ Restored verified LinkedIn baseline data');
    }
  }

  exportData() {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.state, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute('href', dataStr);
    dlAnchor.setAttribute('download', `linkedin_manager_backup_${new Date().toISOString().slice(0, 10)}.json`);
    dlAnchor.click();
    this.showToast('📥 Dashboard data backup exported');
  }

  // ------------------------------------------------------------------------
  // Apple Audio & Haptic Micro-Feedback (Web Audio API Synthesizer)
  // ------------------------------------------------------------------------
  initAudio() {
    this.audioCtx = null;
  }

  playHapticClick(frequency = 620, type = 'sine', duration = 0.04) {
    try {
      if (!this.audioCtx) {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(frequency, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (err) {
      // Audio autoplay policy fallback
    }
  }

  playSuccessChime() {
    try {
      if (!this.audioCtx) {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      const now = this.audioCtx.currentTime;
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.frequency.setValueAtTime(freq, now + i * 0.06);
        gain.gain.setValueAtTime(0.05, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.06 + 0.2);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.2);
      });
    } catch (err) {}
  }

  // ------------------------------------------------------------------------
  // Theme Toggle (Apple Dark / Light)
  // ------------------------------------------------------------------------
  initTheme() {
    const saved = localStorage.getItem(THEME_KEY) || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    this.updateThemeIcon(saved);
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(THEME_KEY, next);
    this.updateThemeIcon(next);
    this.renderChart();
    this.showToast(`Switched to Apple ${next === 'dark' ? 'Dark' : 'Light'} Mode`);
  }

  updateThemeIcon(theme) {
    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
      btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      btn.setAttribute('title', `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`);
    }
  }

  // ------------------------------------------------------------------------
  // Toast Notifications
  // ------------------------------------------------------------------------
  showToast(message) {
    const toast = document.getElementById('toastNotification');
    if (!toast) return;
    toast.innerHTML = `<span>${message}</span>`;
    toast.classList.add('active');
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.classList.remove('active');
    }, 2800);
  }

  // ------------------------------------------------------------------------
  // Realistic 7,500 Goal Engine & Velocity Tracker
  // ------------------------------------------------------------------------
  renderGoalHero() {
    const c = this.state.creator;
    const current = c.currentFollowers || 5011;
    const target = c.targetFollowers || 7500;
    const milestoneBase = c.milestoneAchieved || 5000;
    const remaining = Math.max(0, target - current);
    
    // Milestone segment progress (from 5,000 to 7,500)
    const milestoneSegmentTotal = target - milestoneBase; // 2,500
    const milestoneSegmentCurrent = Math.max(0, current - milestoneBase);
    const progressPercent = Math.min(100, Math.max(0, (milestoneSegmentCurrent / milestoneSegmentTotal) * 100));
    
    // Overall progress toward 7,500
    const overallPercent = Math.min(100, ((current / target) * 100)).toFixed(1);

    // Velocity projection
    const dailyVelocity = c.dailyVelocityTarget || 32;
    const daysToTarget = remaining > 0 ? Math.ceil(remaining / dailyVelocity) : 0;
    
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysToTarget);
    const targetDateStr = targetDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    // Update Elements
    const curFollowersEl = document.getElementById('heroCurrentFollowers');
    if (curFollowersEl) curFollowersEl.textContent = Number(current).toLocaleString();

    const targetFollowersEl = document.getElementById('heroTargetFollowers');
    if (targetFollowersEl) targetFollowersEl.textContent = `/ ${Number(target).toLocaleString()}`;

    const progressFill = document.getElementById('goalProgressFill');
    if (progressFill) progressFill.style.width = `${progressPercent}%`;

    const progressPctEl = document.getElementById('goalProgressPercent');
    if (progressPctEl) progressPctEl.textContent = `${overallPercent}% of Goal`;

    const remainingEl = document.getElementById('goalRemainingFollowers');
    if (remainingEl) remainingEl.textContent = Number(remaining).toLocaleString();

    const daysRemainingEl = document.getElementById('goalDaysRemaining');
    if (daysRemainingEl) daysRemainingEl.textContent = `~${daysToTarget} days`;

    const estDateEl = document.getElementById('goalEstimatedDate');
    if (estDateEl) estDateEl.textContent = targetDateStr;

    const velocityInput = document.getElementById('dailyVelocityInput');
    if (velocityInput) velocityInput.value = dailyVelocity;
  }

  updateVelocity(val) {
    const num = parseInt(val, 10);
    if (!isNaN(num) && num > 0) {
      this.state.creator.dailyVelocityTarget = num;
      this.saveState();
      this.renderGoalHero();
    }
  }

  quickIncrementFollowers(delta = 1) {
    this.state.creator.currentFollowers += delta;
    // Add to today's history entry
    const todayStr = new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });
    const lastEntry = this.state.history7D[this.state.history7D.length - 1];
    if (lastEntry) {
      lastEntry.followers = this.state.creator.currentFollowers;
    }
    this.saveState();
    this.renderGoalHero();
    this.playSuccessChime();
    this.showToast(`🎉 Follower count updated to ${this.state.creator.currentFollowers.toLocaleString()}!`);
  }

  // ------------------------------------------------------------------------
  // Apple Activity Rings Engine (Concentric Rings for Locked-in Habits)
  // ------------------------------------------------------------------------
  renderActivityRings() {
    const habits = this.state.dailyHabits || [];
    
    // Ring 1 (Red / Content): Publishing & 1st comment
    const contentHabits = habits.filter(h => h.category === 'content');
    const contentDone = contentHabits.filter(h => h.completed).length;
    const contentPct = contentHabits.length > 0 ? (contentDone / contentHabits.length) * 100 : 0;

    // Ring 2 (Green / Engagement): ICP 15 Comments
    const engHabits = habits.filter(h => h.category === 'engagement');
    const engDone = engHabits.filter(h => h.completed).length;
    const engPct = engHabits.length > 0 ? (engDone / engHabits.length) * 100 : 0;

    // Ring 3 (Blue / Outreach & Analytics): 5 Inbounds & Analytics review
    const outHabits = habits.filter(h => h.category === 'outreach' || h.category === 'analytics');
    const outDone = outHabits.filter(h => h.completed).length;
    const outPct = outHabits.length > 0 ? (outDone / outHabits.length) * 100 : 0;

    // SVG Radii: Outer (R=50, circ=314.15), Mid (R=38, circ=238.76), Inner (R=26, circ=163.36)
    const setRing = (id, percent, radius) => {
      const el = document.getElementById(id);
      if (!el) return;
      const circumference = 2 * Math.PI * radius;
      el.style.strokeDasharray = `${circumference}`;
      const offset = circumference - (percent / 100) * circumference;
      el.style.strokeDashoffset = `${offset}`;
    };

    setRing('ringContent', contentPct, 50);
    setRing('ringEngagement', engPct, 38);
    setRing('ringOutreach', outPct, 26);

    // Update legend labels
    const pctContentEl = document.getElementById('pctContentRing');
    if (pctContentEl) pctContentEl.textContent = `${Math.round(contentPct)}%`;

    const pctEngEl = document.getElementById('pctEngagementRing');
    if (pctEngEl) pctEngEl.textContent = `${Math.round(engPct)}%`;

    const pctOutreachEl = document.getElementById('pctOutreachRing');
    if (pctOutreachEl) pctOutreachEl.textContent = `${Math.round(outPct)}%`;

    // Overall Ring Completion badge
    const totalDone = habits.filter(h => h.completed).length;
    const totalCount = habits.length;
    const scoreBadge = document.getElementById('dailyHabitsScore');
    if (scoreBadge) scoreBadge.textContent = `${totalDone}/${totalCount} Completed`;
  }

  renderHabitsList() {
    const container = document.getElementById('habitsChecklistContainer');
    if (!container) return;

    container.innerHTML = this.state.dailyHabits.map(habit => `
      <div class="habit-row ${habit.completed ? 'completed' : ''}" data-id="${habit.id}">
        <div class="habit-checkbox">
          <span class="habit-check-icon">✓</span>
        </div>
        <div class="habit-info">
          <div class="habit-title">${habit.label}</div>
          <div class="habit-sub">${habit.description}</div>
        </div>
      </div>
    `).join('');
  }

  toggleHabit(id) {
    const habit = this.state.dailyHabits.find(h => h.id === id);
    if (!habit) return;
    habit.completed = !habit.completed;
    this.saveState();
    this.playHapticClick(habit.completed ? 840 : 420);
    this.renderHabitsList();
    this.renderActivityRings();
    if (this.state.dailyHabits.every(h => h.completed)) {
      this.playSuccessChime();
      this.showToast('🔥 ALL 5 DAILY HABITS LOCKED IN! Streak extended!');
    }
  }

  // ------------------------------------------------------------------------
  // High-Level Metrics Counters
  // ------------------------------------------------------------------------
  renderMetricsOverview() {
    const m = this.state.metrics;
    const c = this.state.creator;

    // 12-Month Total Impressions
    const el12M = document.getElementById('metricTotalImpressions');
    if (el12M) el12M.textContent = Number(m.totalImpressions12M || 193205).toLocaleString();

    // 7-Day Impressions
    const el7D = document.getElementById('metricRecentImpressions');
    if (el7D) el7D.textContent = Number(m.recentImpressions7D || 2096).toLocaleString();

    // Engagement Rate
    const elRate = document.getElementById('metricEngagementRate');
    if (elRate) elRate.textContent = m.engagementRate || '3.2%';

    // Members Reached
    const elReached = document.getElementById('metricMembersReached');
    if (elReached) elReached.textContent = Number(m.recentMembersReached7D || 374).toLocaleString();
  }

  // ------------------------------------------------------------------------
  // Interactive SVG Analytics Chart
  // ------------------------------------------------------------------------
  renderChart() {
    const container = document.getElementById('analyticsChartContainer');
    if (!container) return;

    const data = this.state.history7D || [];
    if (data.length === 0) return;

    const metric = this.currentChartMetric; // 'impressions' | 'engagements'
    const values = data.map(d => d[metric]);
    const maxVal = Math.max(...values, 10);
    const minVal = 0;

    const width = 640;
    const height = 220;
    const padX = 40;
    const padY = 30;
    const chartW = width - padX * 2;
    const chartH = height - padY * 2;

    const points = data.map((d, i) => {
      const x = padX + (i / (data.length - 1)) * chartW;
      const y = height - padY - ((d[metric] - minVal) / (maxVal - minVal)) * chartH;
      return { x, y, data: d };
    });

    // Create SVG Path
    let pathD = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      // Smooth bezier curves
      const prev = points[i - 1];
      const curr = points[i];
      const cp1x = prev.x + (curr.x - prev.x) / 2;
      const cp1y = prev.y;
      const cp2x = prev.x + (curr.x - prev.x) / 2;
      const cp2y = curr.y;
      pathD += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
    }

    const areaD = `${pathD} L ${points[points.length - 1].x} ${height - padY} L ${points[0].x} ${height - padY} Z`;

    // Grid lines (3 levels)
    const gridLines = [0.25, 0.5, 0.75, 1.0].map(pct => {
      const y = height - padY - pct * chartH;
      const val = Math.round(minVal + pct * (maxVal - minVal));
      return `
        <line x1="${padX}" y1="${y}" x2="${width - padX}" y2="${y}" class="chart-grid-line" />
        <text x="${padX - 8}" y="${y + 4}" font-size="10" fill="var(--text-tertiary)" text-anchor="end">${val}</text>
      `;
    }).join('');

    const circles = points.map((p, i) => `
      <circle cx="${p.x}" cy="${p.y}" class="chart-point" data-idx="${i}" />
      <text x="${p.x}" y="${height - 10}" font-size="11" fill="var(--text-tertiary)" text-anchor="middle">${p.data.date.split('/')[1]}/${p.data.date.split('/')[0]}</text>
    `).join('');

    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const strokeColor = metric === 'impressions' ? 'var(--apple-blue)' : 'var(--apple-green)';
    const gradStart = metric === 'impressions' ? 'rgba(10, 132, 255, 0.45)' : 'rgba(48, 209, 88, 0.45)';

    container.innerHTML = `
      <svg viewBox="0 0 ${width} ${height}" class="svg-chart">
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="${gradStart}" />
            <stop offset="100%" stop-color="rgba(10, 132, 255, 0)" />
          </linearGradient>
        </defs>
        ${gridLines}
        <path d="${areaD}" fill="url(#chartGradient)" />
        <path d="${pathD}" class="chart-line" stroke="${strokeColor}" />
        ${circles}
      </svg>
      <div id="chartTooltip" class="chart-tooltip"></div>
    `;

    // Attach interactive hover tooltips
    const tooltip = document.getElementById('chartTooltip');
    container.querySelectorAll('.chart-point').forEach(point => {
      point.addEventListener('mouseenter', (e) => {
        const idx = e.target.getAttribute('data-idx');
        const item = data[idx];
        tooltip.innerHTML = `
          <div><strong>${item.date}</strong></div>
          <div>${item.impressions.toLocaleString()} Impressions</div>
          <div>${item.engagements} Engagements</div>
          <div>Followers: ${item.followers?.toLocaleString() || 'N/A'}</div>
        `;
        const rect = container.getBoundingClientRect();
        const ptX = points[idx].x * (rect.width / width);
        const ptY = points[idx].y * (rect.height / height);
        tooltip.style.left = `${ptX}px`;
        tooltip.style.top = `${ptY}px`;
        tooltip.style.opacity = '1';
        this.playHapticClick(520, 'sine', 0.02);
      });
      point.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
      });
    });
  }

  setChartMetric(metric) {
    this.currentChartMetric = metric;
    document.querySelectorAll('#chartMetricSwitch .segment-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-metric') === metric);
    });
    this.renderChart();
  }

  // ------------------------------------------------------------------------
  // Dynamic Posting Countdown & Next Window Auto-Updater
  // ------------------------------------------------------------------------
  startCountdownTimer() {
    this.updateCountdown();
    setInterval(() => this.updateCountdown(), 1000);
  }

  updateCountdown() {
    const countdownEl = document.getElementById('nextPostCountdownTimer');
    const targetDateLabel = document.getElementById('nextPostTargetLabel');
    if (!countdownEl) return;

    // Target: Next 8:45 AM IST (UTC+5:30)
    // Convert current time to IST
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    const istOffset = 5.5 * 3600000;
    const nowIST = new Date(utcTime + istOffset);

    // Build target today at 08:45 IST
    let targetIST = new Date(nowIST);
    targetIST.setHours(8, 45, 0, 0);

    // If 8:45 AM IST already passed today, target is tomorrow 8:45 AM IST
    if (nowIST.getTime() >= targetIST.getTime()) {
      targetIST.setDate(targetIST.getDate() + 1);
    }

    const diffMs = targetIST.getTime() - nowIST.getTime();
    const diffHours = Math.floor(diffMs / 3600000);
    const diffMins = Math.floor((diffMs % 3600000) / 60000);
    const diffSecs = Math.floor((diffMs % 60000) / 1000);

    const pad = (n) => String(n).padStart(2, '0');
    countdownEl.textContent = `${pad(diffHours)}h ${pad(diffMins)}m ${pad(diffSecs)}s`;

    if (targetDateLabel) {
      const dayName = targetIST.toLocaleDateString('en-US', { weekday: 'short' });
      targetDateLabel.textContent = `${dayName} at 8:45 AM IST (Prime Window)`;
    }
  }

  renderScheduledPosts() {
    const list = document.getElementById('scheduledPostsList');
    if (!list) return;

    const posts = this.state.scheduledPosts || [];
    list.innerHTML = posts.map(post => {
      const badgeClass = post.status.toLowerCase() === 'ready' 
        ? 'badge-ready' 
        : (post.status.toLowerCase() === 'scheduled' ? 'badge-scheduled' : 'badge-drafting');
      
      return `
        <div class="post-item-card" data-id="${post.id}">
          <div class="post-item-header">
            <span class="caption-label">${post.date} · ${post.time}</span>
            <span class="post-status-badge ${badgeClass}">${post.status}</span>
          </div>
          <div class="post-item-title">${post.title}</div>
          <div class="post-item-meta">
            <span>🏷️ ${post.targetPillar}</span>
            <span>🎯 ${post.primaryGoal}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  // ------------------------------------------------------------------------
  // Apple-Style Interactive Carousel Studio & Slide Deck Viewer
  // ------------------------------------------------------------------------
  renderCarouselStudio() {
    const carousels = this.state.carousels || [];
    const sidebar = document.getElementById('carouselTopicsList');
    if (!sidebar) return;

    sidebar.innerHTML = carousels.map((car, idx) => `
      <div class="carousel-topic-item ${idx === this.currentCarouselIdx ? 'active' : ''}" data-idx="${idx}">
        <div class="topic-category-tag">${car.category} · ${car.slidesCount} Slides</div>
        <div class="topic-title-text">${car.title}</div>
      </div>
    `).join('');

    this.renderCurrentSlide();
  }

  selectCarousel(idx) {
    this.currentCarouselIdx = idx;
    this.currentSlideIdx = 0;
    this.playHapticClick(580);
    this.renderCarouselStudio();
  }

  renderCurrentSlide() {
    const carousels = this.state.carousels || [];
    const currentCarousel = carousels[this.currentCarouselIdx];
    if (!currentCarousel || !currentCarousel.slides) return;

    const slide = currentCarousel.slides[this.currentSlideIdx];
    if (!slide) return;

    const canvas = document.getElementById('slideCanvas');
    if (!canvas) return;

    // Fill slide data
    document.getElementById('slideAuthorTag').textContent = `@ramchandarsanaboyina | ${slide.num}/${currentCarousel.slidesCount}`;
    document.getElementById('slideNumberPill').textContent = `Slide ${slide.num} of ${currentCarousel.slidesCount}`;
    document.getElementById('slideTopicTag').textContent = slide.tag;
    document.getElementById('slideHeadlineText').textContent = slide.headline;
    document.getElementById('slideSubtextContent').textContent = slide.subtext;

    // Render slide dots
    const dotsContainer = document.getElementById('slideDotsIndicator');
    if (dotsContainer) {
      dotsContainer.innerHTML = currentCarousel.slides.map((_, i) => `
        <div class="dot-indicator ${i === this.currentSlideIdx ? 'active' : ''}" data-slide="${i}"></div>
      `).join('');
    }

    // Micro spring bounce on slide change
    canvas.style.transform = 'scale(0.985)';
    setTimeout(() => { canvas.style.transform = 'scale(1)'; }, 80);
  }

  nextSlide() {
    const currentCarousel = this.state.carousels[this.currentCarouselIdx];
    if (!currentCarousel) return;
    if (this.currentSlideIdx < currentCarousel.slides.length - 1) {
      this.currentSlideIdx++;
      this.playHapticClick(720);
      this.renderCurrentSlide();
    }
  }

  prevSlide() {
    if (this.currentSlideIdx > 0) {
      this.currentSlideIdx--;
      this.playHapticClick(600);
      this.renderCurrentSlide();
    }
  }

  copySlideContent() {
    const currentCarousel = this.state.carousels[this.currentCarouselIdx];
    if (!currentCarousel) return;
    const slide = currentCarousel.slides[this.currentSlideIdx];
    const text = `SLIDE ${slide.num}/${currentCarousel.slidesCount} · ${slide.tag}\n\n${slide.headline}\n\n${slide.subtext}`;
    navigator.clipboard.writeText(text).then(() => {
      this.playSuccessChime();
      this.showToast('📋 Copied slide text to clipboard');
    });
  }

  copyFullCarousel() {
    const currentCarousel = this.state.carousels[this.currentCarouselIdx];
    if (!currentCarousel) return;
    const fullText = currentCarousel.slides.map(s => 
      `--- SLIDE ${s.num}/${currentCarousel.slidesCount}: ${s.tag} ---\n${s.headline}\n${s.subtext}\n`
    ).join('\n');
    navigator.clipboard.writeText(fullText).then(() => {
      this.playSuccessChime();
      this.showToast(`📋 Copied all ${currentCarousel.slidesCount} slides to clipboard!`);
    });
  }

  // ------------------------------------------------------------------------
  // 2026 Hook Studio & Tester
  // ------------------------------------------------------------------------
  renderHookStudio() {
    const formulas = this.state.hookFormulas || [];
    const container = document.getElementById('hookFormulasContainer');
    if (!container) return;

    container.innerHTML = formulas.map(f => `
      <div class="formula-chip ${f.id === this.currentHookFormulaId ? 'active' : ''}" data-id="${f.id}">
        <strong>${f.code}</strong> · ${f.name}
      </div>
    `).join('');

    const activeFormula = formulas.find(f => f.id === this.currentHookFormulaId) || formulas[0];
    if (activeFormula) {
      document.getElementById('hookFormulaSkeleton').textContent = activeFormula.formula;
      document.getElementById('hookOutputText').textContent = activeFormula.generatedHook;
      document.getElementById('hookTopicInput').value = activeFormula.exampleTopic;
    }
  }

  selectHookFormula(id) {
    this.currentHookFormulaId = id;
    this.playHapticClick(650);
    this.renderHookStudio();
  }

  copyGeneratedHook() {
    const text = document.getElementById('hookOutputText').textContent;
    navigator.clipboard.writeText(text).then(() => {
      this.playSuccessChime();
      this.showToast('🚀 Copied high-converting hook to clipboard!');
    });
  }

  // ------------------------------------------------------------------------
  // Top Posts Audit & Real Performance
  // ------------------------------------------------------------------------
  renderTopPostsTable() {
    const tableBody = document.getElementById('topPostsTableBody');
    if (!tableBody) return;

    const posts = this.state.topPosts || [];
    tableBody.innerHTML = posts.map(p => `
      <tr>
        <td>
          <a href="${p.url}" target="_blank" class="post-link-text" title="${p.title}">
            ${p.title}
          </a>
          <span style="font-size:0.75rem; color:var(--text-tertiary);">${p.notes}</span>
        </td>
        <td class="tabular" style="color:var(--text-secondary);">${p.date}</td>
        <td class="tabular"><strong>${p.impressions.toLocaleString()}</strong></td>
        <td class="tabular" style="color:var(--apple-green);"><strong>${p.engagements}</strong></td>
      </tr>
    `).join('');
  }

  // ------------------------------------------------------------------------
  // Demographics Visualizer
  // ------------------------------------------------------------------------
  renderDemographics() {
    const demo = this.state.demographics;
    if (!demo) return;

    const titlesContainer = document.getElementById('demographicsTitlesContainer');
    if (titlesContainer) {
      titlesContainer.innerHTML = demo.titles.map(t => `
        <div class="demo-bar-row">
          <div class="demo-bar-label">
            <span>${t.name}</span>
            <span class="tabular">${t.percent}%</span>
          </div>
          <div class="demo-bar-track">
            <div class="demo-bar-fill" style="width: ${t.percent * 2.5}%; background: var(--apple-blue);"></div>
          </div>
        </div>
      `).join('');
    }

    const locsContainer = document.getElementById('demographicsLocationsContainer');
    if (locsContainer) {
      locsContainer.innerHTML = demo.locations.map(l => `
        <div class="demo-bar-row">
          <div class="demo-bar-label">
            <span>${l.name}</span>
            <span class="tabular">${l.percent}%</span>
          </div>
          <div class="demo-bar-track">
            <div class="demo-bar-fill" style="width: ${l.percent * 2.8}%; background: var(--apple-purple);"></div>
          </div>
        </div>
      `).join('');
    }
  }

  // ------------------------------------------------------------------------
  // Interactive Modals (Daily Metrics Logger & New Post Scheduler)
  // ------------------------------------------------------------------------
  openMetricsModal() {
    const modal = document.getElementById('metricsUpdateModal');
    if (!modal) return;
    
    // Set default values from current state
    document.getElementById('inputFollowers').value = this.state.creator.currentFollowers;
    document.getElementById('inputImpressions').value = 450;
    document.getElementById('inputEngagements').value = 5;
    document.getElementById('inputMembersReached').value = 120;
    
    modal.classList.add('active');
    this.playHapticClick(600);
  }

  closeMetricsModal() {
    const modal = document.getElementById('metricsUpdateModal');
    if (modal) modal.classList.remove('active');
  }

  submitMetricsUpdate(e) {
    e.preventDefault();
    const followers = parseInt(document.getElementById('inputFollowers').value, 10);
    const impressions = parseInt(document.getElementById('inputImpressions').value, 10);
    const engagements = parseInt(document.getElementById('inputEngagements').value, 10);
    const reached = parseInt(document.getElementById('inputMembersReached').value, 10);
    const postTitle = document.getElementById('inputPostTitle').value.trim();

    if (isNaN(followers) || isNaN(impressions)) {
      alert('Please enter valid numbers');
      return;
    }

    // Update creator follower count
    this.state.creator.currentFollowers = followers;

    // Append to 7D history
    const today = new Date();
    const dateStr = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
    
    this.state.history7D.push({
      date: dateStr,
      impressions: impressions,
      engagements: engagements,
      followers: followers
    });

    // Keep only last 7 or 14 days
    if (this.state.history7D.length > 10) {
      this.state.history7D.shift();
    }

    // Recalculate 7D metrics
    const sumImp = this.state.history7D.reduce((acc, cur) => acc + cur.impressions, 0);
    const sumEng = this.state.history7D.reduce((acc, cur) => acc + cur.engagements, 0);
    this.state.metrics.recentImpressions7D = sumImp;
    this.state.metrics.recentEngagements7D = sumEng;
    this.state.metrics.totalImpressions12M += impressions;
    this.state.metrics.recentMembersReached7D += reached;

    if (postTitle) {
      this.state.topPosts.unshift({
        title: postTitle,
        date: dateStr,
        impressions: impressions,
        engagements: engagements,
        url: this.state.creator.profileUrl,
        notes: 'Recently synced post.'
      });
    }

    this.saveState();
    this.closeMetricsModal();
    this.renderAll();
    this.playSuccessChime();
    this.showToast(`📊 Daily metrics recorded! Follower progress updated.`);
  }

  openNewPostModal() {
    const modal = document.getElementById('newPostModal');
    if (modal) {
      modal.classList.add('active');
      this.playHapticClick(600);
    }
  }

  closeNewPostModal() {
    const modal = document.getElementById('newPostModal');
    if (modal) modal.classList.remove('active');
  }

  submitNewPost(e) {
    e.preventDefault();
    const title = document.getElementById('newPostTitleInput').value.trim();
    const date = document.getElementById('newPostDateInput').value;
    const time = document.getElementById('newPostTimeInput').value || '08:45 AM IST';
    const pillar = document.getElementById('newPostPillarInput').value;
    const format = document.getElementById('newPostFormatInput').value;

    if (!title || !date) {
      alert('Please fill in title and date');
      return;
    }

    this.state.scheduledPosts.push({
      id: `post-${Date.now()}`,
      date: date,
      time: time,
      format: format,
      title: title,
      status: 'Scheduled',
      hookPreview: title,
      targetPillar: pillar,
      primaryGoal: 'High Saves'
    });

    this.saveState();
    this.closeNewPostModal();
    this.renderScheduledPosts();
    this.playSuccessChime();
    this.showToast('📅 New post added to schedule!');
  }

  // ------------------------------------------------------------------------
  // Global Event Listeners & Binding
  // ------------------------------------------------------------------------
  initEvents() {
    // Theme Switcher
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) themeBtn.addEventListener('click', () => this.toggleTheme());

    // Reset & Export
    const resetBtn = document.getElementById('resetDataBtn');
    if (resetBtn) resetBtn.addEventListener('click', () => this.resetState());

    const exportBtn = document.getElementById('exportDataBtn');
    if (exportBtn) exportBtn.addEventListener('click', () => this.exportData());

    // Follower Quick Increment
    const incFollowerBtn = document.getElementById('quickIncFollowerBtn');
    if (incFollowerBtn) incFollowerBtn.addEventListener('click', () => this.quickIncrementFollowers(1));

    // Daily Velocity change
    const velInput = document.getElementById('dailyVelocityInput');
    if (velInput) {
      velInput.addEventListener('change', (e) => this.updateVelocity(e.target.value));
    }

    // Habits delegation
    const habitsList = document.getElementById('habitsChecklistContainer');
    if (habitsList) {
      habitsList.addEventListener('click', (e) => {
        const row = e.target.closest('.habit-row');
        if (row) {
          this.toggleHabit(row.getAttribute('data-id'));
        }
      });
    }

    // Chart metric switch
    const chartSwitch = document.getElementById('chartMetricSwitch');
    if (chartSwitch) {
      chartSwitch.addEventListener('click', (e) => {
        const btn = e.target.closest('.segment-btn');
        if (btn) {
          this.setChartMetric(btn.getAttribute('data-metric'));
        }
      });
    }

    // Carousel topic selection
    const topicsList = document.getElementById('carouselTopicsList');
    if (topicsList) {
      topicsList.addEventListener('click', (e) => {
        const item = e.target.closest('.carousel-topic-item');
        if (item) {
          this.selectCarousel(parseInt(item.getAttribute('data-idx'), 10));
        }
      });
    }

    // Slide navigation
    const nextBtn = document.getElementById('slideNextBtn');
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextSlide());

    const prevBtn = document.getElementById('slidePrevBtn');
    if (prevBtn) prevBtn.addEventListener('click', () => this.prevSlide());

    const copySlideBtn = document.getElementById('copySlideBtn');
    if (copySlideBtn) copySlideBtn.addEventListener('click', () => this.copySlideContent());

    const copyAllSlidesBtn = document.getElementById('copyAllSlidesBtn');
    if (copyAllSlidesBtn) copyAllSlidesBtn.addEventListener('click', () => this.copyFullCarousel());

    // Slide dots delegation
    const dotsContainer = document.getElementById('slideDotsIndicator');
    if (dotsContainer) {
      dotsContainer.addEventListener('click', (e) => {
        const dot = e.target.closest('.dot-indicator');
        if (dot) {
          this.currentSlideIdx = parseInt(dot.getAttribute('data-slide'), 10);
          this.playHapticClick(640);
          this.renderCurrentSlide();
        }
      });
    }

    // Hook Formula selector
    const hookList = document.getElementById('hookFormulasContainer');
    if (hookList) {
      hookList.addEventListener('click', (e) => {
        const chip = e.target.closest('.formula-chip');
        if (chip) {
          this.selectHookFormula(chip.getAttribute('data-id'));
        }
      });
    }

    const copyHookBtn = document.getElementById('copyHookBtn');
    if (copyHookBtn) copyHookBtn.addEventListener('click', () => this.copyGeneratedHook());

    // Modals
    const openSyncBtn = document.getElementById('openSyncModalBtn');
    if (openSyncBtn) openSyncBtn.addEventListener('click', () => this.openMetricsModal());

    const closeSyncBtn = document.getElementById('closeSyncModalBtn');
    if (closeSyncBtn) closeSyncBtn.addEventListener('click', () => this.closeMetricsModal());

    const metricsForm = document.getElementById('metricsUpdateForm');
    if (metricsForm) metricsForm.addEventListener('submit', (e) => this.submitMetricsUpdate(e));

    const openPostBtn = document.getElementById('openNewPostModalBtn');
    if (openPostBtn) openPostBtn.addEventListener('click', () => this.openNewPostModal());

    const closePostBtn = document.getElementById('closeNewPostModalBtn');
    if (closePostBtn) closePostBtn.addEventListener('click', () => this.closeNewPostModal());

    const newPostForm = document.getElementById('newPostForm');
    if (newPostForm) newPostForm.addEventListener('submit', (e) => this.submitNewPost(e));

    // Keyboard navigation for slides
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight') this.nextSlide();
      if (e.key === 'ArrowLeft') this.prevSlide();
    });

    // Close modal on backdrop click
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
          backdrop.classList.remove('active');
        }
      });
    });
  }

  // ------------------------------------------------------------------------
  // Render All Modules
  // ------------------------------------------------------------------------
  renderAll() {
    this.renderGoalHero();
    this.renderActivityRings();
    this.renderHabitsList();
    this.renderMetricsOverview();
    this.renderChart();
    this.renderScheduledPosts();
    this.renderCarouselStudio();
    this.renderHookStudio();
    this.renderTopPostsTable();
    this.renderDemographics();
  }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new LinkedInDashboard();
});
