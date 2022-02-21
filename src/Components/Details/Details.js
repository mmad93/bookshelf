import { Route, Routes, useNavigate, useParams } from "react-router-dom";

const Details = () => {
  let navigate = useNavigate();
  let { title } = useParams();
  return (
    <div>
      <div>
        <h2>
          Details, in dokmaro mizani bayad search bar biad, inja ham safeye {title} ast k ba use params dorost shode ast
        </h2>
        <button onClick={() => navigate("/Contact")}>boro be search bar</button>
        <button onClick={() => navigate("bookss")}>boro be bookss</button>
        <button onClick={() => navigate("/Contact/hasan")}>boro be safeye hasan jan</button>
      </div>
      <Routes>
        <Route path='bookss/*' element={<div>salam</div>} /> 
      </Routes>
    </div>
  );
};

export default Details;
