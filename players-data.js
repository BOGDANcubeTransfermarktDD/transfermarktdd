const playersData = [
    {
        id: "bogdan-shchelkov",
        name: "Богдан Щелков",
        age: 16,
        price: 112,
        priceOverride: 112,
        ratingOverride: 63,
        position: "midfielder",
        positions: ["Полузащитник", "Нападающий", "Вратарь"],
        mainPosition: "Полузащитник",
        number: 12,
        club: "ФК ПАЦАНЧИКИ",
        nation: "Россия",
        height: 176,
        photo: "https://i.oneme.ru/i?r=BTE2sh_eZW7g8kugOdIm2NotuvU1F-EcpDkUCT7EvWbaTqi4PqKgM2Ek2hqD_lAdUA8",
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
            { date: "01.06.2023", price: 0 },
            { date: "10.06.2026", price: 65 },
            { date: "12.06.2026", price: 112 }
        ]
    },
    {
        id: "vlad-rybakov",
        name: "Влад Рыбаков",
        age: 15,
        price: 120,
        priceOverride: 120,
        ratingOverride: 67,
        position: "forward",
        positions: ["Нападающий", "Полузащитник"],
        mainPosition: "Нападающий",
        number: 10,
        club: "ФК ПАЦАНЧИКИ",
        nation: "Россия",
        height: 175,
        photo: "https://i.oneme.ru/i?r=BTE2sh_eZW7g8kugOdIm2NotMRmAJgu4rI1Sy6GhWyDp_ai4PqKgM2Ek2hqD_lAdUA8",
        stats: {
            matches: 0,
            goals: 0,
            assists: 0,
            yellowCards: 0,
            redCards: 0
        },
        goalieStats: null,
        priceHistory: [
            { date: "01.06.2023", price: 0 },
            { date: "10.06.2026", price: 65 },
            { date: "12.06.2026", price: 112 },
            { date: "18.06.2026", price: 120}
        ]
    },
    {
        id: "danila-pryanikov",
        name: "Данила Пряников",
        age: 15,
        price: 99,
        priceOverride: 99,
        ratingOverride: 60,
        position: "forward",
        positions: ["Нападающий"],
        mainPosition: "Нападающий",
        number: 95,
        club: "ФК ПАЦАНЧИКИ",
        nation: "Россия",
        height: 186,
        photo: "https://i.oneme.ru/i?r=BTE2sh_eZW7g8kugOdIm2NotwWU8xPPEixe5q4cGZEllb6i4PqKgM2Ek2hqD_lAdUA8",
        stats: {
            matches: 0,
            goals: 0,
            assists: 0,
            yellowCards: 0,
            redCards: 0
        },
        goalieStats: null,
        priceHistory: [
            { date: "01.06.2023", price: 0 },
            { date: "10.06.2026", price: 65 },
            { date: "12.06.2026", price: 99 }
        ]
    },
    {
        id: "boris",
        name: "Борис",
        age: 8,
        price: 60,
        priceOverride: 60,
        ratingOverride: 53,
        position: "midfielder",
        positions: ["Полузащитник", "Защитник"],
        mainPosition: "Полузащитник",
        number: 8,
        club: "ФК ПАЦАНЧИКИ",
        nation: "Россия",
        height: 140,
        photo: "https://i.oneme.ru/i?r=BTE2sh_eZW7g8kugOdIm2NotQSRBqBAQlyOG-Qap9IFDaKi4PqKgM2Ek2hqD_lAdUA8",
        stats: {
            matches: 0,
            goals: 0,
            assists: 0,
            yellowCards: 0,
            redCards: 0
        },
        goalieStats: null,
        priceHistory: [
            { date: "01.06.2023", price: 0 },
            { date: "10.06.2026", price: 55 },
            { date: "12.06.2026", price: 41 },
            { date: "20.06.2026", price: 60 }
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
        photo: "https://i.oneme.ru/i?r=BTE2sh_eZW7g8kugOdIm2NotrQIeHS7W83VELqzbFRMj36i4PqKgM2Ek2hqD_lAdUA8",
        stats: {
            matches: 0,
            goals: 0,
            assists: 0,
            yellowCards: 0,
            redCards: 0
        },
        goalieStats: null,
        priceHistory: [
            { date: "14.06.2026", price: 0 },
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
        price: 90,
        priceOverride: 90,
        position: "midfielder",
        positions: ["Полузащитник", "Нападающий"],
        mainPosition: "Полузащитник",
        number: 17,
        club: "ФК ПАЦАНЧИКИ",
        nation: "Россия",
        height: 180,
        photo: "https://i.oneme.ru/i?r=BTE2sh_eZW7g8kugOdIm2Notw_i9IQSJConinRyhrypXrai4PqKgM2Ek2hqD_lAdUA8",
        stats: {
            matches: 0,
            goals: 0,
            assists: 0,
            yellowCards: 0,
            redCards: 0
        },
        goalieStats: null,
        priceHistory: [
            { date: "14.06.2026", price: 0 },
            { date: "19.06.2026", price: 90 }
        ],
        ratingOverride: 60
    },

        {
        id: "artem-ridun",
        name: "Артём Ридун",
        age: 10,
        price: 85,
        priceOverride: 85,
        position: "forward",
        positions: ["Нападающий", "Полузащитник"],
        mainPosition: "Нападающий",
        number: 67,
        club: "ФК ЖК Ломоносов",
        nation: "Россия",
        height: 138,
        photo: "https://i.oneme.ru/i?r=BTE2sh_eZW7g8kugOdIm2Not1cPK23sRiTisz8TVOKzYU6i4PqKgM2Ek2hqD_lAdUA8",
        stats: {
            matches: 0,
            goals: 0,
            assists: 0,
            yellowCards: 0,
            redCards: 0
        },
        goalieStats: null,
        priceHistory: [
            { date: "18.06.2026", price: 0 },
            { date: "20.06.2026", price: 85 }
        ],
        ratingOverride: 58
    },

        {
        id: "daniil-abdrakhmanov",
        name: "Даниил Абдрахманов",
        age: 12,
        price: 85,
        priceOverride: 85,
        position: "midfielder",
        positions: ["Полузащитник", "Защитник"],
        mainPosition: "Полузащитник",
        number: 1,
        club: "ФК ЖК Ломоносов",
        nation: "Россия",
        height: 160,
        photo: "https://i.oneme.ru/i?r=BTE2sh_eZW7g8kugOdIm2Not2epMWNbZ3U8S-qhRtbjUcqi4PqKgM2Ek2hqD_lAdUA8",
        stats: {
            matches: 0,
            goals: 0,
            assists: 0,
            yellowCards: 0,
            redCards: 0
        },
        goalieStats: null,
        priceHistory: [
            { date: "18.06.2026", price: 0 },
            { date: "20.06.2026", price: 85 }
        ],
        ratingOverride: 58
    },

        {
        id: "vladimir-serov",
        name: "Владимир Серов",
        age: 11,
        price: 95,
        priceOverride: 95,
        position: "forward",
        positions: ["Нападающий"],
        mainPosition: "Нападающий",
        number: 10,
        club: "ФК ЖК Ломоносов",
        nation: "Россия",
        height: 155,
        photo: "https://i.oneme.ru/i?r=BTE2sh_eZW7g8kugOdIm2NotiTFlTwAar_4shZWdRp6RJqi4PqKgM2Ek2hqD_lAdUA8",
        stats: {
            matches: 0,
            goals: 0,
            assists: 0,
            yellowCards: 0,
            redCards: 0
        },
        goalieStats: null,
        priceHistory: [
            { date: "18.06.2026", price: 0 },
            { date: "20.06.2026", price: 95 }
        ],
        ratingOverride: 61
    }
];