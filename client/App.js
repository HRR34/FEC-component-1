import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/Reviews.js';
import $ from 'jquery';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      courseId: 1,
      reviews: [],
    }
  }

  componentDidMount(){
    var course_id = this.state.courseId;
    axios
    .get('/reviews',{
      params:{courseId: course_id},
      })
    .then(res => {
      this.setState({
        reviews: res.data,
      })
    })
    .catch(err => console.log('Error occured while trying to get the reviews for this course:' , err))

    //Ajax GET request works also
    // $.ajax({
    //   method: 'GET',
    //   url: '/reviews',
    //   data: {courseId: course_id},
    //   success: (data)=>{

    //     data = JSON.parse(data)
    //     console.log(data)
    //     this.setState({
    //       reviews: data
    //     })
    //   },
    //   error: (err)=>{
    //     console.log('could not get the reviews form server', err)
    //   },
    //   contentType: "application/json",
    // })
  }

  render() {
      return (
          <div>
              <Reviews reviews={this.state.reviews}/>
          </div>
      );
  }


}



export default App;