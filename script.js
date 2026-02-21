// Initialize configuration
const config = window.VALENTINE_CONFIG;

// Store love meter value globally for email
let currentLovePercentage = 100;

// Initialize EmailJS
function initializeEmailJS() {
    if (config.email && config.email.enabled && typeof emailjs !== 'undefined') {
        emailjs.init(config.email.publicKey);
        console.log('✅ EmailJS initialized');
    }
}

// Email verification function
window.verifyEmail = function() {
    console.log('verifyEmail called');
    const emailInput = document.getElementById('emailInput');
    const emailError = document.getElementById('emailError');
    
    if (!emailInput) {
        console.error('Email input not found');
        return;
    }
    
    const email = emailInput.value.trim().toLowerCase();
    console.log('Email entered:', email);
    
    if (!config.emailVerification || !config.emailVerification.enabled) {
        console.log('Email verification disabled');
        document.getElementById('emailVerification').classList.add('hidden');
        document.getElementById('question1').classList.remove('hidden');
        return;
    }
    
    const allowedEmails = config.emailVerification.allowedEmails.map(e => e.toLowerCase());
    console.log('Allowed emails:', allowedEmails);
    
    if (allowedEmails.includes(email)) {
        console.log('Email verified successfully');
        emailError.classList.add('hidden');
        document.getElementById('emailVerification').classList.add('hidden');
        document.getElementById('question1').classList.remove('hidden');
    } else {
        console.log('Email verification failed');
        emailError.classList.remove('hidden');
        emailInput.classList.add('shake');
        setTimeout(() => {
            emailInput.classList.remove('shake');
        }, 500);
    }
}

// Manual email send function (called by button)
window.sendEmailManually = function() {
    const btn = document.getElementById('sendEmailBtn');
    const status = document.getElementById('emailStatus');
    
    btn.disabled = true;
    btn.textContent = '⏳ Đang gửi...';
    status.classList.remove('hidden');
    status.textContent = 'Đang gửi email...';
    status.style.color = '#ff6b6b';
    
    sendEmailNotification(true, function(success) {
        if (success) {
            btn.textContent = '✅ Đã gửi!';
            status.textContent = '✅ Email đã được gửi thành công đến ' + config.email.recipientEmail;
            status.style.color = '#4CAF50';
        } else {
            btn.disabled = false;
            btn.textContent = '❌ Thử lại';
            status.textContent = '❌ Gửi email thất bại. Vui lòng thử lại!';
            status.style.color = '#f44336';
        }
    });
}

// Send email notification
function sendEmailNotification(accepted = true, callback) {
    if (!config.email || !config.email.enabled || typeof emailjs === 'undefined') {
        console.log('Email notification disabled or EmailJS not loaded');
        if (callback) callback(false);
        return;
    }

    const templateParams = {
        to_email: config.email.recipientEmail,
        valentine_name: config.valentineName,
        response: accepted ? 'ĐÃ ĐỒNG Ý ❤️' : 'Từ chối 💔',
        love_percentage: currentLovePercentage + '%',
        date: new Date().toLocaleString('vi-VN', { 
            timeZone: 'Asia/Ho_Chi_Minh',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }),
        message: accepted 
            ? `${config.valentineName} đã đồng ý làm Valentine của bạn! 🎉💝 Mức độ yêu: ${currentLovePercentage}%` 
            : `${config.valentineName} đã từ chối... 😢`
    };

    emailjs.send(config.email.serviceId, config.email.templateId, templateParams)
        .then(function(response) {
            console.log('✅ Email sent successfully!', response.status, response.text);
            if (callback) callback(true);
        }, function(error) {
            console.log('❌ Failed to send email:', error);
            if (callback) callback(false);
        });
}

// Validate configuration
function validateConfig() {
    const warnings = [];

    // Check required fields
    if (!config.valentineName) {
        warnings.push("Valentine's name is not set! Using default.");
        config.valentineName = "My Love";
    }

    // Validate colors
    const isValidHex = (hex) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
    Object.entries(config.colors).forEach(([key, value]) => {
        if (!isValidHex(value)) {
            warnings.push(`Invalid color for ${key}! Using default.`);
            config.colors[key] = getDefaultColor(key);
        }
    });

    // Validate animation values
    if (parseFloat(config.animations.floatDuration) < 5) {
        warnings.push("Float duration too short! Setting to 5s minimum.");
        config.animations.floatDuration = "5s";
    }

    if (config.animations.heartExplosionSize < 1 || config.animations.heartExplosionSize > 3) {
        warnings.push("Heart explosion size should be between 1 and 3! Using default.");
        config.animations.heartExplosionSize = 1.5;
    }

    // Log warnings if any
    if (warnings.length > 0) {
        console.warn("⚠️ Configuration Warnings:");
        warnings.forEach(warning => console.warn("- " + warning));
    }
}

// Default color values
function getDefaultColor(key) {
    const defaults = {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    };
    return defaults[key];
}

// Set page title
document.title = config.pageTitle;

// Initialize the page content when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    // Validate configuration first
    validateConfig();

    // Set texts from config
    document.getElementById('valentineTitle').textContent = `${config.valentineName}, my love...`;
    
    // Set first question texts
    document.getElementById('question1Text').textContent = config.questions.first.text;
    document.getElementById('yesBtn1').textContent = config.questions.first.yesBtn;
    document.getElementById('noBtn1').textContent = config.questions.first.noBtn;
    document.getElementById('secretAnswerBtn').textContent = config.questions.first.secretAnswer;
    
    // Set second question texts
    document.getElementById('question2Text').textContent = config.questions.second.text;
    document.getElementById('startText').textContent = config.questions.second.startText;
    document.getElementById('nextBtn').textContent = config.questions.second.nextBtn;
    
    // Set third question texts
    document.getElementById('question3Text').textContent = config.questions.third.text;
    document.getElementById('yesBtn3').textContent = config.questions.third.yesBtn;
    document.getElementById('noBtn3').textContent = config.questions.third.noBtn;

    // Setup email verification
    const verifyBtn = document.getElementById('verifyEmailBtn');
    const emailInput = document.getElementById('emailInput');
    
    if (verifyBtn) {
        verifyBtn.addEventListener('click', verifyEmail);
    }
    
    if (emailInput) {
        emailInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                verifyEmail();
            }
        });
    }

    // Create initial floating elements
    createFloatingElements();

    // Setup music player
    setupMusicPlayer();

    // Initialize EmailJS
    initializeEmailJS();
});

// Create floating hearts and bears
function createFloatingElements() {
    const container = document.querySelector('.floating-elements');
    
    // Create hearts
    config.floatingEmojis.hearts.forEach(heart => {
        const div = document.createElement('div');
        div.className = 'heart';
        div.innerHTML = heart;
        setRandomPosition(div);
        container.appendChild(div);
    });

    // Create bears
    config.floatingEmojis.bears.forEach(bear => {
        const div = document.createElement('div');
        div.className = 'bear';
        div.innerHTML = bear;
        setRandomPosition(div);
        container.appendChild(div);
    });
}

// Set random position for floating elements
function setRandomPosition(element) {
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDelay = Math.random() * 5 + 's';
    element.style.animationDuration = 10 + Math.random() * 20 + 's';
}

// Function to show next question
window.showNextQuestion = function(questionNumber) {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    document.getElementById(`question${questionNumber}`).classList.remove('hidden');
}

// Function to move the "No" button when clicked
window.moveButton = function(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'fixed';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}

// Love meter functionality
const loveMeter = document.getElementById('loveMeter');
const loveValue = document.getElementById('loveValue');
const extraLove = document.getElementById('extraLove');

function setInitialPosition() {
    loveMeter.value = 100;
    loveValue.textContent = 100;
    loveMeter.style.width = '100%';
}

loveMeter.addEventListener('input', () => {
    const value = parseInt(loveMeter.value);
    currentLovePercentage = value; // Store for email
    loveValue.textContent = value;
    
    if (value > 100) {
        extraLove.classList.remove('hidden');
        const overflowPercentage = (value - 100) / 9900;
        const extraWidth = overflowPercentage * window.innerWidth * 0.8;
        loveMeter.style.width = `calc(100% + ${extraWidth}px)`;
        loveMeter.style.transition = 'width 0.3s';
        
        // Show different messages based on the value
        if (value >= 5000) {
            extraLove.classList.add('super-love');
            extraLove.textContent = config.loveMessages.extreme;
        } else if (value > 1000) {
            extraLove.classList.remove('super-love');
            extraLove.textContent = config.loveMessages.high;
        } else {
            extraLove.classList.remove('super-love');
            extraLove.textContent = config.loveMessages.normal;
        }
    } else {
        extraLove.classList.add('hidden');
        extraLove.classList.remove('super-love');
        loveMeter.style.width = '100%';
    }
});

// Initialize love meter
window.addEventListener('DOMContentLoaded', setInitialPosition);
window.addEventListener('load', setInitialPosition);

// Celebration function
window.celebrate = function() {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');
    
    // Set celebration messages
    document.getElementById('celebrationTitle').textContent = config.celebration.title;
    document.getElementById('celebrationMessage').textContent = config.celebration.message;
    document.getElementById('celebrationEmojis').textContent = config.celebration.emojis;
    
    // Send email notification
    if (config.email && config.email.enabled && config.email.sendOnAccept) {
        sendEmailNotification(true);
    }
    
    // Create heart explosion effect
    createHeartExplosion();
}

// Create heart explosion animation
function createHeartExplosion() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        const randomHeart = config.floatingEmojis.hearts[Math.floor(Math.random() * config.floatingEmojis.hearts.length)];
        heart.innerHTML = randomHeart;
        heart.className = 'heart';
        document.querySelector('.floating-elements').appendChild(heart);
        setRandomPosition(heart);
    }
}

// Music Player Setup
function setupMusicPlayer() {
    const musicControls = document.getElementById('musicControls');
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const musicSource = document.getElementById('musicSource');

    // Only show controls if music is enabled in config
    if (!config.music.enabled) {
        musicControls.style.display = 'none';
        return;
    }

    // Set music source and volume
    musicSource.src = config.music.musicUrl;
    bgMusic.volume = config.music.volume || 0.5;
    bgMusic.load();

    // Try autoplay if enabled
    if (config.music.autoplay) {
        const playPromise = bgMusic.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Autoplay prevented by browser");
                musicToggle.textContent = config.music.startText;
            });
        }
    }

    // Toggle music on button click
    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.textContent = config.music.stopText;
        } else {
            bgMusic.pause();
            musicToggle.textContent = config.music.startText;
        }
    });
} 