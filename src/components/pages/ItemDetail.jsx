import React from "react";
import { Table } from "react-bootstrap";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #FAF6F1;
    border-bottom: solid 1px #ccc !important;
  }
`;

const StyledLogo = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

const StyledTitle = styled.td`
  width: 20%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledDesc = styled.td`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  font-weight: 700;

  i {
    margin-left: 5px;
    cursor: pointer;
  }

  i:hover {
    color: blue;
  }
`;

const Colection = function () {
  return (
    <div>
      <GlobalStyles />
      <section className="container">
        <div className="row mt-md-5 pt-md-4">
          <div className="col-md-6 text-center">
            <img
              src="./img/items/big-1.jpg"
              className="img-fluid img-rounded mb-sm-30"
              alt=""
            />
          </div>
          <div className="col-md-6">
            <div className="item_info">
              Auctions ends in
              <h2>Pinky Ocean</h2>
              <div className="item_info_counts">
                <div className="item_info_type">
                  <StyledLogo src="/img/klaytn-logo.svg" alt="logo" />
                  Klaytn
                </div>
                <div className="item_info_views">
                  <StyledLogo src="/img/nft-logo.svg" alt="nft logo" />
                  NFT
                </div>
              </div>
              <p>NFT 설명칸.</p>
              <h6>Creator</h6>
              <div className="item_author">
                <div className="author_list_pp">
                  <span>
                    <img
                      className="lazy"
                      src="./img/author/author-1.jpg"
                      alt=""
                    />
                    <i className="fa fa-check"></i>
                  </span>
                </div>
                <div className="author_list_info">
                  <span>0x...stpweihtpiw</span>
                </div>
              </div>
              <div className="spacer-40"></div>
              <div className="spacer-40"></div>
              <Table striped bordered responsive>
                <tbody>
                  <tr>
                    <StyledTitle>블록체인</StyledTitle>
                    <StyledDesc>Klaytn</StyledDesc>
                  </tr>
                  <tr>
                    <StyledTitle>트랜잭션</StyledTitle>
                    <StyledDesc>0xwklehtpwiehtpwehtpiwet</StyledDesc>
                  </tr>
                  <tr>
                    <StyledTitle>컨트랙트</StyledTitle>
                    <StyledDesc>0xwklehtpwiehtpwehtpiwet</StyledDesc>
                  </tr>
                  <tr>
                    <StyledTitle>토큰 아이디</StyledTitle>
                    <StyledDesc>1</StyledDesc>
                  </tr>
                  <tr>
                    <StyledTitle>생성 날짜</StyledTitle>
                    <StyledDesc>20220102</StyledDesc>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Colection;
