import React from "react";

const mocKinhTe = [
  {
    title: "Chủ nghĩa tư bản hình thành",
    desc: "Sản xuất hàng hóa, thị trường và tích lũy tư bản phát triển mạnh.",
  },
  {
    title: "Cách mạng công nghiệp",
    desc: "Máy móc, công nghiệp cơ khí thay thế lao động thủ công, năng suất tăng vượt bậc.",
  },
  {
    title: "Xã hội hóa sản xuất",
    desc: "Sản xuất mang tính tập thể, liên kết rộng, phụ thuộc lẫn nhau về kinh tế.",
  },
  {
    title: "Mâu thuẫn ngày càng sâu sắc",
    desc: "Tính chất xã hội của sản xuất xung đột với chiếm hữu tư nhân tư bản chủ nghĩa.",
  },
];

const chinhTriCards = [
  {
    title: "Mâu thuẫn giai cấp",
    desc: "Mâu thuẫn cơ bản giữa giai cấp công nhân – đại diện cho lực lượng sản xuất mới – và giai cấp tư sản.",
  },
  {
    title: "Giai cấp công nhân & Đảng Cộng sản",
    desc: "Giai cấp công nhân là sản phẩm trực tiếp của nền đại công nghiệp; Đảng Cộng sản ra đời làm đội tiên phong tổ chức và lãnh đạo.",
  },
];

const voSanCards = [
  {
    title: "Bản chất",
    desc: "Cách mạng của giai cấp công nhân và nhân dân lao động, dưới sự lãnh đạo của Đảng Cộng sản, nhằm lật đổ ách thống trị của giai cấp tư sản.",
  },
  {
    title: "Phương thức",
    desc: "Thường được thực hiện bằng bạo lực cách mạng, đập tan bộ máy nhà nước tư sản, thiết lập nhà nước chuyên chính vô sản làm công cụ xây dựng xã hội mới.",
  },
  {
    title: "Mục tiêu",
    desc: "Cải tạo toàn diện xã hội cũ, xây dựng quan hệ sản xuất xã hội chủ nghĩa phù hợp với trình độ xã hội hóa của lực lượng sản xuất, tiến tới hình thái kinh tế – xã hội cộng sản chủ nghĩa.",
  },
];

const recapCards = [
  {
    title: "Điều kiện kinh tế",
    desc: "Lực lượng sản xuất dưới chủ nghĩa tư bản phát triển mạnh, mang tính xã hội hóa cao, trong khi quan hệ sản xuất tư bản chủ nghĩa dựa trên chiếm hữu tư nhân trở nên lỗi thời và kìm hãm.",
  },
  {
    title: "Điều kiện chính trị – xã hội",
    desc: "Mâu thuẫn giai cấp giữa công nhân và tư sản ngày càng gay gắt; giai cấp công nhân trưởng thành cùng với sự ra đời của Đảng Cộng sản – đội tiên phong tổ chức và lãnh đạo đấu tranh cách mạng.",
  },
  {
    title: "Cách mạng vô sản",
    desc: "Con đường tất yếu để lật đổ nhà nước tư sản, thiết lập nhà nước chuyên chính vô sản và xây dựng chủ nghĩa xã hội, tiến tới hình thái kinh tế – xã hội cộng sản chủ nghĩa.",
  },
];

const GiaiDoan1Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50">
      {/* Header Section */}
      <header className="px-4 py-8 lg:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Top Bar */}
          <div className="mb-8">
            <div className="text-xs uppercase tracking-widest text-slate-400">
              HỌC THUYẾT MÁC – LÊNIN · Hình thái KT-XH • Thời kỳ quá độ • CNXH
            </div>

            {/* Main Title */}
            <h1 className="mt-2 text-2xl md:text-3xl font-bold leading-snug">
              Điều kiện ra đời chủ nghĩa xã hội
            </h1>

            <p className="mt-2 text-sm text-slate-300">
              Dựa trên lý luận hình thái kinh tế – xã hội của C. Mác và được V.I. Lênin phát triển
            </p>

            {/* Metadata */}
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-800 px-3 py-1">
                <span>✍️</span>
                <span>Tác giả: Minh Cường</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-800 px-3 py-1">
                <span>📅</span>
                <span>Cập nhật: 2025</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-orange-500/10 text-orange-300 px-3 py-1">
                <span>📚</span>
                <span>Tổng hợp kiến thức</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="px-4 py-8 lg:py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Central Illustration Block */}
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/60">
            <div className="h-40 md:h-56 bg-gradient-to-r from-orange-400/20 via-fuchsia-500/10 to-sky-400/20" />
            <p className="px-4 py-3 text-xs text-slate-300 border-t border-slate-700/60">
              Tổng quan các luận điểm cốt lõi và quy luật vận động của lịch sử xã hội.
            </p>
          </div>

          {/* Introductory Paragraph */}
          <div className="space-y-3">
            <p className="text-sm md:text-base text-slate-200 leading-relaxed">
              Dựa trên lý luận hình thái kinh tế – xã hội của C. Mác và được V.I. Lênin phát triển, sự xuất hiện của chủ nghĩa xã hội gắn với quy luật vận động của chủ nghĩa tư bản và vai trò lịch sử của giai cấp công nhân hiện đại.
            </p>
          </div>

          {/* Section 1: Điều kiện kinh tế */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-orange-300">
              1. Điều kiện kinh tế
            </h2>
            <p className="text-sm md:text-base text-slate-200 leading-relaxed font-semibold">
              Cơ sở kinh tế của sự ra đời chủ nghĩa xã hội
            </p>
            <p className="text-sm md:text-base text-slate-200 leading-relaxed">
              Chủ nghĩa xã hội chỉ có thể ra đời khi bản thân chủ nghĩa tư bản phát triển đến trình độ nhất định, làm chín muồi lực lượng sản xuất và bộc lộ những mâu thuẫn không thể khắc phục trong khuôn khổ quan hệ sản xuất tư bản chủ nghĩa.
            </p>

            {/* 4 Mốc */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {mocKinhTe.map((moc, idx) => (
                <div
                  key={moc.title}
                  className="rounded-2xl border border-slate-800 bg-slate-800/60 p-4"
                >
                  <p className="text-xs font-semibold text-orange-300 mb-2">
                    Mốc {idx + 1}
                  </p>
                  <h3 className="font-bold text-slate-100 mb-2">{moc.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {moc.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Điều kiện chính trị – xã hội */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-orange-300">
              2. Điều kiện chính trị – xã hội
            </h2>
            <p className="text-sm md:text-base text-slate-200 leading-relaxed font-semibold">
              Mâu thuẫn giai cấp và vai trò của giai cấp công nhân
            </p>
            <p className="text-sm md:text-base text-slate-200 leading-relaxed">
              Mâu thuẫn kinh tế trong lòng chủ nghĩa tư bản biểu hiện thành mâu thuẫn chính trị – xã hội giữa giai cấp công nhân và giai cấp tư sản, làm xuất hiện lực lượng xã hội có khả năng lãnh đạo cuộc cách mạng xã hội chủ nghĩa.
            </p>

            {/* 2 Cards */}
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {chinhTriCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-slate-800 bg-slate-800/60 p-4"
                >
                  <h3 className="text-base font-bold text-slate-100 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Cách mạng vô sản */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-orange-300">
              3. Cách mạng vô sản
            </h2>
            <p className="text-sm md:text-base text-slate-200 leading-relaxed font-semibold">
              Con đường chuyển từ chủ nghĩa tư bản lên chủ nghĩa xã hội
            </p>
            <p className="text-sm md:text-base text-slate-200 leading-relaxed">
              Khi điều kiện kinh tế và chính trị – xã hội đã chín muồi, cách mạng vô sản trở thành con đường tất yếu để thay thế chế độ tư bản chủ nghĩa bằng chế độ xã hội chủ nghĩa, tiến tới cộng sản chủ nghĩa.
            </p>

            {/* 3 Cards */}
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              {voSanCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-slate-800 bg-slate-800/60 p-4"
                >
                  <h3 className="text-base font-bold text-slate-100 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-sm md:text-base text-slate-300 italic mt-4">
              Về lý thuyết, con đường hòa bình có thể xảy ra trong một số hoàn cảnh đặc biệt, nhưng lịch sử hiện đại cho thấy còn rất hiếm và chưa trở thành xu hướng chủ đạo.
            </p>

            {/* Illustrative Image Placeholder */}
            <div className="mt-4">
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/60">
                <div className="h-40 md:h-56 bg-gradient-to-r from-orange-400/20 via-fuchsia-500/10 to-sky-400/20" />
                <p className="px-4 py-3 text-xs text-slate-300 border-t border-slate-700/60">
                  Minh hoạ mang tính biểu tượng về sự chuyển giao giữa hai chế độ xã hội.
                </p>
              </div>
            </div>
          </section>

          {/* Recap Section */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-orange-300">
              Recap nhanh
            </h2>
            <p className="text-sm md:text-base text-slate-200 leading-relaxed font-semibold">
              Ba điều kiện cốt lõi của sự ra đời chủ nghĩa xã hội
            </p>
            <p className="text-sm md:text-base text-slate-200 leading-relaxed">
              Tóm tắt ngắn gọn các cơ sở kinh tế, chính trị – xã hội và con đường cách mạng để hình thành hình thái kinh tế – xã hội cộng sản chủ nghĩa.
            </p>

            {/* 3 Recap Cards */}
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              {recapCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-slate-800 bg-slate-800/60 p-4"
                >
                  <h3 className="text-base font-bold text-slate-100 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default GiaiDoan1Page;
