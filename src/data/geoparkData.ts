/**
 * Dữ liệu chính thức về Công viên địa chất toàn cầu UNESCO Lạng Sơn (Lang Son UNESCO Global Geopark)
 * Nguồn khai thác: https://langsongeopark.com.vn/ và các tư liệu công bố của Ban Quản lý CVĐC Lạng Sơn.
 * Cam kết: Thông tin chuẩn xác, không bịa đặt, không xuyên tạc.
 */

export interface GeoparkSite {
  id: number;
  siteCode: string;
  name: string;
  nameEn: string;
  routeId: 1 | 2 | 3 | 4;
  category: 'geology' | 'culture_spiritual' | 'history_archeology' | 'biodiversity_nature' | 'craft_community';
  district: string;
  coordinates: { lat: number; lng: number };
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  geologicalAge?: string;
  unescoSignificance: string;
  imageUrl?: string;
}

export interface GeoparkRoute {
  id: 1 | 2 | 3 | 4;
  name: string;
  nameEn: string;
  themeColor: string;
  colorHex: string;
  spiritualMeaning: string;
  lengthKm: number;
  mainDistricts: string[];
  summary: string;
  keyFeatures: string[];
}

export const OFFICIAL_OVERVIEW = {
  nameVi: 'Công viên địa chất toàn cầu UNESCO Lạng Sơn',
  nameEn: 'Lang Son UNESCO Global Geopark',
  themeSlogan: 'Dòng chảy sự sống nơi miền đất thiêng',
  themeSloganEn: 'The Flow of Life in the Sacred Land',
  areaKm2: '4.842,58',
  percentageOfProvinceArea: '58%',
  population: 'khoảng 627.500 người',
  percentageOfProvincePop: '78%',
  totalRoutes: 4,
  totalSites: 38,
  ethnicGroupsCount: 7,
  ethnicGroups: ['Tày', 'Nùng', 'Kinh', 'Dao', 'Hoa', 'Sán Chay', 'Mông'],
  administrativeUnits: [
    'Thành phố Lạng Sơn',
    'Huyện Bắc Sơn',
    'Huyện Chi Lăng',
    'Huyện Hữu Lũng',
    'Huyện Lộc Bình',
    'Huyện Văn Quan',
    'Một phần huyện Cao Lộc',
    'Một phần huyện Bình Gia'
  ],
  unescoVotingDate: '08/09/2024 (Tại Cao Bằng, khuôn khổ Hội nghị Quốc tế APGN-8)',
  unescoOfficialAwardDate: 'Tháng 4/2025',
  vision: 'Bảo tồn nguyên vẹn và khai thác, sử dụng hợp lý, bền vững, tổng thể các giá trị di sản địa chất, địa mạo, cảnh quan thiên nhiên, bản sắc văn hóa (vật thể, phi vật thể), đa dạng sinh học trong Mạng lưới Công viên Địa chất Toàn cầu UNESCO. Nghiêm cấm và xử lý nghiêm mọi hành vi xâm hại di sản.',
  mission: 'Bảo tồn các di sản địa chất và di sản văn hóa, trở thành công cụ phát triển bền vững vì lợi ích hiện tại và tương lai; đồng thời đẩy mạnh công tác nghiên cứu khoa học và giáo dục nâng cao nhận thức cộng đồng.',
  contact: {
    agency: 'Ban Quản lý Công viên địa chất Lạng Sơn',
    address: 'Số 450 đường Bà Triệu, phường Đông Kinh, thành phố Lạng Sơn, tỉnh Lạng Sơn (cùng cơ sở đường Nguyễn Chí Thanh)',
    phone: '0358 479 368',
    email: 'langsongeopark@gmail.com',
    website: 'https://langsongeopark.com.vn/'
  }
};

export const GEOPARK_ROUTES: GeoparkRoute[] = [
  {
    id: 1,
    name: 'Khám phá Thế giới Thượng ngàn',
    nameEn: 'Explore the Realm of Forests and Mountains',
    themeColor: 'Xanh lá cây (Màu áo Mẫu Thượng Ngàn)',
    colorHex: '#16a34a',
    spiritualMeaning: 'Gắn liền với sắc xanh của Thánh Mẫu Đệ Nhị Thượng Ngàn, mang linh khí của đại ngàn rừng sâu, suối ngàn và sự chở che sinh dưỡng của thiên nhiên.',
    lengthKm: 120,
    mainDistricts: ['Huyện Hữu Lũng', 'Huyện Chi Lăng'],
    summary: 'Hành trình khởi nguồn từ Đền Mẫu Bắc Lệ linh thiêng - trung tâm thực hành Tín ngưỡng thờ Mẫu, băng qua các thung lũng karst kỳ ảo như thảo nguyên Đồng Lâm, khám phá di chỉ bãi đá san hô cổ kỷ Permi đại dương 300 triệu năm trước và Ải Chi Lăng hào hùng.',
    keyFeatures: [
      'Đền Công Đồng Bắc Lệ (Trung tâm thờ Mẫu Thượng Ngàn & Chầu Bé)',
      'Thung lũng ngập nước Đồng Lâm (Kỳ quan sinh thái karst độc nhất vô nhị)',
      'Bãi đá hóa thạch san hô đại dương cổ Yên Thịnh (300 triệu năm)',
      'Khu bảo tồn thiên nhiên và Làng du lịch cộng đồng Hữu Liên',
      'Khu di tích lịch sử Quốc gia đặc biệt Ải Chi Lăng hiểm trở'
    ]
  },
  {
    id: 2,
    name: 'Hành trình về miền Thiên giới',
    nameEn: 'Journey to the Heavenly Realm',
    themeColor: 'Đỏ (Màu áo Thánh Mẫu Liễu Hạnh - Mẫu Thượng Thiên)',
    colorHex: '#dc2626',
    spiritualMeaning: 'Gắn với sắc đỏ rực rỡ của Thánh Mẫu Đệ Nhất Thượng Thiên (Liễu Hạnh Công Chúa), tượng trưng cho ánh sáng thiên giới, sự che chở của bầu trời và khí phách kiên cường giữ cõi biên ải.',
    lengthKm: 130,
    mainDistricts: ['Thành phố Lạng Sơn', 'Huyện Cao Lộc', 'Huyện Văn Quan', 'Huyện Bình Gia', 'Huyện Bắc Sơn'],
    summary: 'Từ Cửa khẩu Quốc tế Hữu Nghị biên cương, qua Đền Mẫu Đồng Đăng, đèo Lùng Pa hiểm trở với hiện tượng địa chất "Bãi đá nhảy" độc đáo, đến miền khảo cổ tiền sử Thẩm Khuyên - Thẩm Hai và cái nôi Khởi nghĩa Bắc Sơn.',
    keyFeatures: [
      'Cửa khẩu Quốc tế Hữu Nghị & Đền Mẫu Đồng Đăng biên cương',
      'Bãi đá nhảy Đèo Lùng Pa (Hiện tượng kiến tạo Rock Chaos hiếm có)',
      'Rừng Hồi và làng nghề chưng cất Tinh dầu Hồi Văn Quan',
      'Hang Thẩm Khuyên - Thẩm Hai (Di chỉ răng người vượn cổ đại hàng trăm nghìn năm)',
      'Đỉnh Nà Lay chiêm ngưỡng thung lũng karst Bắc Sơn lúa vàng',
      'Khu di tích Quốc gia đặc biệt Khởi nghĩa Bắc Sơn (Bảo tàng & Rừng Khuổi Nọi)'
    ]
  },
  {
    id: 3,
    name: 'Cuộc sống dân dã nơi trần thế',
    nameEn: 'Rustic Life in the Earthly Realm',
    themeColor: 'Vàng đất (Màu áo Thánh Mẫu Địa)',
    colorHex: '#ca8a04',
    spiritualMeaning: 'Gắn liền với sắc vàng của Mẫu Địa Phủ, tượng trưng cho đất mẹ trù phú, sự bình an no ấm của người nông dân và hơi ấm cộng đồng các bản làng vùng cao.',
    lengthKm: 95,
    mainDistricts: ['Huyện Bắc Sơn', 'Huyện Chi Lăng', 'Huyện Văn Quan'],
    summary: 'Lắng nghe nhịp sống mộc mạc của đồng bào Tày, Nùng, Dao qua kỹ thuật lợp ngói âm dương hàng trăm năm, nghề làm cao khô Vạn Linh nức tiếng, những cánh đồng lúa thung lũng karst trù phú và nếp nhà sàn truyền thống.',
    keyFeatures: [
      'Làng nghề sản xuất ngói âm dương thủ công Quỳnh Sơn',
      'Không gian làng văn hóa du lịch cộng đồng người Tày',
      'Làng nghề chế biến Cao khô Vạn Linh đặc sản Chi Lăng',
      'Vườn quýt vàng Bắc Sơn mọng nước thung lũng karst',
      'Vùng chuyên canh Na vách đá Chi Lăng vang danh',
      'Nhà thờ họ Hà Thổ và các thiết chế văn hóa bản địa mộc mạc'
    ]
  },
  {
    id: 4,
    name: 'Đường đến Thủy cung',
    nameEn: 'The Path to the Water Palace',
    themeColor: 'Xanh lam / Trắng (Màu áo Mẫu Thoải)',
    colorHex: '#0284c7',
    spiritualMeaning: 'Gắn liền với sắc trắng tinh khiết và xanh lam của Mẫu Đệ Tam Thoải Phủ, kết nối với dấu tích đại dương nguyên thủy, sông suối ngầm và hệ sinh thái đầm hồ cổ xưa.',
    lengthKm: 110,
    mainDistricts: ['Huyện Lộc Bình', 'Huyện Cao Lộc', 'Thành phố Lạng Sơn'],
    summary: 'Khám phá bí ẩn của bồn trũng than nâu Na Dương - "Cửa sổ nhìn vào thế giới đầm hồ cổ đại Eocene Đông Nam Á" với vô số hóa thạch quý giá, chiêm ngưỡng đỉnh mù sương Mẫu Sơn, Thác Bản Khiếng và hệ thống hang động Tam Thanh - Nhị Thanh.',
    keyFeatures: [
      'Thế giới đầm hồ Na Dương (Bồn trũng Eocene - hóa thạch cá sấu cổ, thú móng guốc, thực vật)',
      'Khu du lịch Quốc gia Mẫu Sơn (Đỉnh núi hơn 1.500m quanh năm mây phủ, văn hóa Dao đỏ)',
      'Thác Bản Khiếng mát lành bắt nguồn từ dãy Mẫu Sơn',
      'Quần thể danh thắng Động Nhị Thanh - Chùa Tam Thanh xứ Lạng',
      'Đền Mẫu Thoải bên dòng sông Kỳ Cùng độc đáo chảy ngược về hướng Bắc',
      'Di chỉ khảo cổ học Kim khí Mai Pha'
    ]
  }
];

export const GEOPARK_SITES: GeoparkSite[] = [
  // --- TUYẾN 1: KHÁM PHÁ THẾ GIỚI THƯỢNG NGÀN ---
  {
    id: 1,
    siteCode: 'Site 01',
    name: 'Đền Công Đồng Bắc Lệ',
    nameEn: 'Bac Le Communal Temple',
    routeId: 1,
    category: 'culture_spiritual',
    district: 'Huyện Hữu Lũng',
    coordinates: { lat: 21.5794, lng: 106.3312 },
    shortDesc: 'Trung tâm tín ngưỡng thờ Mẫu Thượng Ngàn và Chầu Bé Bắc Lệ linh thiêng bậc nhất xứ Lạng.',
    fullDesc: 'Tọa lạc trên ngọn đồi rợp bóng cây cổ thụ tại xã Tân Thành, huyện Hữu Lũng, Đền Bắc Lệ là ngôi đền nổi tiếng nhất gắn với Tín ngưỡng thờ Mẫu Tam phủ của người Việt - Di sản văn hóa phi vật thể của nhân loại. Nơi đây là điểm xuất phát mang tính tâm linh cốt lõi của Tuyến 1.',
    highlights: ['Điểm khởi đầu Tuyến số 1', 'Thờ Bà Chúa Thượng Ngàn & Chầu Bé Bắc Lệ', 'Lễ hội truyền thống tháng 9 Âm lịch', 'Không gian thực hành nghi lễ Chầu văn hầu đồng'],
    unescoSignificance: 'Di sản văn hóa phi vật thể thực hành Tín ngưỡng thờ Mẫu Tam phủ của người Việt.'
  },
  {
    id: 2,
    siteCode: 'Site 02',
    name: 'Đại dương cổ yên bình (Bãi đá hóa thạch san hô Yên Thịnh)',
    nameEn: 'The Peaceful Ancient Ocean',
    routeId: 1,
    category: 'geology',
    district: 'Huyện Hữu Lũng',
    coordinates: { lat: 21.6145, lng: 106.3768 },
    shortDesc: 'Dấu tích đại dương cổ 300 triệu năm với các mẫu hóa thạch san hô rugosa tầng Bắc Sơn.',
    fullDesc: 'Tại xã Yên Thịnh, huyện Hữu Lũng, các nhà địa chất đã phát hiện tầng đá vôi chứa nhiều hóa thạch san hô vách đáy (Rugosa coral) và trùng lỗ (Foraminifera) thuộc Hệ tầng Bắc Sơn kỷ Than đá - Pecmi (Carboniferous - Permian). Đây là bằng chứng sống động chứng minh toàn bộ vùng đất Lạng Sơn từng là đáy biển nhiệt đới ấm áp cách đây 300 triệu năm.',
    highlights: ['Hóa thạch san hô Rugosa nguyên vẹn', 'Bằng chứng đại dương kỷ Permi ~300 triệu năm', 'Mô phỏng sinh vật biển cổ đầu tiên', 'Cảnh quan đá vôi karst nhiệt đới'],
    geologicalAge: 'Kỷ Carbon - Permi (~300 triệu năm trước)',
    unescoSignificance: 'Di sản địa chất tầm vóc quốc tế về cổ sinh địa tầng và tiến hóa biển cổ đại.'
  },
  {
    id: 3,
    siteCode: 'Site 03',
    name: 'Làng du lịch cộng đồng & Homestay Sơn Thủy Hữu Liên',
    nameEn: 'Huu Lien Community Tourism & Son Thuy Village',
    routeId: 1,
    category: 'craft_community',
    district: 'Huyện Hữu Lũng',
    coordinates: { lat: 21.6421, lng: 106.3912 },
    shortDesc: 'Không gian du lịch sinh thái cộng đồng của người Tày, Nùng bên chân rừng đá vôi Hữu Liên.',
    fullDesc: 'Nằm ẩn mình giữa thung lũng đá vôi bình yên, Hữu Liên nổi bật với những mái nhà sàn truyền thống của người Tày, người Dao. Du khách được trải nghiệm ẩm thực bản địa (rau dớn, ốc núi, thịt lợn quay, bánh chưng đen) và tham gia các hoạt động sinh hoạt dân gian.',
    highlights: ['Nhà sàn gỗ truyền thống', 'Ẩm thực thảo mộc bản địa', 'Văn hóa người Tày & người Dao', 'Dịch vụ lưu trú homestay thân thiện môi trường'],
    unescoSignificance: 'Mô hình du lịch sinh thái cộng đồng dựa trên di sản (Geopark Partner) bảo tồn văn hóa bản địa.'
  },
  {
    id: 4,
    siteCode: 'Site 04',
    name: 'Thung lũng thần tiên Đồng Lâm',
    nameEn: 'Dong Lam Fairy Valley',
    routeId: 1,
    category: 'biodiversity_nature',
    district: 'Huyện Hữu Lũng',
    coordinates: { lat: 21.6538, lng: 106.3985 },
    shortDesc: 'Thảo nguyên karst tuyệt mỹ với thảo nguyên cỏ xanh, dòng sông ngầm và hiện tượng biến đổi theo mùa.',
    fullDesc: 'Thung lũng rộng hơn 100 ha được bao bọc bởi những vách núi đá vôi hùng vĩ. Vào mùa khô, Đồng Lâm là một thảo nguyên cỏ xanh mướt ngút tầm mắt với dòng suối hiền hòa; vào mùa mưa, nước từ các hang ngầm karst dâng lên biến thung lũng thành một hồ nước ngọc bích phẳng lặng lý tưởng cho chèo thuyền kayak.',
    highlights: ['Cảnh quan thảo nguyên đá vôi độc đáo', 'Hồ nước karst ngập theo chu kỳ mùa', 'Hệ thống sông suối ngầm kỳ bí', 'Điểm cắm trại và check-in sinh thái nổi tiếng'],
    geologicalAge: 'Địa hình Karst kỷ Đệ Tứ (Quaternary)',
    unescoSignificance: 'Kỳ quan địa mạo thung lũng Karst (polje) đất ngập nước nội địa quý hiếm.'
  },
  {
    id: 5,
    siteCode: 'Site 05',
    name: 'Chùa Sơn Lộc',
    nameEn: 'Son Loc Pagoda',
    routeId: 1,
    category: 'culture_spiritual',
    district: 'Huyện Hữu Lũng',
    coordinates: { lat: 21.5832, lng: 106.3451 },
    shortDesc: 'Ngôi chùa cổ linh thiêng nằm tĩnh mịch giữa không gian sơn thủy hữu tình.',
    fullDesc: 'Chùa Sơn Lộc (còn gọi là Sơn Lộc Phựt) là chốn tu tập tâm linh lâu đời của đồng bào địa phương, kết hợp hài hòa giữa kiến trúc Phật giáo truyền thống và cảnh quan thiên nhiên đồi núi Hữu Lũng.',
    highlights: ['Kiến trúc chùa làng cổ truyền', 'Không gian thanh tịnh giữa núi rừng', 'Lễ hội cầu an đầu xuân'],
    unescoSignificance: 'Di sản văn hóa tâm linh tín ngưỡng dân gian cộng đồng các dân tộc vùng Geopark.'
  },
  {
    id: 6,
    siteCode: 'Site 06',
    name: 'Khu di tích lịch sử Quốc gia đặc biệt Ải Chi Lăng',
    nameEn: 'Chi Lang Pass Special National Historical Relic',
    routeId: 1,
    category: 'history_archeology',
    district: 'Huyện Chi Lăng',
    coordinates: { lat: 21.6491, lng: 106.5367 },
    shortDesc: 'Cửa ải huyền thoại nghìn năm - nơi chôn vùi đạo quân xâm lược phương Bắc năm 1427.',
    fullDesc: 'Ải Chi Lăng là một thung lũng hẹp hình chữ nhật dài khoảng 20km nằm kẹp giữa dãy núi đá vôi Cai Kinh và núi Thái Hòa, với sông Thương chảy dọc suốt chiều dài. Đây là địa thế hiểm trở "nhất phu đương quan, vạn phu mạc khai", nơi tướng giặc Liễu Thăng bị nghĩa quân Lam Sơn chém đầu tại núi Mã Yên năm 1427, làm nên chiến thắng Chi Lăng vang dội sử sách.',
    highlights: ['Di tích Quốc gia đặc biệt', 'Chiến công chém Liễu Thăng (1427)', 'Núi Mã Yên & Núi Mặt Quỷ', 'Lũy Ải Chi Lăng & Nhà trưng bày chiến thắng Chi Lăng'],
    unescoSignificance: 'Di sản lịch sử - quân sự tầm cỡ quốc gia gắn với địa mạo quân sự hiểm trở độc nhất vô nhị.'
  },
  {
    id: 7,
    siteCode: 'Site 07',
    name: 'Khu bảo tồn thiên nhiên Hữu Liên',
    nameEn: 'Huu Lien Nature Reserve',
    routeId: 1,
    category: 'biodiversity_nature',
    district: 'Huyện Hữu Lũng',
    coordinates: { lat: 21.6625, lng: 106.3821 },
    shortDesc: 'Khu rừng đặc dụng nguyên sinh trên núi đá vôi với hệ động thực vật đặc hữu quý hiếm.',
    fullDesc: 'Với diện tích hơn 8.000 ha, Hữu Liên lưu giữ rừng nguyên sinh nhiệt đới trên núi đá vôi, là nơi cư trú của các loài động vật quý hiếm như Khỉ mặt đỏ, Vượn đen má trắng, Voọc đen má trắng cùng các loài gỗ quý ngàn năm như Nghiến, Đinh, Lim, Hoàng đàn.',
    highlights: ['Rừng nguyên sinh trên đá vôi', 'Quần thể thực vật Hoàng đàn Hữu Lũng', 'Loài vượn và linh trưởng Sách Đỏ', 'Vùng đệm sinh quyển quan trọng'],
    unescoSignificance: 'Di sản đa dạng sinh học rừng trên núi đá vôi đặc hữu của Đông Bắc Việt Nam.'
  },
  {
    id: 8,
    siteCode: 'Site 08',
    name: 'Dấu tích phun trào magma núi lửa cổ Hữu Lũng - Chi Lăng',
    nameEn: 'Ancient Continental Volcanic Eruptions',
    routeId: 1,
    category: 'geology',
    district: 'Huyện Chi Lăng',
    coordinates: { lat: 21.6212, lng: 106.4891 },
    shortDesc: 'Vết tích nham thạch núi lửa phun trào lục địa cổ xưa phản ánh vận động kiến tạo dữ dội.',
    fullDesc: 'Các vỉa đá bazan và rhyolite cổ ghi lại thời kỳ vỏ lục địa bị xé rách do hoạt động nhiệt nội sinh, tạo nên những đợt phun trào núi lửa magma lục địa trước khi các hoạt động trầm tích đá vôi diễn ra.',
    highlights: ['Đá phun trào macma lục địa cổ', 'Bằng chứng vận động vỏ Trái Đất', 'Điểm khảo sát địa chất giáo dục'],
    geologicalAge: 'Khoảng 250 - 280 triệu năm trước',
    unescoSignificance: 'Di sản địa chất nội sinh về lịch sử đứt gãy và phun trào manti cổ.'
  },

  // --- TUYẾN 2: HÀNH TRÌNH VỀ MIỀN THIÊN GIỚI ---
  {
    id: 9,
    siteCode: 'Site 09',
    name: 'Cửa khẩu Quốc tế Hữu Nghị',
    nameEn: 'Huu Nghi International Border Gate',
    routeId: 2,
    category: 'history_archeology',
    district: 'Huyện Cao Lộc',
    coordinates: { lat: 21.9806, lng: 106.7119 },
    shortDesc: 'Cột mốc biên cương thiêng liêng và cửa ngõ giao thương đường bộ hàng đầu nối Việt Nam - Trung Quốc.',
    fullDesc: 'Nằm tại thị trấn Đồng Đăng, Cửa khẩu Quốc tế Hữu Nghị là điểm đầu của tuyến Quốc lộ 1A xuyên Việt nối liền với hệ thống đường bộ cao tốc quốc tế tới Trung Quốc và thế giới. Nơi đây có cột mốc chủ quyền 1116 và tòa nhà cửa khẩu uy nghi.',
    highlights: ['Điểm khởi đầu Quốc lộ 1A', 'Cột mốc chủ quyền thiêng liêng', 'Cửa ngõ kinh tế Hành lang Nam Ninh - Hà Nội', 'Cảnh quan biên giới hùng vĩ'],
    unescoSignificance: 'Giao thoa địa chính trị và biểu tượng hữu nghị hòa bình quốc tế.'
  },
  {
    id: 10,
    siteCode: 'Site 10',
    name: 'Đền Mẫu Đồng Đăng',
    nameEn: 'Dong Dang Mother Goddess Temple',
    routeId: 2,
    category: 'culture_spiritual',
    district: 'Huyện Cao Lộc',
    coordinates: { lat: 21.9427, lng: 106.6974 },
    shortDesc: 'Ngôi đền cổ thờ Thánh Mẫu Liễu Hạnh và Phật, trung tâm tâm linh biên giới nổi danh.',
    fullDesc: 'Đền Mẫu Đồng Đăng (còn gọi là Đồng Đăng linh từ) nằm trên ngọn đồi giữa lòng thị trấn Đồng Đăng. Đền có kiến trúc bề thế, thờ Mẫu Đệ Nhất Thượng Thiên (Liễu Hạnh) và Đức Phật Thích Ca theo tín ngưỡng "Tiền Phật, Hậu Thánh", là nơi hội tụ lòng thành của hàng vạn du khách mỗi độ xuân về.',
    highlights: ['Trung tâm thờ Thánh Mẫu Thượng Thiên', 'Tín ngưỡng Tiền Phật Hậu Thánh', 'Lễ hội Đền Mẫu mùng 10 tháng Giêng', 'Kiến trúc đền đài uy nghiêm'],
    unescoSignificance: 'Không gian thực hành Tín ngưỡng thờ Mẫu Tam phủ tại dải đất biên cương phía Bắc.'
  },
  {
    id: 11,
    siteCode: 'Site 11',
    name: 'Cầu Khánh Khê',
    nameEn: 'Khanh Khe Bridge',
    routeId: 2,
    category: 'history_archeology',
    district: 'Huyện Văn Quan / Huyện Cao Lộc',
    coordinates: { lat: 21.8741, lng: 106.6215 },
    shortDesc: 'Cây cầu lịch sử bắc qua sông Kỳ Cùng, nhân chứng hào hùng của cuộc chiến tranh bảo vệ biên giới.',
    fullDesc: 'Cầu Khánh Khê nối liền hai huyện Văn Quan và Cao Lộc qua dòng sông Kỳ Cùng. Trong lịch sử chiến tranh bảo vệ biên giới phía Bắc năm 1979, nơi đây từng là điểm chốt chặn quyết liệt của quân và dân ta nhằm đập tan mũi tiến công của quân địch.',
    highlights: ['Di tích lịch sử chiến tranh biên giới 1979', 'Bắc qua dòng sông Kỳ Cùng chảy ngược', 'Vị trí huyết mạch phòng thủ'],
    unescoSignificance: 'Di sản lịch sử giáo dục lòng yêu nước và ý chí bất khuất của dân tộc.'
  },
  {
    id: 12,
    siteCode: 'Site 12',
    name: 'Bãi đá nhảy Đèo Lùng Pa (Rock Chaos)',
    nameEn: 'Lung Pa Pass Rock Chaos',
    routeId: 2,
    category: 'geology',
    district: 'Huyện Văn Quan',
    coordinates: { lat: 21.8433, lng: 106.5742 },
    shortDesc: 'Hiện tượng trượt lở kiến tạo địa chất kỳ thú tạo nên cánh đồng khối đá hỗn loạn khổng lồ.',
    fullDesc: 'Tại khu vực đèo Lùng Pa (xã Điềm He, Văn Quan), hàng nghìn tảng đá vôi kích thước từ vài mét đến hàng chục mét nằm ngổn ngang chồng chất lên nhau tạo thành hiện tượng "hỗn loạn đá" (Rock Chaos). Đây là kết quả của các quá trình vận động kiến tạo mạnh mẽ, đứt gãy và sụt lở vách đá vôi thời kỳ Đệ Tứ.',
    highlights: ['Hiện tượng địa chất Rock Chaos độc đáo', 'Vết tích đứt gãy kiến tạo sâu', 'Cảnh quan đèo ngoạn mục', 'Giá trị nghiên cứu địa mạo tai biến địa chất'],
    geologicalAge: 'Thời kỳ Tân kiến tạo Đệ Tứ',
    unescoSignificance: 'Điểm di sản địa chất quốc tế tiêu biểu về quá trình trượt lở và phong hóa đá karst.'
  },
  {
    id: 13,
    siteCode: 'Site 13',
    name: 'Rừng Hồi và Tinh dầu Hồi Văn Quan',
    nameEn: 'Van Quan Star Anise Forest & Essential Oil',
    routeId: 2,
    category: 'craft_community',
    district: 'Huyện Văn Quan',
    coordinates: { lat: 21.8219, lng: 106.5387 },
    shortDesc: 'Thủ phủ hoa hồi xứ Lạng với những đồi hồi bạt ngàn và nghề chưng cất tinh dầu thơm quý.',
    fullDesc: 'Cây Hồi (Illicium verum) được coi là "báu vật trời ban" của xứ Lạng, trong đó huyện Văn Quan sở hữu diện tích rừng hồi lớn nhất. Hoa hồi 8 cánh thơm ngát được chế biến thành tinh dầu hồi xuất khẩu khắp thế giới, ứng dụng trong dược liệu, mỹ phẩm và gia vị cao cấp.',
    highlights: ['Chỉ dẫn địa lý Hoa Hồi Lạng Sơn', 'Đồi hoa hồi bạt ngàn hương thơm', 'Nghề chưng cất tinh dầu thủ công truyền thống', 'Sản phẩm OCOP đặc trưng của Geopark'],
    unescoSignificance: 'Di sản cảnh quan nông nghiệp và tri thức bản địa canh tác cây dược liệu quý.'
  },
  {
    id: 14,
    siteCode: 'Site 14',
    name: 'Điểm dừng nghỉ Hoa Hồi (AFOREX)',
    nameEn: 'Star Anise Rest Stop',
    routeId: 2,
    category: 'craft_community',
    district: 'Huyện Văn Quan',
    coordinates: { lat: 21.8315, lng: 106.5521 },
    shortDesc: 'Trạm dừng chân quảng bá di sản và các sản phẩm chế biến từ tinh dầu hoa hồi xứ Lạng.',
    fullDesc: 'Điểm dừng nghỉ kết nối du khách với văn hóa hồi, nơi trưng bày quy trình chiết xuất tinh dầu, các sản phẩm xà phòng thảo dược, nước hoa hồi và không gian ẩm thực bản địa.',
    highlights: ['Trung tâm trải nghiệm sản phẩm hồi', 'Không gian nghỉ chân cho du khách', 'Quà tặng lưu niệm chuẩn Geopark'],
    unescoSignificance: 'Điểm kết nối đối tác cộng đồng Geopark (Geopark Partner Network).'
  },
  {
    id: 15,
    siteCode: 'Site 15',
    name: 'Hang Thẩm Khuyên - Thẩm Hai (Di chỉ Người Vượn cổ)',
    nameEn: 'Tham Khuyen - Tham Hai Prehistoric Caves',
    routeId: 2,
    category: 'history_archeology',
    district: 'Huyện Bình Gia',
    coordinates: { lat: 21.9312, lng: 106.4215 },
    shortDesc: 'Di tích khảo cổ học quốc gia nơi phát hiện răng hóa thạch của Người Vượn cổ sống 500.000 năm trước.',
    fullDesc: 'Thuộc xã Tân Văn, huyện Bình Gia, hai hang động karst Thẩm Khuyên và Thẩm Hai là nơi các nhà khảo cổ Việt Nam và quốc tế tìm thấy các răng hóa thạch của Người vượn khổng lồ (Gigantopithecus blacki) và Người vượn đứng thẳng (Homo erectus) cùng nhiều hóa thạch thú kỷ Đệ Tứ (hổ, báo, đười ươi, tê giác). Phát hiện này khẳng định Việt Nam là một trong những cái nôi xuất hiện sớm của loài người.',
    highlights: ['Di tích Quốc gia khảo cổ học thời đại Đồ đá', 'Hóa thạch răng Homo erectus & Gigantopithecus', 'Niên đại ~300.000 - 500.000 năm trước', 'Ý nghĩa nhân chủng học toàn cầu'],
    geologicalAge: 'Thế Pleistocene (Kỷ Đệ Tứ ~500.000 năm)',
    unescoSignificance: 'Di sản cổ nhân chủng học tầm cỡ thế giới về nguồn gốc và quá trình tiến hóa của loài người.'
  },
  {
    id: 16,
    siteCode: 'Site 16',
    name: 'Đỉnh Nà Lay (Vọng cảnh thung lũng karst Bắc Sơn)',
    nameEn: 'Na Lay Peak Viewpoint',
    routeId: 2,
    category: 'biodiversity_nature',
    district: 'Huyện Bắc Sơn',
    coordinates: { lat: 21.8978, lng: 106.3265 },
    shortDesc: 'Đỉnh núi cao hơn 600m chiêm ngưỡng toàn cảnh thung lũng lúa vàng Bắc Sơn đẹp tựa tranh thủy mặc.',
    fullDesc: 'Vượt qua khoảng 1.200 bậc thang đá, đỉnh Nà Lay mở ra tầm nhìn bao quát 360 độ thung lũng karst Bắc Sơn (polje) với dòng sông uốn lượn qua các thửa ruộng lúa bậc thang rực rỡ và những ngọn núi đá vôi hình nón nhấp nhô giữa làn mây trắng.',
    highlights: ['Góc ngắm bình minh và hoàng hôn đẹp nhất xứ Lạng', 'Toàn cảnh thung lũng polje karst Bắc Sơn', 'Trạm phát sóng vi ba lịch sử', 'Thiên đường của các nhiếp ảnh gia quốc tế'],
    geologicalAge: 'Địa hình Karst nón - chóp (Cone/Tower Karst)',
    unescoSignificance: 'Kỳ quan cảnh quan địa mạo Karst thung lũng lòng chảo nhiệt đới mẫu mực thế giới.'
  },
  {
    id: 17,
    siteCode: 'Site 17',
    name: 'Bảo tàng Khởi nghĩa Bắc Sơn & Rừng Khuổi Nọi',
    nameEn: 'Bac Son Uprising Museum & Khuoi Noi Forest',
    routeId: 2,
    category: 'history_archeology',
    district: 'Huyện Bắc Sơn',
    coordinates: { lat: 21.9056, lng: 106.3124 },
    shortDesc: 'Cái nôi Khởi nghĩa Bắc Sơn (1940), nơi thành lập Đội Cứu quốc quân và cờ đỏ sao vàng đầu tiên tung bay.',
    fullDesc: 'Khu di tích lịch sử Quốc gia đặc biệt Khởi nghĩa Bắc Sơn ghi dấu cuộc nổi dậy anh dũng ngày 27/9/1940 của nhân dân các dân tộc Bắc Sơn. Nơi đây thành lập Đội Cứu quốc quân Bắc Sơn - tiền thân của Quân đội nhân dân Việt Nam, và là nơi lá cờ đỏ sao vàng lần đầu tiên xuất hiện trong phong trào cách mạng cả nước.',
    highlights: ['Di tích Quốc gia đặc biệt', 'Sự kiện Khởi nghĩa Bắc Sơn (1940)', 'Cái nôi lực lượng vũ trang nhân dân', 'Bảo tàng mô phỏng kiến trúc nhà sàn Tày'],
    unescoSignificance: 'Di sản lịch sử cách mạng tiêu biểu gắn với địa hình căn cứ địa kháng chiến hiểm trở.'
  },
  {
    id: 18,
    siteCode: 'Site 18',
    name: 'Suối Mỏ Mắm & Hang Hoàng Ang',
    nameEn: 'Mo Mam Stream & Hoang Ang Cave',
    routeId: 2,
    category: 'biodiversity_nature',
    district: 'Huyện Bắc Sơn',
    coordinates: { lat: 21.9341, lng: 106.3512 },
    shortDesc: 'Dòng suối trong vắt phun ra từ lòng hang đá karst với hệ thống thạch nhũ muôn hình vạn trạng.',
    fullDesc: 'Nằm tại xã Chiến Thắng, suối Mỏ Mắm bắt nguồn từ mạch ngầm trong vách núi đá vôi, nước trong vắt quanh năm. Hang Hoàng Ang bên cạnh có chiều sâu hàng trăm mét với vòm hang rộng lớn, nhũ đá rủ xuống lấp lánh như bức rèm châu chốn bồng lai tiên cảnh.',
    highlights: ['Mạch nước karst phun trào ngầm mát lạnh', 'Hang động thạch nhũ tự nhiên nguyên sơ', 'Không gian dã ngoại và tắm suối sinh thái'],
    geologicalAge: 'Karst kỷ Đệ Tứ',
    unescoSignificance: 'Di sản địa mạo thủy văn karst hang động tự nhiên.'
  },

  // --- TUYẾN 3: CUỘC SỐNG DÂN DÃ NƠI TRẦN THẾ ---
  {
    id: 19,
    siteCode: 'Site 19',
    name: 'Làng nghề làm ngói âm dương Quỳnh Sơn',
    nameEn: 'Quynh Son Yin-Yang Tile Craft Village',
    routeId: 3,
    category: 'craft_community',
    district: 'Huyện Bắc Sơn',
    coordinates: { lat: 21.8912, lng: 106.3385 },
    shortDesc: 'Làng nghề thủ công truyền thống độc đáo chuyên nung ngói máng âm dương lợp nhà sàn.',
    fullDesc: 'Làng Quỳnh Sơn nằm nép mình bên dãy núi đá vôi, nổi tiếng hàng trăm năm qua với nghề làm ngói âm dương (ngói máng) thủ công từ đất sét địa phương. Những viên ngói âm dương rêu phong lợp trên hàng trăm nếp nhà sàn tạo nên bức tranh làng quê cổ kính, ấm cúng và thoáng mát về mùa hè, ấm áp về mùa đông.',
    highlights: ['Nghề làm ngói thủ công hàng thế kỷ', 'Kỹ thuật nung rơm củi truyền thống', 'Vẻ đẹp kiến trúc ngói máng trên nhà sàn', 'Bảo tồn nét đẹp dân gian vùng Geopark'],
    unescoSignificance: 'Di sản văn hóa phi vật thể và tri thức bản địa về kiến trúc nhà ở dân gian thích ứng khí hậu.'
  },
  {
    id: 20,
    siteCode: 'Site 20',
    name: 'Làng du lịch cộng đồng Quỳnh Sơn',
    nameEn: 'Quynh Son Community Tourism Village',
    routeId: 3,
    category: 'craft_community',
    district: 'Huyện Bắc Sơn',
    coordinates: { lat: 21.8954, lng: 106.3412 },
    shortDesc: 'Bản làng thuần nông người Tày với hơn 400 nếp nhà sàn cùng quay về hướng Nam thanh bình.',
    fullDesc: 'Quỳnh Sơn là một trong những làng du lịch cộng đồng kiểu mẫu của tỉnh Lạng Sơn. Toàn bộ hơn 400 hộ dân người Tày đều sinh sống trong những ngôi nhà sàn gỗ lợp ngói âm dương, giữ nguyên nếp sống thuần hậu, các điệu then ngọt ngào cùng những món ăn truyền thống khó quên.',
    highlights: ['Hơn 400 nếp nhà sàn đồng nhất hướng Nam', 'Không gian diễn xướng Hát Then đàn Tính', 'Trải nghiệm cuộc sống gia đình người Tày', 'Được công nhận làng du lịch cộng đồng tiêu biểu'],
    unescoSignificance: 'Bảo tồn không gian văn hóa cư trú truyền thống của tộc người Tày bản địa.'
  },
  {
    id: 21,
    siteCode: 'Site 21',
    name: 'Làng nghề Cao khô Vạn Linh',
    nameEn: 'Van Linh Dried Noodle Craft Village',
    routeId: 3,
    category: 'craft_community',
    district: 'Huyện Chi Lăng',
    coordinates: { lat: 21.7123, lng: 106.5189 },
    shortDesc: 'Làng nghề chế biến mì cao khô truyền thống thơm ngon từ gạo bao thai hồng xứ Lạng.',
    fullDesc: 'Cao khô Vạn Linh được làm hoàn toàn thủ công từ gạo Bao thai hồng dẻo thơm trồng trên ruộng nước nương đá vôi Chi Lăng, không sử dụng chất bảo quản hay phụ gia. Sợi mì dai mềm tự nhiên, khi nấu giữ được vị ngọt đậm đà của hạt gạo vùng cao.',
    highlights: ['Đặc sản OCOP nổi tiếng của Lạng Sơn', 'Nguyên liệu gạo Bao thai hồng bản địa', 'Quy trình sản xuất thủ công phơi nắng tự nhiên', 'Món quà ẩm thực dân dã không thể thiếu'],
    unescoSignificance: 'Di sản ẩm thực dân gian và chuỗi sinh kế cộng đồng bền vững.'
  },
  {
    id: 22,
    siteCode: 'Site 22',
    name: 'Vườn Quýt vàng thung lũng Bắc Sơn',
    nameEn: 'Bac Son Valley Golden Tangerine Orchards',
    routeId: 3,
    category: 'craft_community',
    district: 'Huyện Bắc Sơn',
    coordinates: { lat: 21.8845, lng: 106.3056 },
    shortDesc: 'Vùng quýt ngọt mọc trong thung lũng lòng chảo đá vôi với hương thơm thanh mát nức tiếng.',
    fullDesc: 'Nhờ thổ nhưỡng đặc thù của đất mùn núi đá vôi và khí hậu tiểu vùng thung lũng karst mát mẻ, quýt Bắc Sơn có vỏ mỏng, mọng nước, vị ngọt thanh mát và hương thơm rất riêng, được cấp nhãn hiệu tập thể và là niềm tự hào nông sản xứ Lạng.',
    highlights: ['Chỉ dẫn địa lý Quýt Bắc Sơn', 'Mùa quả chín vàng rực thung lũng vào cuối năm', 'Trải nghiệm hái quả tại vườn'],
    unescoSignificance: 'Di sản nông nghiệp sinh thái đặc thù trên vùng đất karst.'
  },
  {
    id: 23,
    siteCode: 'Site 23',
    name: 'Vùng canh tác Na vách đá Chi Lăng',
    nameEn: 'Chi Lang Cliff Custard Apple Area',
    routeId: 3,
    category: 'craft_community',
    district: 'Huyện Chi Lăng',
    coordinates: { lat: 21.6854, lng: 106.5412 },
    shortDesc: 'Kỳ tích nông nghiệp: những vườn na trĩu quả leo trên các vách đá vôi tai mèo dốc đứng.',
    fullDesc: 'Người dân Chi Lăng đã biến những sườn núi đá vôi hiểm trở thành "vương quốc na" trứ danh. Bằng sự sáng tạo độc đáo, người dân dùng ròng rọc tự chế để vận chuyển na từ đỉnh núi cao hàng trăm mét xuống chân núi, tạo nên sản phẩm na dai ngọt lịm mang lại sinh kế ấm no cho hàng vạn hộ dân.',
    highlights: ['Kỳ tích trồng na trên vách đá vôi', 'Hệ thống tời ròng rọc vận chuyển độc đáo', 'Thương hiệu Na Chi Lăng nổi tiếng toàn quốc'],
    unescoSignificance: 'Mẫu mực về tri thức thích ứng và sinh kế nông nghiệp bền vững trên địa hình karst hiểm trở.'
  },
  {
    id: 24,
    siteCode: 'Site 24',
    name: 'Nhà thờ họ Hà Thổ',
    nameEn: 'Ha Tho Ancestral House',
    routeId: 3,
    category: 'culture_spiritual',
    district: 'Huyện Chi Lăng',
    coordinates: { lat: 21.7241, lng: 106.5023 },
    shortDesc: 'Công trình kiến trúc thờ tự dòng họ cổ truyền phản ánh lịch sử khai hoang lập bản.',
    fullDesc: 'Nhà thờ họ Hà Thổ là một chứng tích lịch sử về sự định cư và đóng góp của các dòng tộc tiền hiền trong công cuộc khẩn hoang, giữ gìn bờ cõi và phát triển làng xã tại Chi Lăng qua nhiều thế kỷ.',
    highlights: ['Kiến trúc tâm linh dòng họ truyền thống', 'Gia phả và tư liệu cổ', 'Nét đẹp truyền thống tôn sư trọng đạo, uống nước nhớ nguồn'],
    unescoSignificance: 'Di sản ký ức văn hóa gia đình và lịch sử định cư của cộng đồng dân cư.'
  },

  // --- TUYẾN 4: ĐƯỜNG ĐẾN THỦY CUNG ---
  {
    id: 25,
    siteCode: 'Site 25',
    name: 'Thế giới đầm hồ Na Dương (Bồn trũng than nâu Eocene)',
    nameEn: 'Na Duong Ancient Lake World',
    routeId: 4,
    category: 'geology',
    district: 'Huyện Lộc Bình',
    coordinates: { lat: 21.7089, lng: 106.9534 },
    shortDesc: 'Cánh cửa nhìn vào hệ sinh thái Eocene Đông Nam Á cách đây 40-50 triệu năm với kho tàng hóa thạch kỳ vĩ.',
    fullDesc: 'Nằm tại xã Sàn Viên, huyện Lộc Bình, Bồn trũng Na Dương là mỏ than nâu trên đất liền lớn nhất Việt Nam (diện tích ~80 km², dày 570m gồm Hệ tầng Na Dương và Rinh Chùa). Giới khoa học quốc tế gọi Na Dương là "Cánh cửa độc nhất vô nhị nhìn vào các hệ sinh thái Eocene từ Đông Nam Á". Nơi đây phát hiện hàng vạn mẫu hóa thạch động thực vật đầm hồ nhiệt đới: cá sấu cổ Asiatosuchus / Vietnamosuchus, thú móng guốc bán thủy sinh Anthracotheriidae (tổ tiên hà mã), rùa cổ, kỳ đà, 9 loài cá nước ngọt, 5 loài trai hai mảnh vỏ (Pelecypoda) và vô số vết in lá sen, gỗ hóa thạch.',
    highlights: [
      'Bể than nâu đất liền lớn nhất Việt Nam (>100 triệu tấn)',
      'Hóa thạch cá sấu cổ Asiatosuchus / Vietnamosuchus',
      'Hóa thạch thú cổ họ Anthracotheriidae tổ tiên hà mã',
      'Hóa thạch vết in lá sen cổ & trai ngọc hai mảnh vỏ',
      'Cánh cửa Eocene Đông Nam Á được công bố trên Nature & Science quốc tế'
    ],
    geologicalAge: 'Thế Eocene - Oligocene (Cenozoic: ~40 - 50 triệu năm trước)',
    unescoSignificance: 'Di sản địa chất và cổ sinh học có giá trị nổi bật toàn cầu (Outstanding Universal Value).'
  },
  {
    id: 26,
    siteCode: 'Site 26',
    name: 'Khu du lịch Quốc gia Đỉnh Mẫu Sơn',
    nameEn: 'Mau Son Mountain National Tourism Area',
    routeId: 4,
    category: 'biodiversity_nature',
    district: 'Huyện Lộc Bình & Huyện Cao Lộc',
    coordinates: { lat: 21.8543, lng: 106.9212 },
    shortDesc: 'Vùng núi cao hơn 1.500m quanh năm mây phủ, thiên đường nghỉ dưỡng thời Pháp và văn hóa người Dao đỏ.',
    fullDesc: 'Dãy Mẫu Sơn gồm hơn 80 ngọn núi lớn nhỏ, đỉnh cao nhất Công Sơn đạt 1.541m. Khí hậu Mẫu Sơn mát mẻ quanh năm, mùa đông thường xuyên có băng tuyết kỳ ảo. Nơi đây lưu giữ các biệt thự cổ thời Pháp thuộc, bản sắc văn hóa đặc sắc của người Dao đỏ, đặc sản rượu men lá Mẫu Sơn, đào Mẫu Sơn và chè tuyết sơn cổ thụ.',
    highlights: ['Độ cao 1.541m với hiện tượng băng tuyết mùa đông', 'Quần thể biệt thự cổ thời Pháp', 'Bản sắc văn hóa người Dao đỏ (chàm thổ cẩm, tắm lá thuốc)', 'Rượu men lá Mẫu Sơn & Chè tuyết sơn ngậm sương'],
    geologicalAge: 'Khối magma xâm nhập granit tuổi Mesozoic',
    unescoSignificance: 'Di sản cảnh quan núi cao và văn hóa tộc người bản địa độc đáo.'
  },
  {
    id: 27,
    siteCode: 'Site 27',
    name: 'Thác Bản Khiếng',
    nameEn: 'Ban Khieng Waterfall',
    routeId: 4,
    category: 'biodiversity_nature',
    district: 'Huyện Lộc Bình',
    coordinates: { lat: 21.8123, lng: 106.9045 },
    shortDesc: 'Ngọn thác 3 tầng kỳ vĩ bắt nguồn từ mạch ngầm dãy núi Mẫu Sơn tuôn chảy trắng xóa giữa đại ngàn.',
    fullDesc: 'Thác Bản Khiếng (xã Xuân Mãn, Lộc Bình) gồm 3 tầng thác đổ xuống các hồ nước tự nhiên trong vắt nhìn thấy đáy, bao quanh bởi rừng cây rậm rạp và những tảng đá hoa cương nhẵn bóng.',
    highlights: ['Thác nước 3 tầng tự nhiên nguyên sơ', 'Nước suối khoáng từ lòng núi Mẫu Sơn', 'Điểm tắm suối và trải nghiệm thiên nhiên'],
    unescoSignificance: 'Di sản cảnh quan địa mạo thủy văn suối thác núi cao.'
  },
  {
    id: 28,
    siteCode: 'Site 28',
    name: 'Quần thể Động Nhị Thanh - Chùa Tam Thanh',
    nameEn: 'Nhi Thanh - Tam Thanh Cave & Pagoda Complex',
    routeId: 4,
    category: 'culture_spiritual',
    district: 'Thành phố Lạng Sơn',
    coordinates: { lat: 21.8519, lng: 106.7534 },
    shortDesc: 'Đệ nhất bát cảnh xứ Lạng - hang động karst kỳ vĩ gắn với danh nhân Ngô Thì Sĩ và tượng Phật A Di Đà tạc trên vách đá.',
    fullDesc: 'Nằm ngay trung tâm thành phố Lạng Sơn, động Tam Thanh và Nhị Thanh là danh thắng nổi tiếng ngàn đời. Trong động Tam Thanh có tượng Phật A Di Đà tạc nổi vào vách đá từ thời Lê - Mạc, hồ Cảnh Tâm trong vắt và bài thơ vịnh của Ngô Thì Sĩ khắc trên vách đá Nhị Thanh năm 1779.',
    highlights: ['"Đệ nhất bát cảnh xứ Lạng"', 'Tượng Phật A Di Đà tạc nổi vách đá thế kỷ XVII', 'Văn bia của Đốc trấn Ngô Thì Sĩ (1779)', 'Suối Ngọc Tuyền uốn lượn trong lòng động'],
    geologicalAge: 'Karst kỷ Carbon - Permi',
    unescoSignificance: 'Di tích Quốc gia đặc biệt giao thoa đỉnh cao giữa địa mạo karst và văn hóa Phật - Đạo - Nho.'
  },
  {
    id: 29,
    siteCode: 'Site 29',
    name: 'Đền Mẫu Thoải (Sông Kỳ Cùng)',
    nameEn: 'Water Mother Goddess Temple (Ky Cung River)',
    routeId: 4,
    category: 'culture_spiritual',
    district: 'Thành phố Lạng Sơn',
    coordinates: { lat: 21.8489, lng: 106.7612 },
    shortDesc: 'Ngôi đền thờ Thánh Mẫu Thủy Tinh ngự bên bờ dòng sông Kỳ Cùng huyền thoại chảy ngược.',
    fullDesc: 'Đền Mẫu Thoải (Thủy Cung Thánh Mẫu) nằm ven sông Kỳ Cùng, tượng trưng cho Mẫu Đệ Tam Thoải Phủ cai quản miền sông biển đầm hồ. Nơi đây diễn ra các nghi lễ cầu cho quốc thái dân an, mưa thuận gió hòa, sông nước êm ả.',
    highlights: ['Thờ Mẫu Đệ Tam Thoải Phủ', 'Bên dòng sông Kỳ Cùng chảy ngược về phía Bắc', 'Lễ hội rước kiệu truyền thống trên sông'],
    unescoSignificance: 'Trung tâm tín ngưỡng thờ Mẫu Thoải trong hệ thống Tứ Phủ vùng Geopark.'
  },
  {
    id: 30,
    siteCode: 'Site 30',
    name: 'Động Chùa Tiên và Giếng Tiên',
    nameEn: 'Chua Tien Cave & Fairy Well',
    routeId: 4,
    category: 'culture_spiritual',
    district: 'Thành phố Lạng Sơn',
    coordinates: { lat: 21.8421, lng: 106.7645 },
    shortDesc: 'Hang động karst lưng chừng núi Đại Phượng với mạch nước ngầm Giếng Tiên huyền bí không bao giờ cạn.',
    fullDesc: 'Chùa Tiên ngự trong hang núi đá Đại Phượng, thành phố Lạng Sơn. Tương truyền Giếng Tiên trên tảng đá phẳng trong động dù chỉ nhỏ bằng miệng bát nhưng quanh năm tuôn dòng nước mát lành, mang lại may mắn và an lành cho người hành hương.',
    highlights: ['Mạch nước Giếng Tiên kỳ lạ trên đá', 'Hệ thống bia ma nhai chữ Hán cổ', 'Cảnh quan karst giữa lòng đô thị'],
    geologicalAge: 'Karst kỷ Than đá - Pecmi',
    unescoSignificance: 'Di sản văn hóa tâm linh gắn liền với hiện tượng địa chất thủy văn karst.'
  },
  {
    id: 31,
    siteCode: 'Site 31',
    name: 'Di chỉ khảo cổ học Mai Pha',
    nameEn: 'Mai Pha Archeological Site',
    routeId: 4,
    category: 'history_archeology',
    district: 'Thành phố Lạng Sơn',
    coordinates: { lat: 21.8324, lng: 106.7789 },
    shortDesc: 'Di chỉ khảo cổ học thời kỳ Kim khí (Đồ đồng) phản ánh đời sống người Việt cổ lưu vực sông Kỳ Cùng.',
    fullDesc: 'Khai quật tại xã Mai Pha, các nhà khảo cổ phát hiện hàng trăm hiện vật đồng thau, khuôn đúc đồng, rìu đồng, đồ gốm và dấu tích khu cư trú của cư dân cổ thời đại Hùng Vương, chứng minh dòng chảy văn minh liên tục trên mảnh đất xứ Lạng.',
    highlights: ['Di chỉ thời đại Đồ đồng thời Hùng Vương', 'Hiện vật khuôn đúc và rìu đồng tinh xảo', 'Chứng tích định cư lâu đời ven sông Kỳ Cùng'],
    geologicalAge: 'Thời đại Kim khí (~3.000 năm trước)',
    unescoSignificance: 'Di sản khảo cổ học thời đại Kim khí khẳng định bề dày lịch sử dựng nước của dân tộc.'
  },
  {
    id: 32,
    siteCode: 'Site 32',
    name: 'Chùa Bắc Ngà',
    nameEn: 'Bac Nga Pagoda',
    routeId: 4,
    category: 'culture_spiritual',
    district: 'Huyện Lộc Bình',
    coordinates: { lat: 21.7589, lng: 106.9123 },
    shortDesc: 'Ngôi chùa cổ kính linh thiêng ngự bên sườn đồi nhìn ra thung lũng sông Kỳ Cùng trù phú.',
    fullDesc: 'Chùa Bắc Ngà (xã Gia Cát, huyện Cao Lộc / Lộc Bình) là nơi sinh hoạt văn hóa tín ngưỡng truyền thống của đồng bào Tày, Nùng. Chùa có hội xuân rộn rã với các trò chơi dân gian ném còn, lượn sli.',
    highlights: ['Lễ hội Chùa Bắc Ngà ngày 15 tháng Giêng', 'Không gian sinh hoạt lễ hội Tày Nùng', 'Kiến trúc chùa làng thanh tịnh'],
    unescoSignificance: 'Di sản văn hóa phi vật thể lễ hội xuân truyền thống vùng Geopark.'
  },
  {
    id: 33,
    siteCode: 'Site 33',
    name: 'Hang Dơi Hữu Lũng',
    nameEn: 'Huu Lung Bat Cave',
    routeId: 1,
    category: 'biodiversity_nature',
    district: 'Huyện Hữu Lũng',
    coordinates: { lat: 21.6321, lng: 106.3654 },
    shortDesc: 'Hang động karst khổng lồ nơi cư ngụ của hàng triệu cá thể dơi và thạch nhũ độc đáo.',
    fullDesc: 'Hang Dơi nằm sâu trong rừng đá vôi Hữu Lũng, có vòm hang cao hàng chục mét và là quần tụ của nhiều loài dơi tự nhiên. Mỗi buổi hoàng hôn, từng đàn dơi túa ra khỏi cửa hang tạo nên cảnh tượng thiên nhiên kỳ thú.',
    highlights: ['Hệ sinh thái dơi tự nhiên đa dạng', 'Vòm hang karst đồ sộ', 'Điểm khám phá thám hiểm mạo hiểm'],
    unescoSignificance: 'Di sản sinh thái học ngầm trong lòng hang karst.'
  },
  {
    id: 34,
    siteCode: 'Site 34',
    name: 'Thung lũng Karst Lũng Niếc',
    nameEn: 'Lung Niec Karst Polje',
    routeId: 2,
    category: 'geology',
    district: 'Huyện Văn Quan',
    coordinates: { lat: 21.8621, lng: 106.5124 },
    shortDesc: 'Thung lũng lòng chảo kín điển hình hình thành từ quá trình hòa tan đá vôi hàng triệu năm.',
    fullDesc: 'Lũng Niếc là ví dụ mẫu mực về dạng địa hình polje karst khép kín, được bao quanh bởi các đỉnh núi đá vôi dốc đứng, có đáy phẳng tích tụ đất phong hóa màu mỡ nuôi dưỡng những xóm bản trù phú.',
    highlights: ['Địa hình lòng chảo karst polje chuẩn mực', 'Cảnh quan nông nghiệp xanh ngắt', 'Hệ thống phễu sụt thoát nước tự nhiên'],
    geologicalAge: 'Karst kỷ Đệ Tứ',
    unescoSignificance: 'Điểm giáo dục địa mạo karst trường học ngoài trời.'
  },
  {
    id: 35,
    siteCode: 'Site 35',
    name: 'Mỏ than Na Dương & Điểm trưng bày hóa thạch cổ sinh',
    nameEn: 'Na Duong Paleontological Exhibition Point',
    routeId: 4,
    category: 'geology',
    district: 'Huyện Lộc Bình',
    coordinates: { lat: 21.7142, lng: 106.9482 },
    shortDesc: 'Không gian quan sát tầng địa chất than nâu và các mẫu vật hóa thạch triệu năm tại thực địa.',
    fullDesc: 'Điểm dừng chân chuyên đề nơi du khách và các nhà nghiên cứu được tận mắt chiêm ngưỡng các vết cắt địa tầng dày hàng trăm mét, các lớp sét kết xám ghi chứa vô số vỏ ốc, vỏ trai hai mảnh và dấu tích lá cây cổ đại.',
    highlights: ['Mặt cắt địa tầng Eocene - Oligocene chuẩn', 'Quan sát hóa thạch tại chỗ', 'Phục vụ nghiên cứu khoa học địa chất quốc tế'],
    geologicalAge: 'Eocene (~40 Ma)',
    unescoSignificance: 'Giá trị khoa học địa chất và giáo dục di sản công cộng.'
  },
  {
    id: 36,
    siteCode: 'Site 36',
    name: 'Đền Chầu Mười Đồng Mỏ',
    nameEn: 'Chau Muoi Dong Mo Temple',
    routeId: 1,
    category: 'culture_spiritual',
    district: 'Huyện Chi Lăng',
    coordinates: { lat: 21.6189, lng: 106.5821 },
    shortDesc: 'Đền thiêng phụng thờ Chầu Mười Mỏ Ba - vị nữ tướng anh hùng che chở bờ cõi.',
    fullDesc: 'Tọa lạc tại thị trấn Chi Lăng, Đền Chầu Mười thờ Chầu Mười Đồng Mỏ (Mỏ Ba), một trong Thập Vị Chầu Bà của Tín ngưỡng thờ Mẫu Tam phủ. Tương truyền bà có công giúp dân khai phá đất đai và bảo vệ xóm làng khỏi giặc cướp.',
    highlights: ['Thờ Chầu Mười Mỏ Ba', 'Tín ngưỡng Tứ Phủ vùng Chi Lăng', 'Lễ hội tiệc Chầu tháng 10 Âm lịch'],
    unescoSignificance: 'Di sản văn hóa tín ngưỡng dân gian tôn vinh nhân thần có công với nước.'
  },
  {
    id: 37,
    siteCode: 'Site 37',
    name: 'Cụm cây di sản Nghiến nghìn năm Bắc Sơn',
    nameEn: 'Bac Son Thousand-Year Heritage Burretiodendron Trees',
    routeId: 2,
    category: 'biodiversity_nature',
    district: 'Huyện Bắc Sơn',
    coordinates: { lat: 21.9189, lng: 106.3312 },
    shortDesc: 'Quần thể cây gỗ Nghiến cổ thụ hàng trăm đến nghìn năm tuổi vươn mình trên đỉnh đá tai mèo.',
    fullDesc: 'Những gốc cây Nghiến khổng lồ chu vi 4-5 người ôm bám chặt rễ vào khe đá vôi trơ trọi, là minh chứng cho sức sống kiên cường của thiên nhiên và ý thức bảo vệ rừng nghiêm ngặt của đồng bào dân tộc.',
    highlights: ['Cây di sản Việt Nam', 'Gỗ Nghiến cổ thụ ngàn năm', 'Biểu tượng sức sống đại ngàn Bắc Sơn'],
    unescoSignificance: 'Di sản sinh thái học và biểu tượng bảo tồn đa dạng sinh học rừng đá vôi.'
  },
  {
    id: 38,
    siteCode: 'Site 38',
    name: 'Trung tâm Thông tin Công viên địa chất toàn cầu Lạng Sơn',
    nameEn: 'Lang Son Geopark Visitor & Information Center',
    routeId: 2,
    category: 'history_archeology',
    district: 'Thành phố Lạng Sơn',
    coordinates: { lat: 21.8456, lng: 106.7567 },
    shortDesc: 'Trung tâm đón tiếp, số hóa 3D, trưng bày mẫu vật và điều phối tour tham quan toàn công viên.',
    fullDesc: 'Đặt tại thành phố Lạng Sơn, Trung tâm Thông tin là trái tim kết nối toàn bộ hệ thống 38 điểm đến và 4 tuyến du lịch di sản. Nơi đây trưng bày các mẫu khoáng vật, mẫu đá, mẫu hóa thạch khai thác từ Na Dương và Yên Thịnh, sa bàn 3D tương tác và tài liệu hướng dẫn du lịch chuẩn mực quốc tế.',
    highlights: ['Trưng bày mẫu đá và hóa thạch quý', 'Sa bàn địa hình 3D tương tác', 'Cung cấp hướng dẫn viên và ấn phẩm', 'Cửa ngõ kết nối du khách với 4 tuyến di sản'],
    unescoSignificance: 'Trung tâm giáo dục cộng đồng, điều phối bảo tồn và phát triển du lịch bền vững.'
  }
];

export const GEOLOGICAL_TIMELINE = [
  {
    era: 'Đại Cổ sinh (Paleozoic)',
    period: 'Kỷ Carbon - Permi (~350 - 250 triệu năm trước)',
    theme: 'Đại dương cổ yên bình & Sự sống nguyên thủy',
    description: 'Vùng đất Lạng Sơn nằm sâu dưới đáy một đại dương nhiệt đới ấm áp. Tảo, trùng lỗ và san hô phát triển rực rỡ, lắng đọng hàng nghìn mét đá vôi thuộc Hệ tầng Bắc Sơn. Dấu tích hóa thạch san hô Rugosa và sinh vật biển nguyên thủy tại Yên Thịnh (Site 02) là minh chứng đanh thép cho thời kỳ này.',
    keyEvidence: 'Hóa thạch san hô Rugosa tại Yên Thịnh, đá vôi tầng Bắc Sơn'
  },
  {
    era: 'Đại Trung sinh (Mesozoic)',
    period: 'Kỷ Trias - Jura (~250 - 150 triệu năm trước)',
    theme: 'Chuyển động nâng lên, nén ép tạo núi & Magma núi lửa',
    description: 'Hoạt động kiến tạo Indosinian làm biến dạng vỏ Trái Đất, nước biển rút dần. Các vận động nâng ép tạo nên những đứt gãy lớn và các đợt phun trào núi lửa magma lục địa cổ (như các vết tích đá phun trào bazan - rhyolite tại Chi Lăng).',
    keyEvidence: 'Đá magma xâm nhập granitoit Mẫu Sơn, đá phun trào lục địa Chi Lăng'
  },
  {
    era: 'Đại Tân sinh (Cenozoic)',
    period: 'Thế Eocene - Oligocene (~50 - 25 triệu năm trước)',
    theme: 'Đứt gãy dịch trượt & "Cánh cửa" đầm hồ Na Dương',
    description: 'Chuyển động dịch trượt theo đới đứt gãy Cao Bằng - Tiên Yên mở ra một bồn trũng kéo tách dài hình elip tại Na Dương (Lộc Bình). Một hệ sinh thái đầm hồ nước ngọt nhiệt đới ẩm ướt phì nhiêu hình thành, trở thành thiên đường cho cá sấu cổ Asiatosuchus, thú móng guốc cổ họ Anthracotheriidae, rùa khổng lồ, cá nước ngọt và thảm thực vật sen cổ phát triển, sau đó chìm lấp tạo thành mỏ than nâu lớn nhất Việt Nam.',
    keyEvidence: 'Kho tàng hóa thạch cá sấu cổ, thú móng guốc, lá sen và than nâu Na Dương'
  },
  {
    era: 'Kỷ Đệ Tứ (Quaternary)',
    period: 'Pleistocene - Holocene (~2,6 triệu năm đến nay)',
    theme: 'Karst hóa ngoạn mục & Cái nôi Người tiền sử',
    description: 'Khí hậu nhiệt đới gió mùa cùng dòng nước ngầm axit yếu hòa tan các khối đá vôi cổ, gọt giũa nên hệ thống thung lũng karst polje tuyệt mỹ (Bắc Sơn, Đồng Lâm), đồi nón, tháp đá và hang động ngầm kỳ vĩ. Đây chính là môi trường lý tưởng để Người vượn cổ (Homo erectus, Gigantopithecus) sinh sống tại Thẩm Khuyên - Thẩm Hai, tiếp nối bằng nền Văn hóa khảo cổ học Bắc Sơn trứ danh với kỹ thuật mài lưỡi rìu đá.',
    keyEvidence: 'Răng Người vượn Thẩm Khuyên, Rìu đá Bắc Sơn, hang động Tam Thanh - Nhị Thanh'
  }
];

export const GEOPARK_QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'Chủ đề và khẩu hiệu xuyên suốt của Công viên địa chất toàn cầu UNESCO Lạng Sơn là gì?',
    options: [
      'Dòng chảy sự sống nơi miền đất thiêng',
      'Non nước Cao Bằng ngút ngàn',
      'Kỳ quan đá vôi miền biên cương',
      'Hành trình xuyên thời gian đại ngàn'
    ],
    correctAnswer: 0,
    explanation: 'Website chính thức langsongeopark.com.vn khẳng định chủ đề xuyên suốt của Công viên địa chất Lạng Sơn là "Dòng chảy sự sống nơi miền đất thiêng" (The flow of life in the sacred land).'
  },
  {
    id: 2,
    question: 'Tổng diện tích của Công viên địa chất toàn cầu UNESCO Lạng Sơn là bao nhiêu?',
    options: [
      'Khoảng 2.500 km²',
      'Khoảng 3.200 km²',
      'Khoảng 4.842,58 km²',
      'Khoảng 6.100 km²'
    ],
    correctAnswer: 2,
    explanation: 'Theo số liệu chính thức, Công viên có diện tích 4.842,58 km², chiếm khoảng 58% diện tích toàn tỉnh Lạng Sơn.'
  },
  {
    id: 3,
    question: 'Công viên địa chất toàn cầu UNESCO Lạng Sơn được quy hoạch thành bao nhiêu tuyến du lịch và bao nhiêu điểm tham quan?',
    options: [
      '03 tuyến du lịch và 25 điểm tham quan',
      '04 tuyến du lịch và 38 điểm tham quan',
      '05 tuyến du lịch và 45 điểm tham quan',
      '02 tuyến du lịch và 20 điểm tham quan'
    ],
    correctAnswer: 1,
    explanation: 'Công viên địa chất Lạng Sơn bao gồm 04 tuyến du lịch chính gắn với triết lý Đạo Mẫu và 38 điểm tham quan di sản tiêu biểu.'
  },
  {
    id: 4,
    question: 'Tuyến số 1 "Khám phá Thế giới Thượng ngàn" gắn liền với màu sắc tượng trưng của vị Thánh Mẫu nào?',
    options: [
      'Thánh Mẫu Liễu Hạnh (Màu Đỏ)',
      'Thánh Mẫu Đệ Nhị Thượng Ngàn (Màu Xanh lá cây)',
      'Thánh Mẫu Thoải Phủ (Màu Trắng/Lam)',
      'Thánh Mẫu Địa Phủ (Màu Vàng)'
    ],
    correctAnswer: 1,
    explanation: 'Tuyến 1 gắn với màu áo Xanh của Thánh Mẫu Thượng Ngàn, khởi nguồn từ Đền Mẫu Bắc Lệ (Hữu Lũng).'
  },
  {
    id: 5,
    question: 'Tại Bồn trũng than nâu Na Dương (huyện Lộc Bình), các nhà khoa học đã tìm thấy những mẫu hóa thạch đặc biệt nào có niên đại 40-50 triệu năm?',
    options: [
      'Khủng long bạo chúa T-Rex',
      'Cá sấu cổ Asiatosuchus, thú móng guốc cổ Anthracotheriidae, lá sen và trai cổ',
      'Voi ma mút lông xoăn',
      'Bọ ba thùy Trilobite kỷ Cambri'
    ],
    correctAnswer: 1,
    explanation: 'Bồn trũng Na Dương nổi tiếng thế giới vì lưu giữ hóa thạch cá sấu cổ Asiatosuchus/Vietnamosuchus, thú móng guốc bán thủy sinh Anthracotheriidae (tổ tiên hà mã), rùa cổ, cá nước ngọt và vết in thực vật thế Eocene.'
  },
  {
    id: 6,
    question: 'Di chỉ khảo cổ học Thẩm Khuyên - Thẩm Hai tại huyện Bình Gia nổi tiếng thế giới vì phát hiện di cốt của loài người tiền sử nào?',
    options: [
      'Người vượn đứng thẳng (Homo erectus) và Vượn người khổng lồ (Gigantopithecus)',
      'Người Neanderthal châu Âu',
      'Người Tinh khôn thời Đồ đồng',
      'Chưa từng tìm thấy di cốt người cổ'
    ],
    correctAnswer: 0,
    explanation: 'Hang Thẩm Khuyên và Thẩm Hai là nơi phát hiện răng hóa thạch của Homo erectus và Gigantopithecus blacki có niên đại khoảng 300.000 - 500.000 năm trước.'
  },
  {
    id: 7,
    question: 'Làng nghề truyền thống Quỳnh Sơn tại huyện Bắc Sơn nổi tiếng với sản phẩm thủ công nào lợp trên hàng trăm nếp nhà sàn?',
    options: [
      'Đồ gốm Chu Đậu',
      'Ngói máng âm dương thủ công nung rơm củi',
      'Lụa tơ tằm Vạn Phúc',
      'Chiếu cói dệt tay'
    ],
    correctAnswer: 1,
    explanation: 'Làng Quỳnh Sơn (Bắc Sơn) nổi tiếng với nghề làm ngói âm dương (ngói máng) thủ công truyền thống hàng trăm năm.'
  },
  {
    id: 8,
    question: 'Bao nhiêu dân tộc anh em cùng chung sống hòa thuận trong không gian Công viên địa chất toàn cầu UNESCO Lạng Sơn?',
    options: [
      '3 dân tộc',
      '5 dân tộc',
      '7 dân tộc (Tày, Nùng, Kinh, Dao, Hoa, Sán Chay, Mông)',
      '12 dân tộc'
    ],
    correctAnswer: 2,
    explanation: 'Vùng Công viên địa chất Lạng Sơn là quê hương gắn bó của 7 dân tộc anh em chính: Tày, Nùng, Kinh, Dao, Hoa, Sán Chay và Mông.'
  }
];

export const CULTURAL_AND_BIODIVERSITY_DATA = {
  biodiversity: [
    {
      title: 'Khu bảo tồn thiên nhiên Hữu Liên',
      metric: '> 8.000 ha',
      desc: 'Rừng nhiệt đới nguyên sinh trên núi đá vôi với hệ sinh thái đất ngập nước nội địa Đồng Lâm quý hiếm.',
      species: ['Vượn đen má trắng', 'Voọc đen má trắng', 'Hoàng đàn Hữu Lũng', 'Thông Pà Cò', 'Gỗ Nghiến cổ thụ']
    },
    {
      title: 'Hệ sinh thái núi cao Mẫu Sơn',
      metric: 'Đỉnh cao 1.541m',
      desc: 'Tiểu vùng khí hậu cận ôn đới trên núi đá hoa cương cao nhất miền Đông Bắc, sương mù và băng tuyết.',
      species: ['Chè tuyết sơn cổ thụ', 'Ếch gai Mẫu Sơn', 'Thực vật rêu phong', 'Đào Mẫu Sơn bản địa']
    },
    {
      title: 'Hệ sinh thái rừng Hồi Xứ Lạng',
      metric: 'Hàng chục nghìn ha',
      desc: 'Cây hồi (Illicium verum) đặc hữu có hàm lượng tinh dầu cao nhất Đông Á, được bảo hộ chỉ dẫn địa lý.',
      species: ['Hoa Hồi xứ Lạng (8 cánh)', 'Dược liệu thảo mộc rừng đá vôi']
    }
  ],
  ethnicCultures: [
    {
      name: 'Dân tộc Tày & Nùng (Đa số)',
      heritage: 'Hát Then - Đàn Tính (Di sản UNESCO), Hát Sli, Múa Sư tử mèo (Di sản quốc gia), Hội Lồng Tồng, nếp nhà sàn ngói âm dương.'
    },
    {
      name: 'Dân tộc Kinh',
      heritage: 'Tín ngưỡng thờ Mẫu Tam phủ (UNESCO), văn hóa phố thị biên cương Kỳ Lừa, Tam Thanh, truyền thống đánh giặc giữ nước Ải Chi Lăng.'
    },
    {
      name: 'Dân tộc Dao (Dao đỏ, Dao chàm)',
      heritage: 'Lễ Cấp sắc, thêu thổ cẩm thủ công hoa văn bạc, bài thuốc lá tắm cổ truyền núi cao Mẫu Sơn.'
    },
    {
      name: 'Dân tộc Sán Chay, Hoa, Mông',
      heritage: 'Hát Sấng Cọ, điệu múa tắc xình, lễ hội cúng rừng, nghề nấu rượu men lá bí truyền.'
    }
  ],
  cuisine: [
    { name: 'Vịt quay lá mác mật', desc: 'Vịt da giòn bóng màu cánh gián, nhồi lá và quả mác mật rừng thơm nức mũi.' },
    { name: 'Khau nhục Lạng Sơn', desc: 'Thịt ba chỉ hầm mềm nhừ ngấm đượm tàu soi, khoai môn và các vị thuốc bắc cổ truyền.' },
    { name: 'Phở chua xứ Lạng', desc: 'Sự hòa quyện giữa bánh phở dai, thịt xá xíu, khoai lang chiên giòn và nước sốt chua ngọt thanh tao.' },
    { name: 'Cao khô Vạn Linh', desc: 'Mì gạo Bao thai hồng bản địa Chi Lăng dai ngon tự nhiên không hóa chất.' },
    { name: 'Na Chi Lăng & Quýt Bắc Sơn', desc: 'Trái cây ngọt lịm hấp thụ tinh hoa đất mùn sườn núi đá vôi.' },
    { name: 'Rượu men lá Mẫu Sơn', desc: 'Chưng cất từ gạo nương và hơn 30 vị men lá thảo mộc chốn non cao quanh năm mây phủ.' }
  ]
};
