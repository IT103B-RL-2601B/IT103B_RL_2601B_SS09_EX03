// 1. KHỞI TẠO DANH SÁCH BAN ĐẦU
const rooms = [
  {
    roomId: "P101",
    roomType: "Standard Single",
    pricePerNight: 800000,
    status: "VACANT"
  },
  {
    roomId: "P102",
    roomType: "Deluxe Ocean View",
    pricePerNight: 1500000,
    status: "VACANT"
  },
  {
    roomId: "P103",
    roomType: "Executive Double",
    pricePerNight: 2000000,
    status: "MAINTENANCE"
  }
];

console.log("=== DANH SÁCH BAN ĐẦU ===");
console.table(rooms);

// 2. CREATE: THÊM PHÒNG P104
rooms.push({
  roomId: "P104",
  roomType: "VIP Suite",
  pricePerNight: 3500000,
  status: "VACANT"
});

console.log("\n=== SAU KHI THÊM PHÒNG P104 ===");
console.table(rooms);

// 3. UPDATE: CẬP NHẬT TRẠNG THÁI P101 -> OCCUPIED
for (let i = 0; i < rooms.length; i++) {
  if (rooms[i].roomId === "P101") {
    rooms[i].status = "OCCUPIED";
    break;
  }
}

console.log("\n=== SAU KHI CẬP NHẬT P101 (CHECK-IN) ===");
console.table(rooms);

// 4. DELETE: XÓA PHÒNG P103 BẰNG SPLICE
for (let i = 0; i < rooms.length; i++) {
  if (rooms[i].roomId === "P103") {
    rooms.splice(i, 1);
    break;
  }
}

console.log("\n=== SAU KHI XÓA PHÒNG P103 ===");
console.table(rooms);