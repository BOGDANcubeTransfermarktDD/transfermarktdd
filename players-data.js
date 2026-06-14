const playersData = [
    {
        id: "bogdan",
        name: "Богдан",
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
        id: "vlad",
        name: "Влад",
        age: 15,
        price: 112,
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
            { date: "12.06.2026", price: 112 }
        ]
    },
    {
        id: "danila",
        name: "Данила",
        age: 15,
        price: 99,
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
        name: "Борис Лов Ельцин",
        age: 8,
        price: 41,
        ratingOverride: 36,
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
            { date: "12.06.2026", price: 41 }
        ]
    },

        {
        id: "zakhar",
        name: "Захар",
        age: 9,
        price: 22,
        priceOverride: 22,
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
            { date: "14.06.2026", price: 22 }
        ],
        transferRumor: {
            club: "ФК ПАЦАНЧИКИ",
            clubLogo: "https://i.oneme.ru/i?r=BTE2sh_eZW7g8kugOdIm2NotN_WE_hOnMyXYVEyTB9S0a6i4PqKgM2Ek2hqD_lAdUA8",
            probability: 65
        }
    }
];