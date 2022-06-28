import React, { Component } from 'react';
import Lazyload from 'react-lazyload';
import './peopleCard.styl'
import { withRouter } from 'react-router-dom'

class PeopleCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: [],
      isStar: true
    }
  }
  componentWillMount(){
    this.setState({
      item: this.props.item
    })
  }
  isStar(e) {
    e.stopPropagation();
    this.setState({
      isStar: !this.state.isStar
    })
  }
  NavToDetail = (url) => {
    this.props.history.push({
      pathname: url,
      state: {data: this.state.item}
    })
  }
  render() {
    const { isStar,item } = this.state;
    return (
      <div className="card-container" onClick={() => this.NavToDetail(`peopleDetail/${item.userId}`)}>
        <div className="card-pic">
          <Lazyload height={200} width={172}>
            <img src={item.headPic} alt="" className="headPic" />
          </Lazyload>
          <img src={[require("../../assets/images/播放.png")]} alt="" className="isVideo" style={item.isVideo ? {} : { display: 'none' }} />
        </div>
        <div className="card-bottom">
          <div className="title-con">
            <p className="title">
              {item.title}
            </p>
          </div>
          <div className="bottom">
            <div className="avatar">
              <Lazyload height={25} width={25}>
                <img src={item.avatar} alt="" />
              </Lazyload>
            </div>
            <div className="name">
              {item.author}
            </div>
            <div className="star" onClick={(e) => { this.isStar(e) }}>
              <img src={isStar ? [require("../../assets/images/心.png")] : [require("../../assets/images/选中心.png")]} alt="" />
              <span>{item.starNum}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PeopleCard)