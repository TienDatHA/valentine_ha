// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {

    valentineName: "Hải Anh",

    pageTitle: "Hải Anh có thể làm Valentine của anh không? 💝",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🧸', '🐻'],
        ducks: ['🦆']
    },

    questions: {
        first: {
            text: "Hải Anh có một chút tình cảm với anh không?",
            yesBtn: "Có chứ ❤️",
            noBtn: "Không đâu",
            secretAnswer: "Thật ra anh thích Hải Anh nhiều lắm đó 💖"
        },
        second: {
            text: "Nếu yêu anh, thì yêu anh bao nhiêu?",
            startText: "Yêu đến mức này nè:",
            nextBtn: "Tiếp tục nha 💕"
        },
        third: {
            text: "Hải Anh có đồng ý làm Valentine của anh không? 🌹",
            yesBtn: "Đồng ý 💘",
            noBtn: "Cho anh suy nghĩ thêm..."
        }
    },

    loveMessages: {
        extreme: "Trời ơi nhiều vậy luôn sao? Anh sắp tan chảy rồi đó 🥰🚀💝",
        high: "Nhiều hơn anh tưởng luôn đó! 💖✨",
        normal: "Vậy thôi là anh vui lắm rồi 🥰"
    },

    celebration: {
        title: "Yayyy! Anh hạnh phúc nhất trên đời rồi! 🎉💖💝",
        message: "Vậy từ giờ Hải Anh chính thức là Valentine của anh nhé! Anh xin một cái ôm thật ấm áp đó nha 🤗💋",
        emojis: "🎁💖🤗💝💋❤️💕🦆"
    },

    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    music: {
        enabled: true,
        autoplay: false,
        musicUrl: "https://res.cloudinary.com/dkdn7ibpw/video/upload/v1771689696/1_snmfc7.mp3",
        startText: "🎵 Bật nhạc cho anh nghe",
        stopText: "🔇 Tắt nhạc",
        volume: 0.5
    },

    // Email verification settings
    emailVerification: {
        enabled: true,                              // Enable email verification
        allowedEmails: [
            "haianhvuhoang9596@gmail.com",
            "21021574@vnu.edu.vn"
        ]
    },

    // Email notification settings (using EmailJS)
    email: {
        enabled: true,                              // Enable/disable email feature
        serviceId: "service_fcw1tn8",               // Your EmailJS Service ID
        templateId: "template_wwbnwi3",             // Your EmailJS Template ID
        publicKey: "M9VUXVczhlW5YMy1o",             // Your EmailJS Public Key
        recipientEmail: "phamtiendat05122003@gmail.com", // Email to receive notification
        sendOnAccept: false,                        // Send email when they click "Yes" (changed to false for manual send)
        includeDetails: true                        // Include love meter percentage in email
    }
};

window.VALENTINE_CONFIG = CONFIG;