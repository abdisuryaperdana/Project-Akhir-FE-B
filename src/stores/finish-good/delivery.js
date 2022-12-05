import { defineStore } from "pinia";

const d$delivery = defineStore({
    id: 'delivery',
    state: () => ({
        list: [
            {
                "id": 1,
                "partName": "CONSOLE FLOOR FR LWR",
                "qty": 10,
                "customer": "HPP",
                "time": "08:00 AM",
                "delivDate": "23/10/2022",
                "supplier": "TKI"
            },
            {
                "id": 2,
                "partName": "GARNISH RR BUMPER LWR (IPL)",
                "qty": 1,
                "customer": "HPP",
                "time": "08:25 AM",
                "delivDate": "23/10/2022",
                "supplier": "TKI"
            },
            {
                "id": 3,
                "partName": "Tailgate Ikuyo",
                "qty": 1,
                "customer": "HPP",
                "time": "08:32 AM",
                "delivDate": "23/10/2022",
                "supplier": "TKI"
            },
            {
                "id": 4,
                "partName": "REINFORCEMENT STEP RH/LH",
                "qty": 10,
                "customer": "VB",
                "time": "09:45 AM",
                "delivDate": "23/10/2022",
                "supplier": "SUZUKI"
            },
            {
                "id": 5,
                "partName": "SPACER RR SEAT TURN SIDE",
                "qty": 20,
                "customer": "VB",
                "time": "10:09 AM",
                "delivDate": "23/10/2022",
                "supplier": "SUZUKI"
            },
        ],
        supplier: [
            {
                "supplier": "TKI", 
                "materialReqNo": "DELIV-23102022"
            },
            {
                "supplier": "SUZUKI", 
                "materialReqNo": "DELIV-24102022"
            },
            {
                "supplier": "JS",
                "materialReqNo": "DELIV-25102022"
            },
            {
                "supplier": "ITSP",
                "materialReqNo": "DELIV-26102022"
            }
        ],
        // DATA SUPLIER TKI DOANG
        partBySupplier: [
            {
                "materialReqNo": "DELIV-23102022",
                "exportDate": "23/10/2022",
                "supplier": "TKI",
                "listPart": [
                    {
                        "delivNumber": 123328493,
                        "delivDate": "23/10/2022",
                        "customer": "HPP",
                        "partNumber": "IT01-RBL0105-XX-XX",
                        "partName": "GARNISH RR BUMPER LWR (IPL)",
                        "qty": 1,
                        "totalPcs": 900,
                        "totalBox": 90
                    },
                    {
                        "delivNumber": 123778478,
                        "delivDate": "23/10/2022",
                        "customer": "HPP",
                        "partNumber": "IT02-CAF0200-XX-XX",
                        "partName": "CONSOLE FLOOR FR LWR",
                        "qty": 1,
                        "totalPcs": 225,
                        "totalBox": 225
                    },
                    {
                        "delivNumber": 123994439,
                        "delivDate": "23/10/2022",
                        "customer": "HPP",
                        "partNumber": "IK01-GTG0101-XX-XX",
                        "partName": "Tailgate Ikuyo",
                        "qty": 1,
                        "totalPcs": 250,
                        "totalBox": 250
                    },
                    {
                        "delivNumber": 123004378,
                        "delivDate": "23/10/2022",
                        "customer": "HPP",
                        "partNumber": "HM02-GTU0101-XX-XX",
                        "partName": "GARNISH TAILGATE UPR (IPL)",
                        "qty": 1,
                        "totalPcs": 250,
                        "totalBox": 250
                    },
                ]

            }
        ]
    }),
    actions: {
        
    },
    getters: {
        g$list: ({ list }) => list,
        g$supplier: ({ supplier }) => supplier,
        g$partSupplier: ({ partBySupplier }) => partBySupplier,
    },
});

export default d$delivery;