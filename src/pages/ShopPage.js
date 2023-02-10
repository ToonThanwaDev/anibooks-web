import { useState } from "react";
import Card from "../components/Card";
import CategorySearchbar from "../components/CategorySearchbar";
import Container from "../layouts/Container";
import Header from "../layouts/Header";

export default function ShopPage() {
  const [searchWord, setSearchWord] = useState("");
  const [dataBook] = useState(["name", "writer"]);
  // กำหนด state ชื่อ dataBook ด้วย Hook useState โดยมี initial state เป็น array ที่มีค่าเป็น "name"

  const searchBook = book => {
    return book.filter(item => {
      // ใช้ method filter ใน array เพื่อค้นหา item ที่ตรงกับเงื่อนไขที่กำหนด
      return dataBook.some(filter => {
        // ใช้ method some สำหรับตรวจสอบว่ามีอย่างน้อย 1 อย่างที่ตรงกับเงื่อนไข
        return (
          item[filter]
            .toString()
            .toLowerCase()
            .indexOf(searchWord.toLowerCase()) > -1
        );
        // จะเช็คว่า string ของ searchWord นั้นมีใน string ของ item หรือไม่ โดยถ้า string
        // ของ searchWord นั้นมีใน string ของ item จะ return index ของ string นั้น (มากกว่า -1)
        // และ จะเป็น true หมายความว่า item นั้นๆ มีค่า searchWord ใน string ของ item นั้นๆ
      });
    });
  };

  return (
    <>
      <Header />
      <Container>
        <CategorySearchbar
          searchWord={searchWord}
          setSearchWord={setSearchWord}
        />
        <hr className="border-white mt-5"></hr>
      </Container>
      <Container>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 py-4">
            <Card searchBook={searchBook} />
          </div>
        </div>
      </Container>
    </>
  );
}
