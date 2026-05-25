document.addEventListener('DOMContentLoaded', () => {
    
    console.log("VectisONE Presentation Portal Engine Initializing...");

    // DOM Elements with safe fallbacks
    const body = document.body;
    const currentLensDisplay = document.getElementById('current-lens-display');
    const pingValue = document.getElementById('ping-value');
    const hardwareTag = document.getElementById('hardware-tag');
    const mainlandBypass = document.getElementById('mainland-bypass');
    const mainlandCable = document.getElementById('mainland-link-line');
    const cloudLegendDot = document.getElementById('cloud-legend-dot');
    const auditLogStream = document.getElementById('audit-log-stream');
    const hitlSignoff = document.getElementById('hitl-signoff');
    const timelineCards = document.querySelectorAll('.timeline-node-card');
    
    // Lens Selector controls
    const lensSelects = document.querySelectorAll('input[name="lens-select"]');
    const lensTabs = document.querySelectorAll('.lens-tab');
    
    // ELI5 Toggle
    const eli5Toggle = document.getElementById('eli5-toggle');

    // ELI5 Plain English Map for Julian Seal logs
    const eli5Map = {
        'SYSTEM INITIALIZED': 'System Online: Welcome to VectisONE AI Academy!',
        'STATION_COWES: ONLINE // REFreflex_loop: 1.2ms': 'Cowes Node Live: Local processing engine online.',
        'WIGHTFIBRE P2P COMPONENT BINDING: OK': 'WightFibre Connection: High-speed local link established.',
        'Julian Seal forensic logs capturing telemetry.': 'Notary Active: Safe audit trails are being saved in the background.',
        'TOGGLE: COMMITTEE LENS MOUNTED // LINGUISTIC SHIFT ENABLED': 'Lens Switched: Showing financial savings and regulatory compliance statistics.',
        'A2UI SPECIFICATIONS LOADED: Deterministic Component Map Active': 'Safety Shield Loaded: The AI is locked to safe design modules.',
        'TOGGLE: APPRENTICE LENS MOUNTED // CAREER DURABILITY TIMELINE': 'Lens Switched: Showing training tracks and career benefits.',
        'TOGGLE: CREATOR LENS MOUNTED // STUDIO FOYER & TASTE SPOTLIGHT': 'Lens Switched: Welcome to the Ryde Foyer and Creator Studio.',
        'SOVEREIGN BYPASS DISABLED // Cloud Gateway Connected': 'Internet Linked: External cloud features are temporarily enabled.',
        'SOVEREIGN AIR-GAP LOCKED // WightFibre Island Loop Isolated': 'Local Air-Gap Sealed: Your data is entirely safe on the Island.',
        'DATA SECURITY REGULATION CHECK: PUWER Reg 4 Compliant': 'Safety Certified: Hardware meets UK industrial safety standards.',
        'EPISTEMIC VIGILANCE STATUS: Human Orchestrator Verified & Active': 'Human in the Loop: All creative tasks are verified by a real person.',
        'WARNING: Epistemic Vigilance Check disabled. Non-audited execution window active.': 'Manual Mode: Raw autonomous edits are temporarily active.',
        'NODE_0: Liquid Cooling check passed // acoustic transparency stable': 'System Safe: The studio computers are running safely, quietly, and cool.',
        'A2UI GATEWAY: Adjacency list verified // zero injection vectors detected': 'Safety Shield Active: The AI is physically blocked from breaking or crashing.',
        'WightFibre Ring check: 100G Backbone latency <0.8ms': 'Connection Speed: Your link to the main Node Zero refinery is running at extreme speed.'
    };

    // SHA-256 Hash Simulator (Pseudo-SHA256 for responsive log outputs)
    function generateSimulatedHash(input) {
        let hash = 0;
        const salt = Math.random().toString();
        const combined = input + salt;
        for (let i = 0; i < combined.length; i++) {
            const char = combined.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        let hexString = Math.abs(hash).toString(16);
        while (hexString.length < 64) {
            hexString += Math.floor(Math.random() * 16).toString(16);
        }
        return hexString.substring(0, 64);
    }

    // Helper to log receipts into the Julian Seal stream
    function logForensicReceipt(eventText, statusType = 'INFO') {
        console.log(`Log Telemetry: [${statusType}] ${eventText}`);
        if (!auditLogStream) return;
        
        const time = new Date();
        const timeStr = `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}:${time.getSeconds().toString().padStart(2, '0')}`;
        
        const logItem = document.createElement('div');
        logItem.className = 'log-item';
        
        const timestampSpan = document.createElement('span');
        timestampSpan.className = 'log-time';
        timestampSpan.textContent = `[${timeStr}]`;
        
        // Raw Technical logs
        const techSpan = document.createElement('span');
        techSpan.className = 'log-tech';
        if (statusType === 'WARN') {
            techSpan.style.color = '#FF003C';
        } else if (statusType === 'SUCCESS') {
            techSpan.style.color = '#00FF66';
        } else if (statusType === 'ACTION') {
            techSpan.style.color = 'var(--accent-active)';
        }
        techSpan.textContent = eventText;

        // Warm ELI5 logs
        const warmSpan = document.createElement('span');
        warmSpan.className = 'log-warm';
        if (statusType === 'WARN') {
            warmSpan.style.color = '#FF003C';
        } else if (statusType === 'SUCCESS') {
            warmSpan.style.color = '#10B981';
        } else if (statusType === 'ACTION') {
            warmSpan.style.color = 'var(--accent-active)';
        }
        warmSpan.textContent = eli5Map[eventText] || `🟢 Activity: ${eventText}`;
        
        const hashSpan = document.createElement('span');
        hashSpan.className = 'log-hash';
        hashSpan.textContent = `SHA256: ${generateSimulatedHash(eventText)}`;
        
        logItem.appendChild(timestampSpan);
        logItem.appendChild(techSpan);
        logItem.appendChild(warmSpan);
        logItem.appendChild(hashSpan);
        
        auditLogStream.appendChild(logItem);
        
        // Autoscroll to bottom
        auditLogStream.scrollTop = auditLogStream.scrollHeight;
    }

    // Ping widget interval simulator
    let pingInterval;
    function startPingSimulation(isAirGapped) {
        if (!pingValue) return;
        clearInterval(pingInterval);
        if (isAirGapped) {
            pingInterval = setInterval(() => {
                const basePing = (1.1 + Math.random() * 0.2).toFixed(1);
                pingValue.textContent = `${basePing}ms`;
                pingValue.style.color = '#00FF66';
            }, 1000);
        } else {
            pingInterval = setInterval(() => {
                const basePing = (1.1 + Math.random() * 0.2).toFixed(1);
                const cloudPing = (145 + Math.random() * 15).toFixed(0);
                pingValue.innerHTML = `<span style="color:#00FF66">${basePing}ms (Loc)</span> / <span style="color:#64748b">${cloudPing}ms (Cloud)</span>`;
            }, 1000);
        }
    }
    startPingSimulation(false); // Initial cloud state connected

    // Central Switch function
    function applyLensShift(selectedLens) {
        console.log(`Executing Lens Shift: ${selectedLens}`);
        
        // Update body styling class
        body.classList.remove('theme-apprentice', 'theme-creator', 'theme-committee');
        body.classList.add(`theme-${selectedLens}`);

        // Sync Radio checked statuses
        const targetRadio = document.querySelector(`input[name="lens-select"][value="${selectedLens}"]`);
        if (targetRadio && !targetRadio.checked) {
            targetRadio.checked = true;
        }

        // Update indicators & log telemetry
        if (selectedLens === 'apprentice') {
            if (currentLensDisplay) {
                currentLensDisplay.textContent = 'APPRENTICE LENS (CAREER & SKILLS)';
                currentLensDisplay.style.color = '#00F0FF';
            }
            if (hardwareTag) hardwareTag.textContent = 'LOCAL RTX 4090 NODE';
            logForensicReceipt('TOGGLE: APPRENTICE LENS MOUNTED // CAREER DURABILITY TIMELINE', 'ACTION');
        } else if (selectedLens === 'creator') {
            if (currentLensDisplay) {
                currentLensDisplay.textContent = 'CREATOR STUDIO LENS (COMMUNITY FOYER)';
                currentLensDisplay.style.color = '#A855F7';
            }
            if (hardwareTag) hardwareTag.textContent = 'RYDE COMMUNITY SERVER';
            logForensicReceipt('TOGGLE: CREATOR LENS MOUNTED // STUDIO FOYER & TASTE SPOTLIGHT', 'ACTION');
        } else if (selectedLens === 'committee') {
            if (currentLensDisplay) {
                currentLensDisplay.textContent = 'COMMITTEE LENS (ROI & REGULATION)';
                currentLensDisplay.style.color = '#F59E0B';
            }
            if (hardwareTag) hardwareTag.textContent = 'SOVEREIGN NODE-0 GPU';
            logForensicReceipt('TOGGLE: COMMITTEE LENS MOUNTED // LINGUISTIC SHIFT ENABLED', 'ACTION');
            logForensicReceipt('A2UI SPECIFICATIONS LOADED: Deterministic Component Map Active', 'SUCCESS');
        }
    }

    // Attach Event Listeners to Radio Changes
    if (lensSelects.length > 0) {
        lensSelects.forEach(select => {
            select.addEventListener('change', (e) => {
                applyLensShift(e.target.value);
            });
        });
    }

    // Attach Event Listeners to Label clicks (Defensive fallback to force click registers)
    if (lensTabs.length > 0) {
        lensTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetVal = tab.getAttribute('for') ? tab.getAttribute('for').replace('lens-', '') : null;
                if (targetVal) {
                    applyLensShift(targetVal);
                }
            });
        });
    }

    // ELI5 Toggle
    if (eli5Toggle) {
        eli5Toggle.addEventListener('change', (e) => {
            const isEli5Active = e.target.checked;
            if (isEli5Active) {
                body.classList.add('eli5-active');
                logForensicReceipt('PLAIN ENGLISH LOG TRANSLATION ACTIVE', 'SUCCESS');
            } else {
                body.classList.remove('eli5-active');
                logForensicReceipt('INDUSTRIAL COMPLIANCE LOGS ACTIVE', 'ACTION');
            }
        });
    }

    // Mainland Bypass (Air-gap control)
    if (mainlandBypass) {
        mainlandBypass.addEventListener('change', (e) => {
            const isConnectedToMainland = e.target.checked;
            
            if (isConnectedToMainland) {
                if (mainlandCable) mainlandCable.classList.remove('cut');
                if (cloudLegendDot) {
                    cloudLegendDot.style.backgroundColor = 'var(--accent-active)';
                    cloudLegendDot.style.boxShadow = '0 0 5px var(--accent-glow)';
                }
                startPingSimulation(false);
                logForensicReceipt('SOVEREIGN BYPASS DISABLED // Cloud Gateway Connected', 'WARN');
            } else {
                if (mainlandCable) mainlandCable.classList.add('cut');
                if (cloudLegendDot) {
                    cloudLegendDot.style.backgroundColor = '#FF003C';
                    cloudLegendDot.style.boxShadow = '0 0 5px #FF003C';
                }
                startPingSimulation(true);
                logForensicReceipt('SOVEREIGN AIR-GAP LOCKED // WightFibre Island Loop Isolated', 'SUCCESS');
                logForensicReceipt('DATA SECURITY REGULATION CHECK: PUWER Reg 4 Compliant', 'INFO');
            }
        });
    }

    // Human in the loop Sign-off
    if (hitlSignoff) {
        hitlSignoff.addEventListener('change', (e) => {
            const isChecked = e.target.checked;
            if (isChecked) {
                logForensicReceipt('EPISTEMIC VIGILANCE STATUS: Human Orchestrator Verified & Active', 'SUCCESS');
            } else {
                logForensicReceipt('WARNING: Epistemic Vigilance Check disabled. Non-audited execution window active.', 'WARN');
            }
        });
    }

    // Timeline Node clicks trigger checklist updates in notebooks
    if (timelineCards.length > 0) {
        timelineCards.forEach(card => {
            card.addEventListener('click', () => {
                const stage = parseInt(card.getAttribute('data-stage'));
                const activeRadio = document.querySelector('input[name="lens-select"]:checked');
                const activeLens = activeRadio ? activeRadio.value : 'apprentice';
                
                let title = 'Timeline Item';
                const titleElem = card.querySelector(`.lens-content.${activeLens}-lens h3`);
                if (titleElem) title = titleElem.textContent;
                
                // 1. Log forensic event
                logForensicReceipt(`USER ACTION Stage 0${stage}: "${title}" accessed`, 'INFO');
                
                // 2. Interactive Checklist Checkoff!
                let targetChecklist;
                if (activeLens === 'apprentice') {
                    targetChecklist = document.querySelectorAll('.apprentice-only .checklist-item');
                } else if (activeLens === 'creator') {
                    targetChecklist = document.querySelectorAll('.creator-only .checklist-item');
                }
                
                if (targetChecklist && targetChecklist[stage - 1]) {
                    const item = targetChecklist[stage - 1];
                    item.classList.add('active-check');
                    item.classList.remove('pending');
                    const checkIcon = item.querySelector('.check-icon');
                    if (checkIcon) checkIcon.textContent = '✓';
                }
                
                // Visual card click flash
                card.style.borderColor = 'var(--accent-active)';
                setTimeout(() => {
                    card.style.borderColor = 'rgba(255, 255, 255, 0.03)';
                }, 300);
            });
        });
    }

    // Generate periodic synthetic security audits in background
    setInterval(() => {
        const triggers = [
            'NODE_0: Liquid Cooling check passed // acoustic transparency stable',
            'A2UI GATEWAY: Adjacency list verified // zero injection vectors detected',
            'WightFibre Ring check: 100G Backbone latency <0.8ms'
        ];
        const randomTrigger = triggers[Math.floor(Math.random() * triggers.length)];
        logForensicReceipt(randomTrigger, 'INFO');
    }, 15000);

    // Initial seed logs
    setTimeout(() => {
        logForensicReceipt('WIGHTFIBRE P2P COMPONENT BINDING: OK', 'SUCCESS');
        logForensicReceipt('Julian Seal forensic logs capturing telemetry.', 'INFO');
    }, 1000);
});
