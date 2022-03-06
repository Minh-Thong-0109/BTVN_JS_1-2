function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

document.getElementById("tinh-luong").onclick = function () {
  var SN = document.getElementById("so-ngay-cong").value;
  var LG = SN * 100000;
  if (SN < 0) {
    document.getElementById("thong-bao-tien-luong").innerHTML =
      "<p class='alert alert-danger'>Ngày công phải là 1 số lớn hơn 0";
  } else {
    document.getElementById("thong-bao-tien-luong").innerHTML =
      "<h5 class='text-success'>Lương bạn sẽ nhận được: </h5><h4 class='text-danger'>" +
      formatNumber(LG) +
      "</h4>";
  }
};

document.getElementById("tinh-tb").onclick = function () {
  var s1 = document.getElementById("s1").value;
  var s2 = document.getElementById("s2").value;
  var s3 = document.getElementById("s3").value;
  var s4 = document.getElementById("s4").value;
  var s5 = document.getElementById("s5").value;
  var TB = (s1 * 1 + s2 * 1 + s3 * 1 + s4 * 1 + s5 * 1) / 5;
  document.getElementById("thong-bao-tb").innerHTML =
    "<h5 class='text-success'>Kết quả trung bình của 5 số: </h5><h4 class='text-danger'>" +
    formatNumber(TB) +
    "</h4>";
};

document.getElementById("quy-doi").onclick = function () {
  var ST = document.getElementById("so-tien").value;
  var VND = ST * 23500;
  if (ST < 0) {
    document.getElementById("thong-bao-quy-doi").innerHTML =
      "<p class='alert alert-danger'>Vui lòng nhập số tiền lớn hơn 0";
  } else {
    document.getElementById("thong-bao-quy-doi").innerHTML =
      "<h5 class='text-success'>Giá trị quy đổi được là: </h5><h4 class='text-danger'>" +
      formatNumber(VND) +
      "</h4>";
  }
};

document.getElementById("tinh").onclick = function () {
  var CD = document.getElementById("cd").value;
  var CR = document.getElementById("cr").value;
  var CV = (CD * 1 + CR * 1) / 2;
  var DT = CD * CR;
  if (CR < 0 || CD < 0) {
    document.getElementById("thong-bao-ket-qua").innerHTML =
      "<p class='alert alert-danger'>Đơn vị đo phải là 1 số lớn hơn 0";
  } else {
    document.getElementById("thong-bao-ket-qua").innerHTML =
      "<p><span class='text-success'>Chu vi hình chữ nhật là: </span><span class='text-danger'>" +
      formatNumber(CV) +
      "</span></p>" +
      "<p><span class='text-success'>Diện tích hình chữ nhật là: </span><span class='text-danger'>" +
      formatNumber(DT) +
      "</span></p>";
  }
};

document.getElementById("tinh-ky-so").onclick = function () {
    var So = document.getElementById("so").value;
    var TSo = Math.abs(So);
    var Tong = TSo%10 + (TSo-TSo%10)/10;
    if (TSo > 99) {
      document.getElementById("thong-bao-tong").innerHTML =
        "<p class='alert alert-danger'>Vui lòng nhập số dưới 3 chữ số";
    } else {
      document.getElementById("thong-bao-tong").innerHTML =
        "<h5 class='text-success'>Tổng 2 ký số: </h5><h4 class='text-danger'>" +
        Tong +
        "</h4>";
    }
  };
