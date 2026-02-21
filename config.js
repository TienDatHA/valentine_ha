// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {

    valentineName: "Hải Anh",

    pageTitle: "Anh có một điều muốn hỏi em 💝",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🧸', '🐻'],
        ducks: ['🦆']
    },

    questions: {
        first: {
            text: "Em có yêu anh không?",
            yesBtn: "Có chứ ❤️",
            noBtn: "Không đâu",
            secretAnswer: "Em yêu anh nhiều hơn anh nghĩ đó 💖"
        },
        second: {
            text: "Em yêu anh nhiều bao nhiêu?",
            startText: "Em yêu anh đến mức:",
            nextBtn: "Tiếp theo 💕"
        },
        third: {
            text: "Em có muốn mãi mãi ở bên anh không? 🌹",
            yesBtn: "Em muốn 💘",
            noBtn: "Để em suy nghĩ thêm..."
        }
    },

    loveMessages: {
        extreme: "Nhiều đến mức em không đếm nổi luôn đó 🥰🚀💝",
        high: "Yêu anh hơn tất cả mọi thứ trên đời 💖✨",
        normal: "Chỉ cần được ở bên anh là đủ rồi 🥰"
    },

    celebration: {
        title: "Anh chính thức thuộc về em rồi đó! 🎉💖💝",
        message: "Valentine này và cả sau này nữa… em vẫn muốn được nắm tay anh thật chặt và cùng anh đi qua mọi điều 🤗💋",
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
        startText: "🎵 Bật nhạc cho em nghe",
        stopText: "🔇 Tắt nhạc",
        volume: 0.5
    },

    emailVerification: {
        enabled: true,
        allowedEmails: [
            "haianhvuhoang9596@gmail.com",
            "21021574@vnu.edu.vn"
        ]
    },

    email: {
        enabled: true,
        serviceId: "service_fcw1tn8",
        templateId: "template_wwbnwi3",
        publicKey: "M9VUXVczhlW5YMy1o",
        recipientEmail: "haianhvuhoang9596@gmail.com",
        sendOnAccept: false,
        includeDetails: true
    }
};

window.VALENTINE_CONFIG = CONFIG;