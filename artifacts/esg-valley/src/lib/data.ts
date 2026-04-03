export interface ProductStory {
  title?: string;
  text: string;
  image?: string;
  imagePosition?: "left" | "right";
}

export interface NewsArticle {
  id: number;
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  content?: string;
  sourceUrl?: string;
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
    id: 9,
    name: "Diệp Trà Shan",
    slug: "diep-tra-shan",
    category: "Trà",
    tagline: "Tinh khôi sương sớm Đồng Phúc",
    description: "Giữa đỉnh ngàn Đồng Phúc mờ sương, nơi thời gian như ngưng đọng, những gốc trà Shan Tuyết cổ thụ hàng trăm năm tuổi vẫn âm thầm cắm rễ sâu, chắt lọc linh khí đất trời để kết tinh thành Di sản.",
    price: 850000,
    image: "/images/diep-tra-shan.jpg",
    thumbnails: ["/images/diep-tra-shan-2.jpg", "/images/diep-tra-shan-3.jpg"],
    story: [
      {
        title: "DIỆP TRÀ SHAN – TINH KHÔI SƯƠNG SỚM ĐỒNG PHÚC",
        text: "Giữa đỉnh ngàn Đồng Phúc mờ sương, nơi thời gian như ngưng đọng, những gốc trà Shan Tuyết cổ thụ hàng trăm năm tuổi vẫn âm thầm cắm rễ sâu, chắt lọc linh khí đất trời để kết tinh thành Di sản. Với người dân bản địa, mỗi cây chè là một sinh linh, một chứng nhân sống động cho bản sắc văn hóa vùng cao tự bao đời.\n\nTiếp nối hành trình Di sản ấy, ESGValley cùng các Nghệ nhân đã tận tâm tuyển chọn những búp trà Shan tuyết cổ thụ được hái tay thủ công, nâng niu như báu vật của thiên nhiên. Qua đôi bàn tay tài hoa và phương thức sao chế truyền thừa, linh hồn của trà được \"đánh thức\" trọn vẹn: giữ nguyên sắc xanh nguyên thủy, mang đến dòng nước vàng óng tự nhiên cùng vị chát thanh tao và hậu vị ngọt sâu trầm mặc.",
        image: "/images/diep-tra-shan.jpg",
        imagePosition: "right"
      },
      {
        title: "Nguyên liệu & Hương vị",
        text: "Do không trải qua công đoạn oxy hóa, Diệp Trà Shan giữ trọn vẹn màu sắc xanh tươi nguyên thủy của lá trà, mang lại thứ nước trà xanh ngọc hoặc vàng óng, tự nhiên và vô cùng hấp dẫn. Khi thưởng thức, bạn sẽ cảm nhận được vị trà đậm đà, vị chát nhẹ nhàng như sương sớm và hậu vị ngọt sâu.\n\n100% búp chè Shan Tuyết cổ thụ từ vùng nguyên liệu ESGValley tại xã Đồng Phúc, Thái Nguyên, được hái bằng tay bởi người dân tộc bản địa. Không hương liệu, không phụ gia, không chất bảo quản. Khối lượng tịnh: 200g.",
        image: "/images/diep-tra-shan-2.jpg",
        imagePosition: "left"
      }
    ]
  },
  {
    id: 10,
    name: "Hồng Trà Shan",
    slug: "hong-tra-shan",
    category: "Trà",
    tagline: "Nội lực sâu lắng của Di sản Đồng Phúc",
    description: "Nếu Diệp Trà Shan là hơi thở tinh khôi của buổi sớm, thì Hồng Trà Shan lại mang nội lực thâm trầm từ những cây trà Di sản tại xã Đồng Phúc, Thái Nguyên.",
    price: 900000,
    image: "/images/hong-tra-shan.jpg",
    thumbnails: ["/images/hong-tra-shan-2.jpg", "/images/hong-tra-shan-3.jpg"],
    story: [
      {
        title: "HỒNG TRÀ SHAN – NỘI LỰC SÂU LẮNG CỦA DI SẢN ĐỒNG PHÚC",
        text: "Nếu Diệp Trà Shan là hơi thở tinh khôi của buổi sớm, thì Hồng Trà Shan lại mang nội lực thâm trầm từ những cây trà Di sản tại xã Đồng Phúc, Thái Nguyên. Trong khí hậu ôn hòa của vùng cao, những búp trà Shan cổ thụ ngậm đủ dưỡng chất từ lòng đất mẹ đã sẵn sàng cho một cuộc chuyển mình đầy nghệ thuật.\n\nQua đôi bàn tay tài hoa và nghệ thuật lên men toàn phần truyền thừa, linh hồn của Trà được đánh thức theo một chương mới: nồng nàn và sâu lắng hơn.",
        image: "/images/hong-tra-shan.jpg",
        imagePosition: "right"
      },
      {
        title: "Hương vị & Nguyên liệu",
        text: "Trà lên men hoàn toàn tự nhiên, nội chất dày, hương vị phong phú, trà pha được nước, hậu vị kéo dài là những cá tính mạnh mẽ của Hồng Trà Shan ESGValley. Khi thưởng thức, bạn sẽ cảm nhận được vị trà tròn trịa, êm dịu, không còn vị chát mà thay vào đó là sự ngọt ngào lan tỏa, dịu dàng như ánh nắng chiều trên vùng cao.\n\n100% búp chè Shan Tuyết cổ thụ từ vùng nguyên liệu ESGValley tại xã Đồng Phúc, Thái Nguyên. Không hương liệu, không phụ gia, không chất bảo quản. Khối lượng tịnh: 200g.",
        image: "/images/hong-tra-shan-2.jpg",
        imagePosition: "left"
      }
    ]
  },
  {
    id: 11,
    name: "Hồng Trà Quýt",
    slug: "hong-tra-quyt",
    category: "Trà",
    tagline: "Giai điệu giao thoa của núi rừng",
    description: "Hồng Trà Quýt – bản giao hưởng nồng nàn, những búp chè Shan tuyết cổ thụ Đồng Phúc tìm thấy sự đồng điệu trong hương vị thanh tao của quýt rừng Bạch Thông.",
    price: 1100000,
    image: "/images/hong-tra-quyt.jpg",
    thumbnails: ["/images/hong-tra-quyt-2.jpg", "/images/hong-tra-quyt-3.jpg"],
    story: [
      {
        title: "HỒNG TRÀ QUÝT – GIAI ĐIỆU GIAO THOA CỦA NÚI RỪNG",
        text: "Có những cuộc gặp gỡ vốn đã được định sẵn nơi đại ngàn. Nếu Diệp Trà Shan là hơi thở thanh khiết của buổi sớm mai, thì Hồng Trà Quýt lại là bản giao hưởng nồng nàn, những búp chè Shan tuyết cổ thụ Đồng Phúc tìm thấy sự đồng điệu trong hương vị thanh tao của quýt rừng Bạch Thông. Trên những triền núi cao hơn 1.000m, những người dân bản địa đã thay lời núi rừng, hái tay từng búp trà, từng trái quýt bằng tất cả lòng biết ơn và sự trân trọng.",
        image: "/images/hong-tra-quyt.jpg",
        imagePosition: "right"
      },
      {
        title: "Quy trình chế tác & Hương vị",
        text: "Các Nghệ nhân khéo léo kết hợp búp trà Shan cổ thụ với lớp vỏ quýt thơm nồng. Trà được làm héo, sao nhẹ, phơi khô, lên men đến độ nhất định, sau đó đưa vào bên trong quả quýt rồi hong khô tự nhiên. Trái quýt có vỏ dày, sần sùi với lớp lớp tinh dầu căng mọng ngấm sâu vào trong Trà.\n\nKhi thưởng thức, bạn sẽ cảm nhận được vị ngọt thanh đặc trưng của quýt rừng len lỏi qua vị hồng Trà êm dịu, tròn trịa, để lại hậu vị ngọt sâu kéo dài. Nguyên liệu: 100% búp chè Shan Tuyết cổ thụ Đồng Phúc + quýt rừng bản địa Bạch Thông. Không hương liệu, không phụ gia. Khối lượng tịnh: 200g.",
        image: "/images/hong-tra-quyt-2.jpg",
        imagePosition: "left"
      }
    ]
  },
  {
    id: 12,
    name: "Trà Quýt Ống Lam Gác Bếp",
    slug: "tra-quyt-ong-lam",
    category: "Trà",
    tagline: "Quyện hương núi rừng, đượm vị thời gian",
    description: "Di sản Trà cổ thụ Đồng Phúc quyện cùng quýt rừng, được bao bọc trong lòng nứa xanh và nâng niu qua những mùa khói bếp thầm lặng của đồng bào Đồng Phúc.",
    price: 1300000,
    image: "/images/tra-quyt-ong-lam.jpg",
    thumbnails: ["/images/tra-quyt-ong-lam-2.jpg"],
    story: [
      {
        title: "TRÀ QUÝT ỐNG LAM GÁC BẾP – QUYỆN HƯƠNG NÚI RỪNG, ĐƯỢM VỊ THỜI GIAN",
        text: "Có những giá trị văn hóa vốn đã được định sẵn bởi nhịp điệu thanh bình của núi rừng xứ Thái. Nếu Hồng Trà Quýt là giai điệu giao thoa đầy rạng rỡ, thì Trà Quýt ống lam gác bếp lại là một khoảng lặng sâu lắng, nơi Di sản Trà cổ thụ Đồng Phúc quyện cùng quýt rừng được bao bọc trong lòng nứa xanh và nâng niu qua những mùa khói bếp thầm lặng của đồng bào Đồng Phúc.\n\nNhững búp trà Shan tuyết trăm tuổi được Nghệ nhân kết hợp cùng vỏ quýt rừng thái nhỏ. Tất cả được nhồi chặt vào lòng ống nứa tươi xanh, rồi bắt đầu hành trình \"thử lửa\" trên gác bếp.",
        image: "/images/tra-quyt-ong-lam.jpg",
        imagePosition: "right"
      },
      {
        title: "Hương vị & Nguyên liệu",
        text: "Làn khói bếp thầm lặng bao bọc, nhựa tre nứa tươi quyện cùng tinh dầu quýt rừng dần thẩm thấu, đánh thức linh hồn của Trà cổ thụ. Màu nước vàng óng như mật ong rừng, vị Trà đậm đà, chát nhẹ nhưng hậu vị ngọt sâu.\n\nNguyên liệu: Trà Shan Tuyết cổ thụ 100% từ xã Đồng Phúc, Thái Nguyên + vỏ quýt rừng bản địa Bạch Thông + ống nứa tươi tự nhiên. Không hương liệu, không phụ gia, không chất bảo quản. Khối lượng tịnh: 500g.",
        image: "/images/tra-quyt-ong-lam-2.jpg",
        imagePosition: "left"
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    image: "/images/tea-show.jpg",
    story: [
      {
        title: "Khi trà trở thành nghệ thuật biểu diễn",
        text: "Tea Show là sự kết hợp độc đáo giữa nghệ thuật pha trà truyền thống và biểu diễn sân khấu hiện đại. Trà sư của ESG Valley không chỉ pha trà – họ kể câu chuyện về văn hóa, lịch sử và con người Việt Nam thông qua từng động tác uyển chuyển, từng âm thanh của nước rót, từng làn hương trà bay lên.",
        image: "/images/tea-show.jpg",
        imagePosition: "right"
      },
      {
        title: "Phù hợp cho mọi sự kiện",
        text: "Tea Show của ESG Valley phù hợp cho sự kiện doanh nghiệp, lễ khai trương, tiệc tư nhân, hội thảo văn hóa và các buổi gặp gỡ đặc biệt. Đội ngũ trà sư sẽ tùy chỉnh nội dung chương trình theo chủ đề và yêu cầu riêng của từng sự kiện.",
        image: "/images/tea-show.jpg",
        imagePosition: "left"
      }
    ]
  }
];

export const news: NewsArticle[] = [
  {
    id: 1,
    slug: "che-shan-tuyet-bang-phuc-lang-nghe",
    title: "Chè Shan Tuyết Bằng Phúc chính thức được công nhận Làng Nghề",
    date: "22/03/2026",
    category: "Bền Vững",
    excerpt: "Xã Đồng Phúc (Thái Nguyên) vừa chính thức đón nhận quyết định công nhận Làng nghề chè Shan tuyết Bằng Phúc – vùng nguyên liệu trọng điểm của ESGValley.",
    image: "/images/news-1.jpg",
    content: `Chúc mừng xã Đồng Phúc (Thái Nguyên) vừa chính thức đón nhận quyết định công nhận Làng nghề chè Shan tuyết Bằng Phúc.\n\nNằm trong danh sách "ngũ đại danh trà" nức tiếng của Thái Nguyên, chè Shan tuyết Bằng Phúc không chỉ là một sản phẩm nông nghiệp mà còn là di sản văn hóa với những gốc trà cổ thụ hàng trăm năm tuổi, thấm đượm tinh hoa đất trời.\n\nĐây cũng chính là vùng nguyên liệu trọng điểm mà ESGValley đang tập trung nghiên cứu và phát triển. Với định hướng phát triển bền vững (ESG), chúng tôi tin rằng việc nâng tầm giá trị trà Shan tuyết không chỉ dừng lại ở chất lượng chén trà, mà còn là câu chuyện bảo tồn hệ sinh thái và nâng cao sinh kế cho bà con địa phương.\n\nCùng ESGValley chờ đón những bước tiến mới cho đặc sản trà Shan tuyết Bằng Phúc vươn xa hơn trên bản đồ trà thế giới!`,
    sourceUrl: "https://drive.google.com/drive/folders/1PXENehKDGH7jTDn1pv78iNRkl7Ui6F7W?usp=drive_link"
  },
  {
    id: 2,
    slug: "trao-tang-sua-dong-phuc",
    title: "ESGValley trao tặng 400 thùng sữa cho các điểm trường xã Đồng Phúc, Thái Nguyên",
    date: "15/03/2026",
    category: "Cộng Đồng",
    excerpt: "ESG Valley phối hợp cùng UBND xã Đồng Phúc tổ chức chương trình thiện nguyện \"Sữa Kun cho em\", trao tặng 400 thùng sữa đến 7 điểm trường trên địa bàn.",
    image: "/images/news-2.jpg",
    content: `Vừa qua, ESG Valley đã phối hợp cùng UBND xã Đồng Phúc và các đơn vị đồng hành tổ chức chương trình thiện nguyện đầy ý nghĩa mang tên "Sữa Kun cho em". Trong khuôn khổ chương trình, đoàn đã tận tay trao tặng 400 thùng sữa đến các em nhỏ tại 7 điểm trường Mầm non và Tiểu học trên địa bàn xã Đồng Phúc, Thái Nguyên.\n\nĐây không chỉ là món quà về vật chất mà còn là sự chia sẻ, đồng hành của ESG Valley cùng cộng đồng trong việc chăm sóc sức khỏe và dinh dưỡng cho trẻ em vùng cao. Hy vọng những ly sữa ngọt ngào sẽ tiếp thêm năng lượng, giúp các em vui bước đến trường.\n\nHoạt động này càng trở nên ý nghĩa hơn khi Đồng Phúc không chỉ là điểm dừng chân thiện nguyện mà còn là vùng nguyên liệu trọng điểm đang được ESGValley tập trung nghiên cứu và phát triển dòng sản phẩm Chè Shan Tuyết.\n\nCông ty Cổ phần Chè Quân Chu chân thành cảm ơn chính quyền địa phương và các đối tác đã cùng chung tay để chuyến xe yêu thương này cập bến thành công!`,
    sourceUrl: "https://drive.google.com/drive/folders/1zkAlxroYL3uiVLM_SL18RuFQX5KdUNyy"
  },
  {
    id: 3,
    slug: "thu-tuong-tri-an-doanh-nghiep",
    title: "Thủ tướng tri ân doanh nghiệp – Tinh thần đồng hành vì sự phát triển",
    date: "27/03/2026",
    category: "Sự Kiện",
    excerpt: "Hội nghị \"Doanh nghiệp góp phần vào tăng trưởng hai con số\" ghi dấu sự gắn kết giữa Chính phủ và cộng đồng doanh nhân, với sự tham dự của Chủ tịch HĐQT Công ty Cổ phần Chè Quân Chu.",
    image: "/images/news-3.jpg",
    content: `Hội nghị "Doanh nghiệp góp phần vào tăng trưởng hai con số và Thủ tướng Chính phủ tri ân doanh nghiệp" ngày 27/3 ghi dấu sự gắn kết giữa Chính phủ và cộng đồng doanh nhân.\n\nTại sự kiện, Bà Nguyễn Thị Vinh – Chủ tịch Hội nữ doanh nhân tỉnh Thái Nguyên, Chủ tịch HĐQT Công ty Cổ phần Chè Quân Chu đã tham dự cùng nhiều lãnh đạo doanh nghiệp tiêu biểu cả nước, thể hiện quyết tâm đưa kinh tế Việt Nam vươn xa.`,
    sourceUrl: "https://baochinhphu.vn/tang-toc-khoi-nghiep-doanh-nghiep-tro-thanh-tru-cot-tang-truong-10226032711072608.htm"
  },
  {
    id: 4,
    slug: "vung-che-shan-tuyet-dong-phuc",
    title: "Vùng chè Shan Tuyết Đồng Phúc – Nơi khởi nguồn của những giá trị bền vững",
    date: "10/03/2026",
    category: "Bền Vững",
    excerpt: "Nằm ở độ cao hơn 1.200m, những gốc chè Shan tuyết cổ thụ hàng trăm năm tuổi tại xã Đồng Phúc là \"kho báu\" xanh mà ESGValley đang tập trung nghiên cứu.",
    image: "/images/news-4.jpg",
    content: `Nằm ở độ cao hơn 1.200m, những gốc chè Shan tuyết cổ thụ hàng trăm năm tuổi tại xã Đồng Phúc, Thái Nguyên chính là "kho báu" xanh mà ESGValley đang tập trung nghiên cứu.\n\nĐây không chỉ là vùng nguyên liệu sạch, thuần khiết mà còn là trọng tâm trong chiến lược phát triển nông nghiệp bền vững và bảo tồn giá trị di sản của chúng tôi.`,
    sourceUrl: "https://drive.google.com/drive/folders/1rliZFw7um-oEj85Mbu7h4depZdQFJUjh?usp=drive_link"
  },
  {
    id: 5,
    slug: "nang-niu-bup-che-di-san",
    title: "ESGValley – Nâng niu từng búp chè Di sản",
    date: "05/03/2026",
    category: "Văn Hóa",
    excerpt: "Nghệ thuật thưởng Trà không chỉ là việc giải khát – đó là sự hội tụ của kỹ năng pha chế tinh xảo và những triết lý nhân sinh sâu sắc.",
    image: "/images/news-5.jpg",
    content: `Bạn có biết tại sao thưởng Trà lại trở thành một môn nghệ thuật đặc biệt không? Bởi nó không chỉ đơn thuần là việc giải khát, mà là sự hội tụ của kỹ năng pha chế tinh xảo, thẩm mỹ Trà cụ và những triết lý nhân sinh sâu sắc.\n\nNghệ thuật thưởng Trà bắt đầu từ việc lựa chọn những nguyên liệu tốt nhất. Người xưa đúc kết quy tắc "Nhất thủy - Nhì Trà - Tam pha - Tứ ấm" để tạo ra một chén Trà hoàn hảo.\n\nNước pha Trà: Phải là nước tinh khiết, lý tưởng nhất là nước suối đầu nguồn hoặc nước sương đọng trên lá sen buổi sớm.\n\nLựa chọn loại trà: Cánh Trà khô phải săn chắc, nhỏ gọn, đều màu. Khi pha ra phải có vị chát dịu đầu lưỡi và hậu ngọt sâu.\n\nKỹ thuật pha: Người pha trà phải khéo léo kiểm soát nhiệt độ nước và thời gian hãm Trà để chiết xuất được hương vị tinh túy nhất.\n\nTrà cụ: Các bộ ấm, chén không chỉ là dụng cụ mà còn là tác phẩm điêu khắc, hội họa.\n\nTại ESGValley, chúng tôi không chỉ trân trọng những giá trị tinh túy của Trà, mà còn khát khao trở thành cầu nối đưa di sản văn hóa Trà vươn xa, gắn kết con người qua từng tách trà nồng đượm.`,
    sourceUrl: "https://drive.google.com/drive/folders/1UVMu6ClmUK7doaKmn0W3-NhQPRim68uK?usp=drive_link"
  },
  {
    id: 6,
    slug: "thoi-diem-vang-mam-che",
    title: "ESGValley & Khái niệm \"Thời điểm vàng\" cho những mầm chè mới",
    date: "22/03/2026",
    category: "Bền Vững",
    excerpt: "ESGValley lựa chọn thời điểm xuân về để xuống giống cây chè – tận dụng tối đa sự giao thoa tuyệt vời của tiết trời, thuận theo tự nhiên và tiết kiệm nguồn lực.",
    image: "/images/news-6.jpg",
    content: `ESGValley lựa chọn thời điểm này để bắt đầu xuống giống cây chè với mong muốn tận dụng tối đa sự giao thoa tuyệt vời của tiết trời xuân. Đây không chỉ là việc trồng cây, mà là sự tính toán kỹ lưỡng để:\n\nThuận theo tự nhiên: Độ ẩm và nhiệt độ lý tưởng của mùa xuân giúp cây chè bén rễ nhanh, tỷ lệ sống cao nhất.\n\nTiết kiệm nguồn lực: Giảm thiểu tối đa việc tưới tiêu nhân tạo, tận dụng nguồn nước mưa tự nhiên – đúng tinh thần canh tác bền vững.\n\nKhởi đầu vững chắc: Tạo nền tảng cho những búp chè đạt tiêu chuẩn chất lượng cao nhất trong tương lai.\n\nMỗi mầm xanh xuống đất hôm nay là một cam kết của ESGValley cho một hệ sinh thái nông nghiệp xanh và bền bỉ!`,
    sourceUrl: "https://drive.google.com/drive/folders/1UVMu6ClmUK7doaKmn0W3-NhQPRim68uK?usp=drive_link"
  },
  {
    id: 7,
    slug: "gieo-mam-tam-huyet-di-san-tra",
    title: "ESGValley: Gieo mầm tâm huyết – Nâng tầm Di sản Trà Việt",
    date: "22/03/2026",
    category: "Bền Vững",
    excerpt: "Công ty Cổ phần Chè Quân Chu hoàn tất xuống giống cho vùng chè đầu tiên – cột mốc trong lộ trình bảo tồn và nâng tầm giá trị Trà gắn liền với phát triển du lịch bền vững.",
    image: "/images/news-7.jpg",
    content: `Công ty Cổ phần Chè Quân Chu vừa hoàn tất công đoạn xuống giống cho vùng chè đầu tiên - một cột mốc quan trọng trong lộ trình bảo tồn và nâng tầm giá trị Trà gắn liền với phát triển du lịch bền vững tại xã Quân Chu, Thái Nguyên.\n\nTại sao chúng tôi chọn sự "tỉ mỉ" làm kim chỉ nam?\n\nGìn giữ nguyên bản: Bảo tồn những giá trị văn hóa Trà truyền thống trước làn sóng công nghiệp hóa.\n\nQuy trình chuẩn mực: Mỗi hố trồng, mỗi bầu cây đều được thực hiện dưới sự giám sát kỹ thuật khắt khe, hướng tới tiêu chuẩn chất lượng cao nhất.\n\nHệ sinh thái Du lịch - Trà: Biến những đồi chè thành điểm đến văn hóa, nơi mỗi nhấp trà đều kể một câu chuyện về sự chăm sóc tận tâm.\n\nESGValley tin rằng, chỉ có sự đầu tư nghiêm túc và trân trọng Di sản mới có thể đưa cây chè vươn xa, không chỉ trên bản đồ nông sản mà còn là điểm sáng trên bản đồ du lịch.`,
    sourceUrl: "https://drive.google.com/drive/folders/13Sx2XOpYqBKwhjOSDYvL71V60G9FCfzo?usp=drive_link"
  },
  {
    id: 8,
    slug: "dat-lanh-phu-xuyen",
    title: "Nơi đất lành nuôi dưỡng những búp Trà quý",
    date: "20/02/2026",
    category: "Bền Vững",
    excerpt: "Nằm dưới chân dãy núi Tam Đảo hùng vĩ, những đồi chè ESGValley tại Phú Xuyên được tưới mát bởi nguồn nước tinh khiết – từ vùng chè đến chén Trà, một hành trình mang đậm ESG.",
    image: "/images/news-8.jpg",
    content: `Nằm kiêu hãnh dưới chân dãy núi Tam Đảo hùng vĩ, những đồi chè của ESGValley tại Phú Xuyên được tưới mát quanh năm bởi nguồn nước tinh khiết và trong lành. Từng búp Trà non được nuôi lớn bởi sương sớm, bởi nắng nhẹ, bởi đất lành và còn bởi sự kiên nhẫn của người trồng.\n\nĐi giữa đồi chè Phú Xuyên mới thấm thía và càng thêm tự hào về hành trình của trà Việt, của đất và người Thái Nguyên để cho ra đời những tách Trà thơm đậm vị, mộc mạc và thanh khiết.\n\nTừ vùng chè đến chén Trà - một hành trình mang đậm ESG.`,
    sourceUrl: "https://drive.google.com/drive/folders/11XWGAnbHwB4th74Sp5k7gxjUj4c_P3S4?usp=drive_link"
  },
  {
    id: 9,
    slug: "thong-nhat-du-an-che-huu-co-quan-chu",
    title: "Thống nhất triển khai các dự án đầu tư, phát triển vùng chè hữu cơ EU tại Quân Chu",
    date: "11/03/2026",
    category: "Sự Kiện",
    excerpt: "Ngày 11/03/2026, tại UBND xã Quân Chu diễn ra buổi làm việc thống nhất kế hoạch triển khai các dự án đầu tư phát triển vùng chè hữu cơ quy mô lớn.",
    image: "/images/news-9.jpg",
    content: `Ngày 11/03/2026, tại UBND xã Quân Chu đã diễn ra buổi làm việc giữa lãnh đạo địa phương và đại diện Công ty Cổ phần Chè Quân Chu (đơn vị sở hữu thương hiệu ESGValley) nhằm thống nhất kế hoạch triển khai các dự án đầu tư, phát triển vùng chè trên địa bàn.\n\nTại buổi làm việc, đại diện Công ty đã báo cáo chi tiết định hướng đầu tư và lộ trình thực hiện các dự án trọng điểm. Lãnh đạo Đảng ủy, UBND xã Quân Chu đánh giá cao năng lực và tâm huyết của doanh nghiệp. Đồng thời, địa phương cam kết sẽ tạo mọi điều kiện thuận lợi về thủ tục và khảo sát thực địa để dự án sớm đi vào vận hành.\n\nViệc hợp tác chặt chẽ giữa chính quyền và doanh nghiệp là bước tiến quan trọng để hình thành vùng nguyên liệu chè hữu cơ quy mô lớn, nâng cao giá trị thương hiệu chè Quân Chu và cải thiện thu nhập bền vững cho người dân vùng dự án.`,
    sourceUrl: "https://drive.google.com/drive/folders/1eTTZjAXCTGxbYCfFlDSQphr-pQ08E6A8?usp=drive_link"
  },
  {
    id: 10,
    slug: "tiec-tra-di-san-dau-nam-2026",
    title: "ESGValley đồng hành cùng tiệc Trà Di sản tại \"Trà sáng cùng Doanh nhân\" đầu năm 2026",
    date: "07/03/2026",
    category: "Sự Kiện",
    excerpt: "ESGValley hân hạnh đồng hành cùng tiệc Trà Di sản tại sự kiện \"Trà sáng cùng Doanh nhân\" số đầu tiên năm 2026.",
    image: "/images/news-10.jpg",
    content: `ESGValley hân hạnh đồng hành cùng tiệc Trà Di sản tại sự kiện "Trà sáng cùng Doanh nhân" số đầu tiên năm 2026 – một buổi sáng kết nối văn hóa Trà và cộng đồng doanh nhân Thái Nguyên.`,
    sourceUrl: "https://drive.google.com/drive/folders/1tQglN4H_Jror_ke4LAXy0YXxiqeMZRCr?usp=drive_link"
  },
  {
    id: 11,
    slug: "ket-noi-di-san-doanh-nhan",
    title: "ESGValley: Kết nối Di sản – Vững bước Doanh nhân",
    date: "07/03/2026",
    category: "Sự Kiện",
    excerpt: "Tại \"Trà sáng cùng Doanh nhân\" số đầu năm 2026, ESGValley không chỉ là đơn vị đồng hành mà còn là nhà kiến tạo không gian văn hóa Trà, đưa trà Việt thành biểu tượng sang trọng trong giới doanh nhân.",
    image: "/images/news-11.jpg",
    content: `Được tổ chức số đầu tiên năm 2026, chương trình "Trà sáng cùng Doanh nhân" với chủ đề "Quy hoạch tỉnh, phát triển đô thị" đã diễn ra trong không gian văn hóa Trà đậm nét đặc trưng của vùng đất danh trà Thái Nguyên vào sáng ngày 07/03/2026 vừa qua.\n\nTại sự kiện, ESGValley không chỉ xuất hiện với tư cách đơn vị đồng hành mà còn đóng vai trò là nhà kiến tạo không gian văn hóa, đưa trà Việt từ thức uống truyền thống trở thành biểu tượng của sự sang trọng và tinh tế trong giới Doanh nhân.\n\nTrong vai trò đơn vị đăng cai tiệc Trà Di sản, ESGValley đã mang đến nghi thức Khai trà đặc biệt với Hồng Trà Shan Tuyết Quýt cổ hữu cơ - sản phẩm nghiên cứu độc quyền của ESGValley và phục vụ xuyên suốt sự kiện với sản phẩm Mạc Triều Trà - Trà xanh hữu cơ thượng hạng.\n\nSự thành công của tiệc Trà Di sản đã chứng minh vai trò tiên phong của ESGValley trong việc định vị lại giá trị Trà Việt – không chỉ là câu chuyện về hương vị mà là chiến lược nâng tầm nông sản địa phương trở thành Đại sứ văn hóa.`,
    sourceUrl: "https://drive.google.com/drive/folders/1-QHZ-NHThi8o0eO5YCd2XNJBvv5WDkQB?usp=drive_link"
  },
  {
    id: 12,
    slug: "tra-shan-tuyet-dong-phuc-may-dung",
    title: "Trà Shan Tuyết Đồng Phúc – Khi mây dừng, trà nở",
    date: "15/02/2026",
    category: "Sản Phẩm",
    excerpt: "Từ độ cao hơn 1.200m trên những đỉnh núi mù sương của xã Đồng Phúc, quần thể chè cổ thụ hàng trăm năm tuổi chắt chiu tinh túy từ đất lành và gió lạnh.",
    image: "/images/news-12.jpg",
    content: `Từ độ cao hơn 1.200m trên những đỉnh núi mù sương của xã Đồng Phúc, quần thể chè cổ thụ hàng trăm năm tuổi âm thầm bén rễ, chắt chiu tinh túy từ đất lành và gió lạnh. Những búp trà to, phủ lớp lông tơ mịn trắng như tuyết – dấu ấn của sự tinh khiết và sức sống bền bỉ qua bao thế kỷ.\n\nNhấp chén trà đầu, vị tiền chát thanh tao như hơi thở của rừng già; rồi ngay sau đó là vị ngọt hậu sâu lắng, nước trà vàng sánh hương thơm dịu đặc trưng len qua khứu giác rồi lắng lại nơi tâm trí.\n\nTại ESGValley, chúng tôi trân trọng gìn giữ những giá trị di sản ấy trong từng phẩm Trà - để bạn gửi trao không chỉ là một thức uống quý, mà là cả một câu chuyện bảo tồn nguồn gen quý giá của đại ngàn Việt Nam.`,
    sourceUrl: "https://drive.google.com/drive/folders/1FJruKa_k4lNnMjHihR_LnkfffTsGuIH9?usp=drive_link"
  },
  {
    id: 13,
    slug: "bup-tra-hai-tay-suong-som",
    title: "Mỗi búp Trà ESGValley được hái tay khi sương sớm còn vương trên lá",
    date: "10/02/2026",
    category: "Sản Phẩm",
    excerpt: "Héo nắng, lên men, sao nhẹ… từng công đoạn thủ công là cách ESGValley giữ trọn vị ngọt hậu và hương thơm tự nhiên trong mỗi tách Trà.",
    image: "/images/news-13.jpg",
    content: `Mỗi búp Trà ESGValley được hái tay khi sương sớm còn vương trên lá là khởi đầu cho hương vị đậm sâu.\n\nHéo nắng, lên men, sao nhẹ… từng công đoạn thủ công là cách ESGValley giữ trọn vị ngọt hậu và hương thơm tự nhiên trong mỗi tách Trà.\n\nĐây là cam kết của chúng tôi: mỗi sản phẩm ESGValley là kết tinh của sự tận tâm, từ đồi chè đến tay bạn.`,
    sourceUrl: "https://drive.google.com/drive/folders/1Fncl3GBNxiOTf4j1LcgxIaRNyHNqg57e?usp=drive_link"
  },
  {
    id: 14,
    slug: "chuyen-ke-vung-tra-di-san-dong-phuc",
    title: "Chuyện kể về vùng trà di sản Shan Tuyết Đồng Phúc",
    date: "05/02/2026",
    category: "Bền Vững",
    excerpt: "Kết thúc hành trình tìm hiểu tại vùng trà Shan tuyết cổ thụ Đồng Phúc – những người trẻ làm trà cổ chia sẻ câu chuyện về di sản đầy bí ẩn đang chờ được đánh thức.",
    image: "/images/news-14.jpg",
    content: `Kết thúc hành trình tìm hiểu và trải nghiệm tại vùng trà Shan tuyết cổ thụ Đồng Phúc. Chúng tôi, những người trẻ làm trà cổ, đã đi qua những vườn chè vắt vẻo lưng chừng núi, lắng nghe những câu chuyện đời, chuyện Trà từ chính hơi thở của người dân bản địa.\n\nNếu La Bằng là bản hùng ca dưới chân núi Tam Đảo, thì Đồng Phúc lại mang vẻ đẹp trầm mặc của một vùng trà Di sản đầy bí ẩn. Nơi đây, những gốc chè cổ thụ hàng trăm năm tuổi vẫn âm thầm cắm sâu rễ vào đất đá, chắt chiu tinh túy từ sương gió Thái Nguyên để tạo nên những búp trà phủ lớp lông tuyết trắng mờ ảo.\n\nTại ESGValley, chúng tôi đang hàng ngày viết tiếp những câu chuyện để lưu giữ và phát huy những giá trị văn hóa truyền thống. Để mỗi tách trà trao đi, không chỉ là thức uống, mà còn là linh hồn của núi rừng và tâm huyết của thế hệ kế thừa.`,
    sourceUrl: "https://drive.google.com/drive/folders/1SPXoDU6Q-L6Ke0p6-pHbvumIGaYi4PK8?usp=drive_link"
  },
  {
    id: 15,
    slug: "chao-nam-moi-2026",
    title: "Chào năm mới 2026 – Mở Trà đón khởi đầu mới",
    date: "01/01/2026",
    category: "Sự Kiện",
    excerpt: "ESGValley gửi lời chúc năm mới an yên, đủ đầy đến Quý khách hàng và đối tác – mong bạn vẫn có khoảng lặng để ngồi bên một chén Trà ấm, lắng nghe chính mình.",
    image: "/images/news-15.jpg",
    content: `Năm mới gõ cửa, mang theo những hy vọng mới, những dự định mới và thật nhiều điều tốt đẹp đang chờ phía trước.\n\nESGValley xin gửi tới Quý khách hàng và Quý đối tác lời chúc một năm mới an yên, đủ đầy và vững vàng trên mọi hành trình.\n\nGiữa nhịp sống hối hả, mong rằng bạn vẫn có cho mình những khoảng lặng để ngồi lại bên một chén Trà ấm, để lắng nghe chính mình và để bắt đầu năm mới thật nhẹ nhàng.\n\nMột chén Trà đầu năm không chỉ để uống mà để chúc nhau bình an, khai mở năng lượng tốt và giữ tâm thế an hòa cho cả chặng đường dài phía trước.\n\nCảm ơn bạn đã lựa chọn và đồng hành cùng ESGValley trong suốt thời gian qua.`,
    sourceUrl: "https://drive.google.com/drive/folders/16O6sPAvmDlBS5bpF_QwBsWNH3dHSYQR1?usp=drive_link"
  },
  {
    id: 16,
    slug: "tien-nam-cu-ma-dao",
    title: "Tiễn năm cũ qua, đón năm Mã Đáo",
    date: "25/01/2026",
    category: "Sản Phẩm",
    excerpt: "Mượn một chút hương Trà dịu nhẹ để mở ra chương mới cho năm tháng, ESGValley gửi đến bạn lời chúc một năm mới vạn sự hanh thông, viên mãn và thành công.",
    image: "/images/news-16.jpg",
    content: `Tiễn năm cũ qua, đón năm Mã Đáo.\n\nĐón mừng một năm mới đang gõ cửa. Mượn một chút hương Trà dịu nhẹ để mở ra chương mới cho năm tháng, ESGValley xin gửi đến bạn trọn vẹn tâm ý cùng lời chúc một năm mới vạn sự hanh thông, viên mãn và thành công.`
  },
  {
    id: 17,
    slug: "tra-thom-dau-xuan-tet",
    title: "Trà thơm đầu xuân, tình thân đong đầy",
    date: "20/01/2026",
    category: "Sản Phẩm",
    excerpt: "Tết này, ESGValley mang đến 3 set Trà chế biến thủ công từ Nghệ nhân để cả nhà cùng thưởng trà sum vầy những ngày đầu năm.",
    image: "/images/news-17.jpg",
    content: `Tết này, bạn chọn phẩm Trà nào để cùng gia đình sum vầy, nhâm nhi thưởng Trà và tâm sự những ngày đầu năm?\n\nESGValley mang đến cho bạn 3 set Trà chế biến thủ công hoàn toàn từ Nghệ nhân được thiết kế riêng theo hương vị Trà yêu thích:\n\nSet Tản Viên Trà: Trà xanh hữu cơ thượng hạng tiết Lập Xuân (360g & 120g)\n\nSet Mạc Triều Trà: Trà xanh hữu cơ thượng hạng tiết Cốc Vũ (320g & 120g)\n\nSet Bách Niên Trà: Trà xanh hữu cơ thượng hạng tiết Thu phân Hàn Lộ (320g & 120g)\n\nTết đến, đừng để bàn Trà thiếu đi một vị ngon. Nhắn ESGValley để chọn vị ưng ý nhé!`,
    sourceUrl: "https://drive.google.com/drive/folders/1BJTZ9zOluP9VxUK7xk-5JXzo0iDdyBuK?usp=drive_link"
  },
  {
    id: 18,
    slug: "diu-tra-diu-mua",
    title: "Dịu trà – dịu mùa",
    date: "15/01/2026",
    category: "Văn Hóa",
    excerpt: "Ở ESGValley, thưởng trà là cách ta bước chậm để nghe nhịp thở của đất trời. Mỗi mùa có một sắc thái riêng – chọn đúng trà, lòng người cũng nhẹ.",
    image: "/images/news-18.jpg",
    content: `Ở ESGValley, thưởng trà là cách ta bước chậm để nghe nhịp thở của đất trời. Mỗi mùa có một sắc thái riêng; chọn đúng trà, lòng người cũng nhẹ.\n\nXuân: Sớm xuân còn se – một chén Hồng trà ấm nồng cho ngày mới hanh thông. Thích sự tinh khiết, mời Bạch trà – vị nhẹ, lay thức vị giác như mầm non vừa tỉnh.\n\nHạ: Nắng rộn ràng, tìm về những thức trà thanh: Trà xanh hoặc Trà hoa. Hương trong, vị mát, giữ tinh thần tươi rói suốt ngày dài.\n\nThu: Gió hanh khô, hợp nhất là Ô long. Trà ôn hòa, không nóng không lạnh, hương dịu, hậu ngọt nhẹ nhàng.\n\nĐông: Tiết lạnh, cần ấm lòng: Hồng trà hoặc Phổ Nhĩ. Vị dầy, ủ ấm cơ thể, cho buổi chiều chậm lại bên ấm trà nghi ngút.\n\nTrà không chỉ để uống - trà là cách ta thuận mùa, thuận mình.`,
    sourceUrl: "https://drive.google.com/drive/folders/179bpxZOr2H437OlxmzgaX2KPgDLE1_G2?usp=drive_link"
  },
  {
    id: 19,
    slug: "esgvalley-sigma-school",
    title: "ESGValley | Sigma School: Lan tỏa văn hóa Trà Di sản trong không gian giáo dục",
    date: "15/02/2026",
    category: "Sự Kiện",
    excerpt: "Tại Lễ ra mắt Sigma International Bilingual School, ESGValley vinh dự đồng hành tổ chức không gian Tiệc Trà Di sản – điểm nhấn độc đáo đưa tinh hoa văn hóa Trà đến gần giáo dục hiện đại.",
    image: "/images/news-19.jpg",
    content: `Vừa qua, tại Lễ ra mắt Sigma International Bilingual School, ESGValley vinh dự đồng hành tổ chức không gian Tiệc Trà Di sản – một điểm nhấn độc đáo và mới mẻ trong văn hóa sự kiện tại Thái Nguyên.\n\nThay vì những tiệc trà nhanh thường thấy, ESGValley mang đến một trải nghiệm tĩnh tại, nơi tinh hoa văn hoá Trà được kết nối cùng hơi thở giáo dục hiện đại. Từng chén Trà thơm nồng được khơi nguồn từ những vùng chè hữu cơ đã trở thành cầu nối văn hóa, đưa Di sản dân tộc đến gần hơn với cộng đồng quốc tế và thế hệ trẻ.\n\nSự hiện diện của Trà Di sản tại Sigma School không chỉ tôn vinh giá trị bản địa mà còn khẳng định sứ mệnh của ESGValley: Đưa văn hóa Trà Việt len lỏi vào mọi không gian sống, từ những bản làng xa xôi đến môi trường giáo dục hiện đại.`,
    sourceUrl: "https://drive.google.com/drive/folders/1UjbgRSU2BA9LvHgjWr2n4NkfSUbFzKJE?usp=drive_link"
  },
  {
    id: 20,
    slug: "hanh-trinh-giu-vi-tra-xanh",
    title: "ESGValley | Hành trình giữ vị Trà xanh thuần khiết",
    date: "10/01/2026",
    category: "Sản Phẩm",
    excerpt: "Hương vị trà xanh thuần khiết không đến từ sự ngẫu nhiên – đó là hành trình bền bỉ từ vùng trồng lý tưởng, khí hậu và nguồn nước, đến lá trà tuyển chọn thủ công.",
    image: "/images/news-20.jpg",
    content: `Hương vị trà xanh thuần khiết không đến từ sự ngẫu nhiên. Đó là một hành trình bền bỉ, nơi ESGValley trân trọng từng món quà mà thiên nhiên ban tặng:\n\nVùng trồng lý tưởng: Từ những đồi chè xanh mướt tại vùng nguyên liệu hữu cơ, nơi thổ nhưỡng giàu dưỡng chất nuôi lớn từng mầm xanh.\n\nKhí hậu và nguồn nước: Sự kết hợp hoàn hảo giữa khí hậu mát lành và những giọt sương sớm tinh khôi tạo nên Trà trong trẻo, không vẩn đục.\n\nLá trà tuyển chọn: Chỉ những búp chè tươi ngon nhất mới được thu hái thủ công để giữ trọn vẹn lớp lông tơ và dưỡng chất quý giá.\n\nMỗi sản phẩm ESGValley là một lời cam kết về chất lượng: sạch từ nguồn gốc, chuẩn từ quy trình và trọn vẹn ở hậu vị.`,
    sourceUrl: "https://drive.google.com/drive/folders/1CGXqgo0e3EZXM8wX_ZOZfxeA8S-CMAbY?usp=drive_link"
  },
  {
    id: 21,
    slug: "hoi-nghi-lien-ket-vung",
    title: "ESGValley | Hội nghị liên kết vùng: Góp hương Trà vào câu chuyện kết nối",
    date: "20/02/2026",
    category: "Sự Kiện",
    excerpt: "Tại Hội nghị liên kết 3 tỉnh Thái Nguyên – Bắc Ninh – Phú Thọ, ESGValley vinh dự là đơn vị đồng hành phục vụ không gian tiệc Trà Di sản cho các đại biểu.",
    image: "/images/news-21.jpg",
    content: `Tại Hội nghị liên kết 3 tỉnh Thái Nguyên – Bắc Ninh – Phú Thọ vừa diễn ra tại phường Vạn Xuân, ESGValley vinh dự là đơn vị đồng hành, phục vụ không gian tiệc Trà Di sản cho các đại biểu.\n\nGiữa những phiên thảo luận quan trọng, một tách Trà nóng hổi với hương thơm thanh tao không chỉ giúp làm dịu tinh thần mà còn là cầu nối gắn kết tình thân giữa các tỉnh bạn. Chúng tôi tin rằng, sự chỉn chu trong từng tách Trà chính là lời chào nồng hậu nhất, minh chứng cho tầm vóc của "Đệ nhất danh trà" trong kỷ nguyên mới.\n\nESGValley tự hào được góp phần quảng bá thương hiệu trà Thái Nguyên vươn xa, khẳng định giá trị Di sản trong các sự kiện ngoại giao và kinh tế trọng điểm.`,
    sourceUrl: "https://drive.google.com/drive/folders/1jZ8tt2jm4K4lFZOqLWy70kGpZbvLPrmD?usp=drive_link"
  },
  {
    id: 22,
    slug: "la-bang-rung-che-to",
    title: "Chuyện kể | La Bằng – Hành trình về với \"Rừng Chè Tổ\" trên mây",
    date: "15/11/2025",
    category: "Bền Vững",
    excerpt: "10 tiếng đồng hồ. 10km rừng dốc ngược. 1.350 mét độ cao – hành trình của đoàn công tác ESGValley tìm về cội nguồn Di sản chè cổ thụ La Bằng, Thái Nguyên.",
    image: "/images/news-22.jpg",
    content: `10 tiếng đồng hồ. 10km rừng dốc ngược. 1.350 mét độ cao. Những con số ấy không chỉ đo đạc quãng đường, mà đo độ bền bỉ của những trái tim khao khát tìm về cội nguồn của Di sản.\n\nĐoàn công tác của chúng tôi đã bước đi từ chân suối Kẹm, vượt qua những con đường trở đầy thách thức: vách đá cheo leo, thác nước ầm ào, đất rừng ẩm ướt trơn trượt.\n\nNhưng khi đứng trước quần thể chè Tổ tại xã La Bằng, mọi mệt mỏi dường như tan biến. Trên dãy Tam Đảo hùng vĩ, giữa tầng sương mù bao phủ, những cây chè cổ thụ hàng trăm năm tuổi đứng đó như những vị thần gác rừng. Thân cây xù xì, rêu phong phủ đầy, cành lá vươn cao ngạo nghễ.\n\nĐể giữ được giấc mơ xanh này, ESGValley đang thiết lập các cơ chế giám sát và nghiên cứu khoa học chuyên sâu, đảm bảo nguồn gen chè Tổ không bao giờ bị mất đi. Giữ được rừng chè là giữ được văn hóa, giữ được sinh thái và giữ được một biểu tượng đặc biệt ý nghĩa đối với ngành chè Thái Nguyên.`,
    sourceUrl: "https://drive.google.com/drive/folders/1R8-VwtjGqik-4Dh2ayFVkrjds3Fz7uee?usp=drive_link"
  },
  {
    id: 23,
    slug: "vi-sao-khong-rot-day-chen",
    title: "Vì sao người uống Trà thường không rót đầy chén?",
    date: "20/10/2025",
    category: "Văn Hóa",
    excerpt: "Thứ nhất là để giữ hương Trà. Thứ hai là để dễ thưởng Trà hơn. Và còn một điều khá hay nữa trong Văn hóa Trà mà ít người biết...",
    image: "/images/news-23.jpg",
    content: `Nhiều người lần đầu ngồi uống Trà thường hỏi một câu khá thú vị: "Vì sao chén Trà lúc nào cũng chỉ rót lưng lưng, không rót đầy?"\n\nThật ra đây là một thói quen rất lâu trong Văn hoá uống Trà.\n\nThứ nhất là để giữ hương Trà. Khi rót vừa chén, phần hương sẽ còn khoảng trống để lan lên. Cầm chén Trà lên, mình sẽ cảm nhận được mùi thơm trước rồi mới đến vị trà. Nếu rót đầy quá thì hương sẽ khó thoát ra.\n\nThứ hai là để dễ thưởng Trà hơn. Chén Trà thường nhỏ và nước khá nóng, rót vừa phải giúp mình cầm chén thoải mái, nhấp từng ngụm nhỏ để cảm nhận vị Trà rõ hơn.\n\nVà một điều nữa khá hay: trong Văn hoá Trà, chén Trà không cần đầy nhưng câu chuyện thì luôn đầy. Người ta ngồi lại với nhau vì chén Trà, nhưng thứ ở lại lâu hơn thường là những cuộc trò chuyện.\n\nNếu có dịp, bạn ghé ESGValley ngồi uống một chén Trà nhé. Có khi chỉ cần một chén Trà nhỏ thôi là đủ để bắt đầu một câu chuyện hay.`,
    sourceUrl: "https://drive.google.com/drive/folders/1kDi01ZpcXVW4hBwoCWsAO_nUHvPleyFA?usp=drive_link"
  },
  {
    id: 24,
    slug: "cong-tu-dong-kien-quoc-vipel-2025",
    title: "Công – Tư đồng kiến quốc: Nâng tầm Di sản Trà Việt tại ViPEL 2025",
    date: "10/10/2025",
    category: "Sự Kiện",
    excerpt: "Tại ViPEL 2025, UBND tỉnh Thái Nguyên trao văn kiện hợp tác thí điểm mô hình Công - Tư đồng kiến quốc cho dự án phát triển nông nghiệp hữu cơ và bảo tồn di sản chè của Công ty Cổ phần Chè Quân Chu.",
    image: "/images/news-24.jpg",
    content: `Một chương mới cho ngành trà Thái Nguyên đã chính thức mở ra trong khuôn khổ Chương trình Toàn cảnh Kinh tế tư nhân Việt Nam (ViPEL 2025) diễn ra vào ngày 10/10/2025.\n\nUBND tỉnh Thái Nguyên đã chính thức trao văn kiện hợp tác thí điểm mô hình "Công - Tư đồng kiến quốc" cho dự án: "Phát triển nông nghiệp hữu cơ, bảo tồn di sản và du lịch văn hóa gắn với cây chè của tỉnh Thái Nguyên" thuộc Công ty Cổ phần Chè Quân Chu – đơn vị đầu tiên trong khuôn khổ ViPEL 2025.\n\nDự án ESGValley không chỉ dừng lại ở phát triển kinh tế mà còn là hành trình bảo tồn những "di sản sống" ngàn năm. Với sự dẫn dắt của TS. Nguyễn Thị Vinh – Chủ tịch HĐQT Công ty Cổ phần Chè Quân Chu, ESG Valley cam kết:\n\nPhát triển nông nghiệp hữu cơ và chuyển đổi số toàn diện, tích hợp công nghệ IoT và AI, minh bạch hóa hành trình của búp trà từ đồi xanh đến bàn trà quốc tế.\n\nXây dựng mô hình kinh tế nhân văn, hỗ trợ 200.000 nông hộ và HTX do phụ nữ làm chủ chuyển đổi sang mô hình doanh nghiệp bền vững ESG.\n\nESG Valley và Đề án ViPEL 2025 chính là minh chứng cho một Việt Nam tự hào, nơi trí tuệ và lòng nhân ái hòa quyện để đưa giá trị xanh – thông minh – giàu bản sắc vươn tầm thế giới.`,
    sourceUrl: "https://drive.google.com/drive/folders/1kDmxGxYmcjv3WLNUMV80zvhEvgiqOjJY?usp=drive_link"
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
