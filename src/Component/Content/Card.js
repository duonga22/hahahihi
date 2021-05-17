import React, { Component, Fragment } from 'react';

export default class Card extends Component {
  
  render() {

      return (       
       <Fragment>
         <div className="col-lg-3 col-sm-6">
                <div className="product text-center skel-loader">
                  <div className="d-block mb-3 position-relative"><a className="d-block" href="detail.html"><img className="img-fluid w-100" src={[this.props.detail_image]} alt="..." /></a>
                    <div className="product-overlay">
                      <ul className="mb-0 list-inline">
                        <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="#">Add To Card</a></li>
                      </ul>
                    </div>
                  </div>
                  <h6> <a className="reset-anchor" href="detail.html">{this.props.name}</a></h6>
                  <p className="small text-muted">${this.props.price}</p>
                </div>
              </div>
              {/* MODAL */}
       </Fragment>
      );
  }
}