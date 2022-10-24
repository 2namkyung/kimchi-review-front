import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { convertTimeFormat } from "../../utils/time";
import { truncate } from "../../utils/web3Util";

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

const ItemDetail = () => {
  const params = useParams();
  const { contract, tokenId } = params;

  const [data, setData] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    async function getNftDetail() {
      try {
        const result = await axios.get(
          `https://api-kimchi.dev.knx.exchange/v1/review/nftDetail/${contract}/${tokenId}`
        );

        setData(result.data.response);
      } catch (error) {
        navigate("/");
      }
    }

    getNftDetail();
  }, [contract, tokenId, navigate]);

  return (
    <div>
      <GlobalStyles />
      <section className="container">
        <div className="row mt-md-5 pt-md-4">
          <div className="col-md-6 text-center">
            <img
              src="/img/items/big-1.jpg"
              className="img-fluid img-rounded mb-sm-30"
              alt=""
            />
          </div>
          <div className="col-md-6">
            <div className="item_info">
              <h2>KIMCHI NFT #{data?.tokenId}</h2>
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
              <h6>Owner</h6>
              <div className="item_author">
                <div className="author_list_pp">
                  <span>
                    <img
                      className="lazy"
                      src="/img/author/author-1.jpg"
                      alt=""
                    />
                    <i className="fa fa-check"></i>
                  </span>
                </div>
                <div className="author_list_info">
                  <span style={{ fontWeight: 800 }}>
                    {truncate(data?.owner)}
                  </span>
                </div>
              </div>
              <div className="spacer-40"></div>
            </div>
          </div>
          <div className="spacer-40"></div>
          <div>
            <Table striped bordered responsive>
              <tbody>
                <tr>
                  <StyledTitle>블록체인</StyledTitle>
                  <StyledDesc>Klaytn</StyledDesc>
                </tr>
                <tr>
                  <StyledTitle>트랜잭션</StyledTitle>
                  <StyledDesc>{data?.txHash}</StyledDesc>
                </tr>
                <tr>
                  <StyledTitle>컨트랙트</StyledTitle>
                  <StyledDesc>{data?.contract}</StyledDesc>
                </tr>
                <tr>
                  <StyledTitle>토큰 아이디</StyledTitle>
                  <StyledDesc>{data?.tokenId}</StyledDesc>
                </tr>
                <tr>
                  <StyledTitle>생성 날짜</StyledTitle>
                  <StyledDesc>{convertTimeFormat(data?.created_at)}</StyledDesc>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ItemDetail;
