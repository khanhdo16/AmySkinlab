export const POST_API_URL = process.env.SERVER_URL + "/api/posts";
export const SETTING_API_URL = process.env.SERVER_URL + "/api/setting";
export const BLOG_CARD_TITLE_LENGTH = 20;
export const BLOG_CARD_DESC_LENGTH = 30;
export const LOCATIONS = {
    HaNoi: {
        Name: "Hà Nội",
        Address: "57 ngõ 84 Ngọc Khánh, Giảng Võ, Ba Đình",
        Tel: "096.931.4568",
    },
    VinhPhuc: {
        Name: "Vĩnh Phúc",
        Address: "Tầng 6 - Tòa nhà Hỷ Khách Lai, 02 Nguyễn Thị Minh Khai, Hội Hợp, Vĩnh Viên",
        Tel: "096.949.7084",
    },
};

export const NAV_ITEMS = [
    {
        title: "Trang Chủ",
        path: "/",
    },
    {
        title: "Dịch Vụ",
        path: "dich-vu",
        items: [
            {
                title: "Bệnh Da",
                path: "benh-da",
                items: [
                    {
                        title: "Mụn Trứng Cá",
                        path: "mun-trung-ca",
                    },
                    {
                        title: "Rám Má",
                        path: "ram-ma",
                    },
                    {
                        title: "Lão Hoá Da",
                        path: "lao-hoa-da",
                    },
                    {
                        title: "Rụng Tóc",
                        path: "rung-toc",
                    },
                ],
            },
            {
                title: "Chăm Sóc Da",
                path: "cham-soc-da",
                items: [
                    {
                        title: "Kem Chống Nắng",
                        path: "kem-chong-nang",
                    },
                    {
                        title: "Chăm Sóc Tóc",
                        path: "cham-soc-toc",
                    },
                    {
                        title: "Chăm Sóc Móng",
                        path: "cham-soc-mong",
                    },
                    {
                        title: "Chăm Sóc Da Cơ Bản",
                        path: "cham-soc-da-co-ban",
                    },
                    {
                        title: "Bí Mật Nho Nhỏ",
                        path: "bi-mat-nho-nho",
                    },
                ],
            },
            {
                title: "Thủ Thuật Thẩm Mỹ",
                path: "thu-thuat-tham-my",
                items: [
                    {
                        title: "Peel",
                        path: "peel",
                    },
                    {
                        title: "Mesotherapy",
                        path: "mesotherapy",
                    },
                    {
                        title: "Triệt Lông",
                        path: "triet-long",
                    },
                    {
                        title: "Các thủ thuật da liễu khác",
                        path: "khac",
                    },
                ],
            },
        ],
    },
    {
        title: "Kiến Thức Da Liễu",
        path: "/kien-thuc-da-lieu",
    },
    {
        title: "Hình Ảnh",
        path: "/hinh-anh",
    },
    {
        title: "Liên Hệ",
        path: "/lien-he",
        items: [
            {
                title: "Bệnh Da Bệnh Da Bệnh Da Bệnh Da Bệnh Da Bệnh Da Bệnh Da Bệnh Da Bệnh Da Bệnh Da Bệnh Da Bệnh Da Bệnh Da",
                path: "benh-da",
                items: [
                    {
                        title: "Mụn Trứng Cá",
                        path: "mun-trung-ca",
                    },
                    {
                        title: "Rám Má",
                        path: "ram-ma",
                    },
                    {
                        title: "Lão Hoá Da",
                        path: "lao-hoa-da",
                    },
                    {
                        title: "Rụng Tóc",
                        path: "rung-toc",
                    },
                ],
            },
        ],
    },
];
