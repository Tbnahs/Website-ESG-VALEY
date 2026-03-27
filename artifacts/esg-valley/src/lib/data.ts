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
    slug: "chung-nhan-huu-co-quoc-te",
    title: "ESG Valley chính thức nhận chứng nhận Hữu cơ Quốc tế",
    date: "15/05/2025",
    category: "Bền Vững",
    excerpt: "Dấu mốc quan trọng trong hành trình mang trà Việt vươn tầm thế giới với tiêu chuẩn khắt khe nhất.",
    image: "/images/news-placeholder.png",
    content: `Vùng nguyên liệu – nơi thiên nhiên ươm mầm hương vị\n\nGiữa núi rừng Tây Bắc hùng vĩ, nơi sương sớm chưa tan và mặt trời còn ngập ngừng sau rặng núi, những đồi chè hiện ra như một tấm thảm xanh mướt trải dài bất tận. Đây không chỉ là nơi cung cấp nguyên liệu chính cho các sản phẩm chè chất lượng cao, mà còn là vùng đất linh thiêng – nơi con người và thiên nhiên sống chung, cùng nhau tạo nên những búp chè tươi ngon nhất.\n\nESG Valley đã chính thức được trao chứng nhận Hữu cơ Quốc tế (Organic International Certification) sau quá trình kiểm định nghiêm ngặt kéo dài hơn 2 năm. Đây là minh chứng cho cam kết không sử dụng hóa chất, thuốc trừ sâu hay phân bón tổng hợp trong toàn bộ quy trình canh tác.\n\nQuá trình đạt chứng nhận đòi hỏi sự kiên trì và minh bạch tuyệt đối trong từng khâu – từ chăm sóc đất, thu hái đến chế biến và đóng gói. Mỗi lô sản phẩm đều được truy xuất nguồn gốc rõ ràng, đảm bảo người tiêu dùng biết chính xác búp chè đến từ vườn nào, được hái bởi ai và qua những công đoạn gì.\n\nVới chứng nhận này, ESG Valley tự tin đưa sản phẩm trà Việt bước lên thị trường quốc tế, cạnh tranh sòng phẳng với những thương hiệu trà danh tiếng trên thế giới. Đây không chỉ là chiến thắng của ESG Valley mà còn là niềm tự hào của ngành trà Việt Nam.`
  },
  {
    id: 2,
    slug: "bao-ton-rung-tra-shan-tuyet",
    title: "Dự án bảo tồn rừng trà cổ thụ Shan Tuyết tại Hà Giang",
    date: "02/05/2025",
    category: "Cộng Đồng",
    excerpt: "Hợp tác cùng cộng đồng bản địa nhằm giữ gìn di sản thiên nhiên và cải thiện sinh kế người dân vùng cao.",
    image: "/images/news-placeholder.png",
    content: `Những cây trà cổ thụ Shan Tuyết tại Hà Giang – một số cây tuổi thọ hàng trăm năm – đang đứng trước nguy cơ suy thoái do biến đổi khí hậu và tình trạng khai thác thiếu bền vững. ESG Valley đã phối hợp với cộng đồng người H'Mông địa phương triển khai dự án bảo tồn toàn diện.\n\nDự án bao gồm việc lập bản đồ chi tiết các cây trà cổ thụ, xây dựng quy ước cộng đồng về thu hái bền vững, và đào tạo kỹ thuật phục hồi những cây đang suy yếu. Mỗi hộ gia đình tham gia được hỗ trợ công cụ, kỹ thuật và cam kết thu mua sản phẩm với giá ổn định cao hơn thị trường.\n\nKết quả sau 18 tháng triển khai rất đáng khích lệ: tỷ lệ cây trà phục hồi đạt trên 80%, thu nhập trung bình của các hộ tham gia tăng 35%, và một mô hình du lịch trải nghiệm trà cổ thụ đã được hình thành, thu hút khách tham quan trong và ngoài nước.\n\nĐây là minh chứng rõ ràng cho triết lý kinh doanh của ESG Valley: phát triển không tách rời cộng đồng, và giá trị thương hiệu phải song hành cùng trách nhiệm xã hội.`
  },
  {
    id: 3,
    slug: "bo-suu-tap-ma-dao-xuan-2026",
    title: "Ra mắt bộ sưu tập 'Mã Đáo' chào Xuân 2026",
    date: "20/04/2025",
    category: "Sản Phẩm",
    excerpt: "Sự kết hợp hoàn hảo giữa nghệ thuật thiết kế đương đại và chất lượng trà thượng hạng ESG Valley.",
    image: "/images/news-placeholder.png",
    content: `Chào đón Xuân 2026, ESG Valley trân trọng giới thiệu bộ sưu tập giới hạn "Mã Đáo" – lấy cảm hứng từ hình tượng ngựa phi trong tranh dân gian Đông Hồ, kết hợp hài hòa giữa họa tiết truyền thống và ngôn ngữ thiết kế hiện đại.\n\nBộ sưu tập gồm 4 dòng trà đặc biệt được chọn lọc từ những vùng nguyên liệu tinh hoa nhất: Tản Viên Trà từ rừng già Ba Vì, Mạc Triều Trà từ cao nguyên Mộc Châu, Bách Niên Trà từ rừng trà cổ thụ Shan Tuyết, và Thượng Cổ Trà – tinh túy tuyển chọn từ những cây trà ngàn tuổi.\n\nMỗi hộp trà trong bộ sưu tập là một tác phẩm nghệ thuật hoàn chỉnh: vỏ hộp sơn mài truyền thống, giấy lót thủ công từ làng nghề Dương Ô, và chứng chỉ nguồn gốc in trên giấy dó mang chữ ký của nghệ nhân. Số lượng phát hành giới hạn 500 bộ.\n\n"Mã Đáo" không chỉ là quà tặng Tết sang trọng mà còn là câu chuyện về hành trình gìn giữ di sản văn hóa Việt – từ bàn tay người nghệ nhân đến tách trà sáng đầu năm.`
  },
  {
    id: 4,
    slug: "hoi-cho-nong-san-viet-2025",
    title: "Hội chợ Nông sản Việt 2025 – ESG Valley góp mặt nổi bật",
    date: "10/03/2025",
    category: "Sự Kiện",
    excerpt: "ESG Valley tham gia hội chợ với gian hàng trà cao cấp, thu hút hàng nghìn lượt khách tham quan và trải nghiệm.",
    image: "/images/news-placeholder.png",
    content: `Tại Hội chợ Nông sản Việt Nam 2025 tổ chức tại Hà Nội, gian hàng ESG Valley đã trở thành điểm đến không thể bỏ qua với hơn 8.000 lượt khách ghé thăm trong 5 ngày diễn ra sự kiện.\n\nKhông gian trưng bày được thiết kế như một "trà thất" thu nhỏ – nơi khách hàng có thể trực tiếp thưởng thức 12 loại trà khác nhau, tìm hiểu quy trình chế biến qua màn hình tương tác, và nhận tư vấn từ các chuyên gia trà của ESG Valley.\n\nĐặc biệt, buổi trình diễn pha trà nghệ thuật kết hợp âm nhạc truyền thống diễn ra vào chiều tối mỗi ngày đã thu hút đông đảo người xem và được các tờ báo lớn đưa tin. Nhiều đối tác phân phối quốc tế từ Nhật Bản, Hàn Quốc và Singapore cũng đã tiếp cận ESG Valley để thảo luận hợp tác.\n\nHội chợ Nông sản Việt 2025 một lần nữa khẳng định vị thế ngày càng vững chắc của ESG Valley trong bản đồ trà cao cấp Việt Nam và khu vực.`
  },
  {
    id: 5,
    slug: "quy-trinh-che-bien-tra-sach",
    title: "Quy trình chế biến trà sạch – Chuỗi giá trị khép kín từ nương đến cốc",
    date: "25/02/2025",
    category: "Bền Vững",
    excerpt: "Tìm hiểu hành trình từ búp trà tươi đến thành phẩm chuẩn organic theo quy trình nghiêm ngặt của ESG Valley.",
    image: "/images/news-placeholder.png",
    content: `Hành trình của một búp chè từ khi được hái đến khi đến tay người thưởng thức tại ESG Valley trải qua không dưới 12 công đoạn kiểm soát chất lượng nghiêm ngặt – mỗi bước đều được ghi chép và truy xuất đầy đủ.\n\nThu hái: Chỉ hái búp một tôm hai lá vào buổi sáng sớm, khi chất dinh dưỡng và tinh dầu trong lá đạt đỉnh cao nhất. Người hái phải đeo găng tay sạch và dùng rổ tre thông thoáng để tránh dập nát.\n\nHéo: Lá trà sau khi hái được trải đều trên giàn tre trong nhà héo có kiểm soát nhiệt độ và độ ẩm. Thời gian héo từ 12-16 giờ tùy điều kiện thời tiết.\n\nDiệt men và vò: Sử dụng thiết bị hiện đại kết hợp kỹ thuật thủ công truyền thống để đảm bảo giữ nguyên hương vị đặc trưng của từng loại trà.\n\nSấy và phân loại: Sấy ở nhiệt độ thấp để bảo toàn dưỡng chất, sau đó phân loại thủ công để loại bỏ những lá không đạt tiêu chuẩn.\n\nToàn bộ quy trình được kiểm soát bởi hệ thống phần mềm quản lý chất lượng, đảm bảo mỗi mẻ trà đều đồng đều và đáp ứng tiêu chuẩn organic quốc tế.`
  },
  {
    id: 6,
    slug: "cau-chuyen-nguoi-nong-dan-tra",
    title: "Câu chuyện người nông dân – Gìn giữ nghề trà trăm năm",
    date: "14/02/2025",
    category: "Cộng Đồng",
    excerpt: "Những con người bền bỉ gắn bó với cây chè qua nhiều thế hệ, là trái tim của chuỗi giá trị ESG Valley.",
    image: "/images/news-placeholder.png",
    content: `Bà Lò Thị Mai, 67 tuổi, người H'Mông ở xã Lũng Cú, Đồng Văn – Hà Giang, đã gắn bó với những cây chè cổ thụ từ khi còn là đứa trẻ theo mẹ lên nương. Với bà, cây chè không chỉ là nguồn mưu sinh mà là người bạn đồng hành qua mọi thăng trầm cuộc sống.\n\n"Cây chè này của ông nội tôi trồng. Ông nội bảo khi hái phải nhẹ tay, như hái một đứa trẻ đang ngủ" – bà Mai chia sẻ trong buổi trò chuyện với đội ngũ ESG Valley.\n\nTrong hành trình xây dựng chuỗi cung ứng bền vững, ESG Valley đã gặp gỡ hàng trăm gia đình như gia đình bà Mai – những người lưu giữ tri thức bản địa quý giá về trà. Từ cách nhận biết đất phù hợp, thời điểm thu hái tốt nhất theo mùa, đến bí quyết ủ trà giữ hương – tất cả đều được ghi chép, bảo tồn và lồng ghép vào quy trình sản xuất của ESG Valley.\n\nESG Valley cam kết mua trà với giá cao hơn thị trường tối thiểu 20%, đồng thời hỗ trợ các gia đình nông dân xây dựng nhà kho bảo quản và tiếp cận vốn vay ưu đãi. Đây là nền tảng của một mô hình kinh tế tuần hoàn: khi người nông dân phát triển, chất lượng nguyên liệu tốt hơn, và thương hiệu ESG Valley ngày càng vững chắc.`
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
