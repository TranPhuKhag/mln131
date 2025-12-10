import React from "react";
import dieukienImg from "../assets/dieukien.png";
import macLeninImg from "../assets/mac-lenin-04.png";
import sosanhImg from "../assets/sosanh.png";

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
    desc: "Thường được thực hiện bằng bạo lực cách mạng, lập nhà nước chuyên chính vô sản làm công cụ xây dựng xã hội mới.",
  },
  {
    title: "Mục tiêu",
    desc: "Cải tạo xã hội cũ, xây dựng quan hệ sản xuất xã hội chủ nghĩa phù hợp với trình độ xã hội hóa lực lượng sản xuất, tiến tới kinh tế – xã hội cộng sản chủ nghĩa.",
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
      <header className="px-4 py-6 lg:py-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-800/60 shadow-xl">
            <img
              src={dieukienImg}
              alt="Điều kiện ra đời chủ nghĩa xã hội"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/70 to-slate-900/35" />

            <div className="relative p-6 md:p-10 lg:p-12 space-y-3 max-w-3xl">
              <div className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-slate-300">
                HỌC THUYẾT MÁC – LÊNIN · Hình thái KT-XH • Thời kỳ quá độ • CNXH
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow">
                Điều kiện ra đời chủ nghĩa xã hội
              </h1>

              <p className="text-sm md:text-base text-slate-200 max-w-2xl">
                Dựa trên lý luận hình thái kinh tế – xã hội của C. Mác và được V.I. Lênin phát triển
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-200">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/60 px-3 py-1 border border-white/10">
                  <span>✍️</span>
                  <span>Tác giả: Minh Cường</span>
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/60 px-3 py-1 border border-white/10">
                  <span>📅</span>
                  <span>Cập nhật: 2025</span>
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-orange-500/20 text-orange-100 px-3 py-1 border border-orange-300/30">
                  <span>📚</span>
                  <span>Tổng hợp kiến thức</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 py-8 lg:py-12">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* Ảnh điều kiện */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/60 shadow-lg min-h-[260px] lg:min-h-[320px] flex flex-col">
            <img
              src={macLeninImg}
              alt="Điều kiện hình thành CNXH"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent" />
            <div className="relative px-4 py-4 text-xs text-slate-200 border-t border-slate-700/60 backdrop-blur-[2px] bg-slate-900/30 mt-auto">
              Minh họa tổng quan về các điều kiện hình thành CNXH.
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm md:text-base text-slate-200 leading-relaxed">
              Dựa trên lý luận hình thái kinh tế – xã hội của C. Mác và được V.I. Lênin phát triển, sự xuất hiện của chủ nghĩa xã hội gắn với quy luật vận động của chủ nghĩa tư bản và vai trò lịch sử của giai cấp công nhân hiện đại.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-orange-300">1. Điều kiện kinh tế</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {mocKinhTe.map((moc, idx) => (
                <div key={moc.title} className="rounded-2xl border border-slate-800 bg-slate-800/60 p-4">
                  <p className="text-xs font-semibold text-orange-300 mb-2">Mốc {idx + 1}</p>
                  <h3 className="font-bold text-slate-100 mb-2">{moc.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{moc.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-orange-300">2. Điều kiện chính trị – xã hội</h2>
            <p className="text-sm text-slate-200 leading-relaxed">
              Mâu thuẫn giai cấp ngày càng sâu sắc và sự trưởng thành của giai cấp công nhân, cùng sự ra đời của Đảng Cộng sản,
              tạo tiền đề chính trị – xã hội cho cách mạng.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-2">
              {chinhTriCards.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-800/60 p-5">
                  <h3 className="text-lg font-bold text-slate-100 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-orange-300">3. Cách mạng vô sản</h2>
            <p className="text-sm text-slate-200 leading-relaxed">
              Khi điều kiện kinh tế và chính trị – xã hội đã chín muồi, cách mạng vô sản trở thành con đường tất yếu thay thế chế độ tư bản bằng chế độ xã hội chủ nghĩa.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-2">
              {voSanCards.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-800/60 p-5">
                  <h3 className="text-lg font-bold text-slate-100 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Ảnh so sánh */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/60 mt-6 shadow-lg h-[230px] lg:h-[280px] flex flex-col">
            <img
              src={sosanhImg}
              alt="Hình ảnh minh họa"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent" />
            <div className="relative px-4 py-3 text-xs text-slate-200 border-t border-slate-700/60 backdrop-blur-[2px] bg-slate-900/30 mt-auto">
              Hình minh họa sự khác biệt giữa các điều kiện kinh tế – chính trị – xã hội.
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default GiaiDoan1Page;
