import React, { useCallback, useEffect, useState } from "react";


const Pagination = ({ currentPage=1, totalPages=1,perPage=10,onPageChange=(p)=>{} }) => {

    const onClickNext = ()=>{
        if(currentPage>=totalPages){
            onPageChange(totalPages)
        }else{
            onPageChange(currentPage+1)
        }
    };

    const onClickPrevious = ()=>{
        if(currentPage<=1){
            onPageChange(1)
        }else{
            onPageChange(currentPage-1)
        }
    };

    return (
      <div style={{margin:"10px 10px"}}> 
      <div style={{display:"flex"}}>
        <div>pages : {currentPage}/{totalPages}</div>
        <div style={{flex:"1",display:"flex", justifyContent:"center",gap:"50px"}}>
            <button className="button" onClick={onClickPrevious}>PERVIOUS</button>
            <button className="button" onClick={onClickNext}>NEXT</button>
        </div>
        <div> Item Per Page : {perPage}</div>
      </div>
      </div>
    );
  };
  
export default  Pagination