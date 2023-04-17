import Navbar from "../components/Navbar/Navbar";
import Form from "../components/Form/Form";
import Product from "../components/Product/Product";
import { useEffect, useState } from "react";

const Home = () => {
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    alert("Welcome")
}, [])

  return (
    <>
      <Navbar />
      <Form setTable={setTableData}/>
      <Product datas={tableData} setTable={setTableData}/>
    </>
  )
}

export default Home