// Thiết lập mốc thời gian Giao thừa Năm Mới
function getNextNewYear() {
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  return new Date(`January 1, ${nextYear} 00:00:00`).getTime();
}

const newYearTime = getNextNewYear();

// Cập nhật đồng hồ mỗi giây
const timer = setInterval(() => {
  const currentTime = new Date().getTime();
  const diff = newYearTime - currentTime;

  // Tính toán Ngày, Giờ, Phút, Giây
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  // Hiển thị ra giao diện HTML (thêm số 0 phía trước nếu < 10)
  document.getElementById('days').innerText = d < 10 ? '0' + d : d;
  document.getElementById('hours').innerText = h < 10 ? '0' + h : h;
  document.getElementById('minutes').innerText = m < 10 ? '0' + m : m;
  document.getElementById('seconds').innerText = s < 10 ? '0' + s : s;

  // Khi đếm về 0: Hiển thị lời chúc và dừng đếm
  if (diff <= 0) {
    clearInterval(timer);
    document.getElementById('countdown').style.display = 'none';
    document.getElementById('message').style.display = 'block';
  }
}, 1000);
