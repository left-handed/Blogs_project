import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/App.scss';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      bannerArr: ['a.jpg', 'a1.jpg', 'a2.jpg'],
      bannerKey: 0,
      timeOut: {}
    }
  };

  render() {
    let bannerArr = this.state.bannerArr;
    let bannerKey = this.state.bannerKey;
    let bannerCarousel = bannerArr.map((item, key) => {
      return(
        <li key={key}><img className={key === bannerKey ? 'show-img' : ''} src={require(`../images/${item}`)} alt="banner"/></li>
      );
    });
    return (
      <div className="App">
        <div className="left-box">
          <div className="left-box-center">
            <div className="name-img">
              <img src={require("../images/mao.png")} alt="头像"/>
            </div>
            <p className="wei-come">Mr.Left</p>
            <p className="wisdom">别让欲望淹没了你的心</p>
            <p className="addres">
              <a className="github" href="https://github.com/left-handed">
              </a>
              <a className="weibo" href="https://weibo.com/5571815333/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1">
              </a>
            </p>
            <div className="post-box">
              <div className="post-box-e"><i></i>928231861@qq.com</div>
            </div>
            <div className="nxet-box">
              <Link to="/pageList" className="nxet-but">芝麻开门</Link>
            </div>
          </div>
        </div>
        <div className="right-box">
          <div className="right-box-center">
            <ul className="banner-img">
              {bannerCarousel}
            </ul>
            <ul className="right-box-center-index">
              <li className={bannerKey === 0 ? 'current-dom' : ''} onClick={(e) => this.clickBannerAnimation(e, 0)}></li>
              <li className={bannerKey === 1 ? 'current-dom' : ''} onClick={(e) => this.clickBannerAnimation(e, 1)}></li>
              <li className={bannerKey === 2 ? 'current-dom' : ''} onClick={(e) => this.clickBannerAnimation(e, 2)}></li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  componentDidMount() {
    this.init();
  };

  init() {
    this.bannerAnimation();
  };

  /**
   * banner动画定时器
   */
  bannerAnimation() {
    let that = this;
    let animation = () => {
      let time = that.state.timeOut;
      let index = this.state.bannerKey;
      clearTimeout(time);
      time = setTimeout(() => {
        if (index < 2) {
          that.setState({
            bannerKey: index + 1,
            timeOut: time
          });
        } else {
          that.setState({
            bannerKey: 0,
            timeOut: time
          });
        }
        animation();
      }, 5000);
    }
    animation();
  };

  /**
   * 点击轮播图滑动块
   * key 轮播图下标
   */
  clickBannerAnimation (ev, key) {
    let that = this;
    that.setState({
      bannerKey: key
    });
  }
}
export default Home;
