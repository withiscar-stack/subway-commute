// Config & State
let appState = {
  mode: 'work', // 'work' or 'home'
  homeDirection: 'up', // 'up' (Wangsimni) or 'down' (Incheon/Gosaek)
  dataMode: 'api', // Default to API mode since user provided a key
  apiKey: '6a4f486753776974383553436e566c',
  expressOnly: false, // Line 9 Express filter
  timers: {},
  simulatedArrivals: {
    work: [],
    homeUp: [],
    homeDown: []
  }
};

// --- TIMETABLE GENERATORS ---
// Helper to convert time string (HH:MM) to minutes from midnight
function timeToMinutes(timeStr) {
  const [h, m] = timeStr.split(':').map(Number);
  return h * 60 + m;
}

// Helper to format minutes to HH:MM
function minutesToTime(minutes) {
  const h = Math.floor(minutes / 60) % 24;
  const m = minutes % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

// Generate weekday timetable for Line 9 Sports Complex (중앙보훈병원행)
// Line 9 has both Express (급행) and Local (일반) trains.
function generateLine9Timetable() {
  const timetable = [];
  let idCounter = 1;
  
  // Hours: 05:30 to 24:00
  for (let hour = 5; hour <= 24; hour++) {
    let interval = 10; // default interval in minutes
    
    // Peak hour adjustments
    if (hour === 7 || hour === 8 || hour === 18 || hour === 19) {
      interval = 4; // high frequency during rush hours
    } else if (hour === 6 || hour === 9 || hour === 17 || hour === 20) {
      interval = 6;
    }
    
    let startMin = (hour === 5) ? 30 : 0;
    let endMin = (hour === 24) ? 10 : 59;
    
    for (let min = startMin; min <= endMin; min += interval) {
      const timeStr = `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
      
      // Express trains alternate with Local trains
      // Express trains usually depart at even minutes or odd minutes depending on schedule.
      // Let's alternate: even minutes get Express, odd get Local (or index-based)
      const type = (idCounter % 2 === 0) ? '급행' : '일반';
      
      timetable.push({
        id: `work_${idCounter++}`,
        time: timeStr,
        rawMinutes: hour * 60 + min,
        type: type,
        dest: '중앙보훈병원'
      });
    }
  }
  return timetable.sort((a, b) => a.rawMinutes - b.rawMinutes);
}

// Generate timetable for Moran Station on Suin-Bundang Line
// Upward: 왕십리 방면 / Downward: 인천/고색 방면
function generateBundangTimetable(direction) {
  const timetable = [];
  let idCounter = 1;
  
  // Destination pools
  const upDests = ['왕십리', '청량리', '선릉', '왕십리'];
  const downDests = ['인천', '고색', '죽전', '수원', '고색'];
  
  for (let hour = 5; hour <= 24; hour++) {
    let interval = 12; // default
    
    if (hour === 7 || hour === 8 || hour === 18 || hour === 19) {
      interval = 6; // Peak hours
    } else if (hour === 6 || hour === 9 || hour === 17 || hour === 20) {
      interval = 8;
    }
    
    let startMin = (hour === 5) ? 20 : 0;
    let endMin = (hour === 24) ? 20 : 59;
    
    for (let min = startMin; min <= endMin; min += interval) {
      const timeStr = `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
      const destIndex = (idCounter) % (direction === 'up' ? upDests.length : downDests.length);
      const dest = direction === 'up' ? upDests[destIndex] : downDests[destIndex];
      
      timetable.push({
        id: `home_${direction}_${idCounter++}`,
        time: timeStr,
        rawMinutes: hour * 60 + min,
        type: '일반', // Bundang Line mostly has local trains at Moran
        dest: dest
      });
    }
  }
  return timetable.sort((a, b) => a.rawMinutes - b.rawMinutes);
}

// Timetables cache
const timetables = {
  work: generateLine9Timetable(),
  homeUp: generateBundangTimetable('up'),
  homeDown: generateBundangTimetable('down')
};

// --- SIMULATED REALTIME ENGINE ---
// Simulates trains dynamically based on current system time
function updateSimulationData() {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const currentSeconds = now.getSeconds();
  
  // Helper to build 3 simulated trains ahead of current time
  function buildSimulatedTrains(timetableList, currentMins, currentSecs, key) {
    // Find next upcoming trains in timetable
    const upcoming = timetableList.filter(t => t.rawMinutes >= currentMins);
    
    // If we've run out of trains for the day, loop back or return empty
    if (upcoming.length === 0) return [];
    
    const results = [];
    
    // Simulate top 3 trains
    for (let i = 0; i < Math.min(upcoming.length, 3); i++) {
      const train = upcoming[i];
      // Calculate real-time countdown. 
      // The scheduled departure is train.rawMinutes.
      // Total seconds from now until scheduled departure:
      let secondsDiff = (train.rawMinutes - currentMins) * 60 - currentSecs;
      
      if (secondsDiff < 0) secondsDiff = 0; // Train has theoretically departed
      
      // Determine simulated train status/position based on countdown
      let statusText = '';
      if (secondsDiff < 30) {
        statusText = '곧 도착 / 승차 중';
      } else if (secondsDiff < 90) {
        statusText = '진입 중';
      } else if (secondsDiff < 180) {
        statusText = '전역 출발';
      } else {
        const stationsAway = Math.floor(secondsDiff / 150) + 1;
        statusText = `${stationsAway}역 전`;
      }
      
      results.push({
        id: train.id,
        scheduledTime: train.time,
        type: train.type,
        dest: train.dest,
        secondsLeft: secondsDiff,
        status: statusText
      });
    }
    
    return results;
  }
  
  appState.simulatedArrivals.work = buildSimulatedTrains(timetables.work, currentMinutes, currentSeconds, 'work');
  appState.simulatedArrivals.homeUp = buildSimulatedTrains(timetables.homeUp, currentMinutes, currentSeconds, 'homeUp');
  appState.simulatedArrivals.homeDown = buildSimulatedTrains(timetables.homeDown, currentMinutes, currentSeconds, 'homeDown');
}

// --- PUBLIC API CONNECTIVITY MODULE ---
// Fetch real-time arrivals from Seoul Subway API
async function fetchSubwayRealtimeData(stationName) {
  if (!appState.apiKey) {
    throw new Error('API Key is missing');
  }
  
  // Seoul Open Data Portal real-time arrival URL (JSON)
  // Endpoints: http://swopenAPI.seoul.go.kr/api/subway/(key)/json/realtimeStationArrival/0/10/(Station)
  const url = `https://openapi.seoul.go.kr:8088/${appState.apiKey}/json/realtimeStationArrival/0/10/${encodeURIComponent(stationName)}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data.errorMessage && data.errorMessage.code !== 'INFO-000') {
      throw new Error(data.errorMessage.message || 'API Error');
    }
    return data.realtimeArrivalList || [];
  } catch (error) {
    console.error('Subway API Error:', error);
    throw error;
  }
}

// Convert real-time API response to unified UI model
function mapApiDataToUi(apiList, mode, direction = 'up') {
  const results = [];
  
  if (mode === 'work') {
    // 9호선 종합운동장역 (subwayId: 1009, 중앙보훈병원행은 상행 - updnLine: '상행' or '0')
    const filtered = apiList.filter(item => {
      const isLine9 = item.subwayId === '1009' || item.subwayName === '9호선';
      const isUp = item.updnLine === '상행' || item.updnLine === '0' || item.trainLineNm.includes('중앙보훈병원');
      return isLine9 && isUp;
    });
    
    filtered.forEach((item, index) => {
      // Parse arrival seconds/time
      const secondsLeft = parseInt(item.barvlDt, 10) || 0;
      const type = item.btrainNo && item.btrainNm === '급행' ? '급행' : '일반';
      
      // Try to calculate departure time from scheduled
      // For API data, if barvlDt is 0, we can use the current time + arrival seconds
      const now = new Date();
      const arrivalTime = new Date(now.getTime() + secondsLeft * 1000);
      const timeStr = `${String(arrivalTime.getHours()).padStart(2, '0')}:${String(arrivalTime.getMinutes()).padStart(2, '0')}`;
      
      results.push({
        id: `api_work_${index}`,
        scheduledTime: timeStr,
        type: type,
        dest: '중앙보훈병원',
        secondsLeft: secondsLeft,
        status: item.arvlMsg2 || `${Math.ceil(secondsLeft / 60)}분 전`
      });
    });
  } else {
    // 수인분당선 모란역 (subwayId: 1075, 왕십리는 상행 - updnLine: '상행' or '0', 인천/고색은 하행 - updnLine: '하행' or '1')
    const targetUpdn = direction === 'up' ? ['상행', '0'] : ['하행', '1'];
    const filtered = apiList.filter(item => {
      const isBundang = item.subwayId === '1075' || item.subwayName === '수인분당선';
      const isDirMatch = targetUpdn.includes(item.updnLine) || 
                         (direction === 'up' && item.trainLineNm.includes('왕십리')) ||
                         (direction === 'down' && (item.trainLineNm.includes('인천') || item.trainLineNm.includes('고색') || item.trainLineNm.includes('수원')));
      return isBundang && isDirMatch;
    });
    
    filtered.forEach((item, index) => {
      const secondsLeft = parseInt(item.barvlDt, 10) || 0;
      const now = new Date();
      const arrivalTime = new Date(now.getTime() + secondsLeft * 1000);
      const timeStr = `${String(arrivalTime.getHours()).padStart(2, '0')}:${String(arrivalTime.getMinutes()).padStart(2, '0')}`;
      
      results.push({
        id: `api_home_${direction}_${index}`,
        scheduledTime: timeStr,
        type: '일반',
        dest: item.bstatnNm || (direction === 'up' ? '왕십리' : '고색'),
        secondsLeft: secondsLeft,
        status: item.arvlMsg2 || `${Math.ceil(secondsLeft / 60)}분 전`
      });
    });
  }
  
  return results.slice(0, 3); // Return next 3 trains maximum
}

// --- RENDERING MODULE ---
// Render real-time cards and full timetables
function renderApp(realtimeData = null) {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  
  // Decide which data source to use
  let workArrivals = [];
  let homeArrivals = [];
  
  if (appState.dataMode === 'api' && realtimeData) {
    if (appState.mode === 'work') {
      workArrivals = realtimeData.work || [];
    } else {
      homeArrivals = realtimeData.home || [];
    }
  } else {
    // Simulator Mode
    workArrivals = appState.simulatedArrivals.work;
    homeArrivals = appState.homeDirection === 'up' 
      ? appState.simulatedArrivals.homeUp 
      : appState.simulatedArrivals.homeDown;
  }
  
  // Set badge label
  const workBadge = document.getElementById('work-api-badge');
  const homeBadge = document.getElementById('home-api-badge');
  const badgeLabel = appState.dataMode === 'api' ? 'Live API' : 'Simulator';
  const badgeClass = appState.dataMode === 'api' ? 'api-badge live' : 'api-badge';
  
  if (workBadge) {
    workBadge.textContent = badgeLabel;
    workBadge.className = badgeClass;
  }
  if (homeBadge) {
    homeBadge.textContent = badgeLabel;
    homeBadge.className = badgeClass;
  }

  // --- RENDER WORK VIEW ---
  if (appState.mode === 'work') {
    const liveContainer = document.getElementById('work-live-arrivals');
    const listContainer = document.getElementById('work-timetable-list');
    const countSpan = document.getElementById('work-timetable-count');
    
    // 1. Live cards
    if (workArrivals.length === 0) {
      liveContainer.innerHTML = '<div class="info-box">현재 운행 중인 실시간 열차 정보가 없습니다.</div>';
    } else {
      liveContainer.innerHTML = workArrivals.map((train, index) => {
        const timeDisplay = train.secondsLeft <= 0 
          ? '도착함' 
          : `${Math.floor(train.secondsLeft / 60)}분 ${train.secondsLeft % 60}초`;
        
        // Dynamic progress & stations
        let progress = 10;
        if (train.secondsLeft <= 0) progress = 100;
        else if (train.secondsLeft < 30) progress = 95;
        else if (train.secondsLeft < 90) progress = 80;
        else if (train.secondsLeft < 180) progress = 50;
        else if (train.secondsLeft < 300) progress = 25;
        
        let prevStation = '봉은사';
        if (train.status.includes('2역 전')) prevStation = '삼성중앙';
        if (train.status.includes('3역 전')) prevStation = '선정릉';
        if (train.status.includes('4역 전')) prevStation = '언주';
        
        const currStation = '종합운동장';
        
        // Show visual track ONLY for the first train (index 0)
        const trackHtml = index === 0 ? `
            <!-- Visual Track Map -->
            <div class="visual-track">
              <div class="track-line-wrapper">
                <div class="track-rail"></div>
                <div class="track-rail-highlight" style="width: ${progress}%; --station-color: var(--line-9-color);"></div>
                
                <div class="track-station-node start active" style="--station-color: var(--line-9-color);"></div>
                <div class="track-station-label start">${prevStation}</div>
                
                <div class="track-station-node end target"></div>
                <div class="track-station-label end">${currStation}</div>
                
                <div class="track-train-icon" style="left: ${progress}%;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--success-color)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="4" y="3" width="16" height="14" rx="2" fill="#0b0f19"></rect>
                    <path d="M4 11h16"></path>
                    <path d="M12 3v8"></path>
                    <circle cx="8" cy="14" r="1" fill="currentColor"></circle>
                    <circle cx="16" cy="14" r="1" fill="currentColor"></circle>
                  </svg>
                </div>
              </div>
            </div>
        ` : '';
        
        return `
          <div class="live-card" style="flex-direction: column; align-items: stretch; gap: 12px;">
            <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
              <div class="live-info-left">
                <div class="train-tag">
                  <span class="badge-train-type ${train.type === '급행' ? 'express' : 'local'}">${train.type}</span>
                  <span class="train-dest">${train.dest}행</span>
                </div>
                <span class="train-status">${train.status}</span>
              </div>
              <div class="live-info-right">
                <span class="time-countdown" data-secs="${train.secondsLeft}">${timeDisplay}</span>
              </div>
            </div>
            ${trackHtml}
          </div>
        `;
      }).join('');
    }
    
    // 2. Timetable List with mapping
    let timetable = timetables.work;
    if (appState.expressOnly) {
      timetable = timetable.filter(row => row.type === '급행');
    }
    countSpan.textContent = `${timetable.length}개 열차`;
    
    let html = '';
    let autoScrollTargetId = null;
    
    timetable.forEach(row => {
      const isPast = row.rawMinutes < currentMinutes;
      
      // Match with real-time arrivals (if scheduled departure time matches)
      const isLive = workArrivals.some(arr => arr.scheduledTime === row.time && arr.type === row.type);
      
      let rowClass = 'timetable-row';
      if (isPast) rowClass += ' past-train';
      if (isLive) rowClass += ' active-live';
      
      // Mark first upcoming train for scrolling
      if (!isPast && !autoScrollTargetId) {
        autoScrollTargetId = `row-${row.id}`;
      }
      
      html += `
        <div class="${rowClass}" id="row-${row.id}">
          <div class="timetable-train-info">
            <span class="badge-train-type ${row.type === '급행' ? 'express' : 'local'}">${row.type}</span>
            <span class="timetable-time">${row.time}</span>
          </div>
          <div class="timetable-train-right">
            ${isLive ? '<span class="timetable-live-badge">실시간</span>' : ''}
            <span style="font-size: 0.85rem; color: var(--text-secondary);">${row.dest}행</span>
          </div>
        </div>
      `;
    });
    
    listContainer.innerHTML = html;
    
    // Scroll to first upcoming train
    if (autoScrollTargetId) {
      setTimeout(() => {
        const el = document.getElementById(autoScrollTargetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300);
    }
  } 
  
  // --- RENDER HOME VIEW ---
  else {
    const liveContainer = document.getElementById('home-live-arrivals');
    const listContainer = document.getElementById('home-timetable-list');
    const countSpan = document.getElementById('home-timetable-count');
    const titleHeader = document.getElementById('home-timetable-title');
    
    const isUp = appState.homeDirection === 'up';
    titleHeader.textContent = isUp ? '왕십리 방면 시간표' : '인천·고색 방면 시간표';
    
    // 1. Live cards
    if (homeArrivals.length === 0) {
      liveContainer.innerHTML = '<div class="info-box">현재 운행 중인 실시간 열차 정보가 없습니다.</div>';
    } else {
      liveContainer.innerHTML = homeArrivals.map((train, index) => {
        const timeDisplay = train.secondsLeft <= 0 
          ? '도착함' 
          : `${Math.floor(train.secondsLeft / 60)}분 ${train.secondsLeft % 60}초`;
        
        // Dynamic progress & stations
        let progress = 10;
        if (train.secondsLeft <= 0) progress = 100;
        else if (train.secondsLeft < 30) progress = 95;
        else if (train.secondsLeft < 90) progress = 80;
        else if (train.secondsLeft < 180) progress = 50;
        else if (train.secondsLeft < 300) progress = 25;
        
        let prevStation = isUp ? '야탑' : '태평';
        if (isUp) {
          if (train.status.includes('2역 전')) prevStation = '이매';
          if (train.status.includes('3역 전')) prevStation = '서현';
          if (train.status.includes('4역 전')) prevStation = '수내';
        } else {
          if (train.status.includes('2역 전')) prevStation = '복정';
          if (train.status.includes('3역 전')) prevStation = '수서';
          if (train.status.includes('4역 전')) prevStation = '대모산입구';
        }
        
        const currStation = '모란';
        
        // Show visual track ONLY for the first train (index 0)
        const trackHtml = index === 0 ? `
            <!-- Visual Track Map -->
            <div class="visual-track">
              <div class="track-line-wrapper">
                <div class="track-rail"></div>
                <div class="track-rail-highlight" style="width: ${progress}%; --station-color: var(--line-bundang-color);"></div>
                
                <div class="track-station-node start active" style="--station-color: var(--line-bundang-color);"></div>
                <div class="track-station-label start">${prevStation}</div>
                
                <div class="track-station-node end target"></div>
                <div class="track-station-label end">${currStation}</div>
                
                <div class="track-train-icon" style="left: ${progress}%;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--success-color)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="4" y="3" width="16" height="14" rx="2" fill="#120c17"></rect>
                    <path d="M4 11h16"></path>
                    <path d="M12 3v8"></path>
                    <circle cx="8" cy="14" r="1" fill="currentColor"></circle>
                    <circle cx="16" cy="14" r="1" fill="currentColor"></circle>
                  </svg>
                </div>
              </div>
            </div>
        ` : '';
        
        return `
          <div class="live-card" style="flex-direction: column; align-items: stretch; gap: 12px;">
            <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
              <div class="live-info-left">
                <div class="train-tag">
                  <span class="badge-train-type local">일반</span>
                  <span class="train-dest">${train.dest}행</span>
                </div>
                <span class="train-status">${train.status}</span>
              </div>
              <div class="live-info-right">
                <span class="time-countdown" data-secs="${train.secondsLeft}">${timeDisplay}</span>
              </div>
            </div>
            ${trackHtml}
          </div>
        `;
      }).join('');
    }
    
    // 2. Timetable List
    const timetable = isUp ? timetables.homeUp : timetables.homeDown;
    countSpan.textContent = `${timetable.length}개 열차`;
    
    let html = '';
    let autoScrollTargetId = null;
    
    timetable.forEach(row => {
      const isPast = row.rawMinutes < currentMinutes;
      const isLive = homeArrivals.some(arr => arr.scheduledTime === row.time && arr.dest === row.dest);
      
      let rowClass = 'timetable-row';
      if (isPast) rowClass += ' past-train';
      if (isLive) rowClass += ' active-live';
      
      if (!isPast && !autoScrollTargetId) {
        autoScrollTargetId = `row-${row.id}`;
      }
      
      html += `
        <div class="${rowClass}" id="row-${row.id}">
          <div class="timetable-train-info">
            <span class="timetable-time">${row.time}</span>
          </div>
          <div class="timetable-train-right">
            ${isLive ? '<span class="timetable-live-badge">실시간</span>' : ''}
            <span style="font-size: 0.85rem; color: var(--text-secondary);">${row.dest}행</span>
          </div>
        </div>
      `;
    });
    
    listContainer.innerHTML = html;
    
    if (autoScrollTargetId) {
      setTimeout(() => {
        const el = document.getElementById(autoScrollTargetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300);
    }
  }
}

// --- API DATA REFRESH MODULE ---
let lastFetchData = null;

async function refreshRealtimeApiData() {
  if (appState.dataMode === 'sim') {
    updateSimulationData();
    renderApp();
    return;
  }
  
  // If API Mode
  try {
    let workData = [];
    let homeData = [];
    
    if (appState.mode === 'work') {
      const raw = await fetchSubwayRealtimeData('종합운동장');
      workData = mapApiDataToUi(raw, 'work');
    } else {
      const raw = await fetchSubwayRealtimeData('모란');
      homeData = mapApiDataToUi(raw, 'home', appState.homeDirection);
    }
    
    lastFetchData = {
      work: workData,
      home: homeData
    };
    
    renderApp(lastFetchData);
  } catch (err) {
    console.warn('Fallback to Simulation due to API error:', err);
    
    // Temporary fallback notification (silent console warning, alert only if user interacts)
    updateSimulationData();
    renderApp();
    
    // Draw visual feedback in console
    const activeBadge = document.getElementById(appState.mode === 'work' ? 'work-api-badge' : 'home-api-badge');
    if (activeBadge) {
      activeBadge.textContent = 'API Error (Sim)';
      activeBadge.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
      activeBadge.style.color = '#EF4444';
    }
  }
}

// --- TICKERS / INTERVALS ---
// Start 1-second countdown ticker for UI responsiveness
function startTickers() {
  // Clear any existing timer
  if (appState.timers.countdown) clearInterval(appState.timers.countdown);
  
  appState.timers.countdown = setInterval(() => {
    // If in simulation mode, update seconds remaining
    if (appState.dataMode === 'sim') {
      let changed = false;
      const arrivals = appState.mode === 'work' 
        ? appState.simulatedArrivals.work 
        : (appState.homeDirection === 'up' ? appState.simulatedArrivals.homeUp : appState.simulatedArrivals.homeDown);
        
      arrivals.forEach(train => {
        if (train.secondsLeft > 0) {
          train.secondsLeft--;
          // Recalculate status based on new timer value
          if (train.secondsLeft < 30) {
            train.status = '곧 도착 / 승차 중';
          } else if (train.secondsLeft < 90) {
            train.status = '진입 중';
          } else if (train.secondsLeft < 180) {
            train.status = '전역 출발';
          } else {
            const stationsAway = Math.floor(train.secondsLeft / 150) + 1;
            train.status = `${stationsAway}역 전`;
          }
          changed = true;
        }
      });
      
      if (changed) {
        // Redraw counters efficiently
        document.querySelectorAll('.time-countdown').forEach(el => {
          let secs = parseInt(el.getAttribute('data-secs'), 10);
          if (isNaN(secs)) return;
          if (secs > 0) {
            secs--;
            el.setAttribute('data-secs', secs);
            el.textContent = `${Math.floor(secs / 60)}분 ${secs % 60}초`;
            
            // Recalculate and update visual track elements in real-time
            let progress = 10;
            if (secs <= 0) progress = 100;
            else if (secs < 30) progress = 95;
            else if (secs < 90) progress = 80;
            else if (secs < 180) progress = 50;
            else if (secs < 300) progress = 25;
            
            const liveCard = el.closest('.live-card');
            if (liveCard) {
              const highlight = liveCard.querySelector('.track-rail-highlight');
              const icon = liveCard.querySelector('.track-train-icon');
              if (highlight) highlight.style.width = `${progress}%`;
              if (icon) icon.style.left = `${progress}%`;
            }
          } else {
            el.textContent = '도착함';
            const liveCard = el.closest('.live-card');
            if (liveCard) {
              const highlight = liveCard.querySelector('.track-rail-highlight');
              const icon = liveCard.querySelector('.track-train-icon');
              if (highlight) highlight.style.width = '100%';
              if (icon) icon.style.left = '100%';
            }
          }
        });
      } else {
        // If countdowns hit zero, refresh simulated data
        updateSimulationData();
        renderApp();
      }
    } else {
      // In API Mode, update local timer countdowns as well
      document.querySelectorAll('.time-countdown').forEach(el => {
        let secs = parseInt(el.getAttribute('data-secs'), 10);
        if (isNaN(secs)) return;
        if (secs > 0) {
          secs--;
          el.setAttribute('data-secs', secs);
          el.textContent = `${Math.floor(secs / 60)}분 ${secs % 60}초`;
          
          let progress = 10;
          if (secs <= 0) progress = 100;
          else if (secs < 30) progress = 95;
          else if (secs < 90) progress = 80;
          else if (secs < 180) progress = 50;
          else if (secs < 300) progress = 25;
          
          const liveCard = el.closest('.live-card');
          if (liveCard) {
            const highlight = liveCard.querySelector('.track-rail-highlight');
            const icon = liveCard.querySelector('.track-train-icon');
            if (highlight) highlight.style.width = `${progress}%`;
            if (icon) icon.style.left = `${progress}%`;
          }
        } else {
          el.textContent = '도착함';
          const liveCard = el.closest('.live-card');
          if (liveCard) {
            const highlight = liveCard.querySelector('.track-rail-highlight');
            const icon = liveCard.querySelector('.track-train-icon');
            if (highlight) highlight.style.width = '100%';
            if (icon) icon.style.left = '100%';
          }
        }
      });
    }
  }, 1000);

  // API or Simulation refresh ticker (every 15 seconds)
  if (appState.timers.refresh) clearInterval(appState.timers.refresh);
  appState.timers.refresh = setInterval(() => {
    refreshRealtimeApiData();
  }, 15000);
}

// --- STATE PERSISTENCE & SETTINGS ---
function loadSettings() {
  const savedMode = localStorage.getItem('subway_commute_mode');
  const savedHomeDir = localStorage.getItem('subway_commute_home_dir');
  const savedDataMode = localStorage.getItem('subway_commute_data_mode');
  const savedApiKey = localStorage.getItem('subway_commute_api_key');
  const savedExpressOnly = localStorage.getItem('subway_commute_express_only') === 'true';
  
  if (savedMode) appState.mode = savedMode;
  if (savedHomeDir) appState.homeDirection = savedHomeDir;
  if (savedDataMode) appState.dataMode = savedDataMode;
  if (savedApiKey) appState.apiKey = savedApiKey;
  appState.expressOnly = savedExpressOnly;
  
  const expressCheckbox = document.getElementById('filter-express-only');
  if (expressCheckbox) expressCheckbox.checked = savedExpressOnly;
  
  // Sync to form controls
  document.getElementById('settings-data-mode').value = appState.dataMode;
  document.getElementById('settings-api-key').value = appState.apiKey;
  
  // Toggle apikey input visibility
  const apikeyGroup = document.getElementById('apikey-group');
  if (apikeyGroup) {
    apikeyGroup.style.display = appState.dataMode === 'api' ? 'flex' : 'none';
  }
  
  // Set UI visual state
  toggleViewElements();
}

function saveSettings() {
  const dataMode = document.getElementById('settings-data-mode').value;
  const apiKey = document.getElementById('settings-api-key').value.trim();
  
  appState.dataMode = dataMode;
  appState.apiKey = apiKey;
  
  localStorage.setItem('subway_commute_data_mode', dataMode);
  localStorage.setItem('subway_commute_api_key', apiKey);
  
  // Update view and trigger reload
  const apikeyGroup = document.getElementById('apikey-group');
  if (apikeyGroup) {
    apikeyGroup.style.display = dataMode === 'api' ? 'flex' : 'none';
  }
  
  refreshRealtimeApiData();
}

function toggleViewElements() {
  // Mode selection styling
  const workBtn = document.getElementById('mode-work');
  const homeBtn = document.getElementById('mode-home');
  const workView = document.getElementById('view-work');
  const homeView = document.getElementById('view-home');
  
  if (appState.mode === 'work') {
    document.body.className = 'theme-commute-work';
    workBtn.classList.add('active');
    homeBtn.classList.remove('active');
    workView.style.display = 'block';
    homeView.style.display = 'none';
  } else {
    document.body.className = 'theme-commute-home';
    workBtn.classList.remove('active');
    homeBtn.classList.add('active');
    workView.style.display = 'none';
    homeView.style.display = 'block';
    
    // Toggle sub-tabs for Home Mode (Moran Station)
    const tabUp = document.getElementById('tab-dir-up');
    const tabDown = document.getElementById('tab-dir-down');
    
    if (appState.homeDirection === 'up') {
      tabUp.classList.add('active');
      tabDown.classList.remove('active');
    } else {
      tabUp.classList.remove('active');
      tabDown.classList.add('active');
    }
  }
}

// --- EVENT HANDLERS & INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  // Load local settings
  loadSettings();
  
  // Initial calculation
  updateSimulationData();
  refreshRealtimeApiData();
  startTickers();
  
  // Mode click listeners
  document.getElementById('mode-work').addEventListener('click', () => {
    appState.mode = 'work';
    localStorage.setItem('subway_commute_mode', 'work');
    toggleViewElements();
    refreshRealtimeApiData();
  });
  
  document.getElementById('mode-home').addEventListener('click', () => {
    appState.mode = 'home';
    localStorage.setItem('subway_commute_mode', 'home');
    toggleViewElements();
    refreshRealtimeApiData();
  });
  
  // Home directions sub-tab click listeners
  document.getElementById('tab-dir-up').addEventListener('click', () => {
    appState.homeDirection = 'up';
    localStorage.setItem('subway_commute_home_dir', 'up');
    toggleViewElements();
    refreshRealtimeApiData();
  });
  
  document.getElementById('tab-dir-down').addEventListener('click', () => {
    appState.homeDirection = 'down';
    localStorage.setItem('subway_commute_home_dir', 'down');
    toggleViewElements();
    refreshRealtimeApiData();
  });
  
  // Settings modal controls
  const settingsModal = document.getElementById('settings-modal');
  document.getElementById('open-settings').addEventListener('click', () => {
    settingsModal.classList.add('active');
  });
  
  document.getElementById('close-settings').addEventListener('click', () => {
    settingsModal.classList.remove('active');
  });
  
  document.getElementById('save-settings').addEventListener('click', () => {
    saveSettings();
    settingsModal.classList.remove('active');
  });
  
  // Dropdown dependency on settings
  document.getElementById('settings-data-mode').addEventListener('change', (e) => {
    const apikeyGroup = document.getElementById('apikey-group');
    apikeyGroup.style.display = e.target.value === 'api' ? 'flex' : 'none';
  });

  // Express only filter listener
  const expressCheckbox = document.getElementById('filter-express-only');
  if (expressCheckbox) {
    expressCheckbox.addEventListener('change', (e) => {
      appState.expressOnly = e.target.checked;
      localStorage.setItem('subway_commute_express_only', e.target.checked);
      renderApp();
    });
  }
});
