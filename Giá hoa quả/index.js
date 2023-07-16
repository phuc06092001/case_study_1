function showPrice() {
    var fruitName = document.getElementById("fruitName").value;
    var price;
    
    switch (fruitName) {
      case "Ổi":
      case "Dưa Hấu":
        price = "20000 VNĐ/kg";
        break;
      case "Táo":
      case "Xoài":
        price = "30000 VNĐ/kg";
        break;
      case "Cam":
      case "Chôm Chôm":
        price = "40000 VNĐ/kg";
        break;
      case "Măng Cụt":
        price = "50000 VNĐ/kg";
        break;
      default:
        price = "Không tìm thấy giá";
        break;
    }
    
    document.getElementById("price").innerHTML = "Giá của " + fruitName + " là " + price;
  }