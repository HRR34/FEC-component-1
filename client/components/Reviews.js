import React from 'react';
import Review from './Review.js';


const topContainer = {
  borderBottom: '1px solid grey',
  maxWidth:'80%',
}

const reviewDescr = {
  fontSize:'18px',
  fontWeight:'600',
  paddingBottom: '20px',
  paddingTop: '20px',
  display:'inline-block',
  width:'49%',
}

const searchForm = {
  paddingTop:'10px',
  float:'right',
  display: "inline-block",
  lineHeight: '25px', 
  verticalAllign:'baseline'
}

const searchBtn = {
  height: '40px',
  border: '1px solid #007791',
  color:'#007791',
  backgroundColor: '#007791',
  display:'inline-block',
}

const searchInput = {
  display:'inline-block',
  height: '40px', 
  border: '1px solid grey',
}


  const Reviews = (props) => (
    <div className="reviewsWrapper">
            <div className="topContainer" style={topContainer}>
              <div className="reviewsDescription" style={reviewDescr}>Reviews</div>
              
                <form style={searchForm}><input style={searchInput} type="text" placeholder="Search reviews"></input><button type="submit" style={searchBtn}>🔍</button></form>
              
            </div>
      {
        props.reviews.map((review, i)=>{
          return(         
              <Review key={review._id} review={review}/>
          )
        })
      }
    </div>
  );

export default Reviews;
