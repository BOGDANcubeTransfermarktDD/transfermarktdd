const playersData = [
    {
        id: "bogdan-shchelkov",
        name: "Богдан Щелков",
        age: 16,
        price: 105,
        priceOverride: 105,
        ratingOverride: 63,
        position: "midfielder",
        positions: ["Полузащитник", "Нападающий", "Вратарь"],
        mainPosition: "Полузащитник",
        number: 12,
        club: "ФК ПАЦАНЧИКИ",
        nation: "Россия",
        height: 176,
        photo: "Фото игроков для профиля/Богдан Щелков.jpg",
        stats: {
            matches: 0,
            goals: 0,
            assists: 0,
            yellowCards: 0,
            redCards: 0
        },
        goalieStats: {
            matches: 0,
            conceded: 0,
            cleanSheets: 0,
            yellowCards: 0,
            redCards: 0
        },
        priceHistory: [
            { date: "10.06.2026", price: 65 },
            { date: "12.06.2026", price: 112 },
            { date: "26.07.2026", price: 105 }
        ]
    },

        {
        id: "vlad-rybakov",
        name: "Влад Рыбаков",
        age: 15,
        price: 110,
        priceOverride: 110,
        ratingOverride: 67,
        position: "forward",
        positions: ["Нападающий", "Полузащитник"],
        mainPosition: "Нападающий",
        number: 10,
        club: "ФК ПАЦАНЧИКИ",
        nation: "Россия",
        height: 175,
        photo: "Фото игроков для профиля/Влад Рыбаков.jpg",
        stats: {
            matches: 0,
            goals: 0,
            assists: 0,
            yellowCards: 0,
            redCards: 0
        },
        goalieStats: null,
        priceHistory: [
            { date: "10.06.2026", price: 65 },
            { date: "12.06.2026", price: 112 },
            { date: "18.06.2026", price: 120 },
            { date: "26.07.2026", price: 110 }
        ]
    },

        {
        id: "danila-pryanikov",
        name: "Данила Пряников",
        age: 16,
        price: 90,
        priceOverride: 90,
        ratingOverride: 60,
        position: "forward",
        positions: ["Нападающий"],
        mainPosition: "Нападающий",
        number: 95,
        club: "ФК ПАЦАНЧИКИ",
        nation: "Россия",
        height: 186,
        photo: "Фото игроков для профиля/Данила Пряников.jpg",
        stats: {
            matches: 0,
            goals: 0,
            assists: 0,
            yellowCards: 0,
            redCards: 0
        },
        goalieStats: null,
        priceHistory: [
            { date: "10.06.2026", price: 65 },
            { date: "12.06.2026", price: 99 },
            { date: "26.07.2026", price: 90}
        ]
    },

        {
        id: "boris",
        name: "Борис",
        age: 8,
        price: 45,
        priceOverride: 45,
        ratingOverride: 53,
        position: "midfielder",
        positions: ["Полузащитник", "Защитник"],
        mainPosition: "Полузащитник",
        number: 8,
        club: "ФК ПАЦАНЧИКИ",
        nation: "Россия",
        height: 140,
        photo: "Фото игроков для профиля/Борис.jpg",
        stats: {
            matches: 0,
            goals: 0,
            assists: 0,
            yellowCards: 0,
            redCards: 0
        },
        goalieStats: null,
        priceHistory: [
            { date: "10.06.2026", price: 55 },
            { date: "12.06.2026", price: 41 },
            { date: "24.07.2026", price: 45 }
        ]
    },

        {
        id: "zakhar-pryanikov",
        name: "Захар Пряников",
        age: 9,
        price: 35,
        priceOverride: 35,
        ratingOverride: 25,
        position: "midfielder",
        positions: ["Полузащитник"],
        mainPosition: "Полузащитник",
        number: 19,
        club: "Без клуба",
        nation: "Россия",
        height: 145,
        photo: "Фото игроков для профиля/Захар Пряников.jpg",
        stats: {
            matches: 0,
            goals: 0,
            assists: 0,
            yellowCards: 0,
            redCards: 0
        },
        goalieStats: null,
        priceHistory: [
            { date: "14.06.2026", price: 22 },
            { date: "20.06.2026", price: 35 }
        ],
        transferRumor: {
            club: "ФК ПАЦАНЧИКИ",
            clubLogo: "https://i.oneme.ru/i?r=BTE2sh_eZW7g8kugOdIm2NotN_WE_hOnMyXYVEyTB9S0a6i4PqKgM2Ek2hqD_lAdUA8",
            probability: 65
        }
    },

        {
        id: "matvey-zoreev",
        name: "Матвей Зореев",
        age: 16,
        price: 80,
        priceOverride: 80,
        position: "midfielder",
        positions: ["Полузащитник", "Нападающий"],
        mainPosition: "Полузащитник",
        number: 17,
        club: "ФК ПАЦАНЧИКИ",
        nation: "Россия",
        height: 180,
        photo: "Фото игроков для профиля/Матвей Зореев.jpg",
        stats: {
            matches: 0,
            goals: 0,
            assists: 0,
            yellowCards: 0,
            redCards: 0
        },
        goalieStats: null,
        priceHistory: [
            { date: "19.06.2026", price: 90 },
            { date: "24.07.2026", price: 80 }
        ],
        ratingOverride: 60
    },

        {
        id: "artem-ridun",
        name: "Артём Ридун",
        age: 10,
        price: 70,
        priceOverride: 70,
        position: "forward",
        positions: ["Нападающий", "Полузащитник"],
        mainPosition: "Нападающий",
        number: 67,
        club: "ФК ЖК Ломоносов",
        nation: "Россия",
        height: 138,
        photo: "Фото игроков для профиля/Артём Ридун.jfif",
        stats: {
            matches: 0,
            goals: 0,
            assists: 0,
            yellowCards: 0,
            redCards: 0
        },
        goalieStats: null,
        priceHistory: [
            { date: "20.06.2026", price: 85 },
            { date: "24.07.2026", price: 70 }
        ],
        ratingOverride: 58
    },

        {
        id: "daniil-abdrakhmanov",
        name: "Даниил Абдрахманов",
        age: 12,
        price: 80,
        priceOverride: 80,
        position: "midfielder",
        positions: ["Полузащитник", "Защитник"],
        mainPosition: "Полузащитник",
        number: 1,
        club: "ФК ЖК Ломоносов",
        nation: "Россия",
        height: 160,
        photo: "Фото игроков для профиля/Даниил Абдрахманов.jfif",
        stats: {
            matches: 0,
            goals: 0,
            assists: 0,
            yellowCards: 0,
            redCards: 0
        },
        goalieStats: null,
        priceHistory: [
            { date: "20.06.2026", price: 85 },
            { date: "24.07.2026", price: 80 }
        ],
        ratingOverride: 58
    },

        {
        id: "vladimir-serov",
        name: "Владимир Серов",
        age: 11,
        price: 90,
        priceOverride: 90,
        position: "forward",
        positions: ["Нападающий"],
        mainPosition: "Нападающий",
        number: 10,
        club: "ФК ЖК Ломоносов",
        nation: "Россия",
        height: 155,
        photo: "Фото игроков для профиля/Владимир Серов.jfif",
        stats: {
            matches: 0,
            goals: 0,
            assists: 0,
            yellowCards: 0,
            redCards: 0
        },
        goalieStats: null,
        priceHistory: [
            { date: "20.06.2026", price: 95 },
            { date: "24.07.2026", price: 90 }
        ],
        ratingOverride: 61
    },

        {
        id: "adel-safin",
        name: "Адель Сафин",
        age: 12,
        price: 55,
        priceOverride: 55,
        position: "midfielder",
        positions: ["Полузащитник", "Вратарь"],
        mainPosition: "Полузащитник",
        number: 43,
        club: "ФК ЖК Ломоносов",
        nation: "Россия",
        height: 168,
        photo: "Фото игроков для профиля/Адель Сафин.jfif",
        stats: {
            matches: 0, goals: 0, assists: 0,
            yellowCards: 0, redCards: 0
        },
        goalieStats: {
            matches: 0, conceded: 0, cleanSheets: 0,
            yellowCards: 0, redCards: 0
        },
        priceHistory: [
            { date: "24.07.2026", price: 0 },
            { date: "24.07.2026", price: 55 }
        ],
        ratingOverride: 54
    },

        {
        id: "vyacheslav-balaev",
        name: "Вячеслав Балаев",
        age: 10,
        price: 40,
        priceOverride: 40,
        position: "midfielder",
        positions: ["Полузащитник", "Защитник"],
        mainPosition: "Полузащитник",
        number: 4,
        club: "ФК ЖК Ломоносов",
        nation: "Россия",
        height: 157,
        photo: "Фото игроков для профиля/Вячеслав Балаев.jfif",
        stats: {
            matches: 0, goals: 0, assists: 0,
            yellowCards: 0, redCards: 0
        },
        goalieStats: null,
        priceHistory: [
            { date: "24.07.2026", price: 0 },
            { date: "24.07.2026", price: 40 }
        ],
        ratingOverride: 51
    },

];