export interface ProductStory {
  title?: string;
  text: string;
  image?: string;
  imagePosition?: "left" | "right";
}

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  thumbnails?: string[];
  slug: string;
  tagline?: string;
  story?: ProductStory[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Mã Đáo Thành Công",
    slug: "ma-dao-thanh-cong",
    category: "Trà",
    tagline: "Tinh hoa trà Việt – trọn vẹn tâm tình",
    description: "Hộp quà tặng cao cấp Tết 2026, tinh hoa trà Việt – trọn vẹn tâm tình.",
    price: 2800000,
    image: "/images/product-ma-dao-chinh.png",
    thumbnails: ["/images/ma-dao-thumb-1.png", "/images/ma-dao-thumb-2.png"],
    story: [
      {
        title: "Ý nghĩa của tên gọi",
        text: "\"Mã Đáo Thành Công\" – câu thành ngữ bao đời nay người Việt dùng để chúc nhau công thành danh toại, vạn sự như ý. ESG Valley chắt lọc tinh hoa từ những búp trà thượng hạng, gửi vào đó ý nghĩa chúc tụng sâu sắc nhất dành cho những người thân yêu.",
        image: "/images/product-ma-dao-chinh.png",
        imagePosition: "right"
      },
      {
        title: "Bộ quà Tết cao cấp 2026",
        text: "Hộp quà được thiết kế tỉ mỉ theo phong cách truyền thống, kết hợp họa tiết ngựa phi nước đại và hoa văn trà – biểu tượng cho sức mạnh, tốc độ và sự tinh tế. Bên trong là tổ hợp trà tuyển chọn từ các vùng nguyên liệu nổi tiếng nhất của ESG Valley.",
        image: "/images/ma-dao-thumb-1.png",
        imagePosition: "left"
      },
      {
        title: "Nghệ thuật đóng gói",
        text: "Mỗi hộp quà được đóng tay bởi những nghệ nhân lành nghề, bảo quản độ tươi của trà trong suốt hành trình vận chuyển. Đây không chỉ là quà tặng – mà là một tác phẩm nghệ thuật, một thông điệp về sự trân trọng.",
        image: "/images/ma-dao-thumb-2.png",
        imagePosition: "right"
      }
    ]
  },
  {
    id: 2,
    name: "Tản Viên Trà",
    slug: "tan-vien-tra",
    category: "Trà",
    tagline: "Linh khí núi Tản – hội tụ đất trời",
    description: "Thuở hồng hoang, khi Thần Nông nếm bách thảo và phát hiện lá trà có thể giải độc, đất Việt cũng bắt đầu ghi dấu sự sống nơi núi Tản Viên – vùng non thiêng hội tụ linh khí đất trời.",
    price: 950000,
    image: "/images/product-ma-dao.png",
    thumbnails: ["/images/tan-vien-thumb-1.png", "/images/tan-vien-thumb-2.png"],
    story: [
      {
        title: "Nguồn gốc từ núi thiêng",
        text: "Núi Tản Viên – một trong Tứ bất tử của thần thoại Việt – nơi linh khí đất trời hội tụ ngàn đời. Chính từ vùng đất thiêng này, những búp trà đầu tiên được hái xuống với sự thành kính của người dân bản địa. Đất đỏ bazan, mưa sương bốn mùa và bàn tay cần mẫn của nông dân đã nuôi dưỡng nên những búp trà thuần khiết nhất.",
        image: "/images/product-ma-dao.png",
        imagePosition: "right"
      },
      {
        title: "Hương vị của thiên nhiên",
        text: "Tản Viên Trà mang hương thơm thanh mát của núi rừng, vị chát dịu rồi hậu ngọt sâu. Mỗi ngụm là một lần đắm mình vào không gian núi non hùng vĩ, cảm nhận trọn vẹn linh hồn của đất Việt ngàn năm. Trà được hái tay, chế biến thủ công theo phương pháp truyền thống để giữ trọn hương vị tự nhiên.",
        image: "/images/tan-vien-thumb-1.png",
        imagePosition: "left"
      }
    ]
  },
  {
    id: 3,
    name: "Mạc Triều Trà",
    slug: "mac-trieu-tra",
    category: "Trà",
    tagline: "Chắt lọc từ ngàn năm lịch sử",
    description: "Mạc Triều Trà mang trong mình câu chuyện về sự chắt lọc, nâng tầm và gửi gắm của bao thế hệ. Ban đầu, chén trà vốn chỉ là thức uống dân dã, giản dị bên mái nhà sàn, bên nương chè xanh.",
    price: 1200000,
    image: "/images/product-tan-vien.png",
    thumbnails: ["/images/mac-trieu-thumb-1.png", "/images/mac-trieu-thumb-2.png"],
    story: [
      {
        title: "Từ cung đình đến dân gian",
        text: "Triều đại nhà Mạc – một trong những giai đoạn huy hoàng của lịch sử Việt – đã nâng nghệ thuật thưởng trà lên tầm cao mới. Các quan lại, văn nhân thi sĩ đã dùng chén trà như phương tiện giao thoa văn hóa, bàn luận chính sự và sáng tác thi ca. Mạc Triều Trà kế thừa tinh thần đó – biến mỗi buổi thưởng trà thành một nghi lễ tâm linh.",
        image: "/images/product-tan-vien.png",
        imagePosition: "right"
      },
      {
        title: "Phương pháp chế biến cổ truyền",
        text: "Áp dụng kỹ thuật diệt men bằng tay trên chảo gang nóng rồi vò nhẹ từng mẻ, Mạc Triều Trà giữ nguyên sắc lục tươi và hương thơm cỏ mới. Nước pha có màu vàng xanh trong vắt, vị dịu ngọt kéo dài – xứng tầm tiến vua một thuở.",
        image: "/images/mac-trieu-thumb-1.png",
        imagePosition: "left"
      }
    ]
  },
  {
    id: 4,
    name: "Bách Niên Trà",
    slug: "bach-nien-tra",
    category: "Trà",
    tagline: "Di sản trăm năm – vị ngon vượt thời gian",
    description: "Trải qua suốt chiều dài lịch sử, từ thuở dựng nước đến hôm nay, những giá trị văn hóa không ngừng được truyền lại như một báu vật vô giá. Trà – không chỉ là thức uống – đã trở thành món quà tinh thần thiêng liêng.",
    price: 1500000,
    image: "/images/product-mac-trieu.png",
    thumbnails: ["/images/bach-nien-thumb-1.png", "/images/bach-nien-thumb-2.png"],
    story: [
      {
        title: "Cây trà trăm tuổi",
        text: "Bách Niên Trà được thu hái từ những cây chè cổ thụ hàng trăm năm tuổi tại vùng núi Thái Nguyên. Rễ ăn sâu vào lòng đất, hút khoáng chất tinh túy của núi rừng nguyên sinh qua bao thế kỷ. Mỗi búp trà là kết tinh của trăm năm kiên nhẫn, trăm năm im lặng và trăm năm tích lũy.",
        image: "/images/product-mac-trieu.png",
        imagePosition: "right"
      },
      {
        title: "Vị ngon vượt thời gian",
        text: "Hương trà đặc trưng với nốt gỗ ấm, hoa dại và mật ong rừng. Vị đậm đà, hậu ngọt kéo dài nhiều phút sau khi uống. Bách Niên Trà phù hợp để thưởng thức trong những buổi sáng tĩnh lặng hay khi cần tập trung làm việc – sự đồng hành đáng tin cậy suốt hành trình cuộc đời.",
        image: "/images/bach-nien-thumb-1.png",
        imagePosition: "left"
      }
    ]
  },
  {
    id: 5,
    name: "Thượng Cổ Trà",
    slug: "thuong-co-tra",
    category: "Trà",
    tagline: "Nguồn cội vĩnh cửu",
    description: "Thuở xưa xa, ở miền đất Thái Nguyên núi non hùng vĩ, có nàng Công – người con gái xinh đẹp, khéo léo, yêu trà như yêu chính cuộc đời mình.",
    price: 1800000,
    image: "/images/product-bach-nien.png",
    thumbnails: ["/images/thuong-co-thumb-1.png", "/images/thuong-co-thumb-2.png"],
    story: [
      {
        title: "Hương tình yêu ấy chẳng dễ dàng.",
        text: "Chạ nàng – Quan Lang trong vùng – vốn tham lam và độc đoán, không muốn gả con gái cho kẻ nghèo hèn. Ông đặt ra điều kiện khắc nghiệt: Chàng Cốc phải vào rừng sâu sắt dược muôn thứ dây hiếm mặc dưới chân nàng Công.\n\nBiết rõ muốn trùng hiểm nguy, nhưng vì tình yêu sơn sắt, chàng vẫn quyết tâm lên đường. Giá phút chia ly, nàng Công trao cho chàng một nhánh cây trà và nói: \"Cây này không chỉ giải mỏi, chữa thương mà còn giúp tỉnh thần tỉnh tao, tìm thế khóe mạnh. Thiếp gửi chàng để làm bạn đường, cũng là minh chứng tình yêu của đôi ta.\"",
        image: "/images/product-bach-nien.png",
        imagePosition: "right"
      },
      {
        title: "Mang theo nhánh trà,",
        text: "Chàng Cốc bước vào rừng sâu – nơi gai lá Núi Bông. Trên suốt đoạn đường, chàng vừa trồng cây trà để dành sức lực đi, vừa để lộ ngược, chặng chàng; ngàn gốc trà biến cở sắt trộ, trở thành khởi nguồn của trà cổ nội Bông – Thái Nguyên hôm nay.\n\nChàng vượt qua bao hiểm nguy, cảm hóa muôn thú rừng, tìm được với phẩm gia được đề trả về cuối nãng. Nhưng Quan Lang độc ác, đã bầu đầu, phòng lừa thêu rừng chạy ru. Giữa bước nguy nan người trẻ trai, cảm thấy kiệt sức, vô vọng nhìn, đột nhiên một cơn gió lạ kéo, trao cho chiếc liên thần đợt rừng. \"Khi nguy nan, hãy bẻ cành lộc, đừng và đầu nhà, rồi mặc lên đến đó, chàng buộc đứa thù.\"",
        image: "/images/thuong-co-thumb-1.png",
        imagePosition: "left"
      },
      {
        title: "",
        text: "Chàng trà với cùng nàng Công đình bỏ trốn. Quân lính Quan Lang truy đuổi, Cốc bé bóng đường lúc, đầy nu mặc lên chèn đường, ngân hoặc quân lính. Những nhánh cây trà và ngặt Công khóe những không thoát khỏi tay kẻ bạo. Nàng Công bị bắt trở lại, còn chàng Cốc và cả con trà đã hành thành đứng núi và chu đón ra mặt gọc ngài. Linh hồn chàng hòa thành đứng núi Công khoẻ khắn điền quân nước mặt, giọt lệ tuần trào hòa thành sông Công cuộn chảy muôn đời.",
        image: "/images/thuong-co-thumb-2.png",
        imagePosition: "right"
      }
    ]
  },
  {
    id: 6,
    name: "Matcha",
    slug: "matcha",
    category: "Matcha",
    tagline: "Xanh thuần, vị đậm, tâm an",
    description: "Matcha thượng hạng được chọn lọc từ vùng chè đặc sản, chế biến theo phương pháp truyền thống Nhật Bản kết hợp bản sắc Việt – màu xanh ngọc, hương thơm thanh thoát, vị đậm đà.",
    price: 650000,
    image: "/images/product-matcha.jpg",
    story: [
      {
        title: "Phương pháp chế biến độc đáo",
        text: "Búp trà non được che bóng 3–4 tuần trước khi thu hái để tăng hàm lượng L-theanine và chlorophyll – tạo màu xanh ngọc đặc trưng và vị ngọt dịu. Sau đó lá trà được sấy khô và nghiền mịn bằng cối đá truyền thống, tạo ra bột matcha mịn màng với hương thơm cỏ mới đặc trưng.",
        image: "/images/product-matcha.jpg",
        imagePosition: "right"
      },
      {
        title: "Bản sắc Việt trong từng muỗng",
        text: "Khác với matcha Nhật thuần túy, Matcha ESG Valley được trồng trên vùng đất đỏ Thái Nguyên – nơi có khí hậu ôn hòa và độ ẩm lý tưởng. Kết quả là một loại matcha mang hương vị đặc trưng riêng của đất Việt: thanh khiết hơn, dịu hơn và đậm đà hơn so với các loại matcha thông thường.",
        image: "/images/product-matcha.jpg",
        imagePosition: "left"
      }
    ]
  },
  {
    id: 7,
    name: "Tách Trà",
    slug: "tach-tra",
    category: "Trà Cụ",
    tagline: "Tôn vinh từng ngụm thượng hạng",
    description: "Tách trà thủ công bằng gốm sứ cao cấp, dáng thanh thoát – tôn vinh từng ngụm trà thượng hạng. Hoàn hảo cho những buổi thưởng trà trang trọng.",
    price: 380000,
    image: "/images/product-tach-tra.png",
    story: [
      {
        title: "Từ bàn tay nghệ nhân",
        text: "Mỗi chiếc tách trà ESG Valley được tạo hình thủ công bởi nghệ nhân gốm lành nghề tại làng gốm truyền thống. Đất sét cao lanh cao cấp sau khi tạo dáng sẽ được nung qua hai lần: nung biscuit và nung men – tạo ra sản phẩm bền, trắng ngà, với độ trong suốt của ánh sáng.",
        image: "/images/product-tach-tra.png",
        imagePosition: "right"
      }
    ]
  },
  {
    id: 8,
    name: "Ấm Trà",
    slug: "am-tra",
    category: "Trà Cụ",
    tagline: "Giữ nhiệt lý tưởng, nâng tầm hương vị",
    description: "Ấm pha trà truyền thống bằng đất tử sa, giữ nhiệt lý tưởng và nâng tầm hương vị. Mỗi chiếc ấm là tác phẩm nghệ thuật độc bản từ bàn tay nghệ nhân lành nghề.",
    price: 890000,
    image: "/images/product-am-tra.png",
    story: [
      {
        title: "Đất tử sa – báu vật của nghề gốm",
        text: "Đất tử sa (Zisha) từ vùng Nghi Hưng, Trung Quốc nổi tiếng là loại đất gốm tốt nhất thế giới để làm ấm trà. Cấu trúc vi lỗ đặc biệt của đất tử sa giúp ấm \"thở\" – hấp thụ tinh dầu và hương trà theo thời gian, khiến ấm càng dùng càng có hương thơm đặc trưng riêng.",
        image: "/images/product-am-tra.png",
        imagePosition: "right"
      }
    ]
  },
  {
    id: 9,
    name: "Tống Trà",
    slug: "tong-tra",
    category: "Trà Cụ",
    tagline: "Công bằng trong từng giọt",
    description: "Tống trà (fairness cup) bằng thủy tinh borosilicate cao cấp, giúp chia đều hương vị mỗi lần rót. Thiết kế tối giản, sang trọng.",
    price: 450000,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800",
    story: [
      {
        title: "Triết lý công bằng trong thưởng trà",
        text: "Tống trà – hay còn gọi là Công Đạo Bôi – ra đời từ triết lý rằng mỗi người thưởng trà xứng đáng được nhận phần trà với chất lượng như nhau. Khi rót từ ấm vào tống trà trước, hương vị được hòa trộn đồng đều trước khi phân chia vào từng tách riêng.",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800",
        imagePosition: "right"
      }
    ]
  },
  {
    id: 10,
    name: "Ly Nước",
    slug: "ly-nuoc",
    category: "Trà Cụ",
    tagline: "Thưởng thức trọn vẹn sắc trà",
    description: "Ly uống nước đôi trà, thiết kế tối giản bằng thủy tinh trong suốt – giúp thưởng thức trọn vẹn màu sắc và hương thơm của từng loại trà.",
    price: 280000,
    image: "/images/product-ly-nuoc.png",
    story: [
      {
        title: "Thiết kế tối giản, công năng tối đa",
        text: "Ly nước đôi trà ESG Valley được thiết kế dựa trên nguyên tắc \"form follows function\" – hình dáng phục vụ công năng. Thủy tinh borosilicate trong suốt giúp người thưởng trà quan sát màu sắc tuyệt đẹp của nước trà, trong khi lớp thủy tinh kép giúp giữ nhiệt và không làm nóng tay khi cầm.",
        image: "/images/product-ly-nuoc.png",
        imagePosition: "right"
      }
    ]
  },
  {
    id: 11,
    name: "Đĩa Lót",
    slug: "dia-lot",
    category: "Trà Cụ",
    tagline: "Điểm nhấn tinh tế cho bộ ấm chén",
    description: "Đĩa lót tách trà bằng gỗ tự nhiên và gốm sứ, kết hợp hài hòa vẻ đẹp thiên nhiên và nghệ thuật thủ công – điểm nhấn tinh tế cho bộ ấm chén.",
    price: 220000,
    image: "/images/product-dia-lot.png",
    story: [
      {
        title: "Vật liệu từ thiên nhiên",
        text: "Đĩa lót được làm từ gỗ trắc và gốm men tro truyền thống. Gỗ trắc tự nhiên có vân gỗ đẹp, cứng bền và kháng ẩm tự nhiên – lý tưởng làm đế lót tách trà. Phần viền gốm men tro tạo nên sự kết hợp hài hòa giữa hai loại vật liệu thiên nhiên.",
        image: "/images/product-dia-lot.png",
        imagePosition: "right"
      }
    ]
  },
  {
    id: 12,
    name: "Tiệc Trà Di Sản",
    slug: "tiec-tra-di-san",
    category: "Dịch Vụ Đặc Biệt",
    tagline: "Hành trình kết nối quá khứ – hiện tại – tương lai",
    description: "Trải nghiệm văn hóa thưởng trà độc bản tại không gian ESG Valley – nơi mỗi tách trà là một hành trình kết nối quá khứ, hiện tại và tương lai bền vững.",
    price: 5500000,
    image: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&q=80&w=800",
    story: [
      {
        title: "Không gian thưởng trà độc bản",
        text: "Tiệc Trà Di Sản diễn ra trong không gian truyền thống được phục dựng theo kiến trúc đình làng Việt cổ – nơi giao thoa của lịch sử, nghệ thuật và thiên nhiên. Mỗi buổi tiệc là một hành trình trải nghiệm có hướng dẫn bởi trà sư lành nghề, đưa khách qua từng chương của câu chuyện trà Việt.",
        image: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&q=80&w=800",
        imagePosition: "right"
      },
      {
        title: "Trải nghiệm đa giác quan",
        text: "Từ việc quan sát nghệ nhân chọn trà, đến tự tay thực hành các bước pha trà truyền thống, cảm nhận hương thơm lan tỏa và thưởng thức vị trà thay đổi qua từng nước pha – Tiệc Trà Di Sản là trải nghiệm toàn diện cho cả thể xác lẫn tâm hồn.",
        image: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&q=80&w=800",
        imagePosition: "left"
      }
    ]
  },
  {
    id: 13,
    name: "Tea Show – Trình Diễn Nghệ Thuật Pha Trà",
    slug: "tea-show",
    category: "Dịch Vụ Đặc Biệt",
    tagline: "Nghệ thuật pha trà – Biểu diễn sống động",
    description: "Buổi trình diễn nghệ thuật pha trà độc đáo kết hợp âm nhạc và văn hóa trà Việt, tạo nên trải nghiệm thẩm mỹ tinh tế và khó quên dành cho sự kiện doanh nghiệp, tiệc tư nhân.",
    price: 8000000,
    image: "https://images.unsplash.com/photo-1544025162-d76538897a97?auto=format&fit=crop&q=80&w=800",
    story: [
      {
        title: "Khi trà trở thành nghệ thuật biểu diễn",
        text: "Tea Show là sự kết hợp độc đáo giữa nghệ thuật pha trà truyền thống và biểu diễn sân khấu hiện đại. Trà sư của ESG Valley không chỉ pha trà – họ kể câu chuyện về văn hóa, lịch sử và con người Việt Nam thông qua từng động tác uyển chuyển, từng âm thanh của nước rót, từng làn hương trà bay lên.",
        image: "https://images.unsplash.com/photo-1544025162-d76538897a97?auto=format&fit=crop&q=80&w=800",
        imagePosition: "right"
      },
      {
        title: "Phù hợp cho mọi sự kiện",
        text: "Tea Show của ESG Valley phù hợp cho sự kiện doanh nghiệp, lễ khai trương, tiệc tư nhân, hội thảo văn hóa và các buổi gặp gỡ đặc biệt. Đội ngũ trà sư sẽ tùy chỉnh nội dung chương trình theo chủ đề và yêu cầu riêng của từng sự kiện.",
        image: "https://images.unsplash.com/photo-1544025162-d76538897a97?auto=format&fit=crop&q=80&w=800",
        imagePosition: "left"
      }
    ]
  }
];

export const news = [
  {
    id: 1,
    title: "ESG Valley chính thức nhận chứng nhận Hữu cơ Quốc tế",
    date: "15/05/2025",
    category: "Bền Vững",
    excerpt: "Dấu mốc quan trọng trong hành trình mang trà Việt vươn tầm thế giới với tiêu chuẩn khắt khe nhất.",
    image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Dự án bảo tồn rừng trà cổ thụ Shan Tuyết tại Hà Giang",
    date: "02/05/2025",
    category: "Cộng Đồng",
    excerpt: "Hợp tác cùng cộng đồng bản địa nhằm giữ gìn di sản thiên nhiên và cải thiện sinh kế người dân vùng cao.",
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Ra mắt bộ sưu tập 'Mã Đáo' chào Xuân 2026",
    date: "20/04/2025",
    category: "Sản Phẩm",
    excerpt: "Sự kết hợp hoàn hảo giữa nghệ thuật thiết kế đương đại và chất lượng trà thượng hạng ESG Valley.",
    image: "https://images.unsplash.com/photo-1629851608681-3058b76a084c?auto=format&fit=crop&q=80&w=800"
  }
];

export const certifications = [
  "VietGAP Certified",
  "ISO 9001:2015",
  "USDA Organic",
  "EU Organic",
  "OCOP 4 Sao",
  "HACCP Certified"
];

export const esgPillars = [
  {
    code: "E",
    title: "Environment",
    subtitle: "Môi Trường",
    color: "from-emerald-700 to-green-900",
    accent: "bg-emerald-50 border-emerald-200",
    textAccent: "text-emerald-700",
    description: "Chúng tôi hiểu rằng môi trường là nền tảng cho sự sống và sự phát triển. Mỗi hành động đều hướng đến giảm thiểu tác động tiêu cực đến thiên nhiên – từ tối ưu hóa sử dụng tài nguyên, giảm phát thải carbon, đến thúc đẩy mô hình sản xuất – tiêu dùng xanh. Đó là cách chúng tôi chung tay bảo vệ hành tinh cho các thế hệ sau.",
    points: ["Canh tác hữu cơ 100%", "Giảm phát thải carbon", "Bảo tồn đa dạng sinh học"],
    image: "/images/vong-tuan-hoan.png"
  },
  {
    code: "S",
    title: "Social",
    subtitle: "Xã Hội",
    color: "from-amber-700 to-amber-900",
    accent: "bg-amber-50 border-amber-200",
    textAccent: "text-amber-700",
    description: "Chúng tôi tin rằng một doanh nghiệp bền vững phải đặt con người làm trung tâm. Từ việc hỗ trợ sinh kế người dân trồng chè vùng cao, đến việc gìn giữ và phát huy văn hóa bản địa – mỗi sản phẩm ESG Valley là cầu nối giữa cộng đồng và thế giới.",
    points: ["Hỗ trợ 500+ hộ nông dân", "Bảo tồn văn hóa bản địa", "Phát triển cộng đồng bền vững"],
    image: "/images/social-in-esg.jpg"
  },
  {
    code: "G",
    title: "Governance",
    subtitle: "Quản Trị",
    color: "from-slate-700 to-slate-900",
    accent: "bg-slate-50 border-slate-200",
    textAccent: "text-slate-700",
    description: "Quản trị minh bạch là nền tảng của niềm tin. Chúng tôi cam kết vận hành theo chuẩn mực quốc tế – từ chuỗi cung ứng có trách nhiệm đến báo cáo ESG công khai hàng năm – để mỗi đối tác, khách hàng đều có thể đặt trọn niềm tin.",
    points: ["Minh bạch chuỗi cung ứng", "Báo cáo ESG hàng năm", "Chứng nhận quốc tế"],
    image: "/images/governance.jpg"
  }
];
