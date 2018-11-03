import React, {Component} from 'react';
import Reviews from './components/Reviews.js';
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