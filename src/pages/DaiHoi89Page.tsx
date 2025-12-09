import React from "react";

const ChuNghiaXaHoiPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-8 lg:py-12">
        {/* Top heading */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-widest text-slate-400">
            HỌC THUYẾT MÁC – LÊNIN · Chương 3
          </div>

          <h1 className="mt-2 text-2xl md:text-3xl font-bold leading-snug">
            Chủ nghĩa xã hội và thời kỳ quá độ lên chủ nghĩa xã hội
          </h1>

          <p className="mt-2 text-sm text-slate-300">
            Phần I · Chủ nghĩa xã hội – giai đoạn đầu của hình thái kinh tế – xã hội cộng sản
            chủ nghĩa.
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-800 px-3 py-1">
              <span>✍️</span>
              <span>Tác giả: Tên của bạn</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-800 px-3 py-1">
              <span>📅</span>
              <span>Cập nhật: 2025</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-orange-500/10 text-orange-300 px-3 py-1">
              <span>📚</span>
              <span>Ghi chú bài giảng</span>
            </span>
          </div>
        </div>

        {/* Main layout */}
        <div>
          {/* Article */}
          <article className="space-y-8">
            {/* Hero placeholder */}
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/60">
              <div className="h-40 md:h-56 bg-gradient-to-r from-orange-400/20 via-fuchsia-500/10 to-sky-400/20" />
              <p className="px-4 py-3 text-xs text-slate-300 border-t border-slate-700/60">
                Tổng quan luận điểm về hình thái kinh tế – xã hội và thời kỳ quá độ lên chủ nghĩa
                xã hội.
              </p>
            </div>

            {/* Section 1 */}
            <section id="luan-diem-htktxh" className="space-y-3">
              <h2 className="text-xl font-semibold text-orange-300">
                1. Học thuyết hình thái kinh tế – xã hội
              </h2>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                Vận dụng quan điểm duy vật về lịch sử để nghiên cứu xã hội loài người, C. Mác và
                Ph. Ăngghen đã xây dựng học thuyết về hình thái kinh tế – xã hội. Học thuyết này
                xem xã hội như một chỉnh thể gồm lực lượng sản xuất, quan hệ sản xuất và kiến trúc
                thượng tầng, luôn vận động và biến đổi.
              </p>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                Nhờ đó, lịch sử không còn được giải thích bằng ý chí cá nhân hay ngẫu nhiên, mà
                bằng những quy luật khách quan chi phối sự phát triển của xã hội. Trên cơ sở đó,
                chủ nghĩa Mác – Lênin khẳng định có thể nhận diện, phân kỳ các kiểu xã hội khác
                nhau thông qua trình độ phát triển của lực lượng sản xuất và kiểu quan hệ sản xuất
                tương ứng.
              </p>
            </section>

            {/* Section 2 */}
            <section id="quy-luat-van-dong" className="space-y-3">
              <h2 className="text-xl font-semibold text-orange-300">
                2. Quy luật vận động &amp; thay thế các hình thái KT–XH
              </h2>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                Theo Mác, sự chuyển biến từ hình thái kinh tế – xã hội thấp lên hình thái cao là
                một quá trình lịch sử – tự nhiên. Xã hội loài người đã lần lượt đi từ cộng đồng
                nguyên thủy → chiếm hữu nô lệ → phong kiến → tư bản chủ nghĩa → cộng sản chủ
                nghĩa. Quá trình ấy không phụ thuộc vào ý muốn chủ quan của bất kỳ cá nhân hay
                giai cấp riêng lẻ nào.
              </p>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                Quy luật cơ bản chi phối sự thay thế đó là{' '}
                <span className="font-semibold">
                  quan hệ sản xuất phải phù hợp với trình độ phát triển của lực lượng sản xuất
                </span>
                . Khi lực lượng sản xuất phát triển lên một trình độ mới, quan hệ sản xuất cũ trở
                nên chật hẹp, kìm hãm, mâu thuẫn giữa chúng ngày càng gay gắt và tất yếu dẫn tới
                cách mạng xã hội. Sau cách mạng, một hình thái kinh tế – xã hội mới cao hơn sẽ ra
                đời để giải phóng và thúc đẩy lực lượng sản xuất phát triển tiếp.
              </p>
            </section>

            {/* Section 3 */}
            <section id="tinh-tat-yeu-cnxh" className="space-y-3">
              <h2 className="text-xl font-semibold text-orange-300">
                3. Tính tất yếu ra đời chủ nghĩa xã hội
              </h2>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                Khi vận dụng học thuyết hình thái kinh tế – xã hội vào phân tích chủ nghĩa tư bản,
                Mác chỉ ra rằng chính bản thân chủ nghĩa tư bản chứa đựng những mâu thuẫn không
                thể tự giải quyết. Điển hình là mâu thuẫn giữa tính chất xã hội hóa cao của sản
                xuất với chế độ chiếm hữu tư nhân tư bản chủ nghĩa, giữa giai cấp tư sản bóc lột và
                giai cấp công nhân bị bóc lột.
              </p>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                Sự phát triển của lực lượng sản xuất trong lòng chủ nghĩa tư bản, cùng với sự lớn
                mạnh của giai cấp công nhân, tạo nên những tiền đề vật chất và xã hội cho sự ra đời
                của hình thái kinh tế – xã hội cộng sản chủ nghĩa.{' '}
                <span className="font-semibold">
                  Chủ nghĩa xã hội chính là giai đoạn đầu của hình thái đó
                </span>
                , ra đời thông qua cách mạng xã hội chủ nghĩa do giai cấp công nhân và nhân dân lao
                động lãnh đạo.
              </p>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                Ở giai đoạn đầu này, xã hội mới vừa thoát thai từ xã hội tư bản chủ nghĩa nên về
                kinh tế, đạo đức, tinh thần vẫn còn mang nhiều dấu vết của xã hội cũ. Nhiệm vụ của
                chủ nghĩa xã hội là từng bước cải biến toàn diện để tiến dần tới trình độ phát triển
                cao hơn – chủ nghĩa cộng sản.
              </p>
            </section>

            {/* Section 4 */}
            <section id="cau-truc-ht-cscn" className="space-y-3">
              <h2 className="text-xl font-semibold text-orange-300">
                4. Cấu trúc hình thái KT–XH cộng sản chủ nghĩa
              </h2>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                Khi phân tích hình thái kinh tế – xã hội cộng sản chủ nghĩa, Mác và Ăngghen cho
                rằng nó không xuất hiện ngay ở trình độ hoàn thiện mà phát triển qua{' '}
                <span className="font-semibold">hai giai đoạn</span>:
              </p>
              <ul className="list-disc pl-6 text-sm md:text-base text-slate-200 space-y-1">
                <li>
                  <span className="font-semibold">Giai đoạn thấp – Chủ nghĩa xã hội:</span> chế độ
                  công hữu và tập thể hóa tư liệu sản xuất dần được xác lập, mức sống và ý thức của
                  nhân dân từng bước nâng lên nhưng vẫn còn chịu ảnh hưởng của xã hội cũ.
                </li>
                <li>
                  <span className="font-semibold">Giai đoạn cao – Chủ nghĩa cộng sản:</span> lực
                  lượng sản xuất đạt trình độ rất cao, của cải dồi dào, trình độ văn hóa – đạo đức
                  phát triển, nguyên tắc phân phối “làm theo năng lực, hưởng theo nhu cầu” mới có
                  điều kiện thực hiện đầy đủ.
                </li>
              </ul>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                Như vậy, chủ nghĩa xã hội chỉ là bước khởi đầu của hình thái cộng sản chủ nghĩa,
                nhưng nó giữ vai trò quyết định trong việc xóa bỏ chế độ người bóc lột người và xây
                dựng nền tảng cho giai đoạn cộng sản phát triển cao.
              </p>
            </section>

            {/* Section 5 */}
            <section id="thoi-ky-qua-do" className="space-y-3">
              <h2 className="text-xl font-semibold text-orange-300">
                5. Thời kỳ quá độ &amp; liên hệ Việt Nam
              </h2>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                Về mặt lý luận, Mác khẳng định giữa chủ nghĩa tư bản và chủ nghĩa cộng sản phải có
                một thời kỳ cải biến cách mạng – thời kỳ quá độ. Lênin phát triển thêm: đối với
                những nước có chủ nghĩa tư bản phát triển cao, thời kỳ quá độ có thể ngắn hơn; còn
                với những nước trình độ tư bản chủ nghĩa thấp hoặc quá độ bỏ qua chế độ tư bản,
                thời kỳ này sẽ lâu dài, phức tạp – ông gọi hình ảnh là “những cơn đau đẻ kéo dài”.
              </p>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                Việt Nam đi lên chủ nghĩa xã hội từ một nước nông nghiệp lạc hậu, lại chịu ách
                thống trị của chủ nghĩa thực dân và tàn dư phong kiến. Do đó,{' '}
                <span className="font-semibold">
                  thời kỳ quá độ lên chủ nghĩa xã hội ở nước ta tất yếu phải lâu dài
                </span>
                . Giai cấp công nhân và nhân dân lao động vừa phải hoàn thành những nhiệm vụ dân
                tộc, dân chủ mà lẽ ra chủ nghĩa tư bản phải làm, vừa xây dựng những yếu tố của chế
                độ xã hội mới.
              </p>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                Nắm vững quy luật quá độ và đặc điểm xuất phát thấp của Việt Nam giúp chúng ta có
                cái nhìn khách quan, kiên định con đường đã lựa chọn, đồng thời tránh được tâm lý
                nôn nóng hoặc bi quan trước những khó khăn, hạn chế tất yếu trong quá trình phát
                triển.
              </p>
            </section>

            {/* Notes area */}
            <section className="mt-6">
              <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-4 space-y-3">
                <h3 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
                  <span>📝</span>
                  <span>Ghi chú của bạn khi học bài này</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Hãy tóm tắt lại 3 ý quan trọng nhất về chủ nghĩa xã hội và thời kỳ quá độ theo
                  cách hiểu của bạn.
                </p>
                <textarea
                  className="mt-1 w-full min-h-[120px] rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                  placeholder="Ví dụ: 1) Quy luật nào chi phối sự thay thế các hình thái KT–XH? 2) Vì sao CNXH là giai đoạn đầu của HTKT–XH CSCN? 3) Thời kỳ quá độ ở Việt Nam có đặc điểm gì?"
                />
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-4 py-1.5 text-xs font-medium text-slate-100 hover:bg-slate-800/80 transition"
                >
                  💾 Lưu tạm (local)
                </button>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ChuNghiaXaHoiPage;
